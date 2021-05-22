import React, { useEffect, useRef } from 'react';
import { parseDate } from '../../utils/utils';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import './SingleMessage.css';

const SingleMessage = ({ date, msg, user, id, onDelete }) => {
  const messageListRef = useRef(null);

  useEffect(() => {
    // scroll to the last message more smoothly
    setTimeout(
      () => messageListRef.current.scrollIntoView({ behavior: 'smooth' }),
      200
    );
  });

  return (
    <div className="single_message" ref={messageListRef}>
      <div className="single_message_content">
        <div className="single_message_user">{user}</div>
        <div className="single_message_date">{parseDate(date)}</div>
        <div className="single_message_msg">{msg}</div>
      </div>
      <div className="single_message_actions">
        <IconButton className="edit_button" onClick={() => {}}>
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton className="delete_button" onClick={() => onDelete(id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default SingleMessage;
