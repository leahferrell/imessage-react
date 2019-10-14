import React from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";
import IconButton from "../icon-button";
import {IoIosArrowRoundForward} from "react-icons/io";
import {addMessage} from "../../../actions/messages";
import {connect} from "react-redux";
import {setMessage} from "../../../actions/message";

const SendTextBox = ({title, isMe, text, addMessage, setMessage}) => {
  return (
    <form
      className={styles['send-box']}
      onSubmit={(e) => {
        e.preventDefault();
        addMessage(text,isMe);
        setMessage('',isMe);
      }}
    >
      <label
        className={styles['send-label']}
        htmlFor={title}
      >
        {title}
      </label>
      <input
        value={text}
        className={[styles['input-box']].join(' ')}
        name={title}
        onChange={e => setMessage(e.target.value, isMe)}
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
  text: PropTypes.string,
  addMessage: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
};

const filterSendTextBox = (isMe, message) => (
  isMe === message.isMe ? message.text : ''
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  text: filterSendTextBox(ownProps.isMe, state.message)
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text, isMe) => dispatch(addMessage(text, isMe)),
  setMessage: (text, isMe) => dispatch(setMessage(text, isMe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendTextBox);
