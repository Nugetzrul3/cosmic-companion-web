import { gql, useMutation } from "@apollo/client"
import React, { useState } from 'react';
import { toast } from "react-toastify";

// Login API
const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                email
            }
            error
        }
    }
`;

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { loading, _ }] = useMutation(LOGIN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login({ variables: { email: email, password: password } });
        console.log(res);
        if (res.data.login.error) {
            toast.error("Error with login: " + res.data.login.error)
        } else {
            localStorage.setItem('token', res.data.login.token);
            toast.success('Logged in successfully');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type='email' onChange={e => setEmail(e.target.value)} />
            <input type='password' onChange={e => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>Login</button>
        </form>
    )

}
