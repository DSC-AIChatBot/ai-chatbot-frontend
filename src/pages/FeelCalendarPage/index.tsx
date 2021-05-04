import * as React from 'react';
//import { Grid } from '@material-ui/core';
import moment from 'moment';
import { List, Grid } from '@material-ui/core';
function FeelSchedule () {
  const [getMoment, setMoment] = React.useState<string>(moment().format('YYYY-MM'));
  const [today, setToday] = React.useState<string>(getMoment); // today==moment()
  const curr = moment(getMoment);
  const [firstWeek, setFirstWeek] = React.useState<number>(curr.startOf('month').week());
  const [lastWeek, setLastWeek] = React.useState<number>(curr.endOf('month').week() === 1
    ? 53 : curr.endOf('month').week());
  const makeCalendar = (week:number) => {
    const [result, setResult] = React.useState<number>();
    // const [day, setDay] =
    //     useState<number>(curr.week(week).startOf('day').day());
    for (week; week <= lastWeek; week + 1) {
      setResult(week);
    }
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
      <div className="calendar">{makeCalendar(firstWeek)}</div>

    </div>
  );
}
export default FeelSchedule;
