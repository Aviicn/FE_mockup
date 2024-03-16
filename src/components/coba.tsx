// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';


// ChartJS.register(ArcElement, Tooltip, Legend);

// export  const data = {
//   labels: ['Red', 'Blue', 'Yellow',],
//   datasets: [
//     {
//       label: '% of Total Votes',
//       data: [78, 45, 25, ],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function Coba() {
//   return (
//     <div className='w-96'>
//     <Pie data={data} />;
//     </div>
//     )
// }




// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Candidate } from '../interface/carousel';

// const candidates: Candidate[] = [
//     {
//       id: 1,
//       name: 'SHIM JAE YOON',
//       visiMisi: [
//         'Memindahkan Indonesia ke Isekai.',
//         'Nonton anime 3x sehari.',
//         'Melakukan peresapan pada budaya jepang.',
//       ],
//       koalisi: ['Partai Persatuan Wiboo.', 'Partai Redbull.', 'Partai Black Magic.'],
//       image: 'Jk',
//     },
//     // Add more candidates as needed
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const SlidingPage: React.FC = () => {
//     return (
    //   <Slider {...settings}>
    //     {candidates.map((candidate) => (
    //       <div key={candidate.id} className="flex flex-row flex justify-center  mx-auto mt-10 p-4 bg-white rounded-lg shadow-md w-[650px] h-[494]">
    //         <div className="mt-6 img">
    //           <img src={candidate.image} alt={candidate.name} />
    //         </div>
    //         <div className="flex flex-col ml-10">
    //           <p className="mb-2 font-bold -lg">Nomor Urut : {candidate.id}</p>
    //           <p className="mb-4 text-3xl font-bold ">{candidate.name}</p>
    //           <h3 className="mb-2 font-bold text-">Visi & Misi :</h3>
    //           <ul className="mb-4 text-lg list-disc list-inside">
    //             {candidate.visiMisi.map((visiMisi, index) => (
    //               <li key={index}>{visiMisi}</li>
    //             ))}
    //           </ul>
    //           <h3 className="mb-2 text-lg font-bold">Koalisi :</h3>
    //           <ul className="text-lg list-disc list-inside">
    //             {candidate.koalisi.map((koalisi, index) => (
    //               <li key={index}>{koalisi}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
//     );
//   };
  
//   export default SlidingPage;