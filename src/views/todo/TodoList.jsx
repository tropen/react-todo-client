// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { getTodos, getUsers } from "../../actions/";
import { columns } from './components/columns';
// eslint-disable-next-line no-unused-vars
import AcUnitIcon from '@material-ui/icons/AcUnit';


const TodoList = () => {

  // eslint-disable-next-line no-unused-vars
  const authKey = useSelector(state => state.authKey);
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();
  // dispatch(getTodos());
  console.log('todos', todos);

  useEffect(() => {
    if (authKey) dispatch(getTodos());
  }, [dispatch, authKey]);


  todos.map((i, index)=> {
    i.id_number = index + 1;
    // i.actions = <AcUnitIcon />;
    return i;
    // console.log(i);
  });

  return (
    <div style={{ height: window.innerHeight - 100, width: '100%' }}>
      <DataGrid
        rows={todos}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        rowsPerPageOptions={[5, 10, 25, 100]}
        emptyRowsWhenPaging={true}
      />
    </div>
  );
};

export default TodoList;