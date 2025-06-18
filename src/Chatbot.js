// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // dodaj ovaj import za stilizaciju

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await axios.post('https://chatbot-backend-1kcl.onrender.com/chat', {
        message: input
      });

      setMessages(prev => [...prev, { role: 'bot', content: response.data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'There was an error connecting to the server.' }]);
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-description">Ask anything about me</h2>
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="message-role">{msg.role === 'user' ? 'You' : 'Bot'}</div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
