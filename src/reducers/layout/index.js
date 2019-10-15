import {TOGGLE_SETTINGS} from "../../actions/layout";

export const initialState = {
  isSettings: false
};

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettings: action.isSettings
      };
    default:
      return state;
  }
};

export default layout
