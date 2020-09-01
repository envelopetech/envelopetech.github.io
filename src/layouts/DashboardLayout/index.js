import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import Grid from "@material-ui/core/Grid";
import logo2 from '../../assets/images/xporium.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256
    // }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
  footer: {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: "#fff",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: "9999",
    textAlign: 'center',
    borderTop: '1px solid #eeeeee'
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <NavBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
          <div className={classes.footer}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item style={{ display: 'flex', alignItems: 'center' }} >
                <p>Powered by 	&nbsp;</p>
                <img alt="company logo" src={logo2} className={classes.logo} />
              </Grid>
              <Grid item>
                <small>&copy; Copyright 2020, Xporium Technologies Pte Ltd. All rights reserved.</small>
              </Grid>
              <Grid item >
                <a href="www.xporium.com">Privacy Policy &middot;</a>
                <a href="www.xporium.com">Terms of Service</a>
              </Grid>
            </Grid>


          </div>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};
export default DashboardLayout;
