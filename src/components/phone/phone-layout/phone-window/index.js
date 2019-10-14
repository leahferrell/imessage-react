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
      <MessageHistory/>
      <ClosedInputView/>
  </div>
);

export default PhoneWindow
