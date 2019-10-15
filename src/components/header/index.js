import React from 'react'
import styles from './style.module.css'

const Header = () => (
  <div className={[styles["header"],"animated","slideInDown","slow","delay-3s"].join(' ')}>
    <div className={styles["header-left"]}>
      <a
        href="https://github.com/leahthecatlady/imessage-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        iMessage Simulator
      </a>
    </div>
    <div className={styles["header-right"]}>
      <a
        href="https://github.com/leahthecatlady"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Leah Ferrell
      </a>
    </div>
  </div>
);

export default Header
