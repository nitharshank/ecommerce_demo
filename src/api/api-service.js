import axios from 'axios';
import {APIConstants} from './api-constants';

export const fetchProducts = (onSuccess, onError) => {
    let config = {
        method: APIConstants.GET, url: APIConstants.BASE_URL + APIConstants.FETCH_PRODUCTS,
     //   headers: { 'Content-Type': APIConstants.CONTENT_TYPE, },
    };

    axios(config)
        .then(function (response) {
            onSuccess(response?.data?.data);
        })
        .catch(function (error) {
            onError(error);
        });
};

