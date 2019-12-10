import React from "react";

import { useHistory } from "react-router-dom";


import { Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  card: {
    MarginTop: theme.spacing(5),
    MarginBottom: theme.spacing(5)
  }
}));



export default function RequestPanel(props) {
	const classes = useStyles();
	const history = useHistory();
	const { isExpired } = props;
	const { request } = props;
	const { tripID } = props;
	const [loading, setLoading] = React.useState(false);
	const [requestError, setRequestError] = React.useState("");
	const [success, setSuccess] = React.useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenSettings = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


	const updateRequest = (status) => {
    setLoading(true);
    const options = {
      method: "PATCH",
      body: JSON.stringify({ status: {status_ID: status }}),
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    fetch(`http://localhost:8080/trips/${tripID}/requests/${request.requestID}`, options).then(
      result => {
        if (result.status === 401) {
          console.log("Not authorized");
          localStorage.clear();
          history.push("/login");
        } else if (result.status > 402 && result.status < 500) {
          console.log("400> <500");
        } else if (result.status >= 500) {
          setRequestError("Internal server error");
        } else {
					request.status.name = status === 1 ? "accepted" : "rejected"
          setSuccess("Request submitted succesfully");
        }
        setLoading(false);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        setRequestError(error);
        setLoading(false);
        console.log("Error /RequestPanel: " + error);
        return;
      }
    );
  };



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
					
          action={ !isExpired && request.status.name === "pending"?
            <IconButton 
						aria-label="more"
						aria-controls="long-menu"
						aria-haspopup="true"
						onClick={handleOpenSettings}
						>
              <MoreVertIcon />
            </IconButton>
					: null
          }
          title={`${request.request_user.first_name} ${request.request_user.last_name} (${request.status.name})`
          }
          subheader={request.submit_date}
        />
									<Menu
						id="long-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={()=>updateRequest(1)}>Accept</MenuItem>
						<MenuItem onClick={()=>updateRequest(2)}>Reject</MenuItem>
					</Menu>
        
				<CardContent>
          <Typography paragraph>{request.info}</Typography>
				</CardContent>
        <Divider />
      </Card>
    </div>
  );
}
