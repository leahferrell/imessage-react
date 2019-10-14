import React, { useState } from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";
import IconButton from "../icon-button";
import {IoIosArrowRoundForward} from "react-icons/io";
import {addMessage} from "../../../actions/message";
import {connect} from "react-redux";

const SendTextBox = ({title, isMe, addMessage}) => {
  const [message, setMessage] = useState('');
  return (
    <form
      className={styles['send-box']}
      onSubmit={(e) => {
        e.preventDefault();
        addMessage(message,isMe);
        setMessage('');
      }}
    >
      <label
        className={styles['send-label']}
        htmlFor={title}
      >
        {title}
      </label>
      <input
        value={message}
        className={[styles['input-box']].join(' ')}
        name={title}
        onChange={e => setMessage(e.target.value)}
      >
      </input>
      <div className={styles['send-buffer']}>
        <IconButton
          icon={<IoIosArrowRoundForward/>}
          moduleStyle={"icon-button-send"}
        />
      </div>
    </form>
  );
};

SendTextBox.propTypes = {
  title: PropTypes.string,
  isMe: PropTypes.bool,
  addMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, isMe) => dispatch(addMessage(message, isMe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendTextBox);
