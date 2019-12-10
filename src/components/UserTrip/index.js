import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  details: {
    flexDirection: "column"
  }
}));

export default function UserTrip(props) {
  const classes = useStyles();
  const { handleChange, expanded, trip } = props;
  const panelName = "panel" + trip.tripID;
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            {trip.departure_city.name} - {trip.destination_city.name}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {trip.departure_date}
          </Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
          <Grid container>
            <Grid item xs={3}>
              <Typography>Post created at:</Typography>
              <Typography>Cost:</Typography>
              <Typography>Space:</Typography>
              <Typography>Info:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{trip.creation_date}</Typography>
              <Typography>{trip.cost}</Typography>
              <Typography>{trip.space}</Typography>
              <Typography>{trip.info}</Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        {trip.requests.length > 0 ? (
          <div>
            <Divider />
            <ExpansionPanelDetails>
								{trip.requests.map(request => <div>h</div>)}
            </ExpansionPanelDetails>
          </div>
        ) : null}
      </ExpansionPanel>
    </div>
  );
}
