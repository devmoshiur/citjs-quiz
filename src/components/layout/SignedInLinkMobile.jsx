import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinkMobile() {
    return (
        <div>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                    <li><NavLink to="/Profile"><span className="btn btn-floating dark lighten-1">RM</span> Profile</NavLink></li>
        </div>
    )
}

export default SignedInLinkMobile
