import {
    FETCH_SLIDE_ERROR,
    FETCH_SLIDE_LOADING,
    FETCH_SLIDE_SUCCESS,
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const SlideReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SLIDE_LOADING : return {...state, isLoading: true };
        case FETCH_SLIDE_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_SLIDE_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default SlideReducer;

