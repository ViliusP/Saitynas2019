
import React from 'react';

//Material UI things
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

//Styling
import { withStyles } from '@material-ui/core';
import styles from './HeaderStyle';

function StaffHeader(props) {
  const { classes } = props;
  return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
					Company name
				</Typography>
				<nav>
					<Link variant="button" color="textPrimary" href="#" className={classes.link}>
						Features
					</Link>
					<Link variant="button" color="textPrimary" href="#" className={classes.link}>
						Enterprise
					</Link>
					<Link variant="button" color="textPrimary" href="#" className={classes.link}>
						Support
					</Link>
				</nav>
				<Button href="#" color="primary" variant="outlined" className={classes.link}>
					Login
				</Button>
			</Toolbar>
		</AppBar>
  );
}

export default withStyles(styles)(StaffHeader);