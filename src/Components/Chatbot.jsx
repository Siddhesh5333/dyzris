// src/components/Chatbot.js
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import './Chatbot.css'; // For custom styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, type: 'user' }]);
    // Simulate a bot response
    setTimeout(() => {
      setMessages([...messages, { text: message, type: 'user' }, { text: 'Sorry, I did not understand that.', type: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
