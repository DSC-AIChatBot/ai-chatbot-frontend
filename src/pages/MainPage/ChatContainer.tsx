import React, { useState } from 'react';

import Chat from './Chat';

import {
  useSubscription,
  useMutation,
  gql,
} from "@apollo/client";

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

// Business Logic container
function ChatContainer () {
  const { data } = useSubscription(GET_MESSAGES);
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

  function handleChange(e : React.FormEvent<HTMLInputElement>) {
    setMessage(e.currentTarget.value);
  }

  return (
    <Chat
      chatList={chatList}
      chatList2={chatList2}
      onChange={handleChange}
    />
  );
}

export default ChatContainer;
