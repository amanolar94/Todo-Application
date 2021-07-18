import React, { useCallback, useState } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { app, header, paper, formContainer, dateInput, saveButton, todoInput } from "./css";
import TodoItem from "../../components/TodoItem";
import { addTodo, completeTodo, removeTodo } from "./TodoListSlice";
import Celebrate from "../../components/Celebrate";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);
  const celebration = useSelector(state => state.todos.celebration);

  const sortedTodos = [...todos].sort(
    (item1, item2) => new Date(item1.dueDate || 0) - new Date(item2.dueDate || 0)
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log("here");
      if (todo !== "") {
        dispatch(addTodo({ todo, dueDate }));
        setTodo("");
        setDueDate("");
      }
    },
    [todo, dueDate, dispatch]
  );

  const deleteTodo = useCallback(
    id => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    id => {
      dispatch(completeTodo(id));
    },
    [dispatch]
  );

  return (
    <div className={app}>
      <Paper className={paper}>
        <h2 className={header}>Todo List</h2>
        <form onSubmit={handleSubmit} className={formContainer}>
          <TextField
            onChange={e => setTodo(e.currentTarget.value)}
            className={todoInput}
            id="standard-basic"
            label="Add Todo"
            value={todo}
          />
          <TextField
            value={dueDate}
            id="date"
            label="Add Due Date"
            type="date"
            className={dateInput}
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => setDueDate(e.target.value)}
          />
          <Button
            type="submit"
            onSubmit={handleSubmit}
            disabled={todo === ""}
            className={saveButton}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </form>

        {sortedTodos.map(item => (
          <TodoItem
            key={item.id}
            title={item.todo}
            onDelete={() => deleteTodo(item.id)}
            onEdit={console.log}
            onToggle={() => toggleTodo(item.id)}
            dueDate={item.dueDate}
            completed={item.completed}
          />
        ))}
      </Paper>
      {celebration.canCelebrate && <Celebrate />}
    </div>
  );
}

export default TodoList;
