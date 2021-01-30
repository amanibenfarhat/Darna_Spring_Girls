import {
   
    FETCH_PROJECT_ERROR,
    FETCH_PROJECT_LOADING,
    FETCH_PROJECT_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const ProjectReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_LOADING : return {...state, isLoading: true };
        case FETCH_PROJECT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_PROJECT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default ProjectReducer;
