import React, { useContext, useState } from 'react';

import Chat from './Chat';

import {
  useSubscription,
  useMutation,
  gql,
  useQuery,
} from "@apollo/client";
import UserContext from '../../utils/contexts/userContext';

// subscription 사용 gql
const SUBSCRIBE_MESSAGES = gql`
  subscription messageAdded($postId: ID!) {
    messageAdded(postId: $postId) {
      id
      content
      role
    }
  }
`;

const GET_MESSAGES = gql`
  query getMessages($userId: String!) {
    getMessages(userId: $userId) {
      id
      content
      role
    }
  }
`;

// post message mutation query ( role ,content )
const POST_MESSAGE = gql`
  mutation($role: String!, $content: String!) {
    postMessage(postMessageData : { userId: $userId, role : $role, content : $content }) {
      id
      content
      role
    }
  }
`;

// Business Logic container
function ChatContainer () {
  const { user } = useContext(UserContext);
  const { data, loading, error } = useSubscription(SUBSCRIBE_MESSAGES, {
    variables: { postId: 1 },
  });

  const { data: messagesData, loading: messagesLoading, refetch } = useQuery(GET_MESSAGES, { variables: { userId: user.id } });

  const [message, setMessage] = useState({
    userId: user.id,
    role: "user",
    content: "",
  });

  // use Mutation
  const [postMessage, { data: postData, error: postError }] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (message.content.length > 0) {
      postMessage({
        variables: message,
      });
    }
    refetch();
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

  if (!messagesLoading) {
    return (
      <Chat
        message={message}
        messages={messagesData?.getMessages}
        onChange={handleChange}
        onKeyUp={handleOnKeyUp}
      />
    );
  }
  return null;
}

export default ChatContainer;
