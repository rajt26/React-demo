import React, { useEffect, useState,setState } from "react";
import api from "../../api";

const Register = ({ editItem, refresh , clear}) => {
  useEffect(() => {
    setName(editItem?.name);
    setEmail(editItem?.email)
  }, [editItem]);

  const [name, setName] = useState(editItem?.name || "");
  const [email, setEmail] = useState(editItem?.email || "");
  const [password, setPassword] = useState(editItem?.password || "");

  const onSubmit = async (event) => {
    event.preventDefault();
    setName(name);
    setEmail(email);
    setPassword(password);

    if(editItem != null){
      let updatePayload = {
        id:editItem._id,
        name,
        email
      }
      await api.updateData(updatePayload)
    }
    else{
      let payload = {
        name,
        email,
        password,
      };
      await api.registerData(payload);
    }
    refresh();
  };
  const clearData = () => {
    // editItem = null
    setName(null)
    setEmail(null)
    setPassword(null)
    clear()
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <h1> Registration </h1>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Full Name..."
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <input
            type="text"
            name="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <input type="submit" value={editItem ? "Update": "Submit"}/>
          <input type="reset" value={"Clear"} onClick={clearData}/>
        </form>
      </div>
    </>
  );
};
export default Register;
