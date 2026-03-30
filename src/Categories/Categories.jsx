import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("/categories.json")
.then(res=>res.json());
console.log(categoriesPromise);
const Categories = () => {
    const categories = use(categoriesPromise);
    console.log(categories);
    return (
        <div>
              <h2>All Categories ({categories.length})</h2>
              <div className='grid grid-cols-1'>
                    {
                        categories.map(categorie=><NavLink className={'btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-gray-400'} key={categorie.id} to={`/categoriesNews/${categorie.id}`}>{categorie.name}</NavLink>)
                    }
              </div>
        </div>
    );
};

export default Categories;