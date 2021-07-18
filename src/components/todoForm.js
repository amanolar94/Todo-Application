import React, { useCallback, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import {
  formContainer,
  dateInput,
  saveButton,
  todoInput,
  cancelButton,
  buttonWrapper
} from "./css";
import PropTypes from "prop-types";

function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (todo !== "" || props.todo !== undefined) {
        props.onSubmit({ todo: todo, dueDate });
        setTodo("");
        setDueDate("");
      }
    },
    [props, todo, dueDate]
  );

  return (
    <form onSubmit={handleSubmit} className={formContainer}>
      <TextField
        onChange={e => setTodo(e.currentTarget.value)}
        className={todoInput}
        id="standard-basic"
        label="Add Todo"
        value={todo || props.todo || ""}
      />
      <TextField
        value={dueDate || props.dueDate || ""}
        id="date"
        label="Add Due Date"
        type="date"
        className={dateInput}
        InputLabelProps={{
          shrink: true
        }}
        onChange={e => setDueDate(e.target.value)}
      />
      <div className={buttonWrapper}>
        {props.onCancel && (
          <Button
            onClick={props.onCancel}
            disabled={todo === "" && props.todo === undefined}
            className={cancelButton}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          onSubmit={handleSubmit}
          disabled={todo === "" && props.todo === undefined}
          className={saveButton}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

TodoForm.propTypes = {
  todo: PropTypes.string,
  dueDate: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
