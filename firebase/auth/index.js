import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export const signIn = async (email, password) => {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const signUp = async (email, password) => {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const signOut = async () => {
    let result = null,
        error = null;
    try {
        result = await firebaseSignOut();
    } catch (e) {
        error = e;
    }

    return { result, error };
}