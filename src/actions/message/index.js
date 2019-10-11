export const SEND_MESSAGE = 'SEND_MESSAGE';

export function sendMessage(message){
  return {type: SEND_MESSAGE, message }
}
