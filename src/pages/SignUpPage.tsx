import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledSignUp = styled.div`
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
  height : 50%;
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

type Inputs = {
  example: string,
  exampleRequired: string,
};

function SignUp () {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Inputs>();

  const onSubmit = (data: Object) => console.log(data);

  return (
    <StyledSignUp>
      <Title>회원가입</Title>
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
        <Label htmlFor="confirmPassword">
          패스워드 확인
        </Label>
        <Input
          id="confirmPassword"
          {...register("exampleRequired", { required: true })}
        />
        <SubmitBtn
          type="submit"
          value="Sign Up"
        />
      </Form>
    </StyledSignUp>
  );
}

export default SignUp;

