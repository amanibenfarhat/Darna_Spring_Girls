import {
    FETCH_RUBRIQUE_ERROR,
    FETCH_RUBRIQUE_LOADING,
    FETCH_RUBRIQUE_SUCCESS,
    
} from './types'

import axios from 'axios';



export const fetechObjectifsSuccess =  objectifs => {

    return {
        type : FETCH_RUBRIQUE_SUCCESS,
        payload : objectifs

    }
}
export const fetechObjectifsLoading = () => {
    return {
        type : FETCH_RUBRIQUE_LOADING,
    }
}
export const fetechObjectifsError = error => {
    return {
        type : FETCH_RUBRIQUE_ERROR,
        payload : error,
    }
}




export const fetchObjectifs = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechObjectifsLoading)
        axios.get('http://localhost:9094/api/listObjectif')
       
        .then(response => { 
            
          const objectifs = response.data;
        //   console.log("oooooooooo", objectifs)
        //     debugger;
          dispatch(fetechObjectifsSuccess(objectifs))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechObjectifsError(errorMsg))

        })
 
    }
}