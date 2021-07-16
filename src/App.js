import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "./features/Todo/TodoListSlice";
import TodoList from "./features/Todo/TodoList";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#19535f"
    },
    secondary: { main: "#d7c9aa" },
    error: { main: "#7b2d26" },
    success: { main: "#0b7a75" }
  }
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
