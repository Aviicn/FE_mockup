import Navbar2 from "./navbar2";
import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { data } from "./vote";
import { Paslon } from "../interface/auth";

interface ListPaslonProps {}

const ListPaslon: React.FC<ListPaslonProps> = ({}) => {
  const [listPaslons, setListPaslons] = React.useState<Paslon[]>([]);
  const navigate = useNavigate();

  

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
      setListPaslons(data.data);
      console.log("listPaslons",listPaslons)
    };


    fetchPaslons();
  }, []);

  const handleClickAddPaslon = () => {
    navigate("/add-paslon");
  };
  return (
    <>
      <Navbar2 />
      <div className="flex justify-center mt-20 text-5xl font-black text">
        <h1>LIST PASLON </h1>
      </div>
      <div className="flex items-start justify-end mt-4 mr-32">
          <button
            onClick={handleClickAddPaslon}
            className="bg-[#5E5400] text-white px-4 py-2 rounded-md"
          >
            Add Paslon
          </button>
        </div>
      <div className="flex mx-auto mt-4 overflow-x-auto">
        <table className="table-auto w-[1095px] h-[153px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
          <thead>
            <tr>
              <th className="py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 -px-6 text-l border-slate-600">No.Urut</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Image</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Name</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600 w-[325px] h-[113px]">Visi Misi </th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Koalisi </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {listPaslons?.map((_Paslons, index) => {
                return (
                  <tr key={index} className="border-b dark:border-neutral-500">
              <td className="px-4 py-2 border">{_Paslons.name}</td>
              <td className="px-4 py-2 border">
                <img src={_Paslons.picture} alt="" className="w-20 h-20" />
              </td>
              <td className="px-4 py-2 border">{_Paslons.no}</td>
              <td className="px-4 py-2 border">{_Paslons.visionAndMission}</td>
              <td className="px-4 py-2 border">{_Paslons.coalition}</td>
            </tr>
            );
                })}
             
            
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ListPaslon;