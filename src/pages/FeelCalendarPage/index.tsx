import React, { useState } from 'react';
//import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import moment from 'moment';
import { List, Grid, Button } from '@material-ui/core';
import './styles.css';
function FeelSchedule () {
  const classes = useStyles();

  const [getMoment, setMoment] = useState<string>(moment().format('YYYYMMDD'));
  const [today, setToday] = useState<string>(getMoment); // today==moment()
  let [result] = useState<JSX.Element[]>([]);
  let [result2] = useState<JSX.Element[]>([]);
  const [test, setTest] = useState<JSX.Element[]>([]);
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

  const calendar = () => {
    const fWeek = moment(getMoment).startOf('month').week();
    const lWeek = moment(getMoment).endOf('month').week() === 1
      ? 53 : moment(getMoment).endOf('month').week();
    for (let i = fWeek; i <= lWeek;i = i + 1) {
      console.log(i);
      result = result.concat(
        <Grid key={i} style={{ flexDirection: 'row' }}>
          {
            Array(7).fill(0).map((data, index) => {

              const days = moment(getMoment).
                startOf('year').week(i).startOf('week').add(index, 'day');
              console.log(days.format('D'));

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index}
                    style={{ backgroundColor: 'rgb(246,231,110)', width: 250, height: 125 }} >

                    <Grid
                      style={{ backgroundColor: 'rgb(246,120,80)',
                        justifyContent: 'center', display: 'flex' }}>{days.format('D')}</Grid>
                    <Button className='day'>+</Button>
                  </td>
                );
              } else if (days.format('MM') !== moment(getMoment).format('MM')) {
                return (
                  <td key={index}
                    style={{ backgroundColor: 'rgb(240,200,150)', width: 250, height: 125 }} >

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    <Button className='day' >+</Button>
                  </td>
                );
              } else if (days.day() === 0 || days.day() === 6) {
                return (
                  <td key={index}
                    style={{ backgroundColor: 'rgb(250,210,90)',
                      width: 250, height: 125 }} >

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    <Button className='day' >+</Button>
                  </td>
                );
              } else {
                return (
                  <td key={index}
                    className=''
                    style={{ backgroundColor: 'rgb(246,231,110)', width: 250, height: 125 }} >

                    <Grid style={{ justifyContent: 'center',
                      display: 'flex' }}>{days.format('D')}</Grid>
                    <Button className='day' >+</Button>
                  </td>
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
        <Grid style={{ marginLeft: 78, marginRight: 78 }}>
          {dayArr[i]}
        </Grid>,
      );
    }
    return result2;
  };
  console.log(result.length);
  return (
    <div className="App" style={{ display: 'flex',
      flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
      <div className="control" style={{ display: 'flex',
        flexDirection: 'row', justifyContent: 'center' }}>
        <button onClick={() => {
          setMoment(moment(getMoment).subtract(1, 'month').format('YYYY-MM-DD'))
          ;
          console.log(getMoment);
        }}className='triangle test_3'>이전</button>
        <span style={{ fontSize: 48 }}>{moment(getMoment).format('YYYY 년 MM 월')}</span>
        <button onClick={() => {
          setMoment(moment(getMoment).add(1, 'month').format('YYYY-MM-DD'))
          ;
          console.log(getMoment);
        }}className='triangle test_4'>다음달</button>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',

      }}>
        <Grid style={{ marginTop: 20 }}>
          <List style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
            {dayList()}
          </List></Grid>

        {/* <table style={{ height: 700, width: 1100 }} > */}
        <Grid className={classes.calendar}>{calendar()}</Grid>
        {/* </table> */}
      </div>
    </div>
  );
}
export default FeelSchedule;
