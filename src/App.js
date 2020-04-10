import React, { useState } from 'react';
import MessageForm from './compnents/MessageForm';
import List from './compnents/List';

const App = () => {
  const [message, setTheMessages] = useState([]);
  const handleSend = (theMessage) => {
    setTheMessages([theMessage, ...message]);
  };

  return (
    <div>
      <MessageForm onSend={handleSend} />
      <List data={message} />
    </div>
  );
};

export default App;
