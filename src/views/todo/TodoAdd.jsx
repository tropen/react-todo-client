import React, { useEffect } from 'react';
import AddForm from "./components/AddForm";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../sagas/";

const TodoAdd = () => {
  const authKey = useSelector(state => state.authKey);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authKey) {
      dispatch(getUsers());
    }
  }, [dispatch, authKey]);

  return (<AddForm users={users} />);
};

export default TodoAdd;