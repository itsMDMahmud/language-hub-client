import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useMenu from '../hooks/useMenu';
// import axios from 'axios';




export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [alluser] = useMenu();

    const allAdmin = alluser.filter( (admin) => admin.role === "admin" );
    const admins = allAdmin.map(admin => admin);

    const allInstructor = alluser.filter( (instructor) => instructor.role === "instructor" );
    const instructors = allInstructor.map(instructor => instructor);

    const allStudent = alluser.filter( (student) => student.role === "user" );
    const users = allStudent.map(student => student);
    //allAdmin, allInstructor, allStudent
    //isAdmin, isInstructor, isUser


    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        console.log(email, password);
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (displayName,email, photoURL, phoneNumber) => {
        return updateProfile (auth.currentUser, {
            displayName, email, photoURL, phoneNumber,
        })
    }

    useEffect(( ) => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);

            //get and set token
            // if (currentUser) {
            //     axios.post('https://language-hub-server.vercel.app/jwt', {email: currentUser.email})
            //     .then(data => {
            //         // console.log(data.data.token);
            //         localStorage.setItem('access-token', data.data.token)
            //         setLoading(false);
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token')
            // }

            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        allAdmin, allInstructor, allStudent,
        admins, instructors, users,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;