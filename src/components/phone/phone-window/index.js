import React from 'react'
import styles from './style.module.css'
import DisplayedMessages from "../../../containers/display-messages";
import Header from "../../header";
import ClosedInputView from "../../input-view/closed-input-view";
import {getTime} from "../../../utils/time";

const PhoneWindow = () => (
  <div
    className={styles['window']}
  >
    <Header
      initials={"BS"}
      name={"Britain"}
      time={getTime()}
    />
    <DisplayedMessages />
    <ClosedInputView/>
  </div>
);

export default PhoneWindow
