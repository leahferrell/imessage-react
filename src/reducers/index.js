import {combineReducers} from 'redux'
import messages from './messages'
import message from './message'
import contact from "./contact";
import layout from "./layout";

const rootReducer = combineReducers({
  message,
  messages,
  contact,
  layout
});

export default rootReducer
