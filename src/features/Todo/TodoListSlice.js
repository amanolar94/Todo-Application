import { createSlice } from "@reduxjs/toolkit";
import { getAllTodosFromLocalStorage } from "./todoStorage";

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
      state.todos = [];
    },
    getAllTodos: state => {
      const todos = getAllTodosFromLocalStorage();
      state.todos = todos;
    }
  }
});

export const { addTodo, getAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
