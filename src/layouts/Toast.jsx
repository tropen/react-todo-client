import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "../reducers/snackbar";
import { Slide } from "@material-ui/core";

export const Toast = () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.snackbar.open);
  const message = useSelector(state => state.snackbar.message);
  const severity = useSelector(state => state.snackbar.severity);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeMessage(message, severity));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};