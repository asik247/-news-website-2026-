import React from 'react';
import img1 from "../assets/class.png";
import img2 from "../assets/playground.png";
import img3 from "../assets/swimming.png";

const Qzone = () => {
    return (
        <div className="mt-6 p-4 bg-base-200 rounded-2xl shadow-md">

            <h2 className="text-lg font-bold mb-4 border-b pb-2">
                Qzone
            </h2>

            <div className="flex flex-col gap-4">

                {/* Image 1 */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={img1}
                        alt="Class"
                        className="w-full hover:scale-105 transition duration-300 cursor-pointer"
                    />
                </div>

                {/* Image 2 */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={img2}
                        alt="Playground"
                        className="w-full hover:scale-105 transition duration-300 cursor-pointer"
                    />
                </div>

                {/* Image 3 */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={img3}
                        alt="Swimming"
                        className="w-full hover:scale-105 transition duration-300 cursor-pointer"
                    />
                </div>

            </div>
        </div>
    );
};

export default Qzone;