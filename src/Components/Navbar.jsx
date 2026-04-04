import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userImages from "../assets/user.png"
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // hide firebser key;
    // console.log(import.meta.env.VITE_name);
    // console.log(import.meta.env.VITE_age);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('LogOut done')
            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto mt-10'>
            <div>
                {user && <p>{user.email}</p>}
            </div>
            <div className=''></div>
            <div className='nav flex gap-4 text-gray-400'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>

            </div>
            <div className="login flex items-center gap-5">
                <img
                    src={user?.photoURL || userImages}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                />
                {user ? (<button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>) : (<Link to={'/auth/login'} className='btn btn-primary'>LogIn</Link>)}

            </div>


        </div>
    );
};

export default Navbar;