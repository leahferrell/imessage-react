import React from 'react'
import {connect} from 'react-redux'
import {sendMessage} from '../../actions/message'
import styles from './style.module.css'

const AddMessage = ({ dispatch }) => {
  let input;

  return (
    <div className={styles['controller']}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          dispatch(sendMessage(input.value));
          input.value = ''
        }}
      >
        <input className={styles["input"]} ref={node => (input = node)} />
        <button type="submit" className={styles["send-button-you"]}>
          Send
        </button>
        <button type="submit" className={styles["send-button-them"]}>
          Receive
        </button>
      </form>
    </div>
  )
};

export default connect()(AddMessage)
