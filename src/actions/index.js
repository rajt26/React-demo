export const addTodo = (data) => {
  return {
    type: "ADD",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

export const clearTodo = () => {
  return {
    type: "CLEAR",
  };
};
