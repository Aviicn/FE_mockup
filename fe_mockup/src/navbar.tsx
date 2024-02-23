import React, { useState } from 'react';
import Logo from './assets/images/Logo.png'; // Pastikan impor gambar di atas komponen

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex items-center justify-between bg-black h-16 px-8"> {/* Menggunakan justify-between agar konten terpisah di kanan dan kiri */}
      <div className="flex items-center space-x-8"> {/* Menggunakan items-center agar konten vertikal di tengah */}
        <img className="w-11 h-11" src={Logo} alt="Logo" />
        <p className="text-base text-slate-50 font-interbold">
          PEMILU PRESIDEN DUMBWAYS.ID
        </p>
      </div>
      <ul className="text-white  flex items-center justify-end gap-5">
        <li>Partai </li>
        <li> | </li>
        <li> Paslon </li>
        <li> | </li>
        <li>Voting</li>

        {isLoggedIn ? (
          <div>
            <button className='w-7 rounded-full bg-white text-black' onClick={handleClick}>A</button>
          </div>
        ) : (
          <div>
            <button className="text-black rounded-s-none bg-white 	border-radius: 0.375rem w-28" onClick={handleClick}>Login</button>
          </div>
        )}   
         </ul>
    </div>
  );
}

export default Navbar;
