

import axios from 'axios'



import {
   
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_LOADING,
    FETCH_CONTACT_SUCCESS,
   
} from './types'



export const fetechContactSuccess =  contacts => {
    return {
        type : FETCH_CONTACT_SUCCESS,
        payload : contacts
        
    }
}
export const fetechContactLoading = () => {
    return {
        type : FETCH_CONTACT_LOADING,
    }
}
export const fetechContactError = error => {
    return {
        type : FETCH_CONTACT_ERROR,
        payload : error,
    }
}



export const fetchContact = () => {
   
    return (dispatch) => {
        dispatch(fetechContactLoading)
        axios.get('http://localhost:9094/InformationContact/listInformationContact')
        .then(response => { 
          const contacts = response.data;
          dispatch(fetechContactSuccess(contacts))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechContactError(errorMsg))

        })
    
    }
}
