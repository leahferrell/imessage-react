import React from 'react'
import SendMessage from "../../store/send-message";
import DisplayedMessages from "../../store/display-messages"

const App = () => (
  <div>
    <DisplayedMessages />
    <SendMessage/>
  </div>
);

export default App
