import React from 'react';
import { Link } from 'react-router-dom';


//Styling
import { withStyles } from '@material-ui/core';
import styles from './ListStyles';

//Material UI things
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function NavigationListItem(props) {
  const {
    classes,
    onClose,
    icon,
    text,
    link,
    nested,
  } = props;

  const styling = nested ? {
    className: classes.nestedList,
  } : {};

  return (
    <ListItem {...styling} button component={Link} to={link} onClick={onClose}>
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

NavigationListItem.propTypes = {};

export default withStyles(styles)(NavigationListItem);