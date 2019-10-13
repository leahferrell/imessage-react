import React from 'react'
import PropTypes from 'prop-types'
import styles from './../style.module.css'

const Message = ({ isMe, message }) => {
  let className = (isMe ? "mine": "yours");

  return (
    <div className={[styles[className], styles["messages"], "animated", "slideInUp", "delay-3s"].join(' ')}>
      <p
        className={styles["message"]}
      >
        {message}
      </p>
    </div>
  )
};

Message.propTypes = {
  isMe: PropTypes.bool,
  message: PropTypes.string.isRequired
};

export default Message
