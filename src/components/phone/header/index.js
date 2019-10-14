import React from 'react'
import styles from './style.module.css'
import {IoIosArrowBack, IoIosBatteryFull, IoIosCellular, IoIosWifi} from "react-icons/io";
import {TiLocationArrow} from "react-icons/ti";
import Clock from "./clock";
import ContactDetail from "./contact-detail";

const Header = () => (
  <div className={styles['header']}>
    <div className={styles['icons']}>
      <span className={styles['left-icons']}>
        <Clock/>
        <TiLocationArrow/>
      </span>
      <span className={styles['right-icons']}>
        <IoIosCellular/>
        &nbsp;
        <IoIosWifi/>
        &nbsp;
        <IoIosBatteryFull/>
      </span>
    </div>
    <div className={styles['messenger-header']}>
      <span className={styles['back-arrow']}>
        <IoIosArrowBack/>
      </span>
      <ContactDetail/>
    </div>
  </div>
);

export default Header
