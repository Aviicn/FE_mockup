import React, { useState } from 'react';
import '../index.css';
import Navbar2 from './navbar2';
import Hs from '../assets/images/hs.jpg';
import { useNavigate } from 'react-router-dom';


const AddPartai: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    nama: '',
    nomor: '',
    ketua:'',
    visimisi: '',
    alamat:'',
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
  const ListPartai = () => {
      navigate('/list-partai');
  };

  return (
    <>
      <Navbar2 />
      <div>
        <h1 className="mt-10 mb-4 text-5xl font-black text-center text"> ADD PARTAI</h1>
      </div>
      <div className="flex flex-row justify-center mt-20 ">
        <img src={Hs} alt='Hs' className="w-80 h-80 rounded-lg mr-8" />
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="nomor" className="block font-medium">Nomor Urut</label>
            <input
              type="nomor"
              id="nomor"
              name="nomor"
              value={formData.nomor}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md  "
            />
          </div>
          <div>
            <label htmlFor="nama" className="block font-medium">Nama Partai</label>
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
            <label htmlFor="ketua" className="block font-medium">Ketua Umum</label>
            <input
              type="text"
              id="ketua"
              name="ketua"
              value={formData.ketua}
              onChange={handleChange}
              className="w-[580px] h-[50px] border-black border rounded-md"
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
          <div>
            <label htmlFor="alamat" className="block font-medium">Alamat</label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-[580px] h-[90px] border-black border rounded-md"
            />
          </div>
          <button type="submit" className="bgc2 w-[503px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" onClick={ListPartai} >Submit</button>
        </form>
      </div>

    </>
  );
};

export default AddPartai;





