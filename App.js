import React from 'react';
import {Provider} from 'react-redux';
import store from '././src/context/store';
import MainContainer from './src/navigator/MainContainer';

const App = () => {
    return (
        <Provider store={store}>
        <MainContainer/>
        </Provider>
    );
};



export default App;
