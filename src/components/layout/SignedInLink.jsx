import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLink() {
    return (
            <div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                    <li><NavLink to="/Profile" className="btn btn-floating dark lighten-1">RM</NavLink></li>
                </ul>
            </div>
    )
}

export default SignedInLink
