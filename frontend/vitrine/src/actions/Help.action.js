

import axios from 'axios'



import {
   
    FETCH_HELP_ERROR,
    FETCH_HELP_LOADING,
    FETCH_HELP_SUCCESS,
   
} from './types'



export const fetechHelpSuccess =  helps => {
    return {
        type : FETCH_HELP_SUCCESS,
        payload : helps
        
    }
}
export const fetechHelpLoading = () => {
    return {
        type : FETCH_HELP_LOADING,
    }
}
export const fetechHelpError = error => {
    return {
        type : FETCH_HELP_ERROR,
        payload : error,
    }
}



export const fetchHelp = () => {
   
    return (dispatch) => {
        dispatch(fetechHelpLoading)
        axios.get('http://localhost:9094/Aider/listAider')
        .then(response => { 
          const helps = response.data;
          dispatch(fetechHelpSuccess(helps))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechHelpError(errorMsg))

        })
    
    }
}
