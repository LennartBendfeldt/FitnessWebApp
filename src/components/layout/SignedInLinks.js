import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {

    return(
        <ul className="right">
            <li><NavLink to='/createworkout'>New Workout</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-2'>LB</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;