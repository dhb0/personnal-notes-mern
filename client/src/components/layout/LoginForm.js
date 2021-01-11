import React, { useState } from "react";
import { loginUser } from "../../actions/index";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const clearHandler = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    clearHandler();
    dispatch(loginUser({ email, password }));
  };
  return (
    <>
      <h2>Having an account?</h2>
      <h4>Login here</h4>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login | <i className="fa fa-sign-in"></i>
        </button>
        <button
          className="btn btn-outline-secondary ml-2"
          onClick={clearHandler}
        >
          Clear | <i className="fa fa-times"></i>
        </button>
      </form>
    </>
  );
};

export default LoginForm;
