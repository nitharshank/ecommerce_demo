import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_CART_ITEMS} from './actionTypes';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN,
});

export const fetchUsersSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products },
});

export const fetchUsersFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error },
});

export const fetchCartItems = cartItem => ({
    type: FETCH_CART_ITEMS,
    payload: { cartItem },
});
