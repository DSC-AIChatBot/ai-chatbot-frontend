import React, { useState } from 'react';
//import { Grid } from '@material-ui/core';
import moment from 'moment';
import { List, Grid } from '@material-ui/core';
function RecordFeelSchedule () {
  const [getMoment, setMoment] = useState<any>(moment().toString());
  const today = getMoment; // today==moment()
  const firstWeek = useState<any>(today.clone().startOf('month').week());
  const lastWeek = useState<any>(today.clone().endOf('month').week() === 1
    ? 53 : today.clone().endOf('month').week());

  //const [week, setWeek]=useState<string>(firstWeek);
  const makeCalendar = () => {
    const result = useState<string[]>([]);
    let week = useState<string>(firstWeek);
    for (week; week <= lastWeek; week++) {

      <List>
        {
          result.map()
        }
      </List>;

    }
    return result;
  };

  return (
    <Grid className="App">
      <div className="control">
        <button onClick={() => {
          setMoment(getMoment.clone().subtract(1, 'month')) //clone() 새로운 객체를 반환
          ;
        }}>이전달</button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button onClick={() => {
          setMoment(getMoment.clone().add(1, 'month'))
          ;
        }}>다음달</button>
      </div>
      <table style={{ display: 'flex', width: 50, height: 50, flexDirection: 'column' }}>
        <tbody style={{ display: 'flex', flexDirection: 'column' }}>{makeCalendar()}</tbody>
      </table>
    </Grid>
  );
}

export default RecordFeelSchedule;
