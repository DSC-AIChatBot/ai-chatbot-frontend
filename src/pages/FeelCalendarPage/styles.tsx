import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    alignTtems: 'center',
    //justifyContent: 'center',
    height: 755,
    width: 875,
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
  testModal: {
    display: 'flex',
    flexDirection: 'column',
    alignTtems: 'center',
    position: 'fixed',
    width: 200,
    height: 150,
  },
}));