import React from 'react'
import styles from './../style.module.css'
import SendTextBox from "../send-text-box";
import IconButton from "../icon-button";
import {IoIosTrash, IoIosBuild} from "react-icons/io";
import {removeAllMessages} from "../../../actions/message";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const LeftFrame = ({removeAllMessages}) => (
  <div className={[styles['frame-controller'],'animated','fadeIn','slow'].join(' ')}>
    <h1>Say hello.</h1>
    <div className={[styles['inputs'],'animated','fadeIn','delay-3s','slow'].join(' ')}>
      <SendTextBox
        id = {0}
        title={"Send a message."}
        defaultText={"from you..."}
        isMe={true}
      />
      <SendTextBox
        id = {1}
        title={"Don't leave them on read."}
        defaultText={"from them..."}
        isMe={false}
      />
      <br/>
      <div className={[styles['buttons'],styles['corner-buttons']].join(' ')}>
        <IconButton
          icon={<IoIosTrash/>}
          onClick={()=> removeAllMessages() }
        />
        <IconButton
          icon={<IoIosBuild/>}
        />
      </div>
    </div>
  </div>
);

LeftFrame.propTypes = {
  removeAllMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  removeAllMessages: () => dispatch(removeAllMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftFrame);
