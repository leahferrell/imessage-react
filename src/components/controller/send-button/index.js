import React from 'react'
import styles from './../style.module.css'

const SendButton = ({children, style=''}) => (
  <button className={[styles['send-button'], styles[style]].join(' ')}>
    {children}
  </button>
);

export default SendButton
