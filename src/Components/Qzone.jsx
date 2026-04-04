import React from 'react';
import img1 from "../assets/class.png";
import img2 from "../assets/playground.png";
import img3 from "../assets/swimming.png";

const Qzone = () => {
    return (
        <div className="mt-6 p-4 bg-base-200 rounded-2xl shadow-md">

            <h2 className="text-lg font-bold mb-4 border-b pb-2">
                🎯 Qzone
            </h2>

            <div className="flex flex-col gap-4">

                {[img1, img2, img3].map((img, i) => (
                    <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src={img}
                            alt=""
                            className="w-full group-hover:scale-110 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Qzone;