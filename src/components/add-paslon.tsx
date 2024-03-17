import React, { useState } from 'react';
import '../index.css';
import Navbar2 from './navbar2';
import Hs from '../assets/images/hs.jpg';
import axios from 'axios';

const AddPaslon: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    no: '',
    visionAndMission: '',
    coalition: '',
  });

  // Handler untuk mengubah data form saat input berubah
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk mengirim form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("dsjdhsjhd", handleSubmit)
    const authToken = localStorage.getItem("authToken")
    
    try {
      const response = await axios.post(
        'http://localhost:3000/api/paslon',
        {
          no: formData.no,
          name: formData.name,
          visionAndMission: formData.visionAndMission,
          coalition: formData.coalition,
          picture: "null",
          

        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      alert("Paslon Added" );
    } catch (error) {
      console.error("Error:", error); 
      alert("User not registered" + error);
    };
    
  };

  
  return (
    <>
      <Navbar2 />
      <div>
        <h1 className="mt-10 mb-4 text-5xl font-black text-center text"> ADD PASLON</h1>
      </div>
      <div className="flex flex-row justify-center mt-20 ">
        <img src={Hs} alt='Hs' className="mr-8 rounded-lg w-80 h-80" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Nama </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="no" className="block font-medium">no Urut</label>
            <input
              type="number"
              id="no"
              name="no"
              value={formData.no}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md  "
            />
          </div>
          <div>
            <label htmlFor="visionAndMission" className="block font-medium">Visi Misi</label>
            <textarea
              id="visionAndMission"
              name="visionAndMission"
              value={formData.visionAndMission}
              onChange={handleChange}
              className="w-[580px] h-[90px] border-black border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="coalition" className="block font-medium">Koalisi</label>
            <textarea
              id="coalition"
              name="coalition"
              value={formData.coalition}
              onChange={handleChange}
              className="w-[580px] h-[90px] border-black border rounded-md"
            />
          </div>
          <button type="submit" className="bgc2 w-[503px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500"  >Submit</button>
        </form>
      </div>

    </>
  );
};

export default AddPaslon;





