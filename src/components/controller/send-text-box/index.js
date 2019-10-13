import React from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";
import SendButton from "../send-button";
import {IoIosClose} from "react-icons/io";

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
    <div className={styles['clear-buffer']}>
      <SendButton children={<IoIosClose/>} style={"icon-button"} />
    </div>
  </div>
);

SendTextBox.propTypes = {
  title: PropTypes.string,
  defaultText: PropTypes.string,
  input: PropTypes.string
};

export default SendTextBox
