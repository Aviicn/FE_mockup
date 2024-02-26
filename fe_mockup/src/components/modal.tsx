import React from "react";
import '../index.css';
import Kb from '../assets/images/kb.jpg';
import Jk from '../assets/images/jk.jpg';
import Mingyu from '../assets/images/mingyu.jpg';
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
                    <p className="mb-4 text-lg">Memindahkan Indonesia ke Isekai</p>
                    <h3 className="mb-2 text-lg font-bold">Partai Pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai persatuan monyet</li>
                        <li>Partai sapi perah indonesia</li>
                        <li>Partai pisang masak</li>
                    </ul>
                </div>
                <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <img src={Kb} alt="Kb" />
                        </div>
                    </div>
                    <h2 className="ml-4 text-xl font-bold">KIM BEOM</h2>
                    <p className="mb-4 text-lg">Memindahkan Indonesia ke Isekai</p>
                    <h3 className="mb-2 text-lg font-bold">Partai Pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai persatuan monyet</li>
                        <li>Partai sapi perah indonesia</li>
                        <li>Partai pisang masak</li>
                    </ul>
                </div>
                <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={Mingyu} alt="Mingyu" />
                        </div>
                    </div>
                    <h2 className="ml-4 text-xl font-bold">KIM MINGYU</h2>
                    <p className="mb-4 text-lg">Memindahkan Indonesia ke Isekai</p>
                    <h3 className="mb-2 text-lg font-bold">Partai Pengusung:</h3>
                    <ul className="mb-4 text-lg list-disc list-inside">
                        <li>Partai persatuan monyet</li>
                        <li>Partai sapi perah indonesia</li>
                        <li>Partai pisang masak</li>
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