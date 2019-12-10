import React from "react";
import { Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    MarginTop: theme.spacing(5),
    MarginBottom: theme.spacing(5)
  }
}));

export default function RequestPanel(props) {
  const classes = useStyles();
	const { isExpired } = props;
  const { request } = props;
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={request.request_user.photo_URL}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${request.request_user.first_name} ${request.request_user.last_name} (${request.status.name})`
						
          }
          subheader={request.submit_date}
        />
        
				<CardContent>
          <Typography paragraph>{request.info}</Typography>
				</CardContent>
        <Divider />
      </Card>
    </div>
  );
}
