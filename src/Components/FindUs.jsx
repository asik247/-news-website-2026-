import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className="mt-6 p-4 bg-base-200 rounded-2xl shadow-md">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">
                Find Us On
            </h2>

            <div className="flex flex-col gap-3">

                {/* Facebook */}
                <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white hover:bg-blue-50 transition shadow-sm hover:shadow-md">
                    <FaFacebook className="text-blue-600 text-xl" />
                    <span className="font-medium">Facebook</span>
                </button>

                {/* Instagram */}
                <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white hover:bg-pink-50 transition shadow-sm hover:shadow-md">
                    <FaInstagram className="text-pink-500 text-xl" />
                    <span className="font-medium">Instagram</span>
                </button>

                {/* GitHub */}
                <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 transition shadow-sm hover:shadow-md">
                    <FaGithub className="text-black text-xl" />
                    <span className="font-medium">GitHub</span>
                </button>

            </div>
        </div>
    );
};

export default FindUs;