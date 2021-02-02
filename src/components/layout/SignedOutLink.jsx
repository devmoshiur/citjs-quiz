import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLink() {
    return (
        <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLink
