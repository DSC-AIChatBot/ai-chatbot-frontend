import React from 'react';
import { Button, Grid, Fade,
  Typography, TextField, IconButton, FormControlLabel, Switch,
} from '@material-ui/core';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LoginLayout from '../../layouts/LoginLayout';

const LoginBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border : 1px solid #484363;
  background-color: #484363;
  opacity : 0.85;
  border-radius : 10px;
  padding : 5%;
  width : 50vw;
  height : 50vh;
  justify-content : space-between;
`;

import {
  useStyles,
} from './styles';
import useEventTargetValue from '../../utils/hooks/useEventTargetValue';
import styled from 'styled-components';
import ChatBot from './chatbot.png';

function LoginPage():JSX.Element {
  const classes = useStyles();
  const id = useEventTargetValue('');
  const pw = useEventTargetValue('');

  return (
    <LoginLayout>
      <Fade in timeout={
        { enter: 2000 }
      }>
        <LoginBodyContainer>
          <Container>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justify="center"
              className={classes.loginContainer}
            >
              <img src={ChatBot} alt="챗봇 이미지" width={250} height={250} style={{ marginBottom: 16 }}/>
              <Button variant="contained" component="button" className={classes.kakaoLogin}
                href="http://localhost:5000/auth/login/kakao"
              >
                <Typography
                  style={{
                  }}
                >
                카카오 로그인
                </Typography>
              </Button>

              <Button variant="contained" component="button" className={classes.naverLogin}
                href="http://localhost:5000/auth/login/naver"
              >
                <Typography
                  style={{
                  }}
                >
                네이버 로그인
                </Typography>
              </Button>

              <Button
                variant="contained"
                component="button"
                className={classes.googleLogin}
                href="http://localhost:5000/auth/login/google"
              >
                <Typography
                  style={{
                  }}
                >
                구글 로그인
                </Typography>
              </Button>
            </Grid>
          </Container>
        </LoginBodyContainer>
      </Fade>
    </LoginLayout>
  );
}

export default LoginPage;
