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
    REGISTER_SUCCESS,
    SET_MESSAGE,
    REGISTER_FAIL,
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
    FETCH_DOCUMENT_SUCCESS

    
} from './types'

import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AddService from "../services/Add.service";





/* ******************   Presentation ***********************/

export const createDescriptionSuccess = (data) => {
    return {
        type: ADD_PRESENTATION_SUCCESS,
        payload : data,
    }
}

export const createDescriptionError = (data) => {
    return {
        type: ADD_PRESENTATION_ERROR,
        payload : data,
    }
}


export const addPresentation = (description_presentation) => (dispatch) => {
    return AddService.addPresentation(description_presentation).then(
      (response) => {
        dispatch({
          type: ADD_PRESENTATION_SUCCESS,
        });
        
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_PRESENTATION_ERROR,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };



export const fetechPresentationSuccess =  presentation => {
    return {
        type : FETCH_PRESENTATION_SUCCESS,
        payload : presentation
        
    }
}
export const fetechPresentationLoading = () => {
    return {
        type : FETCH_PRESENTATION_LOADING,
    }
}
export const fetechPresentationError = error => {
    return {
        type : FETCH_PRESENTATION_ERROR,
        payload : error,
    }
}

export const fetchPresentation = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechPresentationLoading)
        axios.get('http://localhost:9094/api/listpresentation')


        .then(response => { 
          const presentation = response.data;
          dispatch(fetechPresentationSuccess(presentation))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechPresentationError(errorMsg))

        })
 
    }
}

export const editPresentationSuccess = (data) => {
    
    return {
        type : UPDATE_PRESENTATION_SUCCESS,
        payload : data,
    }
}

export const editPresentationError = (data) => {
    return {
        type : UPDATE_PRESENTATION_ERROR,
        payload : data,
    }
}

export const editPresentation = (presentation) => {
  
    // const data = {
    //     id : presentation.idPresentation,
    //     description : presentation.description_presentation
    // }
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/oldpresentation/${presentation.idPresentation}`, presentation)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editPresentationSuccess(presentation));
                Redirect('/presentation');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editPresentationError(errorPayload));

                    })
    }

}

export const deletePresentationSuccess = (id) => {
    return {
        type : DELETE_PRESENTATION_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deletePresentationError = (data) => {
    return {
        type : DELETE_PRESENTATION_ERROR,
        payload : data,
    }
}
export const deletePresentation = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/deletepresentation/${id}`)
        .then (() => {
            dispatch(deletePresentationSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deletePresentationError(errorPayload))
        })
    }
}

/****************   Objectifs   *********************/
export const createObjectifSuccess = (data) => {
    return {
        type: ADD_OBJECTIF_SUCCESS,
        payload : data,
    }
}

export const createObjectifError = (data) => {
    return {
        type: ADD_OBJECTIF_ERROR,
        payload : data,
    }
}


export const addObjectif = (description_objectif) => (dispatch) => {
    return AddService.addObjectif(description_objectif).then(
      (response) => {
        dispatch({
          type: ADD_OBJECTIF_SUCCESS,
        });
        
  
               
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_OBJECTIF_ERROR,
        });
  
  
        return Promise.reject();
      }
    );
  };


export const fetechObjectifsSuccess =  objectifs => {
    return {
        type : FETCH_OBJECTIF_SUCCESS,
        payload : objectifs
        
    }
}
export const fetechObjectifsLoading = () => {
    return {
        type : FETCH_OBJECTIF_LOADING,
    }
}
export const fetechObjectifsError = error => {
    return {
        type : FETCH_OBJECTIF_ERROR,
        payload : error,
    }
}




export const fetchObjectifs = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechPresentationLoading)
        axios.get('http://localhost:9094/api/listObjectif')
       
        .then(response => { 
             
          const objectifs = response.data;
          dispatch(fetechPresentationSuccess(objectifs))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechPresentationError(errorMsg))

        })
 
    }
}


