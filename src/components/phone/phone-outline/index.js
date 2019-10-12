import React from 'react'
import styles from './style.module.css'
import PhoneWindow from "../phone-window";

const PhoneOutline = () => (
  <div
    className={styles['phone-space']}
  >
    <div className={styles["phone-image"]}/>
    <PhoneWindow/>
  </div>
);

export default PhoneOutline
