import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLink = () => {
    return (
        <div className="nav-wrapper grey darken-3">
            <div className="containter">
                <NavLink to="/" activeClassName="active">Sign up</NavLink>
                <NavLink to="/" activeClassName="active">Login</NavLink>
            </div>
        </div>
    )
}

export default SignedOutLink