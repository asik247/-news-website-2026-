import React from 'react';
import logoImage from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="bg-base-100 shadow-sm border-b">

            {/* Top Container */}
            <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col items-center text-center gap-3">

                {/* Logo */}
                <img
                    className="w-[250px] md:w-[350px] transition-all duration-300 hover:scale-105"
                    src={logoImage}
                    alt="Logo"
                />

                {/* Tagline */}
                <p className="text-gray-500 text-sm md:text-base italic">
                    Journalism Without Fear or Favour
                </p>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-red-500 rounded-full"></div>

                {/* Date */}
                <p className="text-gray-700 text-sm md:text-lg font-medium">
                    {format(new Date(), 'EEEE, MMMM d, yyyy')}
                </p>
            </div>

        </div>
    );
};

export default Header;