import {FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE} from '../action/actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    console.log('-------------------action.type: ', action.type);
    switch(action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.users,
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };

        default:
            return state;
    }
}
