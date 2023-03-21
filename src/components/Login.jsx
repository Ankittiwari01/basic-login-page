

import React from "react";
import Icons from "./Icons";
import Body from "./Body";
import NavBar from "./NavBar";
import './style.css';

function Login() {
  return (
    <div className="container">
      <div className="body">
        <NavBar />
        <Body />
        <Icons />
      </div>
    </div>
  );
}

export default Login;
