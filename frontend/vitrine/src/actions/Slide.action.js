

import axios from 'axios'



import {
   
    FETCH_SLIDE_ERROR,
    FETCH_SLIDE_LOADING,
    FETCH_SLIDE_SUCCESS,
   
} from './types'



export const fetechSlideSuccess =  slides => {
    return {
        type : FETCH_SLIDE_SUCCESS,
        payload : slides
        
    }
}
export const fetechSlideLoading = () => {
    return {
        type : FETCH_SLIDE_LOADING,
    }
}
export const fetechSlideError = error => {
    return {
        type : FETCH_SLIDE_ERROR,
        payload : error,
    }
}



export const fetchSlide = () => {
   
    return (dispatch) => {
        dispatch(fetechSlideLoading)
        axios.get('http://localhost:9094/InformationContact/listInformationContact')
        .then(response => { 
          const slides = response.data;
          dispatch(fetechSlideSuccess(slides))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechSlideError(errorMsg))

        })
    
    }
}
