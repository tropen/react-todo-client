import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Toolbar } from "@material-ui/core";
import { signIn, signOut } from "../actions";

const Content = () => {
  const authKey = useSelector(state => state.authKey);
  const dispatch = useDispatch();

  const btnTitle = authKey ? 'Sign out' : 'Sign in';

  return (
    <Toolbar>
      <Button
        color="primary"
        onClick={
          () => dispatch(authKey ? signOut() : signIn())
        }>{btnTitle}</Button>

    </Toolbar>
  );
};
export default Content;