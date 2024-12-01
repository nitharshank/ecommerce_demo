import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_CART_ITEMS,
} from '../action/actionTypes';

const initialState = {
    items: [],
    cartItems: [],
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
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
                items: action.payload.products,
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };

        case FETCH_CART_ITEMS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload.cartItem,
            };

        default:
            return state;
    }
}
