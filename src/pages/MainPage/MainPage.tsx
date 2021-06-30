import React from 'react';
import ChatContainer from './ChatContainer';
import MainPageLayOut from '../../layouts/LoginLayout';
import styled from 'styled-components';
import forest from './forest.png';

const MainBodyContainer = styled.div`
  background : url(${forest}) center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function MainPage () {
  return (
    <MainPageLayOut>
      <MainBodyContainer>
        <ChatContainer/>
      </MainBodyContainer>
    </MainPageLayOut>
  );
}

export default MainPage;
