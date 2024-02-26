
import React from "react";
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import Jk from '../assets/images/jk.jpg';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Vote2: React.FC = () => {
    return (

        <>
            <Navbar />
            <div className="relative body">
            <div className="p-8 bg-white max-w-[900px] mx-auto ">
                    <div className="py-2 text-5xl font-black text-center">
                        <h1>INFO PEMILU TER-UPDATE</h1>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-7 md:flex-col md:justify-between">
                        <div className="flex flex-row w-[657px] p-4 bg-red-400 shadow-red-400 shadow-lg rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 3</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>PARK SEO JOON</h1>
                                <h1>78%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4 bg-amber-300 shadow-amber-300 shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 1</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>SHIM JAE HYUN</h1>
                                <h1>45%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4  bg-sky-400 shadow-sky-400  shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 2</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>KIM MINGYU</h1>
                                <h1>25%</h1>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-red">
                        <h1 >ANDA SUDAH MEMILIH !!!</h1>
                        </div>
                        </div>
                        <div className=" h-[500px] bg-slate-300 ps-[100px]">
                        <h2 className="mt-10 mb-2 text-5xl font-black text-center text ">INFO PASLON</h2>
                            <div className="flex flex-row flex justify-center  mx-auto mt-10 p-4 bg-white rounded-lg shadow-md w-[650px] h-[494]">
                             <div className="mt-10 img">
                                <img src={Jk} alt="Jk"></img>
                                </div>
                                <div className="flex flex-col ml-10">
                                <p className="mb-2 font-bold -lg">Nomor Urut : 1</p>
                                <p className="mb-4 text-3xl font-bold ">SHIM JAE YOON</p>
                                <h3 className="mb-2 font-bold text-">Visi & Misi :</h3>
                                <ul className="mb-4 text-lg list-disc list-inside">
                                    <li>Memindahkan Indonesia ke Isekai.</li>
                                    <li>Nonton anime 3x sehari.</li>
                                    <li>Melakukan peresapan pada budaya jepang.</li>
                                </ul>
                                <h3 className="mb-2 text-lg font-bold">Koalisi :</h3>
                                <ul className="text-lg list-disc list-inside">
                                    <li>Partai Persatuan Wiboo.</li>
                                    <li>Partai Redbull.</li>
                                    <li>Partai Black Magic.</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center text-4xl font-bold text-center text-red-600 py-28">
                            
                                <h1>
                                    PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                                    <br/>YANG PENTING TIDAK MELEGALKAN SLOT
                                </h1>
                           

                        </div>
                    </div>
                
            </div>
            <Footer />
        </>
    )

}
export default Vote2;