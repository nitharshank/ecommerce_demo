import axios from 'axios';
import {APIConstants} from './api-constants';
import {useDispatch} from 'react-redux';
import {fetchUsersBegin, fetchUsersFailure, fetchUsersSuccess} from '../context/action/actions';

export const fetchProducts = (onSuccess, onError) => {
    console.log('------------fetchProductList: ');
    let config = {
        method: APIConstants.GET, url: APIConstants.BASE_URL + APIConstants.FETCH_PRODUCTS,
     //   headers: { 'Content-Type': APIConstants.CONTENT_TYPE, },
    };

    axios(config)
        .then(function (response) {
            onSuccess(response?.data?.data);
        })
        .catch(function (error) {
            onSuccess(error);
        });
};


/*export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchUsersBegin());

        try {
            const response = await axios.get(APIConstants.BASE_URL + APIConstants.FETCH_PRODUCTS);
            dispatch(fetchUsersSuccess(response.data.data));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};*/

