import React from 'react'
import styles from './../style.module.css'
import SendTextBox from "../send-text-box";
import IconButton from "../icon-button";
import {IoIosTrash, IoIosBuild} from "react-icons/io";
import {removeAllMessages} from "../../../actions/messages";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {toggleSettings} from "../../../actions/layout";

const SendTextsFrame = ({removeAllMessages, turnOnSettings}) => (
  <div className={[styles['send-texts-frame'],'animated','fadeIn','slow'].join(' ')}>
    <h1>Say hello.</h1>
    <div className={[styles['inputs'],'animated','fadeIn','delay-3s','slow'].join(' ')}>
      <SendTextBox
        title={"Send a message."}
        isMe={true}
      />
      <SendTextBox
        title={"Don't leave them on read."}
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
          onClick={() => turnOnSettings()}
        />
      </div>
    </div>
  </div>
);

SendTextsFrame.propTypes = {
  removeAllMessages: PropTypes.func.isRequired,
  turnOnSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  removeAllMessages: () => dispatch(removeAllMessages()),
  turnOnSettings: () => dispatch(toggleSettings(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendTextsFrame);
