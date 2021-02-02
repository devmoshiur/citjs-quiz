import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinkMobile() {
    return (
        <div>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
        </div>
    )
}

export default SignedOutLinkMobile
