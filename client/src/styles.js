import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
      borderRadius: 10,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'left',
      alignItems: 'center',
      fontFamily: 'Roboto', 
    },
    heading: {
      color: '#3f51b5',
      fontFamily: 'Space Mono',
      alignItems: 'left',
      fontSize: '2.3em',
      padding: '20px',
    },
    image: {
      marginLeft: '15px',
      padding: '20px',
    },
  }));