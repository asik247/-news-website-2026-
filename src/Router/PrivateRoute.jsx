import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    // console.log('currnet user',user);
    const location = useLocation();
    if(loading){
        return <p>Loadding...</p>
    }
    if(user){
       return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;