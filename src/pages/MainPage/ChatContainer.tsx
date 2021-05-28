import React, { useState } from 'react';

import Chat from './Chat';

import {
  useSubscription,
  useMutation,
  gql,
} from "@apollo/client";
// subscription 사용 gql
const GET_MESSAGES = gql`
  subscription subscribe {
    subscribeMessage {
      messages {
        id
        content
        role
      }
    }
  }
`;

// post message mutation query ( role ,content )
const POST_MESSAGE = gql`
  mutation($role: String!, $content: String!) {
    postMessage(role: $role, content: $content) {
      id
    }
  }
`;

// Business Logic container
function ChatContainer () {
  const { data, loading, error } = useSubscription(GET_MESSAGES);
  const [message, setMessage] = useState({
    role: "user",
    content: "",
  });

  const [messages] = useState(data ? data : []);

  // use Mutation
  const [postMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (message.content.length > 0) {
      postMessage({
        variables: message,
      });
    }
    setMessage({
      ...message,
      content: "",
    });
  };

  function handleChange(e : { target: HTMLInputElement }) {
    setMessage({
      ...message,
      content: e.target.value,
    });
  }

  function handleOnKeyUp (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      onSend();
    }
  }

  if (!loading) {
    return (
      <Chat
        message={message}
        messages={messages}
        onChange={handleChange}
        onKeyUp={handleOnKeyUp}
      />
    );
  }

  return null;
}

export default ChatContainer;
