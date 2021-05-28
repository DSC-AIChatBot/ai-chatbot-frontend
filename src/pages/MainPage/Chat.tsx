import React from 'react';

import ChatMessage from '../../components/ChatMessage';
import styled from 'styled-components';
import ChatBot from './ChatBot.jpg';

const MainChatContainer = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border : 1px solid #e5e5e5;
  padding : 5%;
  width : 50vw;
  height : 50vh;
  justify-content : space-between;
`;

const StyledChatContainer = styled.div`
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

const StyledImage = styled.img`
  max-width: 200px;
`;

type onChangeFunction = (e : { target: HTMLInputElement }) => void;

type onKeyUpFunction = (e : React.KeyboardEvent<HTMLInputElement>) => void;

type Props = {
    message : { role : string, content : string }
    messages : { role : string, content : string }[]
    onChange : onChangeFunction,
    onKeyUp : onKeyUpFunction,
}

function Chat ({ message: messageInput, messages, onChange, onKeyUp } : Props) {
  return (
    <MainChatContainer>
      <StyledImage src={ChatBot}/>
      <MainContainer>
        <StyledChatContainer>
          {messages.map((
            { role, content } : { role : string, content : string}, index : number,
          ) => (
            <ChatMessage
              key={index}
              role={role}
              image=""
              content={content}
            />
          ))}
        </StyledChatContainer>
        <InputContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            value={messageInput.content}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
        </InputContainer>
      </MainContainer>
    </MainChatContainer>
  );
}

export default Chat;
