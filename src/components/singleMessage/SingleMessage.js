import React, { useEffect, useRef } from 'react';
import './SingleMessage.css';
import { parseDate } from '../../utils/utils';

const SingleMessage = ({ date, msg, user }) => {
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
      <div className="single_message_user">{user}</div>
      <div className="single_message_date">{parseDate(date)}</div>
      <div className="single_message_msg">{msg}</div>
    </div>
  );
};

export default SingleMessage;
