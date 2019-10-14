import React from 'react'
import PropTypes from 'prop-types'
import Message from "../message";
import styles from "./../style.module.css";
import connect from "react-redux/es/connect/connect";

const MessageHistory = ({ messages }) => (
  <div className={styles["chat"]}>
      {messages.map(msg => (
        <Message key={msg.id} {...msg} />
      ))}
  </div>
);

MessageHistory.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isMe: PropTypes.bool,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const getMessageHistory = (messages) => {
  //TODO: add logic here
  return messages;
};

const mapStateToProps = state => ({
  messages: getMessageHistory(state.messages)
});

export default connect(
  mapStateToProps
)(MessageHistory)
