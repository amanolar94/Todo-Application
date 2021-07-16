import React from "react";
import { Button, IconButton, Paper } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import { app, header, paper, todoItem } from "./css";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoList() {
  // const dispatch = useDispatch();

  return (
    <div className={app}>
      <Paper className={paper}>
        <h2 className={header}>Todo List</h2>
        <Paper className={todoItem}>
          <div>Todo item</div>
          <IconButton aria-label="delete">
            <DeleteIcon color="danger" />
          </IconButton>
        </Paper>
      </Paper>
    </div>
  );
}

export default TodoList;
