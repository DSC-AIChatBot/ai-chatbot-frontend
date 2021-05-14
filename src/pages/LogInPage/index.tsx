import React from 'react';

import { useForm } from 'react-hook-form';
import { Button, Grid, Fade, Typography, TextField } from '@material-ui/core';

import LoginPageBackgroundImage from '../../assets/login-page/login-page-background.jpeg';

import {
  useStyles,
  StyledLogIn,
  Title,
  Form,
  Label,
  Input,
  SubmitBtn,
  SignUpLinkBtn,
  Comments,
  SignUpLinkContainer,
} from './styles';

type Inputs = {
  example: string,
  exampleRequired: string,
};

function LoginPage():JSX.Element {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: { email: string, password: string }) => console.log(data);

  return (
    <Fade in timeout={
      { enter: 2000 }
    }>
      <Grid
        container
        style={{
          background: `url(${LoginPageBackgroundImage})`,
          width: window.innerWidth,
          height: window.innerHeight,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        alignItems="center"
        justify="flex-end"
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            width: 500,
            height: 'fit-content',
          }}
        >
          <Typography variant="h2">
            Login
          </Typography>

          <TextField variant="outlined">

          </TextField>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default LoginPage;
{ /* <StyledLogIn>
      <Title>로그인</Title>
      <Form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="email">
          이메일
        </Label>
        <Input
          id="email"
          {...register("example")}
        />
        <Label htmlFor="password">
          패스워드
        </Label>
        <Input
          id="password"
          {...register("exampleRequired", { required: true })}
        />
        <SubmitBtn
          type="submit"
          value="로그인"
        />
        <Button variant="contained" component="button" className={classes.kakaoLogin}>
          <span>카카오 로그인</span>
        </Button>
        <Button variant="contained" component="button" className={classes.naverLogin}>
          네이버 로그인
        </Button>
        <Button
          variant="contained"
          component="button"
          className={classes.googleLogin}
          href="http://localhost:5000/auth/login/google"
        >
          구글 로그인
        </Button>
      </Form>

      <SignUpLinkContainer>
        <Comments>
          아직 회원이 아니신가요?
        </Comments>
        <SignUpLinkBtn to="/signUp">
        회원가입
        </SignUpLinkBtn>
      </SignUpLinkContainer>
    </StyledLogIn> */ }