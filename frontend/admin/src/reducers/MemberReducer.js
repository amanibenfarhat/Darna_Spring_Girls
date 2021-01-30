// export const MemberReducer = (state, action) => {
//     switch(action.type){
//         case "INSERT" : 
//         case "UPDATE" : 
//         case "Delete" :
//         case "DETAILS" :
//     }
// }
import {
    UPDATE_MEMBER_ERROR,
    UPDATE_MEMBER_LOADING,
    UPDATE_MEMBER_SUCCESS,
    FETCH_MEMBER_ERROR,
    FETCH_MEMBER_LOADING,
    FETCH_MEMBER_SUCCESS,
    FETCH_BY_ID_MEMBER_ERROR,
    FETCH_BY_ID_MEMBER_LOADING,
    FETCH_BY_ID_MEMBER_SUCCESS,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_ERROR,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_ERROR
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const MemberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MEMBER_LOADING : return {...state, isLoading: true };
        case FETCH_MEMBER_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_MEMBER_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_MEMBER_SUCCESS : 
            const updateMembers = state.data.filter(member => member.id !== action.payload.id)
            return {...state, data: [...updateMembers, action.payload]};
        case UPDATE_MEMBER_ERROR : return {...state, error: action.payload};
        case  ADD_MEMBER_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_MEMBER_ERROR : return {...state, error: action.payload};
        default : return state;
        case DELETE_MEMBER_SUCCESS : 
            const filterMembers = state.data.filter( member => member.id !== action.payload.id);
            return {...state, data: filterMembers }
        case DELETE_MEMBER_ERROR : return {...state, error: action.payload}

    }
}

export default MemberReducer;

