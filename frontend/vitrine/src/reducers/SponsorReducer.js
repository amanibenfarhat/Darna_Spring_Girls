import {
   
    FETCH_SPONSOR_ERROR,
    FETCH_SPONSOR_LOADING,
    FETCH_SPONSOR_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const SponsorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SPONSOR_LOADING : return {...state, isLoading: true };
        case FETCH_SPONSOR_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_SPONSOR_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default  SponsorReducer;

