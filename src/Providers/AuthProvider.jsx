import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';



export const AuthContext =  createContext(null)

const auth = getAuth(app)


const googleProvider =new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user,setUser]= useState(null);
const [loading,setLoading] = useState(true);
 
const logout =()=>{
    signOut(auth)
    .then(()=>{
        console.log('logout done');
    })
    .catch(error=>{
        console.log(error);
      })
}
const profileUpdate = (name,url)=>{
    updateProfile(auth.currentUser, {
        displayName: `${name}`, photoURL: `${url}`
      })
}
const createUser = (email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
}
const login = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)

}
const googleSignIn = ()=>{
    setLoading(true);
return signInWithPopup(auth,googleProvider);
}





useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user', loggedUser)
        setUser(loggedUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])


    const authInfo = {user,loading,createUser,login,googleSignIn,logout,profileUpdate
    
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;