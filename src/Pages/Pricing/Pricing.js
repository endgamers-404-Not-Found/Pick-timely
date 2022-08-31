import React from 'react';
import { Provider } from 'react-redux';
import Packages from '../Home/Packages/Packages';
import { store2 } from './Redux_pricing';

const Pricing = () => {
    return (
        <div>
            <Provider store={store2}>
                <Packages></Packages>
            </Provider>
        </div>
    );
};

export default Pricing;