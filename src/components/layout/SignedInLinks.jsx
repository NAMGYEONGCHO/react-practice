import React from 'react';
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div className="nav-wrapper grey darken-3">
            <div className="containter">
                <Link to='/' className="brand-logo">Overview</Link>
                <Link to='/' className="brand-logo">Log out</Link>
                <Link to='/' className="brand-logo">Market Trade</Link>
            </div>
        </div>
    )
}

export default SignedInLinks