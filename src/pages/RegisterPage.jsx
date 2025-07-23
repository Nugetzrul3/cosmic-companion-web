import { gql, useMutation } from "@apollo/client"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

// Login API
const REGISTER = gql`
    mutation Register($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            token
            user {
                email
            }
            error
        }
    }
`;

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup, { loading, _ }] = useMutation(REGISTER);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup({ variables: { email: email, password: password } });
        if (res.data.signup.error) {
            toast.error("Error with signup: " + res.data.signup.error)
        } else {
            localStorage.setItem('token', res.data.signup.token);
            toast.success('Signed up successfully');
            navigate("/")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type='email' onChange={e => setEmail(e.target.value)} />
            <input type='password' onChange={e => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>Login</button>
        </form>
    )

}
