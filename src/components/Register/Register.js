import React, { useEffect, useState } from "react";
// import {useForm} from 'react-hook-form'
import api from "../../api";

const Register = ({ editItem }) => {
    console.log('11111111111',editItem)
    useEffect(() => {
    setName(editItem?.name);
    console.log("effec ..");
  }, [editItem]);

  const [name, setName] = useState(editItem?.name || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log('name----',name);
  const onSubmit = (event) => {
    // event.preventDefault();
    setName(name);
    setEmail(email);
    setPassword(password);

    let payload = {
      name,
      email,
      password,
    };
    api.registerData(payload);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <h1> Registration </h1>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name..."
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Enter password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
};
export default Register;
