import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Portfolio Dashboard
        </Link>
        <div className="ml-auto">
          <Link to="/" className="navbar-brand">
            <span className="User">user: </span> Aryan Umat
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
