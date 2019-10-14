import React, { useState } from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";
import SendButton from "../send-button";
import {IoIosArrowRoundForward} from "react-icons/io";
import {addMessage} from "../../../actions/message";
import {connect} from "react-redux";

const SendTextBox = ({id, title, isMe, addMessage}) => {
  const [input, setInput] = useState('');
  return (
    <form
      className={styles['send-box']}
      id={id+"-send-box"}
      onSubmit={(e) => {
        e.preventDefault();
        addMessage(input,isMe);
        setInput('');
      }}
    >
      <label
        className={styles['send-label']}
        htmlFor={title}
      >
        {title}
      </label>
      <input
        value={input}
        className={[styles['input-box']].join(' ')}
        name={title}
        onInput={e => setInput(e.target.value)}
      >
      </input>
      <div className={styles['send-buffer']}>
        <SendButton
          children={<IoIosArrowRoundForward/>}
          moduleStyle={"icon-button-send"}
        />
      </div>
    </form>
  );
};

SendTextBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isMe: PropTypes.bool
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, isMe) => dispatch(addMessage(message, isMe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendTextBox);
