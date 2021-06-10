import React, { useEffect, useState } from "react";
import api from "../../api";
import validator from 'validator'

const Register = ({ editItem, refresh, clear }) => {
  useEffect(() => {
    setName(editItem?.name);
    setEmail(editItem?.email);
  }, [editItem]);

  const [name, setName] = useState(editItem?.name || "");
  const [email, setEmail] = useState(editItem?.email || "");
  const [password, setPassword] = useState(editItem?.password || "");
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validator.isStrongPassword(password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('')
    }
    else {
      setErrorMessage('The password must contain at least 1 lowercase,1 uppercase, 1 number,1 special character')
      document.getElementById('errorMessage').innerHTML = 'The password must contain at least 1 lowercase,1 uppercase, 1 number,1 special character'
      setTimeout(() => {
        document.getElementById("errorMessage").innerHTML = ""
      }, 2000);
    }

    setName(name);
    setEmail(email);
    setTimeout(() => {
      setPassword(password);
    }, 2000);

    if (editItem != null) {
      let updatePayload = {
        id: editItem._id,
        name,
        email,
      };
      let result = await api.updateData(updatePayload);
      if (result && result.ok) {
        document.getElementById("message").innerHTML =
          "Data Updated Successfully...";
        setTimeout(() => {
          document.getElementById("message").innerHTML = ""
        }, 2000);

      } else {
        document.getElementById("message").innerHTML =
          "Error while data update!!!";
        setTimeout(() => {
          document.getElementById("message").innerHTML = ""
        }, 2000);
      }
    } else {
      let payload = {
        name,
        email,
        password,
      };
      let registerData = await api.registerData(payload);
      if (registerData && registerData.ok) {
        document.getElementById("message").innerHTML =
          "User Register Successfully.";
        setTimeout(() => {
          document.getElementById("message").innerHTML = ""
        }, 2000);
      } else {
        document.getElementById("message").innerHTML =
          "Error while register!!!";
        setTimeout(() => {
          document.getElementById("message").innerHTML = ""
        }, 2000);
      }
    }
    refresh();
  };
  const clearData = () => {
    setName(null);
    setEmail(null);
    setPassword(null);
    clear();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1> Registration </h1>
        <input
          type="text"
          name="name"
          value={name}
          required
          placeholder="Enter Full Name..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          required
          placeholder="Enter Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          required
          placeholder="Enter password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <p id='errorMessage' style={{ color: 'red' }}></p>
        <p id="message" style={{ color: 'red' }}></p>
        <input type="submit" value={editItem ? "Update" : "Submit"} />
        <input type="reset" value={"Clear"} onClick={clearData} />
      </form>
    </>
  );
};
export default Register;
