import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.init';

export const authContext = createContext();

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthContext = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loader, setLoader] = useState(true)

    const setGoogle = () => {

        return signInWithPopup(auth, googleProvider)
    }

    const regHandler = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginHandler = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutHandler = () => {
        setLoader(true)
        signOut(auth)
        localStorage.removeItem('genius-token')
    }

    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, currentUser => {

            setuser(currentUser)
            console.log('user:', currentUser)
            setLoader(false)

        })

        return () => {

            unsubscribed()
        }

    }, [])


    const authInfo = { regHandler, loginHandler, logoutHandler, setGoogle, user, loader }
    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;