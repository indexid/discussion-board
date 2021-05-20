import SingleMessage from '../singleMessage/SingleMessage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message_list_wrapper">
      <div className="message_list_support">
        <AccountCircleIcon fontSize="large" />
        <div className="worker_info">
          <div className="worker_info_team">Cyberint Support</div>
          <div className="worker_info_role">Analyst</div>
        </div>
      </div>
      <div className="message_list">
        {messages.map(msg => (
          <SingleMessage
            date={msg.date}
            user={msg.user}
            msg={msg.text}
            key={msg.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
