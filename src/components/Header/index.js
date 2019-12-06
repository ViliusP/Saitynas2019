
import React from 'react';
import classNames from 'classnames';

//Material UI things
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//Styling
import { withStyles } from '@material-ui/core';
import styles from './HeaderStyle';

function StaffHeader(props) {
  const { classes } = props;
  return (
  <div>
    <AppBar color="secondary" className={classNames(classes.appBar, {
        [classes.appBarShift]: props.open,
        [classes.appBarShiftLeft]: props.open,
      })}
    >
      <Toolbar disableGutters={!props.open}>
        <IconButton
				
          color="default"
          aria-label="open drawer"
          onClick={props.onMenuClick}
          className={classNames(classes.whiteIcon, classes.menuButton, props.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          Restorano „Jalapeño Pica“ valdymo sistema
        </Typography>
      </Toolbar>

			{true && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
              </Menu>
            </div>
          )}

    </AppBar>
  </div>
  );
}

export default withStyles(styles)(StaffHeader);