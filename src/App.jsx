import "./App.css";
import { auth, firestore } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";
import { useRef, useState } from "react";
import {
    addDoc,
    collection,
    limit,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";

function App() {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");
    const scroller = useRef(null);

    const messageRef = collection(firestore, "message");
    const q = query(messageRef, orderBy("createdAt"), limit(20));

    const [messages] = useCollection(q);

    function sendMessage() {
        addDoc(messageRef, {
            message: message,
            author: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: serverTimestamp(),
        }).then(() => {
            scroller.current.scrollIntoView({ behavior: "smooth" });
        });

        setMessage("");
    }

    return (
        <>
            {user ? (
                <>
                    <SignOut />
                    <div className="messages">
                        {messages ? (
                            messages.docs.map((oneMessage) => {
                                return (
                                    <div
                                        key={oneMessage.id}
                                        className={
                                            oneMessage.data().email ===
                                            user.email
                                                ? "message author"
                                                : "message"
                                        }
                                    >
                                        <p>{oneMessage.data().message}</p>
                                        <img
                                            src={oneMessage.data().photoURL}
                                            alt="Profile-pic"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="send">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={() => sendMessage()}>Send</button>
                    </div>
                    <div ref={scroller}></div>
                </>
            ) : (
                <SignIn />
            )}
        </>
    );
}

export default App;
