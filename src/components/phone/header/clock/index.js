import React, {useEffect, useState} from 'react'
import styles from './../style.module.css'
import {getTime} from "../../../../utils/time";

const Clock = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(getTime())
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles['clock']}>
      {time}
    </div>
  );
};

export default Clock;
