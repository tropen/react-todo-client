import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../actions/";
import TableContainer from '@material-ui/core/TableContainer';
import TodoTable from "./components/TodoTable";
import PropTypes from "prop-types";
import moment from 'moment';

const prepareRows = (todos) => {
  return todos.map((item, index) => {
    item.id_number = index + 1;
    item.limit = moment(item.limit).format('YYYY-MM-DD HH:mm:ss');
    return item;
  });
};

const TodoList = () => {
  const authKey = useSelector(state => state.authKey);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authKey) {
      dispatch(getTodos());
    }
  }, [dispatch, authKey]);

  const rows = prepareRows(todos);

  return (
    <TableContainer>
      <TodoTable rows={rows} />
    </TableContainer>
  );
};

prepareRows.propTypes = {
  todos: PropTypes.array
};

export default TodoList;