import React from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";

const IconButton = ({icon, moduleStyle='', onClick}) => (
  <button
    className={[styles['icon-button'], styles[moduleStyle]].join(' ')}
    type="submit"
    onClick={onClick}
  >
    {icon}
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.object,
  moduleStyle: PropTypes.string,
  onClick: PropTypes.func
};

export default IconButton
