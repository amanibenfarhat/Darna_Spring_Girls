import {
   
    FETCH_ABOUT_ERROR,
    FETCH_ABOUT_LOADING,
    FETCH_ABOUT_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const AboutReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_ABOUT_LOADING : return {...state, isLoading: true };
        case FETCH_ABOUT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_ABOUT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default AboutReducer;

