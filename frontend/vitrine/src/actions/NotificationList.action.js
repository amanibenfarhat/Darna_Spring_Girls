
import axios from 'axios'



import {
   
    FETCH_NOTIFICATION_ERROR,
    FETCH_NOTIFICATION_LOADING,
    FETCH_NOTIFICATION_SUCCESS,
   
} from './types'



export const fetechNotificationSuccess =  notifications => {
    return {
        type : FETCH_NOTIFICATION_SUCCESS,
        payload : notifications
        
    }
}
export const fetechNotificationLoading = () => {
    return {
        type : FETCH_NOTIFICATION_LOADING,
    }
}
export const fetechNotificationError = error => {
    return {
        type : FETCH_NOTIFICATION_ERROR,
        payload : error,
    }
}



export const fetchNotification = () => {
   
    return (dispatch) => {
        dispatch(fetechNotificationLoading)
        axios.get('http://localhost:9094/')
        .then(response => { 
          const notifications = response.data;
          dispatch(fetechNotificationSuccess(notifications))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechNotificationError(errorMsg))

        })
    
    }
}
