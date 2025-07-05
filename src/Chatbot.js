// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // dodaj ovaj import za stilizaciju

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(() => {
  return window.innerWidth > 768; // Otvori samo ako nije mobilni (npr. širi od 768px)
});

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await axios.post('https://chatbot-backend-1kcl.onrender.com/chat', {
        message: input
      });

      setMessages(prev => [...prev, { role: 'Nemanja', content: response.data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'Nemanja', content: 'There was an error connecting to the server.' }]);
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="chatbot-wrapper">
      {isOpen ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Welcome! Let’s chat 😊</span>
            <button onClick={toggleChat} className="minimize-button">−</button>
          </div>

          <div className="chatbot-description">Hi, I’m Nemanja - ask me anything!</div>

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
      ) : (
        <button className="chatbot-toggle-button" onClick={toggleChat}>Chat</button>
      )}
    </div>
  );
}

export default Chatbot;
