import React from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";

const SendButton = ({title}) => (
  <button className={styles['send-button']}>
    {title}
  </button>
);

SendButton.propTypes = {
  title: PropTypes.string
};

export default SendButton
