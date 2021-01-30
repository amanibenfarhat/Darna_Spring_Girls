import Member from '../components/admin-routes/List-members/Member'

import {
    ADD_MEMBER_ERROR, 
    ADD_MEMBER_LOADING,
    ADD_MEMBER_SUCCESS,
    UPDATE_MEMBER_ERROR,
    UPDATE_MEMBER_LOADING,
    UPDATE_MEMBER_SUCCESS,
    DELETE_MEMBER_ERROR,
    DELETE_MEMBER_LOADING,
    DELETE_MEMBER_SUCCESS,
    FETCH_MEMBER_ERROR,
    FETCH_MEMBER_LOADING,
    FETCH_MEMBER_SUCCESS,
    FETCH_BY_ID_MEMBER_ERROR,
    FETCH_BY_ID_MEMBER_LOADING,
    FETCH_BY_ID_MEMBER_SUCCESS
} from './types'

import axios from 'axios';
import { Redirect } from 'react-router-dom';

const url = 'https://localhost:9094/api/auth/listUser';




// ****************** Fetch ***********************
export const fetechMembersSuccess =  members => {
    return {
        type : FETCH_MEMBER_SUCCESS,
        payload : members
        
    }
}
export const fetechMembersLoading = () => {
    return {
        type : FETCH_MEMBER_LOADING,
    }
}
export const fetechMembersError = error => {
    return {
        type : FETCH_MEMBER_ERROR,
        payload : error,
    }
}


const normalizeResponse = (data) => {
    const arr = data.map(item => {
        const keys = Object.keys(item);

        keys.forEach(k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });

        return item;
    });
    return arr;
}


export const fetchMembers = () => {
    // let isLoading = true; 
    return (dispatch) => {
        dispatch(fetechMembersLoading)
        axios.get('http://localhost:9094/api/auth/DesactiverRenouvellemnt')
        .then(response => { 
          const members = response.data;
          dispatch(fetechMembersSuccess(members))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch (fetechMembersError(errorMsg))

        })
    //     dispatch(fetechMembersLoading(isLoading));
    //     return axios.get(url)
    //         .then(response => {
    //             const data = normalizeResponse(response.data);
    //             dispatch(fetechMembersSuccess(data));
    //             isLoading = false;
    //         }).catch(error => {
    //             const errorPayload = {};
    //             errorPayload['message'] = error.response.data.message;
    //             errorPayload['status'] = error.response.status;
    //             dispatch(fetechMembersError(errorPayload));

    //             isLoading = false;
    //             dispatch(fetechMembersLoading(isLoading));

    //         })
    }
}
// ****************** FetchById ***********************
export const fetechMemberSuccess =  members => {
    return {
        type : FETCH_MEMBER_SUCCESS,
        payload : members
        
    }
}
export const fetechMemberLoading = () => {
    return {
        type : FETCH_MEMBER_LOADING,
    }
}
export const fetechMemberError = error => {
    return {
        type : FETCH_MEMBER_ERROR,
        payload : error,
    }
}



export const fetchMemberById = (id) => {
    // let isLoading = true; 
    return (dispatch) => {
        axios.get(`http://localhost:9094/api/auth/user/${id}`)
        .then(response => { 
          const members = response.data;
          console.log("dataaa", members)
          dispatch(fetechMemberSuccess(members))
        })
        .catch( error => {
            // const errorMsg = error.message;
            // dispatch(fetechMemberError(errorMsg))
            console.log("erreuuuur")

        })
    //     dispatch(fetechMembersLoading(isLoading));
    //     return axios.get(url)
    //         .then(response => {
    //             const data = normalizeResponse(response.data);
    //             dispatch(fetechMembersSuccess(data));
    //             isLoading = false;
    //         }).catch(error => {
    //             const errorPayload = {};
    //             errorPayload['message'] = error.response.data.message;
    //             errorPayload['status'] = error.response.status;
    //             dispatch(fetechMembersError(errorPayload));

    //             isLoading = false;
    //             dispatch(fetechMembersLoading(isLoading));

    //         })
    }
}


// ****************** Edit ***********************
export const editMembersSuccess = (data) => {
    return {
        type : UPDATE_MEMBER_SUCCESS,
        payload : data,
    }
}

export const editMembersError = (data) => {
    return {
        type : UPDATE_MEMBER_ERROR,
        payload : data,
    }
}

export const editMember = (member) => {
    const data = {
        id : member.id,
        nom : member.nom,
        prenom : member.pnom,
        email : member.email,
        dateNaissance : member.date,
        enabled : member.enabled
    };
    
    return (dispatch) => {
        return axios.put(`http://localhost:9094/api/auth/updateUser/${data.id}`, data)
            .then(() => {
                // return axios.get(`${url}/{data.id}`)
                dispatch(editMembersSuccess(data));
                Redirect('/members');
                   
            }).catch ((error) => {
                const errorPayload = {};
                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.status;
                            dispatch(editMembersError(errorPayload));

                    })
    }

}
// ****************** Delete ***********************
export const deleteMemberSuccess = (id) => {
    return {
        type : DELETE_MEMBER_SUCCESS,
        payload : {
            id : id
        },
    }
}

export const deleteMemberError = (data) => {
    return {
        type : DELETE_MEMBER_ERROR,
        payload : data,
    }
}
export const deleteMember = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:9094/api/auth/User/delete/${id}`)
        .then (() => {
            dispatch(deleteMemberSuccess(id))
        }).catch ((error) => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            
            dispatch(deleteMemberError(errorPayload))
        })
    }
}

export const ActivateMember = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:9094/api/auth/ActivateRenouvellement/${id}`)
        .then(response => { 
            const members = response.data;
            dispatch(fetechMembersSuccess(members))
          })
          .catch( error => {
              const errorMsg = error.message;
              dispatch (fetechMembersError(errorMsg))
  
          })
    }
}