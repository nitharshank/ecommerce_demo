import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import productReducer from './reducers/actionReducer';

export default createStore(
    productReducer,
    applyMiddleware(thunk)
);
