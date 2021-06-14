import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const Mobx = ({ store }) => {
//   const changeName = () => {
//     store.updateUser("code");
//   };

  const [input, setInput] = useState("")

  const add = () => {
      store.addUser(input)
    }
    const deleteData = (i) => {
        store.deleteUser(i)
    }
    const handleInput = (e) =>{
        setInput(e.target.value)
    }
  return (
    <>
      <h1>Mobx</h1>
      <h2>
      </h2>
      <input type="text" placeholder="Enter Name......." onChange={handleInput}></input> &nbsp;
      {/* <button onClick={changeName}>Update</button> */}
      <button className="add" onClick={add}>Add</button>
      <table style={{ width: "50%" }}>
      <tr>
        <th>name</th>
        <th>Actions</th>
      </tr>
      <tbody>
        {
         store.userInfo.map((item,i) => (
          <tr key={i}>
            <td>{item}</td>
            <td>
              <input
                type="submit"
                name="delete"
                value="Delete"
                className="delete"
                id="deleteButton"
                onClick={() => deleteData(i)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default observer(Mobx);
