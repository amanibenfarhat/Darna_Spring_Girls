

import axios from 'axios'



import {
   
    FETCH_ACTION_ERROR,
    FETCH_ACTION_LOADING,
    FETCH_ACTION_SUCCESS,
   
} from './types'



export const fetechActionSuccess =  action => {
    return {
        type : FETCH_ACTION_SUCCESS,
        payload : action
        
    }
}
export const fetechActionLoading = () => {
    return {
        type : FETCH_ACTION_LOADING,
    }
}
export const fetechActionError = error => {
    return {
        type : FETCH_ACTION_ERROR,
        payload : error,
    }
}



export const fetchActions = () => {
   
    return (dispatch) => {
        dispatch(fetechActionLoading)
        axios.get('http://localhost:9094/api/listAction')
        .then(response => { 
          const about = response.data;
          dispatch(fetechActionSuccess(about))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechActionError(errorMsg))

        })
    
    }
}
