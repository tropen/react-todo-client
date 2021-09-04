import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Button, Container, makeStyles, Toolbar } from "@material-ui/core";
import { signIn } from "../actions";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListIcon from '@material-ui/icons/List';
import { Link } from "react-router-dom";
import { signOut } from "../reducers/authKey";

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
  const buttons = (<><Button
    color="inherit"
    variant="outlined"
    component={Link} to="/todo"
    endIcon={<ListIcon />}
    className={classes.menuButton}
  >
    List
  </Button>
    <Button
    color="inherit"
    variant="outlined"
    component={Link} to="/add"
    endIcon={<AddCircleOutlineIcon />}
    className={classes.menuButton}
  >
    Add
  </Button></>);


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
          {authKey && buttons}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Content;