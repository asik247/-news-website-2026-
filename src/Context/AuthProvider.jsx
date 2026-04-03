import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
    // Registaion user code start here;
    const registationUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // LogIn user code here;
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // LogOut user code here;
    const logOut = ()=>{
      return signOut(auth)
    }
    // onAuth state change added and current user set;
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
      return ()=>unsubscribe();
    },[])
    const userInfo = {
      registationUsers,
      logIn,
      user,logOut
    }
    return (
      <AuthContext value={userInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;