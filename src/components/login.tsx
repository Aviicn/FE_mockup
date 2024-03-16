import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

interface handleAuth {
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void
    login: (e: React.FormEvent<HTMLFormElement>) => void
}

interface LoginPageState {
    username: string;
    password: string;
    error: string | null;
}

export default function Login(props: handleAuth) {

    const [state, setState] = useState<LoginPageState>({
        username: '',
        password: '',
        error: null,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                username: state.username,
                password: state.password
            });
            console.log("ASD", response.data)
            if(!response.data.data) return
            handleSuccessfulLogin(response.data.data,response.data.user);
            props.login(e);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    

    const handleSuccessfulLogin = (data: string, user: { role: string; }) => {
        localStorage.setItem('authToken', data);
        localStorage.setItem('role', user.role);

    };
    return (
        <>
            <div>
                <h1 className="mt-10 mb-4 text-5xl font-black text-center text">LOGIN</h1>
            </div>
            <div className="flex flex-row justify-center mt-20 ">
                <form onSubmit={handleSubmit} className="mb-20 space-y-4 ">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='type your username'
                            value={state.username}
                            onChange={handleInputChange}
                            className="w-[478px] h-[70px] border-black border rounded-md text-center"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='type your password'
                            value={state.password}
                            onChange={handleInputChange}
                            className="w-[478px] h-[70px] border-black border rounded-md text-center"
                        />
                    </div>
                    <button type="submit" className="bgc2 w-[478px] h-[68px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" >Submit</button>
                    <p className='italic'> Belum memiliki akun? <Link className='font-medium underline text-cyan-600' to='/register'>Register</Link></p>
                </form>
            </div>
        </>
    );
};
