import React from 'react'
import styles from './../style.module.css'
import Header from "../../header";
import ClosedInputView from "../../input-view/closed-input-view";
import {getTime} from "../../../../utils/time";
import MessageHistory from "../../messages/message-history";

const PhoneWindow = () => (
  <div
    className={styles['window']}
  >
      <Header
        initials={"BS"}
        name={"Britain"}
        time={getTime()}
      />
      <MessageHistory messages={
        [
          {
            id: 1,
            isMe: true,
            message: "hello"
          },
          {
            id: 2,
            isMe: false,
            message: "what's up?"
          },
          {
            id: 3,
            isMe: true,
            message: "i am testing out a thing. just going to type a lot of words and stuff...."
          },
          {
            id: 4,
            isMe: false,
            message: "cool."
          }
        ]
      }/>
      <ClosedInputView/>
  </div>
);

export default PhoneWindow
