import React, { useState } from 'react';

import ChatMessage from '../../components/ChatMessage';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width : 500px;
  height : 500px;
`;

function Main () {
  const [message, setMessage] = useState("안녕하세요!");
  const [chatList, setChatList] = useState([
    { role: "guest", text: "안녕" },
    { role: "chatbot", text: "나는" },
    { role: "guest", text: "게스트" },
  ]);
  const [chatList2, setChatList2] = useState([
    { role: "chatbot", text: "안녕" },
    { role: "guest", text: "나는" },
    { role: "chatbot", text: "로봇" },
  ]);

  function handleChange(e : any) {
    setMessage(e.target.value);
  }

  return (
    <div>
      메인 페이지
      <ChatContainer>
        {chatList.map(({ role, text }, index) => (
          <ChatMessage
            key={index}
            role={role}
            image=""
            text={text}
          />
        ))}
        {chatList2.map(({ role, text }, index) => (
          <ChatMessage
            key={index}
            role={role}
            image=""
            text={text}
          />
        ))}
      </ChatContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Main;