import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';

export const fetchUsersBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN,
});

export const fetchUsersSuccess = users => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { users },
});

export const fetchUsersFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error },
});
