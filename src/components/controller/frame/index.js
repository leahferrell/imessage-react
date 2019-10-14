import React from 'react'
import styles from './../style.module.css'
import SendTextBox from "../send-text-box";
import SendButton from "../send-button";
import {IoIosTrash, IoIosBuild} from "react-icons/io";

const LeftFrame = () => (
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
      <div className={styles['buttons']}>
        <SendButton children={"Send"} moduleStyle={"send"}/>
      </div>
      <div className={[styles['buttons'],styles['corner-buttons']].join(' ')}>
        <SendButton children={<IoIosTrash/>} moduleStyle={"icon-button"}/>
        <SendButton children={<IoIosBuild/>} moduleStyle={"icon-button"}/>
      </div>
    </div>
  </div>
);

export default LeftFrame
