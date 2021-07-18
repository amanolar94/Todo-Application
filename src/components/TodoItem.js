import React, { useCallback, useState } from "react";
import { Checkbox, IconButton, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { todoTitle, deadline, todoItem } from "./css";
import TodoForm from "./todoForm";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/Todo/TodoListSlice";

function TodoItem(props) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = useCallback(
    e => {
      e.stopPropagation();
      setEdit(true);
    },
    [setEdit]
  );

  const handleDelete = useCallback(
    e => {
      e.stopPropagation();
      props.onDelete();
    },
    [props]
  );

  const handleSubmit = useCallback(
    values => {
      dispatch(
        editTodo({
          todo: values.todo || props.title,
          dueDate: values.dueDate || props.dueDate,
          id: props.id
        })
      );
      setEdit(false);
    },
    [props, dispatch]
  );

  return (
    <Paper onClick={props.onToggle} className={todoItem}>
      {edit ? (
        <TodoForm
          todo={props.title}
          dueDate={props.dueDate}
          onSubmit={handleSubmit}
          onCancel={() => setEdit(false)}
        />
      ) : (
        <React.Fragment>
          <Checkbox checked={props.completed} inputProps={{ "aria-label": "primary checkbox" }} />
          <div className={todoTitle}>{props.title}</div>
          <div className={deadline}>{props.dueDate}</div>
          <IconButton onClick={handleEdit} aria-label="delete">
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </React.Fragment>
      )}
    </Paper>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  dueDate: PropTypes.string
};

export default TodoItem;
