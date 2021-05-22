import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { getRandomUser } from '../../utils/utils';
import './MessageForm.css';

const MessageForm = props => {
  const [input, setInput] = useState('');

  const sendButton = useRef();

  const onInputChange = event => {
    const inputValue = event.target.value;
    if (inputValue.trim().length > 0) {
      setInput(inputValue);
      sendButton.current.style.opacity = 1;
    } else {
      setInput(inputValue);
      sendButton.current.style.opacity = 0;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (!input || !input.trim()) {
      setInput('');
    } else {
      props.onSubmit({
        id: uuidv4(),
        text: input,
        user: getRandomUser(),
        date: new Date(),
      });

      setInput('');
      sendButton.current.style.opacity = 0;
    }
  };

  return (
    <div className="messageForm">
      <div className="messageForm__wrapper">
        <input
          className="message__input"
          type="text"
          placeholder="Type a comment"
          value={input}
          onChange={onInputChange}
          // onSubmit={onFormSubmit}
        />

        <IconButton
          className="send__button"
          onClick={onFormSubmit}
          ref={sendButton}
        >
          <SendIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default MessageForm;
