import React from "react";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";

const AuthPage = () => {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-md-5 col-sm-12">
          <LoginForm />
        </div>
        <div style={{ border: "1px solid #ababab" }}></div>
        <div className="col-md-6 col-sm-12">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
