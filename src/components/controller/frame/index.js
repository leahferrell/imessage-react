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
          title={"Send a message."}
          defaultText={"from you..."}
      />
      <SendTextBox
          title={"Don't leave them on read."}
          defaultText={"from them..."}
      />
      <br/>
      <div className={styles['buttons']}>
        <SendButton children={"Send"} style={"send"}/>
      </div>
      <div className={[styles['buttons'],styles['corner-buttons']].join(' ')}>
        <SendButton children={<IoIosTrash/>} style={"icon-button"}/>
        <SendButton children={<IoIosBuild/>} style={"icon-button"}/>
      </div>
    </div>
  </div>
);

export default LeftFrame
