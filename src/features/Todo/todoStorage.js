const localStorage = window.localStorage;

export const getAllTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
    localStorage.setItem("todos", JSON.stringify([]));
    return [];
  }
  return JSON.parse(todos);
};
