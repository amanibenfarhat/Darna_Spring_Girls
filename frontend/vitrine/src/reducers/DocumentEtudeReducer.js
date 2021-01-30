import {
   
    FETCH_DOCUMENTETUDE_ERROR,
    FETCH_DOCUMENTETUDE_LOADING,
    FETCH_DOCUMENTETUDE_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const DocumentEtudeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTETUDE_LOADING : return {...state, isLoading: true };
        case FETCH_DOCUMENTETUDE_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_DOCUMENTETUDE_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default DocumentEtudeReducer;