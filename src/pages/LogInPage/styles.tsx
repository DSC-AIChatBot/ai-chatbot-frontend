import { makeStyles, Theme } from '@material-ui/core/styles';

import KakaoIcon from '../../assets/icon_kakao.svg';
import GoogleIcon from '../../assets/icon_google.svg';
import NaverIcon from '../../assets/icon_naver.svg';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 400,
    height: 'fit-content',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 48,
    marginRight: 128,
    boxShadow: theme.shadows[10],
  },
  kakaoLogin: {
    backgroundColor: 'rgba(253, 216, 1, 0.6)',
    width: 250,
    '&:before': {
      content: "''",
      width: 21,
      height: 19,
      background: `url(${KakaoIcon})`,
      backgroundSize: '100% 100%',
    },
    '&:after': {
      content: "''",
      width: 21,
    },
    '&:hover': {
      backgroundColor: 'rgba(253, 216, 1)',
    },
  },
  naverLogin: {
    backgroundColor: 'rgba(45, 190, 83, 0.6)',
    width: 250, marginTop: 8,
    '&:before': {
      content: "''",
      width: 19,
      height: 19,
      background: `url(${NaverIcon})`,
      backgroundSize: '100% 100%',
    },
    '&:after': {
      content: "''",
      width: 19,
    },
    '&:hover': {
      backgroundColor: 'rgba(45, 190, 83)',
    },
  },
  googleLogin: {
    backgroundColor: '#fff',
    width: 250,
    marginTop: 8,
    '&:before': {
      content: "''",
      width: 19,
      height: 19,
      background: `url(${GoogleIcon})`,
      backgroundSize: '100% 100%',
    },
    '&:after': {
      content: "''",
      width: 19,
    },
    '&:hover': {
      backgroundColor: '#f1f3f5',
    },
  },
}));

export const StyledLogIn = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
  width : 500px;
  height : 500px;
  padding-top : 40px;
  border : 1px solid #e5e5e5;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size : 30px;
  margin-bottom : 30px;
`;

export const Form = styled.form`
  display : flex;
  width : 50%;
  height : 100%;
  flex-direction: column;
  justify-content : space-between;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  height : 15%;
  padding-left : 10px;
`;

export const SubmitBtn = styled.input`
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

export const SignUpLinkContainer = styled.div`
  display : flex;
  justify-content : space-around;
  align-items : center;
`;

export const SignUpLinkBtn = styled(Link)`
  text-decoration : none;
  color : #000;
  padding: 10px;
  cursor: pointer;
  border-radius : 5px;
  background-color : #e5e5e5;
  margin : 10px;
  &:hover {
    background-color : #F28316;
    color : #FFF;
  }
`;

export const Comments = styled.span`
  font-size : 18px;
  font-weight : 700;

`;