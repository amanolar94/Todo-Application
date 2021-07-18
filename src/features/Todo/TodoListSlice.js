import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTodosFromLocalStorage,
  getCelebrationFromLocalStorage,
  getToday,
  getTomorrow,
  saveCelebrationToLocalStorage,
  saveTodosToLocalStorage
} from "./todoStorage";

let idCreate = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const initialState = {
  todos: [],
  celebration: { todos: [], date: getToday(), canCelebrate: false }
};

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
      const todo = state.todos.find(todo => todo.id === data.payload);

      const todos = state.todos.map(todo => {
        if (todo.id === data.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      //We check if we in the current date, if the task isn't one that has already been completed and if the toogle comes from completion
      if (
        state.celebration.date === getToday() &&
        state.celebration.todos.findIndex(td => td === data.payload) === -1 &&
        !todo.completed === true
      ) {
        const newTodos = [...state.celebration.todos, data.payload];
        const celebration = {
          date: state.celebration.date,
          todos: newTodos,
          canCelebrate: newTodos.length === 3
        };
        state.celebration = celebration;
        saveCelebrationToLocalStorage(celebration);
      }

      saveTodosToLocalStorage(todos);
      state.todos = todos;
    },

    //After we celebrate from 3 daily tasks completed we set the date to next day and the goal is reseted
    soberUp: state => {
      const celebration = { date: getTomorrow(), todos: [], canCelebrate: false };
      state.celebration = celebration;
      saveCelebrationToLocalStorage(celebration);
    },

    editTodo: (state, data) => {
      const { id, ...todo } = data.payload;
      const index = state.todos.findIndex(item => item.id === id);
      if (index > -1) {
        state.todos[index] = { ...state.todos[index], ...todo };
      }
    },

    getAllTodos: state => {
      const todos = getAllTodosFromLocalStorage();
      state.todos = todos;
    },
    getCelebration: state => {
      const celebration = getCelebrationFromLocalStorage();
      state.celebration = celebration;
    }
  }
});

export const { addTodo, removeTodo, completeTodo, getAllTodos, soberUp, getCelebration, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
