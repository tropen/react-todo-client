import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { deleteTodo, toggleTodo } from "../../../sagas";
import DeleteConfirmation from "./DeleteConfirmation";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: 0,
    fontWeight: 800,
    fontSize: 20,
  },
  body: {
    border: 0,
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    height: '100%',
    width: '100%',
    border: 0,
  },
  hover: {
    '&:hover': {
      color: '#8BC34A',
    }
  }
});

const TodoTable = ({ rows }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [rowId, setRowId] = React.useState('');

  function closeDialog() {
    setIsDialogOpen(false);
  }

  function handleDelete(row) {
    setRowId(row.id);
    setIsDialogOpen(true);
  }

  function onDialogOk()
  {
    dispatch(deleteTodo(rowId));
  }

  function handleToggle(row) {
    dispatch(toggleTodo(row.id, !row.done));
  }

  return (<><Table className={classes.table}>
    <TableHead>
      <TableRow>
        <StyledTableCell>#</StyledTableCell>
        <StyledTableCell>Status</StyledTableCell>
        <StyledTableCell>Title</StyledTableCell>
        <StyledTableCell>Task</StyledTableCell>
        <StyledTableCell>User</StyledTableCell>
        <StyledTableCell>Date limit</StyledTableCell>
        <StyledTableCell>Actions</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <StyledTableRow key={row.id}>
          <StyledTableCell>{row.id_number}</StyledTableCell>
          <StyledTableCell>
            <IconButton color={"secondary"}
                        onClick={() => handleToggle(row)}
                        className={classes.hover}
            >
              {row.done ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
            </IconButton>
          </StyledTableCell>
          <StyledTableCell>{row.title}</StyledTableCell>
          <StyledTableCell>{row.task}</StyledTableCell>
          <StyledTableCell>{row.user.name}</StyledTableCell>
          <StyledTableCell>{row.limit}</StyledTableCell>
          <StyledTableCell>
            <IconButton color={"secondary"} onClick={() => handleDelete(row)}>
              <DeleteForeverIcon />
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
    <DeleteConfirmation isOpen={isDialogOpen}
                        onOkClicked={onDialogOk}
                        closeDialog={closeDialog}
    />
  </>);
};

TodoTable.propTypes = {
  rows: PropTypes.array
};

export default TodoTable;