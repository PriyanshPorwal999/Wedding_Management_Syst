import React from "react";
import "./navbar.css";
import Logo from "./logo.jsx";


const Navbar = () => {
    return (
        <nav className="navbar">
                <Logo />
                <button className="vendor">Vendor</button>
                <button className="photography">Photography</button>
                <button className="catering">Catering</button>
                <button className="login">Login</button>

        </nav>
    );
};

export default Navbar;