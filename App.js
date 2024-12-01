import React from 'react';
import {Provider} from 'react-redux';
import store from '././src/context/store';
import Loader from './src/components/loaders';
import MainContainer from './src/navigator/MainContainer';

const App = () => {
    return (
        <Provider store={store}>
        <MainContainer/>
            <Loader/>
        </Provider>
    );
};



export default App;
