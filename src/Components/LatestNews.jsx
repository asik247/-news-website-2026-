import React from 'react';
import '../index.css';

const LatestNews = () => {
    return (
        <div className="w-11/12 mx-auto mt-6">
            
            {/* Container */}
            <div className="flex items-center gap-4 bg-base-200 p-3 rounded-xl shadow-sm overflow-hidden">
                
                {/* Label */}
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold animate-pulse">
                    Latest
                </button>

                {/* Scrolling News */}
                <div className="overflow-hidden relative w-full">
                    <p className="whitespace-nowrap animate-marquee text-gray-700 font-medium">
                        🔥 Breaking News: Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, velit.. Sequi iure unde omnis! Molestiae dicta facere...
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LatestNews;