export const editObjectifsSuccess = (data) => {
    return {
        type : UPDATE_OBJECTIF_SUCCESS,
        payload : data,
    }
}

export const editObjectifsError = (data) => {
    return {
        type : UPDATE_OBJECTIF_ERROR,
        payload : data,
    }
}

export const editObjectif = (objectif) => {
    const data = {
        idObjectif: objectif.idObjectif,
        description_objectif: objectif.description_objectif,
        
    };
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/oldObjectif/${data.idObjectif}`, data)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editObjectifsSuccess(data));
                Redirect('/objecctifs');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editObjectifsError(errorPayload));

                    })
    }

}

export const deleteObjectifsSuccess = (id) => {
    return {
        type : DELETE_OBJECTIF_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteObjectifsError = (data) => {
    return {
        type : DELETE_OBJECTIF_ERROR,
        payload : data,
    }
}
export const deleteObjectif = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/deleteObjectif/${id}`)
        .then (() => {
            dispatch(deleteObjectifsSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteObjectifsError(errorPayload))
        })
    }
}


/* ******************   Sponsors  ***********************/

export const createSponsorSuccess = (data) => {
    return {
        type: ADD_SPONSOR_SUCCESS,
        payload : data,
    }
}

export const createSponsorError = (data) => {
    return {
        type: ADD_SPONSOR_ERROR,
        payload : data,
    }
}


export const addSponsor = (formData) => (dispatch) => {
    return AddService.addSponsor(formData).then(
      (response) => {
        dispatch({
          type: ADD_SPONSOR_SUCCESS,
        });
        
  
               
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_SPONSOR_ERROR,
        });
  
  
        return Promise.reject();
      }
    );
  };



export const fetechSponsorsSuccess =  sponsor => {
    return {
        type : FETCH_SPONSOR_SUCCESS,
        payload : sponsor
        
    }
}
export const fetechSponsorsLoading = () => {
    return {
        type : FETCH_SPONSOR_LOADING,
    }
}
export const fetechSponsorsError = error => {
    return {
        type : FETCH_SPONSOR_ERROR,
        payload : error,
    }
}

export const fetchSponsors = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechSponsorsLoading)
        axios.get('http://localhost:9094/api/listSponsor')


        .then(response => { 
            
          const sponsors = response.data;
          dispatch(fetechSponsorsSuccess(sponsors))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechSponsorsError(errorMsg))

        })
 
    }
}

export const editSponsorSuccess = (data) => {
    console.log("spons",data)
    debugger;
  
    return {
        type : UPDATE_SPONSOR_SUCCESS,
        payload : data,
    }
}

export const editSponsorError = (data) => {
    return {
        type : UPDATE_SPONSOR_ERROR,
        payload : data,
    }
}

export const editSponsor = (formData, sponsor, id) => {
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/oldSponsor/${id}`, formData)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editSponsorSuccess(sponsor));
                Redirect('/nos_sponsors');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editSponsorError(errorPayload));

                    })
    }

}

export const deleteSponsorSuccess = (id) => {
    return {
        type : DELETE_SPONSOR_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteSponsorError = (data) => {
    return {
        type : DELETE_SPONSOR_ERROR,
        payload : data,
    }
}
export const deleteSponsor = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/sponsor/${id}`)
        .then (() => {
            dispatch(deleteSponsorSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteSponsorError(errorPayload))
        })
    }
}

