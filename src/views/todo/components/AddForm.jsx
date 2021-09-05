import React from 'react';
import { Field, Form } from 'react-final-form';
import { Box, Button, Grid, TextField, Typography, } from "@material-ui/core";
//, MenuItem, Select
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const onSubmit = async (values) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);

  console.log("submit", values);
  window.alert(JSON.stringify(values, 0, 2));
};

// const validate = (values) => {
//   const errors = {};
//   console.log('validate', values);
//   if (!values.title) {
//     errors.title = 'Required';
//   }
//
//   return errors;
// };

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
  },
}));

const AddForm = () => {
  const classes = useStyles();
  return (
    <Box p={2} m={2} border={2} borderRadius={8} className={classes.box} variant="outlined">
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Add task
      </Typography>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={{}}
        render={({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            {/*user
              title
              task
              limit
              done
              */}
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={6}>
                <Field name="title" id="title"
                       component={TextField}
                       label="Title" required
                       type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <Field name="task"
                       color="secondary"
                       component={TextField}
                       label="Task"
                       required
                       type="text"
                />
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitting}
                >Submit</Button>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button color="secondary"
                        variant="contained"
                        component={Link} to="/todo"
                        disabled={submitting}
                >Cancel</Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Box>

  );
};
export default AddForm;