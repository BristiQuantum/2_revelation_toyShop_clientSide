/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase_config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // password sign up
    const signUP = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password login 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login
    const googleLogin = () => {
        signInWithPopup(auth, provider)

    }

    /// get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [auth])

       // update user info
       const getName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

   

    // log out
    const logOut = () => {
        return signOut(auth);
    }

    const info = {
        user,
        loading,
        signUP,
        login,
        googleLogin,
        getName,
        logOut,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;