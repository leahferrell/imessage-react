import React from 'react'
import styles from './style.module.css'
import PropTypes from "prop-types";

const TextButton = ({text, moduleStyle='', onClick, type="submit"}) => (
  <button
    className={[styles['text-button'], styles[moduleStyle]].join(' ')}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

TextButton.propTypes = {
  text: PropTypes.string,
  moduleStyle: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default TextButton
