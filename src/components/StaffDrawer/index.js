import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

//Drawer style
import { withStyles } from '@material-ui/core';
import styles from './DrawerStyle';
//Things from Material UI
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import NavigationList from '../NavigationList';

function StaffDrawer(props) {
  return (
    <Drawer
    type="temporary"
    open={props.open}
    classes={{ paper: props.classes.drawerPaper }}
    onClose={props.onClose}
    >
      <div>
        <div>
          <div className={props.classes.drawerHeader}>
            <IconButton onClick={props.onClose} className={props.classes.chevron}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <NavigationList onClose={props.onClose} />
        </div>
      </div>
    </Drawer>
  )}

export default withStyles(styles)(StaffDrawer);