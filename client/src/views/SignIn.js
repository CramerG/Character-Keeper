import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.styles.css';
import { navigate } from '@reach/router';

const SignIn = props => {
    axios.defaults.withCredentials = true;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        axios.post('http://localhost:8000/api/users/login', user)
            .then(res => {
                console.log("Login Success")
                setError("");
                navigate("/characters");
            })
            .catch(err => {
                console.log(err)
                setError("No Match");
            });
    }

    const showError = () => {
        if(error === "No Match") {
            return(
                <p className="formError">Username or password incorrect</p>
            );
        }
    }

    return(
        <div>
            <div className="sectionHeader">Sign In</div>
            <form onSubmit={onSubmitHandler}>
                <div className="field">
                    <label className="label">Username</label>
                    <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                {showError()}
                <input type="submit" value="Sign In"/>
            </form>
        </div>
    );
}

export default SignIn;