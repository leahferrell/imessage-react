import React from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";

const SendTextBox = ({title, defaultText, input}) => (
  <div className={styles['send-box']}>
    <label
      className={styles['send-label']}
      htmlFor={title}
    >
      {title}
    </label>
    <input
      className={[styles['input-box']].join(' ')}
      value={defaultText}
      name={title}
    >
    </input>
  </div>
);

SendTextBox.propTypes = {
  title: PropTypes.string,
  defaultText: PropTypes.string,
  input: PropTypes.string
};

export default SendTextBox
