import {
   
    FETCH_ACTION_ERROR,
    FETCH_ACTION_LOADING,
    FETCH_ACTION_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const ActionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ACTION_LOADING : return {...state, isLoading: true };
        case FETCH_ACTION_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_ACTION_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default ActionReducer;

