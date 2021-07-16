import React from "react";
import { Checkbox, IconButton, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { todoTitle, deadline, todoItem } from "./css";

function TodoItem(props) {
  return (
    <Paper className={todoItem}>
      <Checkbox
        checked={props.completed}
        onChange={props.onToggle}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <div className={todoTitle}>{props.title}</div>
      <div className={deadline}>{props.dueDate}</div>

      <IconButton onClick={props.onEdit} aria-label="delete">
        <EditIcon color="primary" />
      </IconButton>
      <IconButton onClick={props.onDelete} aria-label="delete">
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
