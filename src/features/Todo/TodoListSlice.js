import { createSlice } from "@reduxjs/toolkit";
import { getAllTodosFromLocalStorage, saveTodosToLocalStorage } from "./todoStorage";

let idCreate = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, data) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      const todos = [...state.todos, { ...data.payload, id: idCreate(), completed: false }];
      saveTodosToLocalStorage(todos);
      state.todos = todos;
    },
    removeTodo: (state, data) => {
      const todos = state.todos.filter(todo => todo.id !== data.payload);
      saveTodosToLocalStorage(todos);
      state.todos = todos;
    },
    completeTodo: (state, data) => {
      const todos = state.todos.map(todo => {
        if (todo.id === data.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      saveTodosToLocalStorage(todos);
      state.todos = todos;
    },
    getAllTodos: state => {
      const todos = getAllTodosFromLocalStorage();
      state.todos = todos;
    }
  }
});

export const { addTodo, removeTodo, completeTodo, getAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
