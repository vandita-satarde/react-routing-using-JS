import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="nav">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About</Link>
            <Link className="nav-item" to="/Dashboard">Dashboard</Link>
        </div>
    )
}

export default Navbar