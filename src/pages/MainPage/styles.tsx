import styled from 'styled-components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import forest from './forest-5375005.jpg';

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${forest});
  background-size: cover;
`;
// export const BackGround = styled.div`
//     backgroundImage: '../'
// `;

export function styleclass () {
  const useStyles = makeStyles((theme: Theme) => ({
    maincontainer: {
      height: 5,
    },
  }));

  const classes = useStyles();
}

