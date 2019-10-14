import {ADD_MESSAGE, BLANK_MESSAGE, CLEAR_HISTORY} from "../../actions/messages";

export const initialState = [{
  id: 0,
  isMe: false,
  text: "hey"
}];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        {
          id: action.id,
          isMe: action.isMe,
          text: action.text
        },
        ...state
      ];
    case BLANK_MESSAGE:
      return state;
    case CLEAR_HISTORY:
      return [];
    default:
      return state;
  }
};

export default messages
