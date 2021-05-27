import React, { useState } from 'react';
//import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import moment from 'moment';
import { List, Grid, Button } from '@material-ui/core';
import './styles.css';
import TouchComponent from './touchComponent';
function FeelSchedule () {
  const classes = useStyles();
  const [getMoment, setMoment] = useState<string>(moment().format('YYYYMMDD'));
  const [today, setToday] = useState<string>(getMoment); // today==moment()
  let [result] = useState<JSX.Element[]>([]);
  let [result2] = useState<JSX.Element[]>([]);
  const [test, setTest] = useState<JSX.Element[]>([]);
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  //const [modalClose, setModalClose]
  const [emotion, setEmotion] = useState<string>('');
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const calendar = () => {
    const fWeek = moment(getMoment).startOf('month').week();
    const lWeek = moment(getMoment).endOf('month').week() === 1
      ? 53 : moment(getMoment).endOf('month').week();
    for (let i = fWeek; i <= lWeek;i = i + 1) {
      console.log(i);
      result = result.concat(
        <Grid key={i} style={{ display: 'flex', flexDirection: 'row' }}>
          {
            Array(7).fill(0).map((data, index) => {
              const days = moment(getMoment).
                startOf('year').week(i).startOf('week').add(index, 'day');
              console.log(days.format('D'));

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <Button key={index}
                    style={{ backgroundColor: 'rgb(246,120,80)',
                      width: 125, height: 125, borderRadius: 100 }}
                    onClick={openModal}>
                    {/* <Grid xs={2}
                      style={{ backgroundColor: 'rgb(246,120,80)', borderRadius: 100,
                        justifyContent: 'center', display: 'flex',
                      }}> */}
                    <Grid style={{ justifyContent: 'center',
                      display: 'flex', flexDirection: 'column' }}>{days.format('D')}
                      <Grid>{emotion}</Grid></Grid>
                    {/* </Grid> */}
                    {/* <Button className='day'>+</Button> */}
                  </Button>
                );
              } else if (days.format('MM') !== moment(getMoment).format('MM')) {
                return (
                  <Button key={index}
                    style={{ backgroundColor: 'gray',
                      width: 125, height: 125, borderRadius: 100,
                    }}>

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    {/* <Button className='day' >+</Button> */}
                  </Button>
                );
              } else if (days.day() === 0 || days.day() === 6) {
                return (
                  <Button key={index}
                    style={{ backgroundColor: 'rgb(217,216,213)',
                      width: 125, height: 125, borderRadius: 100,
                    }}>

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    {/* <Button className='day' >+</Button> */}
                  </Button>
                );
              } else {
                return (
                  <Button key={index}
                    className=''
                    style={{ backgroundColor: 'rgb(250,250,250)',
                      width: 125, height: 125, borderRadius: 100,
                    }}>

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    {/* <Button className='day' >+</Button> */}
                  </Button>
                );
              }
            })
          }
        </Grid>,
      );
      console.log(result);
    }
    return result;
  };
  const dayList = () => {
    for (let i = 0 ; i < 7;i = i + 1) {
      result2 = result2.concat(
        <Grid style={{ marginLeft: 56, marginRight: 55 }}>
          {dayArr[i]}
        </Grid>,
      );
    }
    return result2;
  };
  console.log(result.length);
  return (
    <div className="App" style={{ display: 'flex',
      flexDirection: 'column', alignSelf: 'center', justifyContent: 'center',
      backgroundColor: 'rgb(150,200,180)', borderRadius: 100 }}>
      <Grid style={{ padding: 20 }}>
        <div className="control" style={{ display: 'flex',
          flexDirection: 'row', justifyContent: 'center',
        }}>
          <button onClick={() => {
            setMoment(moment(getMoment).subtract(1, 'month').format('YYYY-MM-DD'))
            ;
            console.log(getMoment);
          }}className='triangle test_3'></button>
          <span style={{ fontSize: 48 }}>{moment(getMoment).format('YYYY 년 MM 월')}</span>
          <button onClick={() => {
            setMoment(moment(getMoment).add(1, 'month').format('YYYY-MM-DD'))
            ;
            console.log(getMoment);
          }}className='triangle test_4'></button>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',

        }}>
          <Grid style={{ marginTop: 20, borderRadius: 80, backgroundColor: 'rgb(150,220,120)' }}>
            <List style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
              {dayList()}

            </List>
            <Grid className={classes.calendar}>{calendar()}</Grid>
          </Grid>
          {/* <table style={{ height: 700, width: 1100 }} > */}

          {/* </table> */}
        </div>
      </Grid>
      <TouchComponent open={modalOpen} close={closeModal} header="이날의 감정 기록"
        setEmotion={setEmotion}>
      </TouchComponent>
    </div>
  );
}
export default FeelSchedule;
