import * as actionTypes from "../constants";

const initialState = {
  launchData: null,
  isLoading: false,
};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.GET_SPACEX_DATA_SUCCESS:
      return {
        ...state,
        launchData: action.payload,
      };
    case actionTypes.GET_SPACEX_DATA_FAILURE:
      return {
        ...state,
        launchData: action.payload,
      };
    default:
      return state;
  }
};
export default launchReducer;
