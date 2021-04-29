import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const StyledLogIn = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
  width : 500px;
  height : 500px;
  padding-top : 40px;
  border : 1px solid #e5e5e5;
`;

const Title = styled.div`
  font-weight: 700;
  font-size : 30px;
  margin-bottom : 30px;
`;

const Form = styled.form`
  display : flex;
  width : 50%;
  height : 100%;
  flex-direction: column;
  justify-content : space-between;
`;

const Label = styled.label`

`;

const Input = styled.input`
  height : 15%;
  padding-left : 10px;
`;

const SubmitBtn = styled.input`
  font-size : 18px;
  font-weight : 700;
  margin-top : 10px;
  border : none;
  outline : none;
  padding : 10px;
  cursor: pointer;
  border-radius : 5px;
  &:hover {
    background-color : #F28316;
    color : #FFF;
  }
`;

const SignUpLinkBtn = styled(Link)`
  text-decoration : none;
  color : #000;
  padding: 10px;
  cursor: pointer;
  border-radius : 5px;
  background-color : #e5e5e5;
  &:hover {
    background-color : #F28316;
    color : #FFF;
  }
`;

type Inputs = {
  example: string,
  exampleRequired: string,
};

function LogIn() {
  const classes = useStyles();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>();

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

        <Button variant="contained" component="button" className={classes.emailLogin}>
          이메일 로그인
        </Button>
      </Form>
      <SignUpLinkBtn to="/signUp">
        회원가입ㄱㄱ
      </SignUpLinkBtn>
    </StyledLogIn>
  );
}

export default LogIn;
