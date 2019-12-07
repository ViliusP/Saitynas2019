import React from "react";
import { useHistory } from "react-router-dom";
//Material UI things
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
//Styling
import { withStyles } from "@material-ui/core";
import styles from "./HeaderStyle";

function StaffHeader(props) {
	const { classes } = props;
	const { logoutFunc } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
	const history = useHistory();
	
	const logout = () => {
		localStorage.clear();
		history.push("/login");
	};


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
	};
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Company name
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Support
          </Link>
        </nav>
				<div>
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem disabled={true} onClick={handleClose}>{localStorage.getItem('first_name') + " " + localStorage.getItem('last_name')}</MenuItem>
                <MenuItem onClick={()=>logout()}>Sign out</MenuItem>
              </Menu>
            </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(StaffHeader);
