import React, { useState } from 'react'
import './Chatbot.css';
import chaticon from'../../assets/chatbubble.png';
import chatclose from'../../assets/chatclose.png';

const Chatbot = () => {
    const [isChatOpen,setIsChatOpen]=useState(false);

    const toggleChat = () =>{
        setIsChatOpen(!isChatOpen);
    };
  return (
    <div>
        <div className="chat-bubble" onClick={toggleChat}>
            <img src={chaticon} alt="" className='chaticon' />

        </div>
        {isChatOpen &&(
            <div className="chat-frame-container">
                <div className="close-chat" onClick={toggleChat}>
                    <img src={chatclose} alt="" />
                </div>
                <iframe
                     src="https://www.chatbase.co/chatbot-iframe/gmtPDB5vDCaK8XXpXdfTY"
                    title="Chatbot"
                     width="100%"
                     style={{ height: '100%', minHeight: '500px' }}
                     frameBorder="0"
                ></iframe>
            </div>
        )

        }
    </div>
    
  );
};

export default Chatbot
