import React, { useState } from 'react';
import axios from "axios";
import '../index.css';


const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        address: '',
        gender: '',
        username: '',
        password: '',
        role: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", {
                username: formData.username,
                password: formData.password,
                fullName: formData.fullname,
                address: formData.address,
                gender: formData.gender,
                role: formData.role,

            });
            alert("User registered");
        } catch (error) {
            alert("User not registered" + error);
            console.error('An error occurred:', error);
        };
    };


    return (
        <>
            <div>
                <h1 className="mt-10 mb-4 text-5xl font-black text-center text">REGISTER</h1>
            </div>
            <div className="flex flex-row justify-center mt-20 ">
                <form onSubmit={handleSubmit} className="mb-20 space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block font-medium">Alamat</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block font-medium">Jenis Kelamin</label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block font-medium">Role</label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            list="roleList"
                            className="w-[478px] h-[70px] border-black border rounded-md"
                        />
                        <datalist id="roleList">
                            <option value="admin" />
                            <option value="user" />
                        </datalist>
                    </div>

                    <button type="submit" className="bgc2 w-[478px] h-[68px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" >Submit</button>
                </form>
            </div>

        </>
    );
};
export default Register;



