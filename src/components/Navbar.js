import React from "react";
import logo1 from "../assets/images/logoku.png";
import {Link} from "react-router-dom"; 

const Navbar = () =>(

    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-success sticky-top" >
    <Link className="navbar-brand" to="/"><img src={logo1}></img></Link>
    </nav>

);

export default Navbar;