import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <i className="fa fa-book fa-2x"></i>
          <span className="h4 pl-2">Personal Notes App</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
