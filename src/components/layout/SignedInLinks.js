import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut }  from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/createworkout'>New Workout</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-2'>LB</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {

    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);