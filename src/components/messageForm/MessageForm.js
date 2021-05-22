import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getRandomUser } from '../../utils/utils';
import './MessageForm.css';

const MessageForm = props => {
  const [input, setInput] = useState('');

  const sendButton = useRef();
  const loadingButton = useRef();

  // show the send button if there are charachters (not including spaces)
  const onInputChange = event => {
    const inputValue = event.target.value;

    if (inputValue.trim().length > 0) {
      setInput(inputValue);
      sendButton.current.style.display = 'inline-block';
      sendButton.current.style.visibility = 'visible';
    } else {
      setInput(inputValue);
      sendButton.current.style.display = 'none';
      sendButton.current.style.visibility = 'hidden';
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (input.trim().length > 0) {
      // simulation of sending an API request
      setTimeout(() => {
        props.onSubmit({
          id: uuidv4(),
          text: input,
          user: getRandomUser(),
          date: new Date(),
        });

        setInput('');

        loadingButton.current.style.display = 'none';
        loadingButton.current.style.visibility = 'hidden';
        sendButton.current.style.display = 'none';
        sendButton.current.style.visibility = 'hidden';
        // }
      }, 500);
      sendButton.current.style.display = 'none';
      sendButton.current.style.visibility = 'hidden';
      loadingButton.current.style.display = 'inline-block';
      loadingButton.current.style.visibility = 'visible';
    } else {
      sendButton.current.style.display = 'none';
      sendButton.current.style.visibility = 'hidden';
      loadingButton.current.style.display = 'none';
      loadingButton.current.style.visibility = 'hidden';
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
          onChange={onInputChange}
          onKeyDown={e => {
            if (e.key === 'Enter') onFormSubmit(e);
          }}
        />

        <IconButton
          color="primary"
          className="send__button"
          onClick={onFormSubmit}
        >
          <SendIcon
            ref={sendButton}
            style={{ display: 'none', visibility: 'hidden' }}
          />
          <CircularProgress
            size="20px"
            ref={loadingButton}
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default MessageForm;
