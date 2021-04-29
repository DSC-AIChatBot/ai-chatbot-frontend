import { makeStyles } from '@material-ui/core/styles';

import KakaoIcon from '../assets/icon_kakao.svg';
import GoogleIcon from '../assets/icon_google.svg';
import NaverIcon from '../assets/icon_naver.svg';

const useStyles = makeStyles((theme) => ({
  LoginSNSWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonWrapWeb: {
    width: '100%',
    weight: '100%',
    '& a': {
      height: 50,
      width: '100%',
      marginBottom: theme.spacing(1.25),
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.25rem',
      color: '#2E2E2E',
      boxShadow: 'none',
      borderRadius: 3,
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '& button': {
      height: 50,
      width: '100%',
      marginBottom: theme.spacing(1.25),
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.25rem',
      color: '#2E2E2E',
      boxShadow: 'none',
      borderRadius: 3,
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },
  buttonWrapMobile: {
    width: '100%',
    weight: '100%',
    '& a': {
      height: 40,
      width: '100%',
      marginBottom: theme.spacing(1),
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1rem',
      color: '#2E2E2E',
      boxShadow: 'none',
      borderRadius: 2.39372,
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '& button': {
      height: 40,
      width: '100%',
      marginBottom: theme.spacing(1),
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1rem',
      color: '#2E2E2E',
      boxShadow: 'none',
      borderRadius: 2.39372,
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },

  kakaoLogin: {
    backgroundColor: 'rgba(253, 216, 1, 0.6)',
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
    backgroundColor: 'rgba(171, 201, 255, 0.6)',
    '&:before': {
      content: "''",
      width: 18,
      height: 18,
      background: `url(${GoogleIcon})`,
      backgroundSize: '100% 100%',
    },
    '&:after': {
      content: "''",
      width: 18,
    },
    '&:hover': {
      backgroundColor: 'rgba(171, 201, 255)',
    },
  },
  emailLogin: {
    fontColor: '#FDFDFD',
    backgroundColor: 'rgba(255, 147, 5, 0.6)',
    '&:hover': {
      backgroundColor: 'rgba(255, 147, 5)',
    },
  },
  bottomImageWeb: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    objectFit: 'contain',
    height: 'auto',
    maxHeight: 235,
    margin: 0,
    marginTop: '1.5rem',
  },
  bottomImageMobile: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    objectFit: 'contain',
    height: 'auto',
    maxHeight: 235,
    maxWidth: 245,
    margin: 0,
    marginTop: '3.125rem',
  },
}));

export default useStyles;
