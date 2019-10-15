import React from 'react'
import './style.css'

const TypingBubble = () => (
    <div className={"container animated fadeInUp"}>
      <div className={"chat-bubble"}>
        <div className={"loading"}>
          <div className={"dot one cycle-one"}/>
          <div className={"dot two"}/>
          <div className={"dot three"}/>
        </div>
        <div className={"tail"}/>
      </div>
    </div>
  );

export default TypingBubble
