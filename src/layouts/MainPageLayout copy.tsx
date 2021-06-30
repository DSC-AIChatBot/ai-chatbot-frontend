import React from 'react';
import styled from 'styled-components/macro';
import Header from '../pages/MainPage/components/Header';

const Container = styled.div`
  display : flex;
  flex-direction: column;
  height: 100vh;
`;

interface Props {
  children: JSX.Element[] | JSX.Element
}

function MainPageLayOut ({ children }: Props) {
  return (
    <Container>
      <Header/>
      {children}
    </Container>
  );
}

export default MainPageLayOut;