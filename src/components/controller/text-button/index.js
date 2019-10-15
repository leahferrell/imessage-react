import React from 'react'
import styles from './style.module.css'
import PropTypes from "prop-types";

const TextButton = ({text, moduleStyle='', onClick}) => (
  <button
    className={[styles['text-button'], styles[moduleStyle]].join(' ')}
    type="submit"
    onClick={onClick}
  >
    {text}
  </button>
);

TextButton.propTypes = {
  text: PropTypes.string,
  moduleStyle: PropTypes.string,
  onClick: PropTypes.func
};

export default TextButton
