
import {
    ADD_SPONSOR_ERROR, 
    ADD_SPONSOR_SUCCESS,
    UPDATE_SPONSOR_ERROR,
    UPDATE_SPONSOR_SUCCESS,
    DELETE_SPONSOR_ERROR,
    DELETE_SPONSOR_SUCCESS,
    FETCH_SPONSOR_ERROR,
    FETCH_SPONSOR_LOADING,
    FETCH_SPONSOR_SUCCESS,

    ADD_OBJECTIF_ERROR, 
    ADD_OBJECTIF_SUCCESS,
    UPDATE_OBJECTIF_ERROR,
    UPDATE_OBJECTIF_SUCCESS,
    DELETE_OBJECTIF_ERROR,
    DELETE_OBJECTIF_SUCCESS,
    FETCH_OBJECTIF_ERROR,
    FETCH_OBJECTIF_LOADING,
    FETCH_OBJECTIF_SUCCESS,

    ADD_PRESENTATION_ERROR, 
    ADD_PRESENTATION_SUCCESS,
    UPDATE_PRESENTATION_ERROR,
    UPDATE_PRESENTATION_SUCCESS,
    DELETE_PRESENTATION_ERROR,
    DELETE_PRESENTATION_SUCCESS,
    FETCH_PRESENTATION_ERROR,
    FETCH_PRESENTATION_LOADING,
    FETCH_PRESENTATION_SUCCESS,

    ADD_PROJET_ERROR, 
    ADD_PROJET_SUCCESS,
    UPDATE_PROJET_ERROR,
    UPDATE_PROJET_SUCCESS,
    DELETE_PROJET_ERROR,
    DELETE_PROJET_SUCCESS,
    FETCH_PROJET_ERROR,
    FETCH_PROJET_LOADING,
    FETCH_PROJET_SUCCESS,

    ADD_HELP_ERROR, 
    ADD_HELP_SUCCESS,
    UPDATE_HELP_ERROR,
    UPDATE_HELP_SUCCESS,
    DELETE_HELP_ERROR,
    DELETE_HELP_SUCCESS,
    FETCH_HELP_ERROR,
    FETCH_HELP_LOADING,
    FETCH_HELP_SUCCESS,

    ADD_CONTACT_ERROR, 
    ADD_CONTACT_SUCCESS,
    UPDATE_CONTACT_ERROR,
    UPDATE_CONTACT_SUCCESS,
    DELETE_CONTACT_ERROR,
    DELETE_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_LOADING,
    FETCH_CONTACT_SUCCESS,

    ADD_ACTION_ERROR, 
    ADD_ACTION_SUCCESS,
    UPDATE_ACTION_ERROR,
    UPDATE_ACTION_SUCCESS,
    DELETE_ACTION_ERROR,
    DELETE_ACTION_SUCCESS,
    FETCH_ACTION_ERROR,
    FETCH_ACTION_LOADING,
    FETCH_ACTION_SUCCESS,

    FETCH_LIEN_ERROR,
    FETCH_LIEN_LOADING,
    FETCH_LIEN_SUCCESS,
    ADD_LIEN_ERROR, 
    ADD_LIEN_SUCCESS,
    UPDATE_LIEN_ERROR,
    UPDATE_LIEN_SUCCESS,
    DELETE_LIEN_ERROR,
    DELETE_LIEN_SUCCESS,
} from '../actions/types'

const defaultState = {
    data : [],
    error : null,
    isLoading: false
}

const RubriqueReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case FETCH_PRESENTATION_LOADING : return {...state, isLoading: true };
        case FETCH_PRESENTATION_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_PRESENTATION_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_PRESENTATION_SUCCESS : 
            const updatePresentations = state.data.filter(presentation => presentation.idPresentation !== action.payload.idPresentation)
            return {...state, data: [...updatePresentations, action.payload]};
        case UPDATE_PRESENTATION_ERROR : return {...state, error: action.payload};
        case  ADD_PRESENTATION_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_PRESENTATION_ERROR : return {...state, error: action.payload};
        default : return state;
        case DELETE_PRESENTATION_SUCCESS : 
            const filterPresentations = state.data.filter( presentation => presentation.idPresentation !== action.payload.id);
            return {...state, data: filterPresentations }
        case DELETE_PRESENTATION_ERROR : return {...state, error: action.payload}
        

        case FETCH_OBJECTIF_LOADING : return {...state, isLoading: true };
        case FETCH_OBJECTIF_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_OBJECTIF_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_OBJECTIF_SUCCESS : 
            const updateObjectifs = state.data.filter(objectif => objectif.idObjectif !== action.payload.idObjectif)
            return {...state, data: [...updateObjectifs, action.payload]};
        case UPDATE_OBJECTIF_ERROR : return {...state, error: action.payload};
        case  ADD_OBJECTIF_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_OBJECTIF_ERROR : return {...state, error: action.payload};
        case DELETE_OBJECTIF_SUCCESS : 
            const filterObjectifs = state.data.filter( objectif => objectif.idObjectif !== action.payload.id);
            return {...state, data: filterObjectifs }
        case DELETE_OBJECTIF_ERROR : return {...state, error: action.payload}


        case FETCH_SPONSOR_LOADING : return {...state, isLoading: true };
        case FETCH_SPONSOR_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_SPONSOR_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_SPONSOR_SUCCESS : 
            const updateSponsors = state.data.filter(sponsor => sponsor.id_Sponsor !== action.payload.id_Sponsor)
            return {...state, data: [...updateSponsors, action.payload]};
        case UPDATE_SPONSOR_ERROR : return {...state, error: action.payload};
        case  ADD_SPONSOR_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_SPONSOR_ERROR : return {...state, error: action.payload};
        case DELETE_SPONSOR_SUCCESS : 
            const filterSPONSORs = state.data.filter( SPONSOR => SPONSOR.id_Sponsor !== action.payload.id);
            return {...state, data: filterSPONSORs }
        case DELETE_SPONSOR_ERROR : return {...state, error: action.payload}


        case FETCH_PROJET_LOADING : return {...state, isLoading: true };
        case FETCH_PROJET_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_PROJET_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_PROJET_SUCCESS : 
            const updateProjets = state.data.filter(projet => projet.id_Publication !== action.payload.id_Publication)
            return {...state, data: [...updateProjets, action.payload]};
        case UPDATE_PROJET_ERROR : return {...state, error: action.payload};
        case  ADD_PROJET_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_PROJET_ERROR : return {...state, error: action.payload};
        case DELETE_PROJET_SUCCESS : 
            const filterProjets = state.data.filter( projet => projet.id_Publication !== action.payload.id);
            return {...state, data: filterProjets }
        case DELETE_PROJET_ERROR : return {...state, error: action.payload}



        case FETCH_HELP_LOADING : return {...state, isLoading: true };
        case FETCH_HELP_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_HELP_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_HELP_SUCCESS : 
            const updateHelps = state.data.filter(help => help.id !== action.payload.id)
            return {...state, data: [...updateHelps, action.payload]};
        case UPDATE_HELP_ERROR : return {...state, error: action.payload};
        case  ADD_HELP_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_HELP_ERROR : return {...state, error: action.payload};
        case DELETE_HELP_SUCCESS : 
            const filterHelps = state.data.filter( help => help.id !== action.payload.id);
            return {...state, data: filterHelps }
        case DELETE_HELP_ERROR : return {...state, error: action.payload}


        case FETCH_CONTACT_LOADING : return {...state, isLoading: true };
        case FETCH_CONTACT_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_CONTACT_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_CONTACT_SUCCESS : 
            const updateContacts = state.data.filter(contact => contact.id !== action.payload.id)
            return {...state, data: [...updateContacts, action.payload]};
        case UPDATE_CONTACT_ERROR : return {...state, error: action.payload};
        case  ADD_CONTACT_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_CONTACT_ERROR : return {...state, error: action.payload};
        case DELETE_CONTACT_SUCCESS : 
            const filterContacts = state.data.filter( contact => contact.id !== action.payload.id);
            return {...state, data: filterContacts }
        case DELETE_CONTACT_ERROR : return {...state, error: action.payload}



        case FETCH_ACTION_LOADING : return {...state, isLoading: true };
        case FETCH_ACTION_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_ACTION_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_ACTION_SUCCESS : 
            const updateActions = state.data.filter(element => element.id_Action !== action.payload.id_Action)
            return {...state, data: [...updateActions, action.payload]};
        case UPDATE_ACTION_ERROR : return {...state, error: action.payload};
        case  ADD_ACTION_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_ACTION_ERROR : return {...state, error: action.payload};
        case DELETE_ACTION_SUCCESS : 
            const filterActions = state.data.filter( actions => actions.id_Action !== action.payload.id);
            return {...state, data: filterActions }
        case DELETE_ACTION_ERROR : return {...state, error: action.payload}



        case FETCH_LIEN_LOADING : return {...state, isLoading: true };
        case FETCH_LIEN_SUCCESS : return {...state, isLoading: false, data: action.payload, error: '' };
        case FETCH_LIEN_ERROR : return { isLoading: false, data:[], error: action.payload};
        case UPDATE_LIEN_SUCCESS : 
            const updateLiens = state.data.filter(element => element.idliendoc !== action.payload.idliendoc)
            return {...state, data: [...updateLiens, action.payload]};
        case UPDATE_LIEN_ERROR : return {...state, error: action.payload};
        case  ADD_LIEN_SUCCESS : return {...state, data: [ ...state.data, action.payload ]};
        case ADD_LIEN_ERROR : return {...state, error: action.payload};
        case DELETE_LIEN_SUCCESS : 
            const filterLiens = state.data.filter( actions => actions.idliendoc !== action.payload.id);
            return {...state, data: filterLiens }
        case DELETE_LIEN_ERROR : return {...state, error: action.payload}
        

    }
}

export default RubriqueReducer;

