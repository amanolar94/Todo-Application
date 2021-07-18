const localStorage = window.localStorage;

export const getToday = () => {
  const today = new Date();
  return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
};

export const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate();
};

export const getAllTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos === null) {
    localStorage.setItem("todos", JSON.stringify([]));
    return [];
  }
  return JSON.parse(todos);
};

export const getCelebrationFromLocalStorage = () => {
  const celebrate = localStorage.getItem("celebration");
  if (celebrate === null) {
    const date = getToday();
    const celebration = { date, todos: [], canCelebrate: false };
    localStorage.setItem("celebration", JSON.stringify(celebration));
    return celebration;
  } else {
    const storageData = JSON.parse(celebrate);
    if (new Date(storageData.date) < new Date(getToday())) {
      const celebration = { date: getToday(), todos: [], canCelebrate: false };
      return celebration;
    }
  }
  return JSON.parse(celebrate);
};

export const saveTodosToLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const saveCelebrationToLocalStorage = celebration => {
  localStorage.setItem("celebration", JSON.stringify(celebration));
};
