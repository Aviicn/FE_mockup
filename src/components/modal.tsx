import React from "react";
import '../index.css';
import Jw from '../assets/images/jw.jpeg';
import Jk from '../assets/images/jk.jpg';
import hs from '../assets/images/hs.jpg';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC = () => {
    const navigate = useNavigate();
    const goToVote2 = () => {
        navigate('/vote2');
    };

    return (

        <div className="flex flex-col items-center mt-10">
            <div className="text-5xl font-black text">
                <h1>MASUKAN PILIHAN MU</h1>
            </div>
            <div className="flex justify-between w-full mt-10 space-x-3">
                <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300">
                    <div className="flex items-center justify-between">

                        <sup className="absolute top-0 right-0 m-2 text-xs">1</sup>
                        <div className="flex items-center">
                            <img src={Jk} alt="Jk" />
                        </div>

                    </div>
                    <h2 className="ml-4 text-xl font-bold">SHIM JAE YOON</h2>
                    <p className="mb-4 text-lg">Memindahkan Konser  ke depan rumah Avi</p>
                    <h3 className="mb-2 text-lg font-bold">Partai pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai HYBE</li>
                        <li>Partai YG</li>
                        <li>Partai BeLift</li>
                    </ul>
                </div>

                <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={hs} alt="hs" />
                        </div>
                    </div>
                    <h2 className="ml-4 text-xl font-bold">LEE HEESUNG</h2>
                    <p className="mb-4 text-lg">Memindahkan I-LAND di Puncak Bogor</p>
                    <h3 className="mb-2 text-lg font-bold">Partai Pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai PLEDIS</li>
                        <li>Partai SOOP</li>
                        <li>Partai RAIN</li>
                    </ul>
                </div>
                <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <img src={Jw} alt="Jw" />
                        </div>
                    </div>
                    <h2 className="ml-4 text-xl font-bold">YANG JUNGWON</h2>
                    <p className="mb-4 text-lg">Konser GRATIS setiap bulan</p>
                    <h3 className="mb-2 text-lg font-bold">Partai Pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai CUBE</li>
                        <li>Partai EDAM</li>
                        <li>Partai VINE</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between my-10 space-x-52">
                <button className=" cb w-[503px] h-[68px] font-bold text-3xl text-lime-950 ring-offset-2 ring-4 ring-lime-950 bg-white rounded hover:bg-lime-500">
                    RESET
                </button>
                <button className="w-[503px] h-[68px] font-bold text-3xl text-white rounded bgc2 hover:bg-lime-500" onClick={goToVote2}>
                    SUBMIT
                </button>
            </div>
        </div>

    )
}
export default Modal;