export const fetchSponsorById = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/Sponsor/${id}`)
        .then(response => { 
          const sponsors = response.data;
        //   console.log("dataaa", sponsors)
        //   debugger
          dispatch(fetechSponsorsSuccess(sponsors))
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    
    }
}

/****************   Projets   *********************/


export const addProjet = (type_publication,description_publication) => (dispatch) => {
    return AddService.addProjet(type_publication,description_publication).then(
      (response) => {
        dispatch({
          type: ADD_PROJET_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_PROJET_ERROR,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

export const fetechProjetsSuccess =  projets => {
    return {
        type : FETCH_PROJET_SUCCESS,
        payload : projets
        
    }
}
export const fetechProjetsLoading = () => {
    return {
        type : FETCH_PROJET_LOADING,
    }
}
export const fetechProjetsError = error => {
    return {
        type : FETCH_PROJET_ERROR,
        payload : error,
    }
}




export const fetchProjets = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechProjetsLoading)
        axios.get('http://localhost:9094/api/listpublication')
       
        .then(response => { 
             
          const projets = response.data;
          dispatch(fetechProjetsSuccess(projets))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechProjetsError(errorMsg))

        })
 
    }
}


export const editProjetsSuccess = (data) => {
    return {
        type : UPDATE_PROJET_SUCCESS,
        payload : data,
    }
}

export const editProjetsError = (data) => {
    return {
        type : UPDATE_PROJET_ERROR,
        payload : data,
    }
}

export const editProjet = (projet) => {
    const data = {
        id_Publication: projet.id_Publication,
        description_publication: projet.description_publication,
        type_publication: projet.type_publication
        
    };
    // console.log("aaaaaa0", data)
    // debugger;    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/oldpublication/${data.id_Publication}`, data)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editProjetsSuccess(data));
                Redirect('/nos_projets');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editProjetsError(errorPayload));

                    })
    }

}

export const deleteProjetsSuccess = (id) => {
    return {
        type : DELETE_PROJET_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteProjetsError = (data) => {
    return {
        type : DELETE_PROJET_ERROR,
        payload : data,
    }
}
export const deleteProjet = (id) => {
    
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/deletepublication/${id}`)
        .then (() => {
            dispatch(deleteProjetsSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteProjetsError(errorPayload))
        })
    }
}


/****************   Aider   *********************/


export const addHelp = (comment_aider,pk_aider, volontariat) => (dispatch) => {
    return AddService.addHelp(comment_aider,pk_aider, volontariat).then(
      (response) => {
        dispatch({
          type: ADD_HELP_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_HELP_ERROR,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

export const fetechHelpsSuccess =  helps => {
    return {
        type : FETCH_HELP_SUCCESS,
        payload : helps
        
    }
}
export const fetechHelpsLoading = () => {
    return {
        type : FETCH_HELP_LOADING,
    }
}
export const fetechHelpsError = error => {
    return {
        type : FETCH_HELP_ERROR,
        payload : error,
    }
}




export const fetchHelps = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechHelpsLoading)
        axios.get('http://localhost:9094/Aider/listAider')
       
        .then(response => { 
             
          const helps = response.data;
          dispatch(fetechHelpsSuccess(helps))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechHelpsError(errorMsg))

        })
 
    }
}


export const editHelpsSuccess = (data) => {
    return {
        type : UPDATE_HELP_SUCCESS,
        payload : data,
    }
}

export const editHelpsError = (data) => {
    return {
        type : UPDATE_HELP_ERROR,
        payload : data,
    }
}

export const editHelp = (help) => {
    const data = {
        id: help.id,
        comment_aider: help.comment_aider,
        pk_aider : help.pk_aider,
        volontariat : help.volontariat
                
    };
    // console.log("aaaaaa0", data)
    // debugger;    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/Aider/update/${data.id}`, data)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editHelpsSuccess(data));
                //Redirect('/nos_projets');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editHelpsError(errorPayload));

                    })
    }

}

