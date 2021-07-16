import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createRootReducer from "./reducers";

const middlewares = [];

export const store = function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: createRootReducer,
    preloadedState,
    middleware: [...getDefaultMiddleware(), ...middlewares]
  });

  //eslint-disable-next-line
  if (process.env.NODE_ENV !== "production" && module.hot) {
    //eslint-disable-next-line
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
};
