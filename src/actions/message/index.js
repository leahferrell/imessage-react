export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const TYPE_MESSAGE = 'TYPE_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const BLANK_MESSAGE = 'BLANK_MESSAGE';

export const initialState = [{
  id: 0,
  isMe: false,
  message: "hey"
}];

let nextMessageId = 1;

export function sendMessage(message){
  return {type: SEND_MESSAGE, message }
}

export function addMessage(message, isMe){
  console.log(`attempting to add message ${message} - ${isMe}`);

  if(message !== undefined && message !== ''){
    return {
      type: ADD_MESSAGE,
      id: nextMessageId++,
      message: message,
      isMe: isMe
    }
  }else{
    return {
      type: BLANK_MESSAGE
    }
  }
}
