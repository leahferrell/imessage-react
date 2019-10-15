import React, {useState} from 'react'
import styles from './../style.module.css'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setContact} from "../../../actions/contact";
import {toggleSettings} from "../../../actions/layout";
import TextButton from "../text-button";

const SettingsFrame = ({initials, name, setContact, turnOffSettings}) => {
  const [newInitials,setNewInitials] = useState(initials);
  const [newName, setNewName] = useState(name);

  return (
    <div className={[styles['settings-frame'],'animated','fadeIn'].join(' ')}>
      <h1>Settings</h1>
      <div className={[styles['configuration'],'animated','fadeInDown','delay-1s','slow'].join(' ')}>
        <form
          className={styles['update-contact']}
          onSubmit={(e) => {
            e.preventDefault();
            setContact(newInitials,newName);
            turnOffSettings();
          }}
        >
          <div className={styles["send-box"]}>
            <label
              className={styles['send-label']}
              htmlFor={"name"}
            >
              Name:
            </label>
            <input
              value={newName}
              className={[styles['input-box']].join(' ')}
              name={"name"}
              onChange={e => setNewName(e.target.value)}
            >
            </input>
          </div>
          <div className={styles["send-box"]}>
            <label
              className={styles['send-label']}
              htmlFor={"initials"}
            >
              Initials:
            </label>
            <input
              value={newInitials}
              className={[styles['input-box']].join(' ')}
              name={"initials"}
              onChange={e => setNewInitials(e.target.value)}
            >
            </input>
          </div>
          <div className={styles['submit']}>
            <TextButton
              text="Update"
            />
            <TextButton
              text="Cancel"
              type="button"
              moduleStyle={"button-cancel"}
              onClick={() => {
                setContact(initials,name);
                turnOffSettings();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

SettingsFrame.propTypes = {
  initials: PropTypes.string,
  name: PropTypes.string,
  setContact: PropTypes.func,
  turnOffSettings: PropTypes.func
};

const mapStateToProps = state => ({
  name: state.contact.name,
  initials: state.contact.initials
});

const mapDispatchToProps = (dispatch) => ({
  setContact: (initials, name) => dispatch(setContact(initials, name)),
  turnOffSettings: () => dispatch(toggleSettings(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFrame);
