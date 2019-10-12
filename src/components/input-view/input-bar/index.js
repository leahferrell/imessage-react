import React from 'react'
import styles from './style.module.css'
import {IoIosMic} from "react-icons/io";

const InputBar = () => (
  <div className={styles['input-bar']}>
    <div className={styles['text-box']}>
      <span className={styles['text-default']}>
        iMessage
      </span>
      <span className={styles['voice-icon']}>
        <IoIosMic/>
      </span>
    </div>
  </div>
);

export default InputBar
