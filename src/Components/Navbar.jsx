import React from 'react';
import { Link, NavLink } from 'react-router';
import userImages from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto mt-10'>
            <div className=''></div>
            <div className='nav flex gap-4 text-gray-400'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
               
            </div>
            <div className="login flex items-center gap-5">
                <img src={userImages} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary'>LogIn</Link>
            </div>
        </div>
    );
};

export default Navbar;