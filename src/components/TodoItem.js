import React, { useCallback } from "react";
import { Checkbox, IconButton, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { todoTitle, deadline, todoItem } from "./css";

function TodoItem(props) {
  const handleEdit = useCallback(
    e => {
      e.stopPropagation();
      props.onEdit();
    },
    [props]
  );

  const handleDelete = useCallback(
    e => {
      e.stopPropagation();
      props.onDelete();
    },
    [props]
  );

  return (
    <Paper onClick={props.onToggle} className={todoItem}>
      <Checkbox checked={props.completed} inputProps={{ "aria-label": "primary checkbox" }} />
      <div className={todoTitle}>{props.title}</div>
      <div className={deadline}>{props.dueDate}</div>

      <IconButton onClick={handleEdit} aria-label="delete">
        <EditIcon color="primary" />
      </IconButton>
      <IconButton onClick={handleDelete} aria-label="delete">
        <DeleteIcon color="error" />
      </IconButton>
    </Paper>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  dueDate: PropTypes.string
};

export default TodoItem;
