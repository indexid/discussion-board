import React, { useState } from 'react';
import Header from '../header/Header';
import MessageForm from '../messageForm/MessageForm';
import MessageList from '../messageList/MessageList';
import './Wrapper.css';

const Wrapper = () => {
  const [messages, setMessages] = useState([]);

  const handleOnSubmit = msg => {
    setMessages([...messages, msg]);
  };

  return (
    <div className="wrapper">
      <Header />
      <MessageList messages={messages} />
      <MessageForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Wrapper;
