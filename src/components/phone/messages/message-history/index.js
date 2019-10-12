import React from 'react'
import PropTypes from 'prop-types'
import Message from "../message";
import styles from "./../style.module.css";

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

export default MessageHistory