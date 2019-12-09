import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

export default function ModalContainer(props) {
	// const [open, setOpen] = React.useState(false);
	const { open, close } = props;
	const theme = useTheme();
	
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClose = () => {
    close();
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}	
        aria-labelledby="responsive-dialog-title"
      >
      {props.children}
      </Dialog>
    </div>
  );
}
