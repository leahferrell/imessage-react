import React from 'react'
import styles from './../style.module.css'
import PhoneWindow from "../phone-window";
import PhoneImage from "../phone-image";

const Phone = () => (
  <div
    className={styles['phone-space']}
  >
    <PhoneImage/>
    <PhoneWindow/>
  </div>
);

export default Phone
