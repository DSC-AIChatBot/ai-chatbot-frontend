import React from 'react';

import ChatMessage from '../../components/ChatMessage';
import styled from 'styled-components/macro';

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
  width : 80%;
  height : 70vh;
  justify-content : space-between;
  border-radius : 10px;
  background-color: rgba(116,116,130,0.8);
`;
// background-color: rgba(187,155,168,0.8);

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
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
        <StyledChatContainer>
          {messages && messages.map((
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
            value={messageInput?.content}
            onChange={onChange}
            onKeyUp={onKeyUp}
          />
        </InputContainer>
        {/* <TextField
          id="filled-size-normal"
          label="오늘의 이야기"
          // onChange={onChange}
          variant="filled"
          style={{
            backgroundColor: "rgba(232,244,253,0.3)",
            borderRadius: 5,
          }}
        /> */}
      </MainContainer>
    </MainChatContainer>
  );
}

export default Chat;
