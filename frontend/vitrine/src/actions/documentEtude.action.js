import {
    FETCH_DOCUMENTETUDE_ERROR,
    FETCH_DOCUMENTETUDE_LOADING,
    FETCH_DOCUMENTETUDE_SUCCESS,
  } from "./types";
  
  import axios from "axios";
  
  export const fetechDocumentEtudesSuccess = (documentEtudes) => {
    return {
      type: FETCH_DOCUMENTETUDE_SUCCESS,
      payload: documentEtudes,
    };
  };
  export const fetechDocumentEtudesLoading = () => {
    return {
      type: FETCH_DOCUMENTETUDE_LOADING,
    };
  };
  export const fetechDocumentEtudesError = (error) => {
    return {
      type: FETCH_DOCUMENTETUDE_ERROR,
      payload: error,
    };
  };
  
  export const fetchDocumentEtudes = () => {
    // let isLoading = true;
    return (dispatch) => {
      dispatch(fetechDocumentEtudesLoading);
      axios
        .get("http://localhost:9094/api/DroitEnfant")
  
        .then((response) => {
          const documentEtudes = response.data;
          //   console.log("oooooooooo", objectifs)
          //     debugger;
          dispatch(fetechDocumentEtudesSuccess(documentEtudes));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetechDocumentEtudesError(errorMsg));
        });
    };
  };
  