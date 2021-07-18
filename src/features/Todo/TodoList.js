import React, { useCallback } from "react";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { app, header, paper, formWrapper } from "./css";
import TodoItem from "../../components/TodoItem";
import { addTodo, completeTodo, editTodo, removeTodo } from "./TodoListSlice";
import Celebrate from "../../components/Celebrate";
import TodoForm from "../../components/todoForm";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);
  const celebration = useSelector(state => state.todos.celebration);

  const sortedTodos = [...todos].sort(
    (item1, item2) => new Date(item1.dueDate || 0) - new Date(item2.dueDate || 0)
  );

  const handleSubmit = useCallback(
    values => {
      dispatch(addTodo(values));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    id => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    values => {
      dispatch(editTodo(values));
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
        <div className={formWrapper}>
          <TodoForm onSubmit={handleSubmit} />
        </div>
        {sortedTodos.map(item => (
          <TodoItem
            key={item.id}
            title={item.todo}
            onDelete={() => deleteTodo(item.id)}
            onEdit={todo => handleEdit({ ...todo, id: item.id })}
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
