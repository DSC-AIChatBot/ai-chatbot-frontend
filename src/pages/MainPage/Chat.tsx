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
  border-radius : 10px;
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

type onChangeFunction = (e: React.FormEvent<HTMLInputElement>) => void;

type Props = {
    chatList : { role : string, text : string }[],
    chatList2 : { role : string, text : string }[],
    onChange : onChangeFunction,
}

function Chat ({ chatList, chatList2, onChange } : Props) {
  return (
    <MainChatContainer>
      <StyledImage src={ChatBot}/>
      <MainContainer>
        <StyledChatContainer>
          {chatList.map((
            { role, text } : { role : string, text : string}, index : number,
          ) => (
            <ChatMessage
              key={index}
              role={role}
              image=""
              text={text}
            />
          ))}
          {chatList2.map((
            { role, text } : { role : string, text : string}, index : number,
          ) => (
            <ChatMessage
              key={index}
              role={role}
              image=""
              text={text}
            />
          ))}
        </StyledChatContainer>
        <InputContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            onChange={onChange}
          />
        </InputContainer>
      </MainContainer>
    </MainChatContainer>
  );
}

export default Chat;
