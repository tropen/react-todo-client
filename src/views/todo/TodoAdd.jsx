import React, { useEffect } from 'react';
import AddForm from "./components/AddForm";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, getUsers } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    height: window.innerHeight - 100,
    width: '100%',
  },
});

const TodoAdd = () => {
  const authKey = useSelector(state => state.authKey);
  // const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  useEffect(() => {
    if (authKey) {
      dispatch(getTodos());
      dispatch(getUsers());
    }
  }, [dispatch, authKey]);

  return (<AddForm />);
};

export default TodoAdd;