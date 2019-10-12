import React from 'react'
import styles from './style.module.css'
import {IoIosArrowBack, IoIosArrowForward, IoIosBatteryFull, IoIosCellular, IoIosWifi} from "react-icons/io";
import {TiLocationArrow} from "react-icons/ti";
import PropTypes from "prop-types";

const Header = ({time, initials, name}) => (
  <div className={styles['header']}>
    <div className={styles['icons']}>
      <span className={styles['left-icons']}>
        {time}
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
      <span className={styles["user-detail"]}>
        <div className={styles["user-icon"]}>
          {initials}
        </div>
        <p className={styles["user-name"]}>
          {name}<IoIosArrowForward className={styles["right-arrow"]}/>
        </p>
      </span>
    </div>
  </div>
);

Header.propTypes = {
  time: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Header
