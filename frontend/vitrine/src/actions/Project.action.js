import {
  FETCH_PROJECT_ERROR,
  FETCH_PROJECT_LOADING,
  FETCH_PROJECT_SUCCESS,
} from "./types";

import axios from "axios";

export const fetechProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECT_SUCCESS,
    payload: projects,
  };
};
export const fetechProjectsLoading = () => {
  return {
    type: FETCH_PROJECT_LOADING,
  };
};
export const fetechProjectsError = (error) => {
  return {
    type: FETCH_PROJECT_ERROR,
    payload: error,
  };
};

export const fetchProjects = () => {
  // let isLoading = true;
  return (dispatch) => {
    dispatch(fetechProjectsLoading);
    axios
      .get("http://localhost:9094/api/listProjet")

      .then((response) => {
        const projects = response.data;
        //   console.log("oooooooooo", objectifs)
        //     debugger;
        dispatch(fetechProjectsSuccess(projects));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetechProjectsError(errorMsg));
      });
  };
};
