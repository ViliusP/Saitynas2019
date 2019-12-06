import React from 'react';

//Material UI things
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


/* eslint-disable react/prefer-stateless-function */
export class ExpandableListSection extends React.PureComponent {

  state = {
    expanded: false,
  };

  onExpansionToggle() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const {
      onClose,
      text,
      icon,
      NavigationItemList,
    } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <ListItem button onClick={this.onExpansionToggle.bind(this)}>
          <ListItemIcon>
            { icon }
          </ListItemIcon>
          <ListItemText primary={text} />
          { expanded ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={expanded} timeout="auto" unmountOnExit>
          <NavigationItemList onClose={onClose} />
        </Collapse>
      </div>
    );
  }
}



export default ExpandableListSection;