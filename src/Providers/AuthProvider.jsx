import React, { createContext, useEffect, useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';



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
const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)

}
const googleSignIn = ()=>{
    setLoading(true);
return signInWithPopup(auth,googleProvider);
}





useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,  currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        if(currentUser){
            axios.post('http://localhost:5000/jwt', {email: currentUser?.email})
            .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
    })

    return () => {
        unsubscribe();
    }
}, [])


    const authInfo = {user,loading,createUser, signIn,googleSignIn,logout,profileUpdate,
    
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;