import React, { useState } from 'react';
import '../index.css';
import Navbar2 from './navbar2';
import Hs from '../assets/images/hs.jpg';
import axios from 'axios';


const AddPartai: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    nomor: '',
    chairman: '',
    visionAndMission: '',
    address: '',
  });

  // Handler untuk mengubah data form saat input berubah
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk mengirim form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken")

    try {
      const response = await axios.post(
        'http://localhost:3000/api/partai',
        {
          nomor_urut: formData.nomor,
          name: formData.name,
          chairman: formData.chairman,
          visionAndMission: formData.visionAndMission,
          address: formData.address,
          picture: "null",
          paslon: 3

        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      alert("Partai Added" );
    } catch (error) {
      alert("User not registered" + error);
    };
    
  };

  

  return (
    <>
      <Navbar2 />
      <div>
        <h1 className="mt-10 mb-4 text-5xl font-black text-center text"> ADD PARTAI</h1>
      </div>
      <div className="flex flex-row justify-center mt-20 ">
        <img src={Hs} alt='Hs' className="mr-8 rounded-lg w-80 h-80" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nomor" className="block font-medium">Nomor Urut</label>
            <input
              type="text"
              id="nomor"
              name="nomor"
              value={formData.nomor}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md  "
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-medium">Nama Partai</label>
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
            <label htmlFor="chairman" className="block font-medium">Ketua Umum</label>
            <input
              type="text"
              id="chairman"
              name="chairman"
              value={formData.chairman}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md"
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
            <label htmlFor="address" className="block font-medium">Alamat</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-[580px] h-[90px] border-black border rounded-md"
            />
          </div>
          <button type="submit" className="bgc2 w-[503px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500"    >Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddPartai;





