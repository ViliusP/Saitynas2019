
import React from 'react';
//Drawer component
import Drawer from '../../components/StaffDrawer';

//Header component
import Header from '../../components/Header/index';

//Styling
import { withStyles } from '@material-ui/core';

const styles = theme =>({
	content: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 1,
		marginRight: theme.spacing.unit * 1,
		[theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
		  width: 900,
		  marginLeft: 'auto',
		  marginRight: 'auto',
		},
	},
	
	appBarSpacer: theme.mixins.toolbar,
	})
	
class LoggedUserLayout extends React.PureComponent {
	state = {
	  open: false,
	}
  
	handleDrawerState()
	{
	  this.setState(prevState => ({ open: !this.state.open }));
	}

	render() {
	  const { classes } = this.props;
	  return (
		<div>
		  <Header open={this.state.open} onMenuClick={() => this.handleDrawerState()} />
		  <Drawer open={this.state.open} onClose = {() => this.handleDrawerState()}/>
		  <main className={classes.content}>
			<div className={classes.appBarSpacer}/>
			{this.props.children}
		  </main>
		</div>
	  );
	}
  }

export default withStyles(styles)(LoggedUserLayout);