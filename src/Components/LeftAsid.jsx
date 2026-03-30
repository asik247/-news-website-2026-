
import { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAsid = () => {
    return (
        <div>
        <Suspense fallback={<p>Loadding...</p>}>
            <Categories></Categories>
        </Suspense>
            
        </div>
    );
};

export default LeftAsid;