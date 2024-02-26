import React, { useState } from 'react';
import '../index.css';
import Navbar2 from './navbar2';
import Jk from '../assets/images/jk.jpg';
import { useNavigate } from 'react-router-dom';


const AddPaslon: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: '',
    nomor: '',
    visimisi: '',
  });

  // Handler untuk mengubah data form saat input berubah
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk mengirim form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Kirim data ke server atau lakukan operasi lainnya di sini
  };

  const navigate = useNavigate();
  const ListPaslon = () => {
      navigate('/list-paslon');
  };

  return (
    <>
      <Navbar2 />
      <div>
        <h1 className="text-5xl font-black mb-4 text mt-10 text-center"> ADD PASLON</h1>
      </div>
      <div className="flex flex-row justify-center mt-20 ">
        <img src={Jk} alt='Jk' className="w-[368px] h-70 rounded-lg mr-8" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nama" className="block font-medium">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="nomor" className="block font-medium">Nomor Urut</label>
            <input
              type="number"
              id="nomor"
              name="nomor"
              value={formData.nomor}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md  "
            />
          </div>
          <div>
            <label htmlFor="visimisi" className="block font-medium">Visi Misi</label>
            <textarea
              id="visimisi"
              name="visimisi"
              value={formData.visimisi}
              onChange={handleChange}
              className="w-[580px] h-[90px] border-black border rounded-md"
            />
          </div>
          <button type="submit" className="bgc2 w-[503px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" onClick={ListPaslon} >Submit</button>
        </form>
      </div>

    </>
  );
};

export default AddPaslon;





