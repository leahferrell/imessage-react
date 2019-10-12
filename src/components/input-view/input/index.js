import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

const Input = ({handleChange, title, value}) => (
  <div className={styles["input-view"]}>
    <br/>
    {title}
    <br/>
    <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
    <br/>
  </div>
);

Input.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  handleChange: (event) => console.info(`New value : ${event.target.value}`),
  title: null,
  value: null,
};

export default Input
