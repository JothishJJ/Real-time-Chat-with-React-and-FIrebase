import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export function SignOut() {
    const [user] = useAuthState(auth);

    if (user)
        return (
            <div className="signout">
                <button className="signout-btn" onClick={() => signOut(auth)}>Sign Out</button>
            </div>
        );
}
