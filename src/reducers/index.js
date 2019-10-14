import {combineReducers} from 'redux'
import messages from './messages'
import message from './message'

const rootReducer = combineReducers({
  message,
  messages
});

export default rootReducer
