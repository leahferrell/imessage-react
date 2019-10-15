import React from 'react'
import PropTypes from 'prop-types'
import Message from "../message";
import styles from "./../style.module.css";
import connect from "react-redux/es/connect/connect";
import TypingBubble from "../typing-bubble";

const MessageHistory = ({ messages, isTyping }) => (
  <div className={styles["chat"]}>
    {isTyping ? <TypingBubble/> : ''}
    {messages.map(msg => (<Message key={msg.id} {...msg} />))}
  </div>
);

MessageHistory.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isMe: PropTypes.bool,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  isTyping: PropTypes.bool
};

const determineIsTyping = (message) => {
  return !message.isMe && message.text.length > 0;
};

const mapStateToProps = state => ({
  messages: state.messages,
  isTyping: determineIsTyping(state.message)
});

export default connect(
  mapStateToProps
)(MessageHistory)
