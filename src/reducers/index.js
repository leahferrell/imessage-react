import {combineReducers} from 'redux'
import messages from './messages'
import message from './message'
import contact from "./contact";

const rootReducer = combineReducers({
  message,
  messages,
  contact
});

export default rootReducer
