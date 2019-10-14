import React from 'react'
import styles from './style.module.css'
import InputBar from "../input-bar";
import HomeBar from "../home-bar";

const CollapsedInputFooter = () => (
  <div className={styles['input-view']}>
    <InputBar/>
    <HomeBar/>
  </div>
);

export default CollapsedInputFooter
