import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    // Registaion user code start here;
    const registationUsers = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
      registationUsers
    }
    return (
      <AuthContext value={userInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;