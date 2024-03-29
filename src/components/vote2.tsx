import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Jk from '../assets/images/jk.jpg';
import Hs from '../assets/images/hs.jpg';
import Jw from '../assets/images/jw.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Candidate } from '../interface/carousel';
import Slider from 'react-slick';


ChartJS.register(ArcElement, Tooltip, Legend);

export  const data = {
    
    datasets: [
      {
        label: '% of Total Votes',
        data: [78, 25, 45],
        backgroundColor: [
          'rgb(234,112,112)',
          'rgb(96,190,248)',
          'rgb(245,210,76)',
        ],
         
        borderColor: [
          'rgb(234,112,112)',
          'rgb(96,190,248)',
          'rgb(245,210,76)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const candidates: Candidate[] = [
    {
      id: 1,
      name: 'SHIM JAE YOON',
      visiMisi: [
        'Memindahkan Konser  ke depan rumah Avi.',
        'Nonton Drakor 3x sehari.',
        'Melakukan peresapan pada budaya Korea Selatan.',
      ],
      koalisi: ['Partai HYBE.', 'Partai YG.', 'Partai BeLift.'],
      image: Jk,
    },
    {
      id: 2,
      name: 'LEE HEESUNG',
      visiMisi: [
        'Memindahkan I-LAND di Puncak Bogor.',
        'Nonton MV 3x sehari.',
        'Melakukan peresapan pada budaya Korea Selatan.',
      ],
      koalisi: ['Partai PLEDIS.', 'Partai SOOP.', 'Partai RAIN.'],
      image: Hs,
    },
    {
    id: 3,
      name: 'YANG JUNGWON',
      visiMisi: [
        'Konser GRATIS setiap bulan.',
        'Fan Meet setiap bulan.',
        'Melakukan peresapan pada budaya Korea Selatan.',
      ],
      koalisi: ['Partai CUBE.', 'Partai EDAM.', 'Partai VINE.'],
      image: Jw,
    },
  ];

  const settings = {
    dots: true,
     infinite: true,
    speed: 500,
    width: '50px',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const Vote: React.FC = () => {
    const navigate = useNavigate();
    const goToSModal = () => {
        navigate('/modal');


    };
    return (
        <>
            <Navbar />
            <div className="relative body">
                <div className="w-full p-8 mx-auto bg-white ">
                    <div className="py-2 text-5xl font-black text-center">
                        <h1>INFO PEMILU TER-UPDATE</h1>
                    </div>
                    <div className="flex flex-row justify-center w-full gap-4 md:w-auto md:justify-start md:gap-0 mt-7 md:mt-0">
                    <div className='mt-28 w-96'>
                        <h1 className='flex flex-row mb-16 text-4xl font-black ml-36'>Hasil:</h1>
                        <Pie data={data} />
                    </div>
                    <div className="flex flex-row gap-4 mx-auto mt-7 md:flex-col md:justify-between">
                        <div className="flex  w-[657px] p-4 bg-red-400 shadow-red-400 shadow-lg rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 3</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>SHIM JAE YOON</h1>
                                <h1>78%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4 bg-amber-300 shadow-amber-300 shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 1</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>KIM BEOM</h1>
                                <h1>45%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4  bg-sky-400 shadow-sky-400  shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 2</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>LEE HEESUNG</h1>
                                <h1>25%</h1>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='flex justify-center mt-10 text-3xl font-bold'>
                       <h1>ANDA SUDAH MEMILIH !!!</h1>
                        </div>
                        <div className="h-[500px] w-full bg-gray-300 flex-row">
  <h2 className="mt-10 mb-2 text-5xl font-black text-center text">INFO PASLON</h2>
  <Slider {...settings} className='flex flex-row bg-white w-[900px] mx-auto mt-10 border rounded-lg'>
    {candidates.map((candidate) => (
      <div key={candidate.id} className='flex flex-col items-center'>
        <div className='flex flex-row items-center'>
          <div className="mt-10 mb-10 ml-10 ">
            <img src={candidate.image} className='h-[300px] ' />
          </div>
          <div className='ml-20'>
            <p className="mb-2 font-bold -lg">Nomor Urut: {candidate.id}</p>
            <p className="mb-4 text-3xl font-bold">{candidate.name}</p>
            <div> {/* Div untuk visi & misi */}
              <h3 className="mb-2 font-bold text-">Visi & Misi:</h3>
              <ul className="mb-4 text-lg list-disc list-inside">
                {candidate.visiMisi.map((visiMisi, index) => (
                  <li key={index}>{visiMisi}</li>
                ))}
              </ul>
            </div>
            <div> {/* Div untuk koalisi */}
              <h3 className="mb-2 text-lg font-bold">Koalisi:</h3>
              <ul className="text-lg list-disc list-inside">
                {candidate.koalisi.map((koalisi, index) => (
                  <li key={index}>{koalisi}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>



                    <div className="flex justify-center text-4xl font-bold text-center text-red-600 py-28">

                        <h1>
                            PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                            <br />YANG PENTING TIDAK MELEGALKAN SLOT
                        </h1>


                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}
export default Vote;