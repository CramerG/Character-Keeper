import React from 'react';
import '../styles/Navbar.styles.css';
import { Link, navigate } from '@reach/router';
import UserNav from './UserNav';

const Navbar = props => {

    return(
        <div className="navbar">
            <div className="title" onClick={() => {navigate("/")}}>Character Keeper</div>
            <div className="links">
                <Link to="/characters/" className="linkText">Characters</Link>
                <Link to="/groups/" className="linkText">Groups</Link>
                <UserNav/>
                <div className="clearboth"></div>
            </div>
        </div>
    );
}

export default Navbar;