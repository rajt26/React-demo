import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../../actions/index";

const Redux = () => {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();
  console.log("list---", list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Add Your List Here</h1>
          <input
            type="text"
            placeholder="Add Items.."
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button className="add" onClick={() => dispatch(addTodo(input))}>
            Add
          </button>
          {"     "}
          <table style={{ width: "50%" }}>
            <tr>
              <th>name</th>
              <th>Actions</th>
            </tr>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <td>{item.data}</td>
                  <td>
                    <input
                      type="submit"
                      name="delete"
                      value="Delete"
                      className="delete"
                      id="deleteButton"
                      onClick={() => dispatch(deleteTodo(item.id))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Redux;
