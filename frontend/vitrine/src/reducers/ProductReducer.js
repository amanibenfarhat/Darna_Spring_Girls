import {
   
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const ProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_LOADING : return {...state, isLoading: true };
        case FETCH_PRODUCT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_PRODUCT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default ProductReducer;
