import React from 'react';

const SocialLogin = () => {
    return (
        <div className="p-4 bg-base-200 rounded-2xl shadow-md">

            <h2 className="text-lg font-bold mb-4 border-b pb-2">
                🔐 Login With
            </h2>

            <div className="flex flex-col gap-3">

                {/* Google */}
                <button className="flex items-center justify-center gap-3 w-full py-2 rounded-xl bg-white hover:bg-gray-100 transition shadow-sm hover:shadow-md font-medium">
                    <svg width="18" height="18" viewBox="0 0 512 512">
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"/>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"/>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"/>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"/>
                    </svg>
                    Login with Google
                </button>

                {/* GitHub */}
                <button className="flex items-center justify-center gap-3 w-full py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition shadow-sm hover:shadow-md font-medium">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5..." />
                    </svg>
                    Login with GitHub
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;