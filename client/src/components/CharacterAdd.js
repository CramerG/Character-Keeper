import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import CharacterForm from './CharacterForm';

const CharacterAdd = props => {
    axios.defaults.withCredentials = true;

    const onSubmitHandler = (character) => {
        axios.post('http://localhost:8000/api/bx', character)
            .then(res => {
                console.log(res);
                if(res.data.error === undefined) {
                    navigate("/characters");
                }

            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <div className="sectionHeader">Add New Character</div>
            <CharacterForm send={onSubmitHandler}/>
        </div>
    )
    
}

export default CharacterAdd;