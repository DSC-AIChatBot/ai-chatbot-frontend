import React, { useCallback, useRef } from 'react';

import ChatMessage from '../../components/ChatMessage';
import styled from 'styled-components/macro';
import { useEffect } from 'react';

const MainChatContainer = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border : 1px solid #484363;
  background-color: #484363;
  opacity : 0.85;
  border-radius : 10px;
  padding : 5%;
  width : 50vw;
  height : 50vh;
  justify-content : space-between;
`;

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y : auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{ 
    display:none; 
  }
`;

const InputContainer = styled.div`
  border : 1px solid #707070;
  border-radius : 10px;
  width : 100%;
  padding : 10px;
  background :#353449;
  opacity : 0.5;
`;

const Input = styled.input`
  outline: none;
  border : none;
  width : 100%;
  color : #FFF;
  font-size : 16px;
  background: transparent;
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
      <MainContainer>
        <StyledChatContainer
        >
          {messages && messages.map((
            { role, content } : { role : string, content : string }, index : number,
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
            value={messageInput?.content}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
        </InputContainer>
      </MainContainer>
    </MainChatContainer>
  );
}

export default Chat;
