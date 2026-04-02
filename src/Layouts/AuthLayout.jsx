import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <nav className=' w-11/12 mx-auto'>
                <Navbar></Navbar>

            </nav>
           <main className='w-11/12 mx-auto flex justify-center items-center mt-20'>
             <Outlet></Outlet>
           </main>
        </div>

    );
};

export default AuthLayout;