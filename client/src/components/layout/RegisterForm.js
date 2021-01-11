import React, { useState } from "react";
import { registerUser } from "../../actions/index";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const clearHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
    clearHandler();
  };
  return (
    <div>
      <h2>New User?</h2>
      <h4>Create an Account</h4>
      <form>
        <div className="form-group">
          <label htmlFor="email-reg">Email</label>
          <input
            id="email-reg"
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-reg">Password</label>
          <input
            id="password-reg"
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={submitHandler}>
          Register | <i className="fa fa-user-plus"></i>
        </button>
        <button
          className="btn btn-outline-secondary ml-2"
          onClick={clearHandler}
        >
          Clear | <i className="fa fa-times"></i>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
