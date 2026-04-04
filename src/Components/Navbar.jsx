import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userImages from "../assets/user.png";
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('LogOut done');
      })
      .catch(error => console.log(error.message));
  };

  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto mt-10 py-2">
      
      {/* Left: Logo or Email */}
      <div>
        {user ? (
          <p className="text-sm font-medium text-gray-600">👤 {user.email}</p>
        ) : (
          <Link to="/" className="text-lg font-bold text-red-500">NewsPortal</Link>
        )}
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-6 text-gray-500 font-medium">
        <NavLink 
          to={'/'} 
          className={({ isActive }) => isActive ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'hover:text-red-500'}
        >
          Home
        </NavLink>

        <NavLink 
          to={'/about'} 
          className={({ isActive }) => isActive ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'hover:text-red-500'}
        >
          About
        </NavLink>

        <NavLink 
          to={'/career'} 
          className={({ isActive }) => isActive ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'hover:text-red-500'}
        >
          Career
        </NavLink>
      </div>

      {/* Right: User Avatar + Login/Logout */}
      <div className="flex items-center gap-4">
        <img
          src={user?.photoURL || userImages}
          alt="user"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
        />
        {user ? (
          <button 
            onClick={handleLogOut} 
            className="btn btn-primary px-4 py-1"
          >
            LogOut
          </button>
        ) : (
          <Link 
            to={'/auth/login'} 
            className="btn btn-primary px-4 py-1"
          >
            LogIn
          </Link>
        )}
      </div>

    </nav>
  );
};

export default Navbar;