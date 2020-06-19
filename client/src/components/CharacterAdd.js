import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.styles.css';
import '../styles/character.styles.css';
import { navigate } from '@reach/router';

const CharacterAdd = props => {
    axios.defaults.withCredentials = true;
    const [name, setName] = useState();
    const [charClass, setCharClass] = useState("fighter");
    const [race, setRace] = useState("human");
    const [level, setLevel] = useState();
    const [str, setStr] = useState();
    const [dex, setDex] = useState();
    const [con, setCon] = useState();
    const [int, setInt] = useState();
    const [wis, setWis] = useState();
    const [cha, setCha] = useState();
    const [ac, setAC] = useState();
    const [thac0, setThac0] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const character = {
            name: name,
            class: charClass,
            race: race,
            level: level,
            str: str,
            dex: dex,
            con: con,
            int: int,
            wis: wis,
            cha: cha,
            ac: ac,
            thac0: thac0
        };
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
            <form onSubmit={onSubmitHandler} className="charForm">
                <div className="fieldWrapperW">
                    <label className="label">Name</label>
                    <input type="text" required onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="clearBoth"/>
                <div className="fieldWrapperW">
                    <div className="statW">
                        <label className="label">Class</label>
                        <select onChange={(e) => {setCharClass(e.target.value)}}>
                            <option value="fighter">Fighter</option>
                            <option value="cleric">Cleric</option>
                            <option value="magicuser">Magic User</option>
                            <option value="thief">Theif</option>
                        </select>
                    </div>
                    <div className="statL">
                        <label className="label">Race</label>
                        <select onChange={(e) => {setRace(e.target.value)}}> 
                            <option value="human">Human</option>
                            <option value="elf">Elf</option>
                            <option value="dwarf">Dwarf</option>
                            <option value="halfling">Halfling</option>
                        </select>
                    </div>
                    <div className="clearBoth"/>
                </div>
                <div className="field">
                    <label className="label">Level</label>
                    <input type="number" min="1" max="20" required onChange={(e) => {setLevel(e.target.value)}}/>
                </div>
                <div className="fieldWrapper">
                    <div className="statL">
                        <label className="label">Strength</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setStr(e.target.value)}}/>
                    </div>
                    <div className="statL">
                        <label className="label">Dexterity</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setDex(e.target.value)}}/>
                    </div>
                    <div className="clearBoth"/>
                </div>
                <div className="fieldWrapper">
                    <div className="statL">
                        <label className="label">Constitution</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setCon(e.target.value)}}/>
                    </div>
                    <div className="statL">
                        <label className="label">Intelegence</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setInt(e.target.value)}}/>
                    </div>
                    <div className="clearBoth"/>
                </div>
                <div className="fieldWrapper">
                    <div className="statL">
                        <label className="label">Wisdom</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setWis(e.target.value)}}/>
                    </div>
                    <div className="statL">
                        <label className="label">Charisma</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setCha(e.target.value)}}/>
                    </div>
                <div className="clearBoth"/>
                </div>
                <div className="fieldWrapper">
                    <div className="statL">
                        <label className="label">Armor Class</label>
                        <input type="number" min="-5" max="20" required onChange={(e) => {setAC(e.target.value)}}/>
                    </div>
                    <div className="statL">
                        <label className="label">THAC0</label>
                        <input type="number" min="1" max="20" required onChange={(e) => {setThac0(e.target.value)}}/>
                    </div>
                    <div className="clearBoth"/>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
}

export default CharacterAdd;