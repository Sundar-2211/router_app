import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
    return(
    <nav>
        
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/service">Service</Link>
    </nav>)
}
export default NavBar;