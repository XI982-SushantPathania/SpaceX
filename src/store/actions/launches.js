import axios from "axios";
import * as actionTypes from "../constants";

export const getSpacexData = () => (dispatch) => {
  axios
    .get("https://api.spacexdata.com/v3/launches?limit=100")
    .then((response) => {
      const actionPayload = response.data;
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_SUCCESS,
        payload: actionPayload,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.GET_SPACEX_DATA_FAILURE,
        payload: error.response.data,
      });
    });
};
