import { gql, useMutation } from "@apollo/client"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

// Login API
const REGISTER = gql`
    mutation Register(
        $firstName: String!, $lastName: String!, $username: String!,
        $email: String!, $password: String!
    ) {
        signup(
            data: {
                firstName: $firstName, lastName: $lastName, username: $username, 
                email: $email, password: $password
            }
        ) {
            refreshToken
            token
            user {
                email
            }
            error
        }
    }
`;

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup, { loading }] = useMutation(REGISTER);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup({ variables: { firstName, lastName, username, email, password } });
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
            First Name: <input type='text' onChange={e => setFirstName(e.target.value)} />
            Last Name: <input type='text' onChange={e => setLastName(e.target.value)} />
            Username: <input type='text' onChange={e => setUsername(e.target.value)} />
            Email: <input type='email' onChange={e => setEmail(e.target.value)} />
            Password: <input type='password' onChange={e => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>Login</button>
        </form>
    )

}
