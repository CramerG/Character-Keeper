import React from 'react';
import '../styles/character.styles.css';
import { Link } from '@reach/router';

const Characters = props => {

    return(
        <div>
            <div className="sectionHeader">Characters</div>
            <Link to="/characters" className="interiorLinkText">Saved Characters</Link>
            <Link to="/characters/add" className="interiorLinkText">Create New Character</Link>
            {props.children}
        </div>
    )
}

export default Characters;