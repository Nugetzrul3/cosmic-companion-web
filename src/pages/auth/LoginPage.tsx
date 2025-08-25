import { useMutation } from "@apollo/client/react"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Mutations } from "../../apollo/mutations";
import { CustomToast } from "../../components/CustomToast";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { loading}] = useMutation(Mutations.getLoginMutation());
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await login({ variables: { email: email, password: password } });

        if (!data) return;

        if (data.login.error) {
            toast(CustomToast, {
                data: {
                    title: "Error!",
                    content: data.login.error,
                },
                toastId: 'login-error'
            });
        } else {
            localStorage.setItem('token', data.login.token ?? "");
            toast(CustomToast, {
                data: {
                    title: "Success!",
                    content: "Logged in successfully",
                },
                toastId: 'login-success'
            });
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type='email' onChange={e => setEmail(e.target.value)} />
            <input type='password' onChange={e => setPassword(e.target.value)} />
            {loading && <h2>Loading...</h2>}
            <button type="submit" disabled={loading}>Login</button>
        </form>
    )

}
