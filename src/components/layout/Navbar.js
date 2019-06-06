import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {

    return(
        <nav className="nav-wrapper blue lighten-1">
            <div className="container">
                <Link to='/' className="brand-logo blue-text text-darken-3">Fitness App</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;