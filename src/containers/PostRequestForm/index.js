import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PostRequestForm(props) {
  const [info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { close, data, setRequestResult } = props;
  const history = useHistory();

  const postRequest = (id, info) => {
    setLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify({ info: info }),
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    fetch(`http://localhost:8080/trips/${id}/requests`, options).then(
      result => {
        if (result.status === 401) {
          console.log("Not authorized");
          localStorage.clear();
          history.push("/login");
        } else if (result.status > 402 && result.status < 500) {
          console.log("400> <500");
        } else if (result.status >= 500) {
          setRequestResult("Internal server error");
        } else {
          setRequestResult("Request submitted succesfully");
        }
        setLoading(false);
        close();
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        setRequestResult(error);
        setLoading(false);
        console.log("Error /SearchTrips: " + error);
        close();
        return;
      }
    );
  };
  return (
    <div>
      <DialogTitle id="form-dialog-title">Send request</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please specify your departure and destination addresses and any
          specific information that would be useful for driver of this trip.
          Otherwise driver will not accept your request. Happy travelling!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Information"
          type="text"
          fullWidth
          multiline
          variant="outlined"
          value={info}
          onChange={e => setInfo(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={() => close()}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={info === "" ? true : false}
          onClick={() => postRequest(data.tripID, info)}
        >
          {isLoading === true && <CircularProgress color="secondary" />}
          {isLoading === false && "Submit"}
        </Button>
      </DialogActions>
    </div>
  );
}
