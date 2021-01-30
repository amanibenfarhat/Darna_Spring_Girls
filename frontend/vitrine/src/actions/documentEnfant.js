import {
    FETCH_DOCUMENTENFANT_ERROR,
    FETCH_DOCUMENTENFANT_LOADING,
    FETCH_DOCUMENTENFANT_SUCCESS,
  } from "./types";
  
  import axios from "axios";
  
  export const fetechDocumentEnfantSuccess = (documentEnfants) => {
    return {
      type: FETCH_DOCUMENTENFANT_SUCCESS,
      payload: documentEnfants,
    };
  };
  export const fetechDocumentEnfantLoading = () => {
    return {
      type: FETCH_DOCUMENTENFANT_LOADING,
    };
  };
  export const fetechDocumentEnfantError = (error) => {
    return {
      type: FETCH_DOCUMENTENFANT_ERROR,
      payload: error,
    };
  };
  
  export const fetchDocumentEnfant = () => {
    // let isLoading = true;
    return (dispatch) => {
      dispatch(fetechDocumentEnfantLoading);
      axios
        .get("http://localhost:9094/api/DroitEnfant")
  
        .then((response) => {
          const documentEnfants = response.data;
          //   console.log("oooooooooo", objectifs)
          //     debugger;
          dispatch(fetechDocumentEnfantSuccess(documentEnfants));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetechDocumentEnfantError(errorMsg));
        });
    };
  };
  