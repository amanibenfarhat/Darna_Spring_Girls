import {combineReducers } from 'redux'
import RubriqueReducer from './RubriqueReducer'
import HelpReducer from './HelpReducer'
import ProductReducer from './ProductReducer';
import SponsorReducer from './SponsorReducer'
import AboutReducer from './AboutReducer';
import ContactReducer from './ContactReducer'
import ActionReducer from './ActionReducer'
import ProjectReducer from './ProjectReducer'
import SlideReducer from './SlideReducer'
import DocumentReducer from './DocumentReducer'
import DocumentEnfantReducer from "./DocumentEnfantReducer"
import DocumentEtudeReducer from './DocumentEtudeReducer'

export default combineReducers ({
    rubriqueData : RubriqueReducer,
    helpData: HelpReducer,
    produitGalleryData : ProductReducer,
    sponsorData:SponsorReducer,
    AboutData:AboutReducer,
    ContactData:ContactReducer,
    ActionData:ActionReducer,
    projectData:ProjectReducer,
    slideData:SlideReducer,
    documentData:DocumentReducer,
    documentEnfantData:DocumentEnfantReducer,
    documentEtudeData : DocumentEtudeReducer

});
