import createTodoReducer from "../features/Todo/TodoListSlice";

import { combineReducers } from "redux";

const createRootReducer = combineReducers({
  todos: createTodoReducer
});

export default createRootReducer;
