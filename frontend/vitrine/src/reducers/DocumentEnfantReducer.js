import {
   
    FETCH_DOCUMENTENFANT_ERROR,
    FETCH_DOCUMENTENFANT_LOADING,
    FETCH_DOCUMENTENFANT_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const DocumentEnfantReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DOCUMENTENFANT_LOADING : return {...state, isLoading: true };
        case FETCH_DOCUMENTENFANT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_DOCUMENTENFANT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default DocumentEnfantReducer;