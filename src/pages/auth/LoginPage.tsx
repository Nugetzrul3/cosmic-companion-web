import { useMutation } from "@apollo/client/react"
import React, {useEffect, useState} from 'react';
import { useToast } from "../../hooks/useToast.tsx";
import { Mutations } from "../../apollo/mutations";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { loading, error }] = useMutation(Mutations.getLoginMutation());
    const navigate = useNavigate();
    const { showToast } = useToast();

    useEffect(() => {
        if (error) {
            showToast({
                data: {
                    title: "Unexpected Error!",
                    content: "Something went wrong! Please try again later",
                },
                type: "error",
                options: {
                    toastId: "login-error"
                }
            });
            return;
        }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await login({ variables: { email: email, password: password } });

        if (!data) return;

        if (data.login.error) {
            showToast({
                data: {
                    title: "Error!",
                    content: data.login.error,
                },
                type: "error",
                options: {
                    toastId: "login-error"
                }
            });
        } else {
            localStorage.setItem('token', data.login.token ?? "");
            showToast({
                data: {
                    title: "Success!",
                    content: "Logged in successfully!",
                },
                options: {
                    toastId: "login-success"
                }
            });
            setTimeout(() => {
                navigate("/")
            }, 2000);
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
