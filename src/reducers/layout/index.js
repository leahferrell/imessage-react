import {SET_LOADED, TOGGLE_SETTINGS} from "../../actions/layout";

export const initialState = {
  isSettings: false,
  alreadyLoaded: false
};

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettings: action.isSettings
      };
    case SET_LOADED:
      return {
        ...state,
        alreadyLoaded: true
      };
    default:
      return state;
  }
};

export default layout
