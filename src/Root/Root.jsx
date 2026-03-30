import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

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
        </div>
    );
};

export default Root;