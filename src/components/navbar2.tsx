import React from 'react';
import { Link } from 'react-router-dom';
import pp from '../assets/images/pp.jpg';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar2: React.FC = () => {
  const navigate = useNavigate();
  const goToHome = () => {
      navigate('/');
  };
  
 
   

  return (
    <div className="flex items-center justify-between h-16 px-8 bg-black"> 
      <div className="flex items-center space-x-8"> 
        <img className="w-11 h-11" src={Logo} alt="Logo" />
        <p className="text-base text-slate-50 font-interbold">
          DASHBOARD PEMILU
        </p>
      </div>
      <ul className="flex items-center justify-end gap-5 text-white">
        <li><Link to='/list-partai'> Partai </Link></li>
        <li> | </li>
        <li><Link to='/list-paslon'> Paslon </Link></li>   
        <div>
            <button onClick={goToHome}> <img src={pp} alt=""  className='mt-2 rounded-full w-11 h-11'/> </button>
          </div>
       
         </ul>
    </div>
  );
}

export default Navbar2;
