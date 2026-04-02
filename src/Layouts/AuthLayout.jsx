import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <h2>AuthIntergration Layouts</h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        // ✅✅✅✅✅
    );
};

export default AuthLayout;