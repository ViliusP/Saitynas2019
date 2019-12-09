import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PostRequestForm(props) {
  return (
    <div>
      <DialogTitle id="form-dialog-title">Send request</DialogTitle>
      <DialogContent>
        <DialogContentText>
					You pressed on trip: {props.data.tripID}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button  color="primary">
          Cancel
        </Button>
        <Button color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </div>
  );
}
