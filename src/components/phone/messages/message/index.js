import React from 'react'
import PropTypes from 'prop-types'
import styles from './../style.module.css'

const Message = ({ isMe, text }) => {
  let className = (isMe ? "mine": "yours");

  return (
    <div className={[styles[className], styles["messages"], "animated", "slideInUp", "fast"].join(' ')}>
      <p className={styles["message"]}>
        {text}
      </p>
    </div>
  )
};

Message.propTypes = {
  isMe: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default Message
