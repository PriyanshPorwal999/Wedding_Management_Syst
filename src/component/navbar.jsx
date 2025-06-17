import React from "react";
import "./navbar.css";
import Logo from "./logo.jsx";
import Button from "./Button/button.jsx";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Button label="Home" />
      <Button label="Vendor" />
      <Button label="Photography" />
      <Button label="Catering" />
      <Button label="Login" />
    </nav>
  );
};

export default Navbar;
