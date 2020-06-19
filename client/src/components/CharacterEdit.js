import React from 'react';
import axios from 'axios';
import CharacterForm from './CharacterForm';
import { navigate } from '@reach/router';

const CharacterEdit = props => {
    axios.defaults.withCredentials = true;

    const editCharacter = (char) => {
        axios.put('http://localhost:8000/api/bx', {id: props.id, character: char})
            .then(res => {
                console.log(res);
                navigate("/characters");
            })
    }

    return(
        <div>
            <div className="sectionHeader">Edit Character</div>
            <CharacterForm send={editCharacter} id={props.id}/>
        </div>

    )
}

export default CharacterEdit;