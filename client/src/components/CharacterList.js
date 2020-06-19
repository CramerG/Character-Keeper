import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/character.styles.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const CharacterList = props => {
    axios.defaults.withCredentials = true;
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/bx')
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err));
    }, []);

    const showCharacters = () => {
        if (characters.length === 0) {
            return(
                <p>You have no characters for this eddition</p>
            );
        } else {
            return(
                characters.map((char, idx) => {
                    return(
                        <div className="charSheet" key={idx}>
                            <div className="infoLine">Name: {char.name}</div>
                            <div className="clearBoth"/>
                            <div className="infoLine">Race: {char.race}</div>
                            <div className="infoLine">Class: {char.class}</div>
                            <div className="infoLine">Level: {char.level}</div>
                            <div className="clearBoth"/>
                            <div className="infoLine">Str: {char.str}</div>
                            <div className="infoLine">Dex: {char.dex}</div>
                            <div className="infoLine">Con: {char.con}</div>
                            <div className="infoLine">Int: {char.int}</div>
                            <div className="infoLine">Wis: {char.wis}</div>
                            <div className="infoLine">Cha: {char.cha}</div>
                            <div className="clearBoth"/>
                            <div className="infoLine">AC: {char.ac}</div>
                            <div className="infoLine">THAC0: {char.thac0}</div>
                            <div className="clearBoth"/>
                            <EditButton id={char._id}/>
                            <DeleteButton/>
                            <div className="clearBoth"/>
                        </div>
                    );
                })
            );      
        }
    }

    return(
        <div>
            <div className="sectionHeader">B/X Characters</div>
            {showCharacters()}
        </div>
    )
}

export default CharacterList;