import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function signOut() {
  if (firebase.auth().currentUser) {
      firebase.auth().signOut().then(() => {
          console.log("User successfully logged out");
          localStorage.clear();
          window.location="/login";
      }).catch(error => console.log('Something went wrong! ', error))
  } else {
    alert('user already logged out.');
    return true;      
  }
}

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const enable = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(()=> {
    setLoginStatus(localStorage.getItem('user')? true : false);
  },[])
  console.log(loginStatus)

    return (
      <React.Fragment>
        <CssBaseline>
        <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          <Button size="large" href="/">Home</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Welcome to Ticketing Coach 1.0
          </Typography>
             {loginStatus? 
             (
               <>
               <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={enable}
                onClose={handleClose}
              >
                <MenuItem component='a' href='/profile'>Profile</MenuItem>
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </Menu>
               </>
             ): (
               <>
               <Button variant="contained" href="/login">
                 Sign In
               </Button>
               </>
             )}  
          
        </Toolbar>
  
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <IconButton href='/coach/createcoach'>
              <DirectionsBusIcon />Create new Coach
            </IconButton>
            <Divider />
            <IconButton href='/coach/createroute'>
              <DirectionsBusIcon />Create new Route
            </IconButton>
            <Divider />
            <IconButton href='/coach'>
              <AirportShuttleIcon />List Coaches
            </IconButton>
            <Divider />
            <IconButton href='#'>
              <EqualizerIcon />Statistics
            </IconButton>
          </List>
        </Drawer>
        </CssBaseline>
      </React.Fragment>
    );
}
