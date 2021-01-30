

import axios from 'axios'



import {
   
    FETCH_ABOUT_ERROR,
    FETCH_ABOUT_LOADING,
    FETCH_ABOUT_SUCCESS,
   
} from './types'



export const fetechAboutSuccess =  about => {
    return {
        type : FETCH_ABOUT_SUCCESS,
        payload : about
        
    }
}
export const fetechAboutLoading = () => {
    return {
        type : FETCH_ABOUT_LOADING,
    }
}
export const fetechAboutError = error => {
    return {
        type : FETCH_ABOUT_ERROR,
        payload : error,
    }
}



export const fetchAbout = () => {
   
    return (dispatch) => {
        dispatch(fetechAboutLoading)
        axios.get('http://localhost:9094/api/listpresentation')
        .then(response => { 
          const about = response.data;
          dispatch(fetechAboutSuccess(about))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechAboutError(errorMsg))

        })
    
    }
}
