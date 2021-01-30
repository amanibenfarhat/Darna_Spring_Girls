import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS,
    
} from './types'

import axios from 'axios';



export const fetechProductsSuccess =  products => {

    return {
        type : FETCH_PRODUCT_SUCCESS,
        payload : products

    }
}
export const fetechProductsLoading = () => {
    return {
        type : FETCH_PRODUCT_LOADING,
    }
}
export const fetechProductsError = error => {
    return {
        type : FETCH_PRODUCT_ERROR,
        payload : error,
    }
}




export const fetchProducts = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechProductsLoading)
        axios.get('http://localhost:9094/ProduitDerive/listProduits')
       
        .then(response => { 
            
          const products = response.data;
        //   console.log("oooooooooo", objectifs)
        //     debugger;
          dispatch(fetechProductsSuccess(products))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechProductsError(errorMsg))

        })
 
    }
}