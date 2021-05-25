import React, { useState } from 'react';

import ChatMessage from '../../components/ChatMessage';
import styled from 'styled-components';
import useAxios from 'axios-hooks';

import { Button } from '@material-ui/core';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border : 1px solid #e5e5e5;
  padding : 5%;
  width : 50vw;
  height : 50vh;
  justify-content : space-between;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  border : 1px solid #e5e5e5;
  width : 100%;
  padding : 10px;
`;

const Input = styled.input`
  outline: none;
  border : none;
  width : 100%;
  font-size : 16px;
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

  const [, useProfileReq] = useAxios({
    method: 'GET',
    url: 'auth/profile',
  });

  return (
    <MainContainer>
      <Button onClick={() => {
        useProfileReq()
          .then((res) => {
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          });
      }}>
        Profile
      </Button>

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
      <InputContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Input
          onChange={handleChange}
        />
      </InputContainer>
    </MainContainer>
  );
}

export default Main;