export const deleteHelpsSuccess = (id) => {
    return {
        type : DELETE_HELP_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteHelpsError = (data) => {
    return {
        type : DELETE_HELP_ERROR,
        payload : data,
    }
}
export const deleteHelp = (id) => {
    
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/Aider/elementDelete/${id}`)
        .then (() => {
            dispatch(deleteHelpsSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteHelpsError(errorPayload))
        })
    }
}



/****************   Contact   *********************/


// export const addContact = (comment_aider,pk_aider, volontariat) => (dispatch) => {
//     return AddService.addHelp(comment_aider,pk_aider, volontariat).then(
//       (response) => {
//         dispatch({
//           type: ADD_CONTACT_SUCCESS,
//         });
  
//         dispatch({
//           type: SET_MESSAGE,
//           payload: response.data.message,
//         });
  
//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
  
//         dispatch({
//           type: ADD_CONTACT_ERROR,
//         });
  
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });
  
//         return Promise.reject();
//       }
//     );
//   };

export const fetechContactsSuccess =  helps => {
    return {
        type : FETCH_CONTACT_SUCCESS,
        payload : helps
        
    }
}
export const fetechContactsLoading = () => {
    return {
        type : FETCH_CONTACT_LOADING,
    }
}
export const fetechContactsError = error => {
    return {
        type : FETCH_CONTACT_ERROR,
        payload : error,
    }
}




export const fetchContacts = () => {
    // let isLoading = true; 
    // console.log('read contact')
    return (dispatch) => {
        dispatch(fetechContactsLoading)
        axios.get('http://localhost:9094/InformationContact/listInformationContact')
       
        .then(response => { 
             
          const contacts = response.data;
          
          
          dispatch(fetechContactsSuccess(contacts))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechContactsError(errorMsg))

        })
 
    }
}


export const editContactsSuccess = (data) => {
    return {
        type : UPDATE_CONTACT_SUCCESS,
        payload : data,
    }
}

export const editContactsError = (data) => {
    return {
        type : UPDATE_CONTACT_ERROR,
        payload : data,
    }
}

export const editContact = (contact) => {
    // const data = {
    //     id: contact.id,
    //     adresse: contact.adresse,
    //     email: contact.email,
    //     tél: contact.tél,
    //     président: contact.président,
    //     email_P : contact.email_P,
    //     vice_Président : contact.vice_Président,
    //     email_V: contact.email_V,
    //     s_génerale: contact.s_génerale,
    //     email_S: contact.email_S,
    //     trésorie: contact.trésorie,
    //     email_T: contact.email_T,
    //     lien_FB: contact.lien_FB,
    //     lien_Insta: contact.lien_Insta,
    //     lien_Twitter: contact.lien_Twitter,
    //     lien_Youtube: contact.lien_Youtube
                
    // };
    // console.log("aaaaaa0", data)
    // debugger;    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/InformationContact/update/${contact.id}`, contact)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editContactsSuccess(contact));
                //Redirect('/nos_projets');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editContactsError(errorPayload));

                    })
    }

}

export const deleteContactsSuccess = (id) => {
    return {
        type : DELETE_CONTACT_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteContactsError = (data) => {
    return {
        type : DELETE_CONTACT_ERROR,
        payload : data,
    }
}
export const deleteContact = (id) => {
    
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/InformationContact/elementDelete/${id}`)
        .then (() => {
            dispatch(deleteContactsSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteContactsError(errorPayload))
        })
    }
}



/****************   Action   *********************/


export const addAction = (formData) => (dispatch) => {
    return AddService.addAction(formData).then(
      (response) => {
        dispatch({
          type: ADD_ACTION_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
        
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_ACTION_ERROR,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
    
  };

export const fetechActionsSuccess =  actions => {
    return {
        type : FETCH_ACTION_SUCCESS,
        payload : actions
        
    }
}
export const fetechActionsLoading = () => {
    return {
        type : FETCH_ACTION_LOADING,
    }
}
export const fetechActionsError = error => {
    return {
        type : FETCH_ACTION_ERROR,
        payload : error,
    }
}




export const fetchActions = () =>  {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechActionsLoading)
        axios.get('http://localhost:9094/api/listAction')
        
       
        .then(response => { 
             
          const actions = response.data;
          console.log("aaahjfvjksdv", actions)
          debugger
          
          dispatch(fetechActionsSuccess(actions))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechActionsError(errorMsg))

        })
 
    }
}


export const editActionsSuccess = (data) => {
    return {
        type : UPDATE_ACTION_SUCCESS,
        payload : data,
    }
}

export const editActionsError = (data) => {
    return {
        type : UPDATE_ACTION_ERROR,
        payload : data,
    }
}

export const editAction = (formData, id_Action, data) => {
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/oldAction/${id_Action}`, formData)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editActionsSuccess(data));
                //Redirect('/nos_projets');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editActionsError(errorPayload));

                    })
    }

}

