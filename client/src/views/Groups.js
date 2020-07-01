import React, { useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import '../styles/SignUp.styles.css'

const Groups = (props) => {

    return(
        <div>
            <div className="sectionHeader">Your Groups</div>
            <Link to="/groups/add/" className="interiorLinkText">Create Group</Link>
            <Link to="" className="interiorLinkText">Join Group</Link>
            {props.children}
        </div>
    )
}

export default Groups;