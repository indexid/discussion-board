import React, { useEffect, useRef } from 'react';
import { parseDate } from '../../utils/utils';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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
        <button
          className="edit_button"
          onClick={() => alert('Edit button was clicked')}
        >
          <EditIcon fontSize="small" />
        </button>

        <button className="delete_button" onClick={() => onDelete(id)}>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default SingleMessage;
