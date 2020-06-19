import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.styles.css';
import { navigate } from '@reach/router';

const SignUp = props => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post('http://localhost:8000/api/users', user)
            .then(res => {
                console.log(res);
                setErrors(res.data.errors);
                if(res.data.msg == "Login success") {
                    navigate("/characters");
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="body">
            <div className="sectionHeader">Sign Up</div>
            <form onSubmit={onSubmitHandler} className="signupForm">
                <div className="field">
                    <label className="label">User Name</label>
                    <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">E-Mail</label>
                    <input type="text" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <input type="password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default SignUp;