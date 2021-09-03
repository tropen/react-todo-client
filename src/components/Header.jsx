import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Button, Container, makeStyles, Toolbar } from "@material-ui/core";
import { signIn, signOut } from "../actions";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
  },
}));

const Content = () => {
  const authKey = useSelector(state => state.authKey);
  const dispatch = useDispatch();

  const classes = useStyles();

  const authBtnTitle = authKey ? 'Sign out' : 'Sign in';
  const addBtn = <Button
    color="inherit"
    variant="outlined"
    component={Link} to="/add"
    endIcon={<AddCircleOutlineIcon />}
  >
    Add
  </Button>;

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => dispatch(authKey ? signOut() : signIn())}
            className={classes.menuButton}
          >
            {authBtnTitle}
          </Button>

          {authKey && addBtn}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Content;