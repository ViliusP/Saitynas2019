import React from "react";
import MaterialTable from "material-table";
import Save from "@material-ui/icons/Save";

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete';
import OpenInNew from '@material-ui/icons/OpenInNew';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
		ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
		Save: forwardRef((props, ref) => <Save {...props} ref={ref} />),
		Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
		OpenInNew: forwardRef((props, ref) => <OpenInNew {...props} ref={ref} />),

  };

export default function UserRequestTable(props) {
	const { data } = props;
  return (
    <MaterialTable
			icons={tableIcons}
			options={{
				search: false,
				showTitle: false,
				toolbar: false
			}}
      columns={[
        { title: "Trip date", field: "trip.departure_date", sorting: false },
        { title: "Departure city", field: "trip.departure_city.name", sorting: false },
        { title: "Destination city", field: "trip.destination_city.name", sorting: false },
				{ title: "Request submit date", field: "submit_date", sorting: false},
				{ title: "Request status", field: "status.name", sorting: false}

      ]}
      data={data}
      actions={[
        {
          icon: tableIcons.OpenInNew,
          tooltip: "Show more information",
          onClick: (event, rowData) => alert("You saved " + rowData.status.name)
				},
				(rowData) => {
					return rowData.status.name === "pending" 
						? { icon: tableIcons.Delete, disable: true, onClick: (rowData) => { /* anythink */ }, tooltip: "Delete request" }
						: null;
			 }
      ]}
    />
  );
}
