import React from 'react';

import { useForm } from 'react-hook-form';
import { Button, Grid, Fade, Typography, TextField, Switch, IconButton } from '@material-ui/core';

import LoginPageBackgroundImage from '../../assets/login-page/login-page-background.jpeg';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import {
  useStyles,
} from './styles';
import useEventTargetValue from '../../utils/hooks/useEventTargetValue';

type Inputs = {
  example: string,
  exampleRequired: string,
};

function LoginPage():JSX.Element {
  const classes = useStyles();
  const id = useEventTargetValue('');
  const pw = useEventTargetValue('');

  return (
    <Fade in timeout={
      { enter: 2000 }
    }>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid container direction="row">
          <Grid
            item
            container
            className={classes.imageContainer}
          >
            <img
              src={LoginPageBackgroundImage}
              alt="door image"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.loginContainer}
          >
            <TextField
              variant="outlined"
              label="ID"
              autoFocus
              value={id.value}
              onChange={id.handleChange}
              style={{
                width: 250,
                marginTop: 48,
              }}
            />

            <TextField
              variant="outlined"
              label="PW"
              type="password"
              value={pw.value}
              onChange={pw.handleChange}
              style={{
                width: 250,
                marginTop: 8,
                marginBottom: 8,
              }}
            />

            <Grid
              justify="space-between"
              alignItems="center"
              item
              container
              style={{
                marginBottom: 48,
                width: 250,
              }}>

              <Button
                style={{
                  width: 'fit-content',
                }}
              >
                <Typography variant="body1" style={{
                  fontSize: 5,
                }}>sign up</Typography>
              </Button>

              <IconButton
                onClick={() => {
                  console.log(id.value, pw.value);
                }}
              >
                <VpnKeyIcon/>
              </IconButton>
            </Grid>

            <Button variant="contained" component="button" className={classes.kakaoLogin}>
              <Typography
                style={{
                }}
              >
                카카오 로그인
              </Typography>
            </Button>
            <Button variant="contained" component="button" className={classes.naverLogin}>
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
        </Grid>
      </Grid>
    </Fade>
  );
}

export default LoginPage;
