import React from 'react'
import styles from './../style.module.css'
import Header from "../../header";
import CollapsedInputFooter from "../../footer/collapsed-input-footer";
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
      <CollapsedInputFooter/>
  </div>
);

export default PhoneWindow
