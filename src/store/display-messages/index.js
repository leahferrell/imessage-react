import {connect} from 'react-redux'
import MessageHistory from "../../components/message-history";

const getDisplayedMessages = (messages) => {
  return messages;
};

const mapStateToProps = state => ({
  messages: getDisplayedMessages(state.messages)
});

export default connect(
  mapStateToProps
)(MessageHistory)
