import {SEND_MESSAGE} from "../../actions/message";

const messages = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          message: action.message
        }
      ];
    default:
      return state
  }
};

export default messages