export const deleteActionsSuccess = (id) => {
    return {
        type : DELETE_ACTION_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteActionsError = (data) => {
    return {
        type : DELETE_ACTION_ERROR,
        payload : data,
    }
}

export const deleteAction = (id) => {
    
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/deleteAction/${id}`)
        .then (() => {
            dispatch(deleteActionsSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteActionsError(errorPayload))
        })
    }
}

export const publierActionsSuccess = (data) => {
    return {
        type : UPDATE_ACTION_SUCCESS,
        payload : data
    }
}

export const publierActionsError = (data) => {
    return {
        type : DELETE_ACTION_ERROR,
        payload : data,
    }
}


export const PublierAction = (data) => {
    
    return (dispatch) => {
        return axios.post(`http://localhost:9094/api/publieraction/${data.id_Action}`)
        .then (() => {
            dispatch(publierActionsSuccess(data))
            // console.log("success")
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(publierActionsError(errorPayload))
            // console.log("error")
        })
    }
}


export const fetchActionById = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/Action/${id}`)
        .then(response => { 
          const actions = response.data;
          console.log("dataaa", actions)
          dispatch(fetechActionsSuccess(actions))
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    
    }
}


export const fetchActionByIdUser = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/findActionByUser/${id}`)
        .then(response => { 
          const actions = response.data;
          dispatch(fetechActionsSuccess(actions))
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    
    }
}


export const fetchMembers = (idA) => {
   
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechActionsLoading)
        axios.get(`http://localhost:9094/api/findUserByAction/${idA}`)
        .then(response => { 
             
          const actions = response.data;
        //   console.log("aaaaaaaaaa", response.data)
        //   debugger

          dispatch(fetechActionsSuccess(actions))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechActionsError(errorMsg))

        })
 
    }
}

/****************   Lien   *********************/


export const fetechLiensSuccess =  liens => {
    return {
        type : FETCH_LIEN_SUCCESS,
        payload : liens
        
    }
}
export const fetechLiensLoading = () => {
    return {
        type : FETCH_LIEN_LOADING,
    }
}
export const fetechLiensError = error => {
    return {
        type : FETCH_LIEN_ERROR,
        payload : error,
    }
}




export const fetchLiens = () => {
    // let isLoading = true; 
    // console.log('read contact')
    return (dispatch) => {
        dispatch(fetechLiensLoading)
        axios.get('http://localhost:9094/api/listLienDoc')
       
        .then(response => { 
             
          const liens = response.data;
          
          
          dispatch(fetechLiensSuccess(liens))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechLiensError(errorMsg))

        })
 
    }
}



export const fetchLienById = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/LienDoc/${id}`)
        .then(response => { 
          const liens = response.data;
          
          dispatch(fetechLiensSuccess(liens))
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    
    }
}

export const deleteLienSuccess = (id) => {
    return {
        type : DELETE_LIEN_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteLienError = (data) => {
    return {
        type : DELETE_LIEN_ERROR,
        payload : data,
    }
}

export const deleteLien = (id) => {
    
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/deleteLiendoc/${id}`)
        .then (() => {
            dispatch(deleteLienSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteLienError(errorPayload))
        })
    }
}


export const addLien = (formData) => (dispatch) => {
    return AddService.addLien(formData).then(
      (response) => {
        dispatch({
          type: ADD_LIEN_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
        
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ADD_LIEN_ERROR,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
    
  };


export const fetechDocumentsSuccess =  documents => {
    return {
        type : FETCH_DOCUMENT_SUCCESS,
        payload : documents
        
    }
}

  export const fetchDocByLienId = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/documents/${id}`)
        .then(response => { 
          const documents = response.data;
          
          dispatch(fetechDocumentsSuccess(documents))
          
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    
    }
}