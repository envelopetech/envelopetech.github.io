import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoimg from '../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
 logo: {
  height: '60px',
},

}));

export default function Logo() {
  const classes = useStyles()
  return (
<img
      alt="Logo"
      src={logoimg}
      className={classes.logo}
    />
  );
}
// const Logo = (props) => {
//   return (
//     <img
//       alt="Logo"
//       src="/static/xpologo.png"
//       {...props}
//     />
//   );
// }