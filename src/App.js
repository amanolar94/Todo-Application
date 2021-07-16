import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "./features/Todo/TodoListSlice";
import TodoList from "./features/Todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return <TodoList />;
}

export default App;
