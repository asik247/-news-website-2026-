import React from 'react';
import logoImage from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <img className='w-[400px]' src={logoImage} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            {/* Date fns use code here */}
            <p>{format(new Date(),'EEEE,MMMM,d,yyy')}</p>
        </div>
    );
};

export default Header;