import React, { useEffect, useState } from "react";
import api from "../../api";
import "../../demo.css";

const Showdata = (props) => {

  const deleteUserData = async (id) => {
    try {
      const payload = {
        id: id,
      };
      await api.deleteData(payload);
      props.refresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table style={{ width: "50%" }}>
      <tr>
        <th>email</th>
        <th>name</th>
        <th>Actions</th>
      </tr>
      <tbody>
        {
        props.list.map((item) => (
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
