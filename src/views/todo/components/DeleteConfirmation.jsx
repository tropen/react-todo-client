import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteConfirmation = ({ isOpen = false, onOkClicked, closeDialog }) => {
  const handleClose = () => {
    closeDialog();
  };

  const confirmed = () => {
    closeDialog();
    onOkClicked();
  };

  return (<Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure that you want to delete the task?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirmed} color="secondary" variant="contained">
          Ok
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteConfirmation.propTypes = {
  onOkClicked: PropTypes.func,
  closeDialog: PropTypes.func,
  isOpen: PropTypes.bool
};

export default DeleteConfirmation;