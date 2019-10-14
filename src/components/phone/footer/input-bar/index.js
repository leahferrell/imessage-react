import React from 'react'
import styles from './style.module.css'
import {IoIosMic} from "react-icons/io";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const InputBar = ({text, inputStyle}) => (
  <div className={styles['input-bar']}>
    <div className={styles['text-box']}>
      <span className={styles[inputStyle]}>
        {text}
      </span>
      <span className={styles['voice-icon']}>
        <IoIosMic/>
      </span>
    </div>
  </div>
);

InputBar.propTypes = {
  text: PropTypes.string
};

const mapStateToProps = (state) => {
  const isActive = state.message.isMe && state.message.text !== '';
  return ({
    text: isActive ? state.message.text : 'iMessage',
    inputStyle: isActive ? 'text-active' : 'text-default'
  });
};

export default connect(
  mapStateToProps
)(InputBar);
