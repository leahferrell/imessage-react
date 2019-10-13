import React from 'react'
import styles from './style.module.css'

const Header = () => (
  <div className={styles["header"]}>
    <div className={styles["header-left"]}>
      <a href="#">iMessage Simulator</a>
    </div>
    <div className={styles["header-right"]}>
      <a href="#">Created by Leah Ferrell</a>
    </div>
  </div>
);

export default Header
