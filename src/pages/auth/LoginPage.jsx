import { useMutation } from "@apollo/client"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Mutations } from "../../apollo/mutations";
import { CustomToast } from "../../components/CustomToast";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { loading }] = useMutation(Mutations.getLoginMutation());

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login({ variables: { email: email, password: password } });
        if (res.data.login.error) {
            toast(CustomToast, {
                data: {
                    title: "Error!",
                    content: res.data.login.error,
                },
                autoClose: 4000,
                toastId: 'login-error'
            });
        } else {
            localStorage.setItem('token', res.data.login.token);
            toast(CustomToast, {
                data: {
                    title: "Success!",
                    content: "Logged in successfully",
                },
                autoClose: 4000,
                toastId: 'login-success'
            })
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
