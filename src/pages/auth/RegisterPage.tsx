import { useMutation } from "@apollo/client/react"
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Mutations } from "../../apollo/mutations";
import { useToast } from "../../hooks/useToast.tsx";

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup, { loading, error }] = useMutation(Mutations.getRegisterMutation());
    const navigate = useNavigate()
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
                    toastId: "register-error"
                }
            });
            return;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await signup({ variables: { firstName, lastName, username, email, password } });

        if (!data) return;

        if (data.signup.error) {
            showToast({
                data: {
                    title: "Error!",
                    content: data.signup.error,
                },
                type: "error",
                options: {
                    toastId: "register-error",
                }
            })
        } else {
            localStorage.setItem('token', data.signup.token ?? "");
            showToast({
                data: {
                    title: "Success!",
                    content: "Registration Successful",
                },
                options: {
                    toastId: "register-success",
                }
            })
            setTimeout(() => {
                navigate("/")
            }, 2000);
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
            {loading && <h2>Loading...</h2>}
            <button type="submit" disabled={loading}>Login</button>
        </form>
    )

}
