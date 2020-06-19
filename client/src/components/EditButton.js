import React from 'react';
import '../styles/Buttons.styles.css';
import { navigate } from '@reach/router';

const EditButton = props => {

    return(
        <div className="edit" onClick={() => {navigate("/characters/edit/" + props.id)}}>Edit</div>
    )
}

export default EditButton;