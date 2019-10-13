import React from 'react'
import styles from './../style.module.css'
import SendTextBox from "../send-text-box";
import SendButton from "../send-button";

const LeftFrame = () => (
  <div className={[styles['frame-controller'],'animated','fadeInDown','delay-2s'].join(' ')}>
    <h1>Say hello.</h1>
      <div className={['animated','fadeIn','delay-4s','slow'].join(' ')}>
          <SendTextBox
            title={"Send a message."}
            defaultText={"from you..."}
          />
          <SendTextBox
            title={"Don't leave them on read."}
            defaultText={"from them..."}
          />
          <br/>
          <SendButton title={"Send"}/>
      </div>
  </div>
);

export default LeftFrame
