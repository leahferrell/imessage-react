import React from 'react'
import styles from './../style.module.css'
import {IoIosArrowForward} from "react-icons/io";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ContactDetail = ({initials, name}) => (
  <span className={styles["user-detail"]}>
    <div className={styles["user-icon"]}>
      {initials}
    </div>
    <p className={styles["user-name"]}>
      {name}<IoIosArrowForward className={styles["right-arrow"]}/>
    </p>
  </span>
);

ContactDetail.propTypes = {
  initials: PropTypes.string,
  name: PropTypes.string
};

const mapStateToProps = (state) => ({
  ...state.contact
});

export default connect(
  mapStateToProps
)(ContactDetail);
