import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="nav-button1">
            <h1>  
                <Link to="/">  
                    <i className="fa fa-code">Movies On Tip</i> 
                </Link>
            </h1>
            </div>
            <div className="nav-button2">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="favourite" style={{ textDecoration: 'none' }}>Favourite Movies</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="Dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
