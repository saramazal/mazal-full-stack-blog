import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    type: 'file',
    width: '50%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  heading: {
    color: '#3f51b5',
    fontFamily: 'Bebas Neue',
   fontSize: '2em',

  },
}));