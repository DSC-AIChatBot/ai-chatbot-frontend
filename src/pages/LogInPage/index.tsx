import React from 'react';

import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import {
  useStyles,
  StyledLogIn,
  Title,
  Form,
  Label,
  Input,
  SubmitBtn,
  SignUpLinkBtn,
} from './styles';

type Inputs = {
  example: string,
  exampleRequired: string,
};

function LogIn() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: { email: string, password: string }) => console.log(data);

  return (
    <StyledLogIn>
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
        <Button variant="contained" component="button" className={classes.googleLogin}>
          구글 로그인
        </Button>
      </Form>
      <SignUpLinkBtn to="/signUp">
        회원가입ㄱㄱ
      </SignUpLinkBtn>
    </StyledLogIn>
  );
}

export default LogIn;
