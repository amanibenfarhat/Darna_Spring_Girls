
import {
    FETCH_RUBRIQUE_ERROR,
    FETCH_RUBRIQUE_LOADING,
    FETCH_RUBRIQUE_SUCCESS,
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const RubriqueReducer = (state = defaultState, action) => {
    switch (action.type) {
  

        case FETCH_RUBRIQUE_LOADING : return {...state, isLoading: true };
        case FETCH_RUBRIQUE_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_RUBRIQUE_ERROR : return { isLoading: false, data:[], error: action.payload};
        default : return state;
        
    }
}

export default RubriqueReducer;

