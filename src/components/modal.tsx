import React from "react";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jk from '../assets/images/jk.jpg'
import Paslon from '../interface/auth';

interface ModalProps { }

const Modal: React.FC<ModalProps> = ({ }) => {
    const [modalPaslons, setModalPaslons] = React.useState<Paslon[]>([]);
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    let choosed = 0

    React.useEffect(() => {
        const authToken = localStorage.getItem("authToken")
        console.log(authToken)

        const fetchPaslons = async () => {
            const { data, status } = await axios.get<Paslon[]>(
                'http://localhost:3000/api/paslons',
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authToken}`,
                    },
                },
            );

            console.log(data.data)
            //const Paslons = await response.data.data
            setModalPaslons(data.data);
            console.log("modal", modalPaslons)
        };


        fetchPaslons();
    }, []);

    const handleClickVote2 = () => {
        console.log("sasasasddd", choosed)
        handleSubmit(choosed)
        navigate("/vote2");
    };

    const choose = (paslon: number) => {
        
        choosed = paslon
        console.log(choosed)
}


    const handleSubmit = async (paslon: number) => {
const authToken = localStorage.getItem("authToken")
        console.log("paslon",paslon)
        try {
            const response = await axios.post("http://localhost:3000/api/vote", {
                paslon: paslon,
            },
            {
                headers: {
                  Accept: 'application/json',
                  Authorization: `Bearer ${authToken}`,
                },
              });
            alert("vote success");
        } catch (error) {
            alert("voter already voted");
            console.error('An error occurred:', error);
        };
    };

    return (

        <div className="flex flex-col items-center mt-10">
            <div className="text-5xl font-black text">
                <h1>MASUKAN PILIHAN MU</h1>
            </div>
            <div className="flex justify-between w-full mt-10 space-x-3">
                {modalPaslons?.map((modal, index) => {
                    return (
                        <div className="p-4 shadow-md bg-zinc-200 rounded-xl hover:bg-yellow-300" onClick={() => choose(index)} >
                            <div className="flex items-center justify-between">
                                {/* <sup className="absolute top-0 right-0 m-2 text-xs">{modal.no}</sup> */}
                                <div className="flex items-center">
                                </div>
                                <img src={jk} alt="Jk" />

                            </div>
                            <h2 className="ml-4 text-xl font-bold"> {modal.name}</h2>
                            <p className="mb-4 text-lg">{modal.visionAndMission}</p>
                            <h3 className="mb-2 text-lg font-bold">Partai pengusung:</h3>
                            <ul className="mb-4 text-lg list-disc list-inside">
                                <li>{modal.coalition}</li>
                                <li>{modal.coalition}</li>
                                <li>{modal.coalition}</li>
                            </ul>
                        </div>


                    );
                })}
            </div>
            <div className="flex justify-between my-10 space-x-52">
                <button className=" cb w-[503px] h-[68px] font-bold text-3xl text-lime-950 ring-offset-2 ring-4 ring-lime-950 bg-white rounded hover:bg-lime-500">
                    RESET
                </button>
                <button className="w-[503px] h-[68px] font-bold text-3xl text-white rounded bgc2 hover:bg-lime-500" onClick={handleClickVote2} >
                    SUBMIT
                </button>
            </div>
        </div>

    )

}
export default Modal;