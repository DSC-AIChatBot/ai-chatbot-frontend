import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Fade,
  Typography,
  TextField,
  IconButton,
  Paper,
  Container,
  Box,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ChatMessage from '../../components/ChatMessage';
// import { BackGround } from './styles';
import background from "./image.jpg";


function Main () {
  const useStyles = makeStyles((theme: Theme) => ({
    maincontainer: {
      height: 700,
    },
  }));
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [chatBotList, setChatBotList] = useState([
    { role: "guest", text: "안녕" },
    { role: "chatbot", text: "나는" },
    { role: "guest", text: "챗봇" },
  ]);
  const [myChatList, setMyChatList] = useState([
    { role: "chatbot", text: "안녕" },
    { role: "guest", text: "나는" },
    { role: "chatbot", text: "게스트" },
  ]);


  return (
    <Box mt={10}>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={2}>
          <Paper>
            <Typography>
              emotion log
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            <Typography>
              emotion log
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="flex-start"
          >
            <Grid item xs={12}>
              {/* <AppBar
                position="static"
                style={{
                  borderRadius: "2px",
                  backgroundColor: "#1976d2",
                }}>
                <Toolbar>
                  <Typography variant="h5">
                    Today Emotion
                  </Typography>
                </Toolbar>
              </AppBar> */}
              <Typography
                variant="h5"
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}>
                EMOTION CHECK
              </Typography>
            </Grid>
            
            <Grid item>
              <Alert icon={false} severity="error"> 오늘 화나는 일이 있었군요</Alert>
            </Grid>
            <Grid item>
              <Alert icon={false} severity="warning"> 누군가를 걱정하구 있네요</Alert>
            </Grid>
            <Grid item>
              <Alert icon={false} severity="info"> 오늘 슬픈 일이 있었군요 </Alert>
            </Grid>
            <Grid item>
              <Alert icon={false} severity="success">오늘 기쁜 일이 있었군요</Alert>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
