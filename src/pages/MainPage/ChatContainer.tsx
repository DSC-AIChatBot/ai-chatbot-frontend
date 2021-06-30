import React, { useContext, useState } from 'react';

import Chat from './Chat';

import {
  useSubscription,
  useMutation,
  gql,
  useQuery,
} from "@apollo/client";
import UserContext from '../../utils/contexts/userContext';
import { useEffect } from 'react';

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
  mutation($userId: String!, $role: String!, $content: String!) {
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

  const { data: messagesData, loading: messagesLoading, refetch, error: getError } = useQuery(GET_MESSAGES, { variables: { userId: user.id } });

  const [messages, setMessages] = useState<{role :string, content:string}[]>([]);

  useEffect(() => {
    if (messagesData) {
      setMessages([...messagesData.getMessages]);
    }
  }, [messagesData]);

  useEffect(() => {
    if (data) {
      setMessages([...messages, data.messageAdded]);
    }
  }, [data]);

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
    setMessage({
      ...message,
      content: "",
    });

    refetch();
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
        messages={messages}
        onChange={handleChange}
        onKeyUp={handleOnKeyUp}
      />
    );
  }
  return null;
}

export default ChatContainer;
