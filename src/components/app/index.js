import React from 'react'
import Phone from "../phone/phone-layout/phone";
import styles from "./style.module.css";
import LeftFrame from "../controller/frame";
import Header from "../header";

const App = () => (
  <div className={styles["container"]}>
    <Header/>
    <div className={styles["content"]}>
      <div className={styles["columns-container"]}>
        <div className={[styles["split"], styles["left"], "animated","fadeIn"].join(' ')}>
          <LeftFrame/>
        </div>
        <div className={[styles["split"], styles["right"]].join(' ')}>
          <div className={styles["centered-horizontal"]}>
            <Phone />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App
