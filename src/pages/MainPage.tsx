import React, { useState } from 'react';

import ChatMessage from '../components/ChatMessage';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width : 500px;
  height : 500px;
`;

function Main () {
  const [message, setMessage] = useState("안녕하세요!");
  const [message1, setMessage1] = useState("상담 챗봇입니다.");

  function handleChange(e : any) {
    setMessage(e.target.value);
  }

  function handleChange1(e : any) {
    setMessage1(e.target.value);
  }

  const chatList = [];

  return (
    <div>
      메인 페이지
      {/* <MessageBubble color="#F28316"/> */}
      <ChatContainer>
        <ChatMessage
          mine={false}
          image=""
          text={message}
        />
        <ChatMessage
          mine={true}
          // image="https://picsum.photos/200/300"
          image=""
          text={message1}
        />
      </ChatContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          onChange={handleChange1}
        />
        <input
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Main;