import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const postRequest = (id, info) => { 
	console.log(id + " " + info);
}


export default function PostRequestForm(props) {
	const [info, setInfo] = useState("")
	const { close, data } = props;
  return (
    <div>
      <DialogTitle id="form-dialog-title">Send request</DialogTitle>
      <DialogContent>
        <DialogContentText>
					Please specify your departure and destination addresses and any specific information that would be useful for driver of this trip. Otherwise driver will not accept your request. Happy travelling!
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
					value = {info}
					onChange = {(e)=> setInfo(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick = {()=> close()} >
          Cancel
        </Button>
        <Button variant="contained" color="primary" disabled={info === "" ? true : false} onClick = {() => postRequest(data.tripID, info)}>
          Send
        </Button>
      </DialogActions>
    </div>
  );
}
