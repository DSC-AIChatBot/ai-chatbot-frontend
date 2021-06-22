import React from 'react';
import styled from 'styled-components';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { useHistory } from 'react-router-dom';
import AppBar from './AppBar';

const Container = styled.div`
    display : flex;
    justify-content: space-between;
    padding : 5px 10px;
    background: #D5919D;
`;

function Header () {
  const history = useHistory();

  function handleChangeRouteToCalendar () {
    history.push('/emotion-Calendar');
  }
  return (
    <Container>
      <AppBar/>
      <EventAvailableIcon
        onClick={handleChangeRouteToCalendar}
        style={{ color: "#FFF", cursor: 'pointer' }}/>
    </Container>
  );
}

export default Header;