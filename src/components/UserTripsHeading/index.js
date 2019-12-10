import React from "react";
import ToggleRequestStatus from "../../components/ToggleRequestStatus";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

export default function UserTripsHeading(props) {
	const { switchSetState, switchState } = props
	const { handleStatusChange, filters } = props

	return (
		<div>
			<Typography>
				<h1>Manage your trips</h1>
			</Typography>
			<Typography>
				<h3>Here you can see your all created trips and manage it</h3>
			</Typography>
			<Grid container justify="flex-start" alignItems="center" xs={12}>
				<Grid item xs={3}>
					<Typography>
						<h5>Request filters:</h5>
					</Typography>
				</Grid>
				<Grid item>
					<ToggleRequestStatus handleStatusChange={handleStatusChange} filters={filters}/>
				</Grid>
			</Grid>
			<Grid container justify="flex-start" alignItems="center" xs={12}>
				<Grid item xs={3}>
					<Typography>
						<h5>Show expired:</h5>
					</Typography>
				</Grid>
				<Grid item>
					<Switch
						checked={switchState}
						onChange={()=> switchSetState()}
						inputProps={{ "aria-label": "secondary checkbox" }}
					/>
				</Grid>
			</Grid>
		</div>
	);

}

