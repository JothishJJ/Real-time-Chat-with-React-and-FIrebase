import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export function SignIn() {
    function logIn() {
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider);
    }

    return (
        <>
            <h1 className="title">JJ Chat</h1>
            <button className="signin-btn" onClick={() => logIn()}>
                Sign in
            </button>
        </>
    );
}
