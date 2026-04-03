import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log('currnet user',user);
    if(user){
       return children
    }
    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;