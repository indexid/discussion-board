import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { getRandomUser } from '../../utils/utils';
import './MessageForm.css';

const MessageForm = props => {
  const [input, setInput] = useState('');

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
          onChange={e => setInput(e.target.value)}
          onSubmit={onFormSubmit}
        />

        <IconButton className="send__button" onClick={onFormSubmit}>
          <SendIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default MessageForm;
