import React from "react";
import PropTypes from "prop-types";

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message key={message.id} {...message} />
      ))}
    </ul>
  </section>
);

MessagesList.PropTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessagesList;
