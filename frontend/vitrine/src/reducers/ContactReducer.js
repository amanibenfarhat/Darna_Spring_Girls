import {
   
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_LOADING,
    FETCH_CONTACT_SUCCESS
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const ContactReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CONTACT_LOADING : return {...state, isLoading: true };
        case FETCH_CONTACT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_CONTACT_ERROR : return { isLoading: false, data:[], error: action.payload};
       
        default : return state;
       

    }
}

export default ContactReducer;

