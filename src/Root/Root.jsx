import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAsid from '../Components/LeftAsid';
import { Outlet } from 'react-router';
import RightAsid from '../Components/RightAsid';

const Root = () => {
    return (
        <div>
          <header>
             <Header></Header>
          </header>
          <aside>
                <LatestNews></LatestNews>
          </aside>
          <nav>
                <Navbar></Navbar>
          </nav>
          {/* ✅✅✅✅ */}
          <main className='w-11/12 mx-auto grid grid-cols-12 mt-10 gap-5'>
            <aside className='col-span-3'>
                <LeftAsid></LeftAsid>
            </aside>
            <section className='col-span-6'>
                    <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightAsid></RightAsid>
            </aside>
          </main>
        </div>
    );
};

export default Root;