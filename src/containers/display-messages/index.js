import {connect} from 'react-redux'
import MessageHistory from "../../components/messages/message-history";

const getDisplayedMessages = (messages) => {
  return messages;
};

const mapStateToProps = state => ({
  messages: getDisplayedMessages(state.messages)
});

export default connect(
  mapStateToProps
)(MessageHistory)
