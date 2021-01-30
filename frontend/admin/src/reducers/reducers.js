import {combineReducers } from 'redux'
import MemberReducer from './MemberReducer'
import RubriqueReducer from './RubriqueReducer'
import DocumentReducer from "./DocumentReducer";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";


export default combineReducers ({
    memberData : MemberReducer,
    rubriqueData : RubriqueReducer,
    documentData : DocumentReducer,
    authReducer,
    messageReducer,
});
