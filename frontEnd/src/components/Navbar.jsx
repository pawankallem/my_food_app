import React from "react";
import {Link} from "react-router-dom";
import "./styles/Navbar.css"

export const Navbar=()=>{

    return (<div id="main-navbar">
        <Link to="/" className="button">Home</Link>
        <Link to="/register" className="button">Register</Link>
        <Link to="/login" className="button">Login</Link>
    </div>)
}