import axios from "axios";
import * as actionTypes from "../constants";

export const getSuccesfulLaunchData = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADER,
  });
  axios
    .get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${data}`
    )
    .then((response) => {
      const actionPayload = response.data;
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_SUCCESS,
        payload: actionPayload,
      });
      dispatch({
        type: actionTypes.HIDE_LOADER,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_FAILURE,
        payload: error.response.data,
      });
    });
};
export const getSuccesfulLandingData = (launch, land) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADER,
  });
  axios
    .get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}`
    )
    .then((response) => {
      const actionPayload = response.data;
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_SUCCESS,
        payload: actionPayload,
      });
      dispatch({
        type: actionTypes.HIDE_LOADER,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_FAILURE,
        payload: error.response.data,
      });
    });
};
export const getSuccesfulAllData = (launch, land, year) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADER,
  });
  axios
    .get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
    )
    .then((response) => {
      const actionPayload = response.data;
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_SUCCESS,
        payload: actionPayload,
      });
      dispatch({
        type: actionTypes.HIDE_LOADER,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_FAILURE,
        payload: error.response.data,
      });
    });
};
