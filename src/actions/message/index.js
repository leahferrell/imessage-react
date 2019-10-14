export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(text, isMe){
  return {
    type: SET_MESSAGE,
    text,
    isMe
  }
}
