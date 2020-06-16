import React from 'react';
import { Link } from '@reach/router';
import '../styles/UserNav.styles.css';

const UserNav = props => {

    return(
        <div className="usernav">
            <Link to="/signup" className="linkText">Sign Up</Link>
            <Link to="/signin" className="linkText">Log In</Link>
        </div>
    );
}

export default UserNav;