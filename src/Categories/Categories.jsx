import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch("/categories.json")
.then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise);

    return (
        <div className="bg-base-100 p-4 rounded-2xl shadow-md">
            
            {/* Title */}
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
                📂 All Categories ({categories.length})
            </h2>

            {/* Categories List */}
            <div className="flex flex-col gap-2">
                {
                    categories.map(category => (
                        <NavLink
                            key={category.id}
                            to={`/categoriesNews/${category.id}`}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-200 font-medium 
                                ${isActive 
                                    ? 'bg-red-500 text-white shadow-md' 
                                    : 'bg-base-200 text-gray-600 hover:bg-red-100 hover:text-red-500'
                                }`
                            }
                        >
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>

        </div>
    );
};

export default Categories;