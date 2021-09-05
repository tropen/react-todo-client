import React from 'react';
import { Form } from 'react-final-form';
import { Box, Button, Grid, MenuItem, Typography } from "@material-ui/core";
import { Checkboxes, DateTimePicker, Select, TextField } from 'mui-rff';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../actions";

const validate = (values) => {
  const errors = {};
  const checks = ['title', 'user_id', 'task', 'limit'];
  checks.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
  },
}));

const AddForm = ({ users }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    if (values.done === undefined) {
      values.done = false;
    }
    dispatch(addTodo(values));
  };

  const userMenuItems = users.map((user) =>
    <MenuItem key={user.id} value={user.id}>
      {user.username}
    </MenuItem>
  );
  const select =
    <Grid item xs={6}>
      <Select
        name="user_id"
        label="User"
        formControlProps={{ margin: 'none' }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
      >
        {userMenuItems}
      </Select>
    </Grid>;

  return (
    <Box p={2} m={2} border={2} borderRadius={8} className={classes.box} variant="outlined">
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Add task
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{}}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <TextField name="title"
                           label="Title"
                           type="text"
                />
              </Grid>

              {select}

              <Grid item xs={6}>
                <DateTimePicker
                  name="limit"
                  label="Date and time limit"
                  dateFunsUtils={DateFnsUtils}
                />
              </Grid>
              <Grid item xs={6}>
                <Checkboxes name="done"
                            formControlProps={{ margin: 'none' }}
                            data={{ label: 'Done', value: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name="task"
                           label="Task"
                           type="text"
                           fullWidth
                />
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button color="secondary"
                        variant="contained"
                        component={Link} to="/todo"
                        disabled={submitting}
                >Cancel</Button>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitting}
                >Submit</Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Box>

  );
};

AddForm.propTypes = {
  users: PropTypes.array
};
export default AddForm;