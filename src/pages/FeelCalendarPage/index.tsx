import React, { useState } from 'react';
//import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import moment from 'moment';
import { List, Grid } from '@material-ui/core';

function FeelSchedule () {
  const classes = useStyles();

  const [getMoment, setMoment] = useState<string>(moment().format('YYYYMMDD'));
  const [today, setToday] = useState<string>(getMoment); // today==moment()
  const [firstWeek, setFirstWeek] = useState<number>(moment(getMoment).startOf('month').week());
  const [lastWeek, setLastWeek] = useState<number>(moment(getMoment).endOf('month').week() === 1
    ? 53 : moment(getMoment).endOf('month').week());
  let [result] = useState<JSX.Element[]>([]);
  const [test, setTest] = useState<JSX.Element[]>([]);
  const dayArr = ["월", "화", "수", "목", "금", "토", "일"];

  const calendar = () => {
    for (let i = firstWeek; i <= lastWeek;i = i + 1) {
      console.log(i);
      result = result.concat(
        <tr key={i}>
          {
            Array(7).fill(0).map((data, index) => {

              const days = moment(getMoment).
                startOf('year').week(i).startOf('week').add(index, 'day');
              console.log(days.format('D'));

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'rgb(246,120,80)',
                    borderColor: 'black' }} >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== moment(getMoment).format('MM')) {
                return (
                  <td key={index} style={{ backgroundColor: 'gray', border: 5 }} >
                    <span style={{ border: 5 }}>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}style={{ backgroundColor: 'rgb(246,231,110)', border: 5 }} >
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })
          }
        </tr>,
      );
      console.log(result);
    }
    setTest(result);
    return test;
  };
  console.log(result.length);
  return (
    <div className="App" style={{ display: 'flex',
      flexDirection: 'column', alignSelf: 'center' }}>
      <div className="control" style={{ display: 'flex',
        flexDirection: 'row', justifyContent: 'center' }}>
        <button onClick={() => {
          setMoment(moment(getMoment).subtract(1, 'month').format('YYYY-MM-DD'))
          ;
          console.log(getMoment);
        }}>이전달</button>
        <span>{moment(getMoment).format('YYYY 년 MM 월')}</span>
        <button onClick={() => {
          setMoment(moment(getMoment).add(1, 'month').format('YYYY-MM-DD'))
          ;
          console.log(getMoment);
        }}>다음달</button>
        <button onClick={() => {
          calendar()
          ;
        }}>달력 생성</button>
      </div>
      <List>
        {dayArr}
      </List>
      <table style={{ height: 500, width: 500 }} >
        <tbody className={classes.calendar}>{test}</tbody>
      </table>
    </div>
  );
}
export default FeelSchedule;
