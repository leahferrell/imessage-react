import React from 'react'
import Phone from "../phone/phone-layout/phone";
import styles from "./style.module.css";
import SendTextsFrame from "../controller/send-texts-frame";
import Header from "../header";
import {connect} from "react-redux";
import SettingsFrame from "../controller/settings-frame";

const AppLayout = ({leftFrame}) => (
  <div className={styles["container"]}>
    <Header/>
    <div className={styles["content"]}>
      <div className={styles["columns-container"]}>
        <div className={[styles["split"], styles["left"]].join(' ')}>
          {leftFrame}
        </div>
        <div className={[styles["split"], styles["right"]].join(' ')}>
          <div className={styles["centered-horizontal"]}>
            <Phone />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  leftFrame: state.layout.isSettings ? <SettingsFrame/> : <SendTextsFrame />
});

export default connect(
  mapStateToProps
)(AppLayout);

