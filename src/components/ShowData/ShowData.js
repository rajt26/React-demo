import React, { useEffect, useState } from "react";
import api from "../../api";
import "../../demo.css";

const Showdata = (props) => {
  console.log('props.....',props);
  const [userData, setUserData] = useState([]);
  const getUserData = async () => {
    try {
      const res = await fetch("http://localhost:4000/find", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const deleteUserData = async (id) => {
    try {
      const payload = {
        id: id,
      };
      api.deleteData(payload);
      setUserData(userData.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // const updateData = (data) =>{
  //   const payload = {
  //     id:data.id,
  //     data:data
  //   }
  // }

  return (
    <table style={{ width: "50%" }}>
      <tr>
        <th>email</th>
        <th>name</th>
        <th>Actions</th>
      </tr>
      <tbody>
        {
        userData.map((item) => (
          <tr key={item._id}>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>
              <input
                type="submit"
                name="edit"
                value="Edit"
                onClick={() => {
                  props.onEdit(item);
                }}
                className="editButton"
              />
              <input
                type="submit"
                name="delete"
                value="Delete"
                className="deleteButton"
                id="deleteButton"
                onClick={() => deleteUserData(item._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Showdata;
