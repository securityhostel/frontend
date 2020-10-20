import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({ navLinks }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Security Hostel</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {navLinks.map(link =>
                        <li className="nav-item" key={link.path}>
                            <Link className="nav-link" to={link.path}> {link.text} </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;