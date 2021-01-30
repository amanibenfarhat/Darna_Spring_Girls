


import {
    FETCH_DOCUMENT_ERROR,
    FETCH_DOCUMENT_LOADING,
    FETCH_DOCUMENT_SUCCESS,
  } from "./types";
  
  import axios from "axios";
  
  export const fetechDocumentsSuccess = (documents) => {
    return {
      type: FETCH_DOCUMENT_SUCCESS,
      payload: documents,
    };
  };
  export const fetechDocumentsLoading = () => {
    return {
      type: FETCH_DOCUMENT_LOADING,
    };
  };
  export const fetechDocumentsError = (error) => {
    return {
      type: FETCH_DOCUMENT_ERROR,
      payload: error,
    };
  };
  
  export const fetchDocument = () => {
    // let isLoading = true;
    return (dispatch) => {
      dispatch(fetechDocumentsLoading);
      axios
        .get("http://localhost:9094/api/AssociationDarna")
  
        .then((response) => {
          const documents = response.data;
          //   console.log("oooooooooo", objectifs)
          //     debugger;
          dispatch(fetechDocumentsSuccess(documents));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetechDocumentsError(errorMsg));
        });
    };
  };
  