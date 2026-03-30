import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const Root = () => {
    return (
        <div>
          <header>
             <Header></Header>
          </header>
          <aside>
                <LatestNews></LatestNews>
          </aside>
        </div>
    );
};

export default Root;