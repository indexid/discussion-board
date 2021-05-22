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

  const handleOnDelete = id => {
    const newMessages = messages.filter(message => !(message.id === id));
    setMessages(newMessages);
  };

  return (
    <div className="wrapper">
      <Header />
      <MessageList messages={messages} onDelete={handleOnDelete} />
      <MessageForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default Wrapper;
