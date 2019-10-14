import {SET_MESSAGE, initialState} from "../../actions/message";

const message = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        text: action.text,
        isMe: action.isMe
      };
    default:
      return state;
  }
};

export default message
