import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Table } from "@material-ui/core";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { getTodos, getUsers } from "../actions/";



const TodoList = () => {
  const dispatch = useDispatch();

  const a = ()=>{
    dispatch(getTodos());
  };

  a();
  // dispatch(getTodos());

  return (
    <>
    </>
  );
};

export default TodoList;