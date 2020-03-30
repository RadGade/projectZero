import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    signin: {
      background: 'linear-gradient(to right, #ff00cc, #333399)',
      borderRadius: 8,
      border: 0,
      color: 'white',
      height: 55,
      padding: '0 30px',
      marginLeft:'10px',
      fontFamily: 'Segoe UI',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 0.3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    signup: {
      background: 'linear-gradient(to right, #ff00cc, #333399)',
      borderRadius: 8,
      border: 0,
      color: 'white',
      height: 55,
      padding: '0 30px',
      marginLeft:'80px',
      fontFamily: 'Segoe UI',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 0.3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      logout: {
        background: 'linear-gradient(to right, #ff00cc, #333399)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        marginLeft:'10px',
        float:'right',
        fontFamily: 'Segoe UI',
        position: 'absolute',
        right: '25px',
        top: '7%',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      uid: {
        marginTop: '20px',
        height: '30px',
        lineHeight: '30px',
        width: '100%',
        color : '#ffff'
    },
    Email: {
      marginTop: '20px',
      height: '30px',
      lineHeight: '30px',
      width: '100%',
      marginRight: '50px',
      color : '#ffff'
  },
    search: {
        marginTop: '15%',
        height: '30px',
        lineHeight: '30px',
        width: '70%',
      },
    label: {
      textTransform: 'capitalize',
      color: '#fffff'
    },
  });