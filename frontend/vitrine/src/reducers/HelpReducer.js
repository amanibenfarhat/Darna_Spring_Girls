import {
   
    FETCH_HELP_ERROR,
    FETCH_HELP_LOADING,
    FETCH_HELP_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const HelpReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_HELP_LOADING : return {...state, isLoading: true };
        case FETCH_HELP_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_HELP_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default HelpReducer;

