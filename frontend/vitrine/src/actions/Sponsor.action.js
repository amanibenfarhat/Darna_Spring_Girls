import {
    FETCH_SPONSOR_ERROR,
    FETCH_SPONSOR_LOADING,
    FETCH_SPONSOR_SUCCESS,
    
} from './types'

import axios from 'axios';



export const fetechSponsorsSuccess =  sponsors => {

    return {
        type : FETCH_SPONSOR_SUCCESS,
        payload : sponsors

    }
}
export const fetechSponsorsLoading = () => {
    return {
        type : FETCH_SPONSOR_LOADING,
    }
}
export const fetechSponsorsError = error => {
    return {
        type : FETCH_SPONSOR_ERROR,
        payload : error,
    }
}




export const fetchSponsors = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechSponsorsLoading)
        axios.get('http://localhost:9094/api/listSponsor')
       
        .then(response => { 
            
          const sponsors = response.data;
       
          dispatch(fetechSponsorsSuccess(sponsors))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechSponsorsError(errorMsg))

        })
 
    }
}