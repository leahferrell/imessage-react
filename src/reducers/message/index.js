import {SET_MESSAGE} from "../../actions/message";

export const initialState = {
  text: '',
  isMe: true
};

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
