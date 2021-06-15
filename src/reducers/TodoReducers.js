const intialdata = {
  list: [],
};

const TodoReducers = (state = intialdata, action) => {
  switch (action.type) {
    case "ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE":
      const newList = state.list.filter((item) => item.id != action.id);
      return {
        ...state,
        list: newList,
      };
    case "CLEAR":
      return {
        list: [],
      };
    default:
      return state;
  }
};

export default TodoReducers;
