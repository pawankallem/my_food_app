import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SigninAndup.css";
import {loginRequest} from "../Redux/auth/action.js";
import {useDispatch} from "react-redux";

const init = {
  email: "",
  password: "",
};

export const Login = () => {
  const [login, setLogin] = useState(init);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { id, value } = e.target;
    setLogin({ ...login, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://food-app-with-authentication.herokuapp.com/user/login",
        login
      )
      .then((res) => {
        // localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch(loginRequest(res.data.token));
        alert(res.data.message);
        // console.log(res.data)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <label> Email</label>
          <input type="text" id="email" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" id="password" onChange={handleChange} />
        </div>
        <div className="submit-btn">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
