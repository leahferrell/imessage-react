import React from 'react'
import styles from './style.module.css'
import DisplayedMessages from "../../containers/display-messages";
import Header from "../header";

function getTime(){
  let date = new Date();

  let hours = date.getHours();
  if( hours > 12 ){
    hours -= 12;
  }else if( hours === 0){
    hours = 12;
  }

  return hours+':'+date.getMinutes();
}

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
  </div>
);

export default PhoneWindow
