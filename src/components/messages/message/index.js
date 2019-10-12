import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

const Message = ({ onClick, message }) => (
  <p
    onClick={onClick}
    className={styles['from-me']}
  >
    {message}
  </p>
);

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Message
