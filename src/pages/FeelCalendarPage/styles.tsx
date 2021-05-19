import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    alignTtems: 'center',
    height: 700,
    width: 1200,
    //padding: 100,
  },
  plusButton: {
    width: 5,
    height: 10,
  },
  todayButton: {
    borderRadius: 10,
    backgroundColor: 'red',
  },
}));