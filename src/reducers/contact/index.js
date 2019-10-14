import {SET_CONTACT} from "../../actions/contact";

export const initialState = {
  initials: "BS",
  name: "Britain"
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return {
        name: action.name,
        initials: action.initials
      };
    default:
      return state;
  }
};

export default contact
