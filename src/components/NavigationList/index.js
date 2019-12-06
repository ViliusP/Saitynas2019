import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

//Things from Material UI
//Kitchen icons
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuIcon from '@material-ui/icons/LocalDining';
import QueueIcon from '@material-ui/icons/Queue';

//Staff icons
import StaffIcon from '@material-ui/icons/Accessibility';
import ReportIcon from '@material-ui/icons/Dvr';

//Logistics icons
import BuildIcon from '@material-ui/icons/Build';
import ScheduleIcon from '@material-ui/icons/CalendarToday';
import SuppliersIcon from '@material-ui/icons/SupervisedUserCircle';
import AddSuppliesIcon from '@material-ui/icons/Add';

//Navigation items
import NavigationListItem from '../NavigationListItem';
import ExpandableSection from '../../containers/ExpandableListSection';

import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';


//Expandable section list's elements
const KitchenSection = (props) => {
  const { onClose } = props;
  return (
    <List>
      <NavigationListItem nested onClose={onClose} link="/i/kitchen/manage" icon={<KitchenIcon />} text="Tvarkyti šaldytuvus" />
      <NavigationListItem nested onClose={onClose} link="/i/kitchen/meniu" icon={<MenuIcon />} text="Meniu sudarymas" />
      <NavigationListItem nested onClose={onClose} link="/i/kitchen/order" icon={<QueueIcon />} text="Apdoroti užsakymus" />
    </List>
  );
};

const StaffSection = (props) => {
  const { onClose } = props;
  return (
    <List>
      <NavigationListItem nested onClose={onClose} link="/i/staff/candidate" icon={<KitchenIcon />} text="Kandidatai" />
      <NavigationListItem nested onClose={onClose} link="/i/staff/manage" icon={<KitchenIcon />} text="Tvarkyti darbuotojus" />
      <NavigationListItem nested onClose={onClose} link="/i/staff/report" icon={<ReportIcon />} text="Mėnesinė ataskaita" />
    </List>
  );
};

const LogisticSection = (props) => {
  const { onClose } = props;
  return (
    <List hidden>
      <NavigationListItem nested onClose={onClose} link="/i/logistic/schedule" icon={<ScheduleIcon />} text="Darbuotojų grafikai" />
      <NavigationListItem nested onClose={onClose} link="/i/logistic/suppliers" icon={<SuppliersIcon />} text="Tiekėjai" />
      <NavigationListItem nested onClose={onClose} link="/i/logistic/supplies" icon={<AddSuppliesIcon />} text="Inventoriaus papildymas" />
    </List>
  );
};

// <NavigationListItem text="About" icon={<PersonOutlineIcon />} link="/about" onClose={onClose} />
function NavigationList(props) {
  const { onClose } = props;
  return (    
  <List>
    <ExpandableSection text="Virtuvė" icon={<KitchenIcon />} NavigationItemList={KitchenSection} onClose={onClose} />
    <ExpandableSection text="Darbuotojai" icon={<StaffIcon />} NavigationItemList={StaffSection} onClose={onClose} />
    <ExpandableSection text="Logistika" icon={<BuildIcon />} NavigationItemList={LogisticSection} onClose={onClose} />
    <Divider/>
    <NavigationListItem text="Pagrinidinis puslapis" icon={<HomeIcon />} link="/" onClose={onClose} />
  </List>
  );
}

export default NavigationList;