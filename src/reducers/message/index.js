import {ADD_MESSAGE, BLANK_MESSAGE, CLEAR_HISTORY, initialState} from "../../actions/message";

const messages = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        {
          id: action.id,
          isMe: action.isMe,
          message: action.message
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
