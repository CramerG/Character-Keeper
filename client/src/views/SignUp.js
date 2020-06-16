import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.styles.css';

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
            })
            .catch(err => console.log(err));
    }

    const emailTip = () => {
        if (errors.email !== undefined) {
            console.log("Email Error");
            if(errors.email.kind === "required") {
                return(
                    <p className="formError">Email is required</p>
                );
            } else if (errors.email.kind === "unique") {
                return(
                    <p className="formError">This Email has already been registered</p>
                )
            } else if (errors.email.kind === "user defined") {
                return(
                    <p className="formError">Please enter a valid email address</p>
                );
            } else {
                return(<div></div>);
            }
        }     
    }

    const usernameTip = () => {
        if (errors.username !== undefined) {
            if (errors.username.kind === "required") {
                return(
                    <p className="formError">Username is required</p>
                );
            } else if (errors.username.kind === "unique") {
                return(
                    <p className="formError">Username unavailable</p>
                );
            }
        }
    }

    const passwordTip = () => {
        if (errors.password !== undefined) {
            if (errors.password.kind === "required") {
                return(
                    <p className="formError">A password is required</p>
                );
            }
        }
    }

    const confirmPasswordTip= () => {
        if(errors.confirmPassword !== undefined) {
            return(
                <p className="formError">Passwords do not match</p>
            );
        }
    }

    return(
        <div className="body">
            <div className="sectionHeader">Sign Up</div>
            <form onSubmit={onSubmitHandler}>
                <div className="field">
                    <label className="label">User Name</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                    {usernameTip()}
                </div>
                <div className="field">
                    <label className="label">E-Mail</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    {emailTip()}
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {passwordTip()}
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {confirmPasswordTip()}
                </div>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default SignUp;