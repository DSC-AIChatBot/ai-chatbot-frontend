import React, { useState } from 'react';
//import { Grid } from '@material-ui/core';
import moment from 'moment';
import { List, Grid } from '@material-ui/core';
function FeelSchedule () {
  const [getMoment, setMoment] = useState<string>(moment().format('YYYY-MM'));
  const [today, setToday] = useState<string>(getMoment); // today==moment()
  const curr = moment(getMoment);
  const [firstWeek, setFirstWeek] = useState<number>(curr.startOf('month').week());
  const [lastWeek, setLastWeek] = useState<number>(curr.endOf('month').week() === 1
    ? 53 : curr.endOf('month').week());
  const makeCalendar = () => {
    const [result, setResult] = useState<JSX.Element>(<div></div>);
    //const [week, setWeek] = useState<number>(firstWeek);
    // const [day, setDay] =
    //     useState<number>(curr.week(week).startOf('day').day());
    //for (firstWeek; firstWeek <= lastWeek; setFirstWeek(firstWeek + 1)) {
    setResult(
      <div>
        <text>firstWeek</text>
      </div>,
    );
    //}
    return result;
  };

  return (
    <div className="App">
      <div className="control">
        <button onClick={() => {
          setMoment(curr.subtract(1, 'month').format('YYYY-MM')) //clone() 새로운 객체를 반환
          ;
        }}>이전달</button>
        <span>{getMoment}</span>
        <button onClick={() => {
          setMoment(curr.add(1, 'month').format('YYYY-MM'))
          ;
        }}>다음달</button>
      </div>
      <div>{makeCalendar}</div>

    </div>
  );
}

export default FeelSchedule;
