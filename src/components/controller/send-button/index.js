import React from 'react'
import styles from './../style.module.css'

const SendButton = ({children, moduleStyle=''}) => (
  <button
    className={[styles['send-button'], styles[moduleStyle]].join(' ')}
    type="submit"
  >
    {children}
  </button>
);

export default SendButton
