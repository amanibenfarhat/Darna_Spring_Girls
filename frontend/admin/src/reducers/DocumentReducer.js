
import {
   
    FETCH_DOCUMENT_ERROR,
    FETCH_DOCUMENT_LOADING,
    FETCH_DOCUMENT_SUCCESS,
    
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const DocumentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENT_LOADING : return {...state, isLoading: true };
        case FETCH_DOCUMENT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_DOCUMENT_ERROR : return { isLoading: false, data:[], error: action.payload};
        
        default : return state;
       
    }
}

export default DocumentReducer;

