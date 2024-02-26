import "../index.css";
import Navbar2 from './navbar2.tsx';
import Kb from '../assets/images/kb.jpg';
import Jk from '../assets/images/jk.jpg';
import Mingyu from '../assets/images/mingyu.jpg';
import { useNavigate } from 'react-router-dom';



const Admin: React.FC = () => {

  const data = [
    { no: 1, nama: 'Park Seo Joon', alamat: 'Itaewon', jenisKelamin: 'Laki-laki', paslon: 'Kim Beom' },
    { no: 2, nama: 'Lee Dong Wook', alamat: 'Seoul', jenisKelamin: 'Laki-laki', paslon: 'Kim mingyu' },
    { no: 3, nama: 'Ning Ning', alamat: 'Harbin', jenisKelamin: 'Perempuan', paslon: 'Shim Jae Yoon' },
    { no: 4, nama: 'Lee Heesung', alamat: 'Daegu', jenisKelamin: 'Laki-laki', paslon: 'Shim Jae Yoon' },
  ];

  return (
    <>
      <Navbar2 />
      <div className="relative">
        <div className="flex flex-col mt-10 text-5xl font-black text-center text ">
          <h1>DASHBOARD</h1>
        </div>
        <div className="flex flex-row justify-center space-x-96  items-center mt-10">
          <h1 className="text-center text-6xl font-bold bg-yellow-300 border rounded-full border-yellow-500 border-8 w-20 h-20">1</h1>
          <h1  className="text-center text-6xl font-bold bg-cyan-300 border rounded-full border-cyan-700 border-8 w-20 h-20">2</h1>
          <h1   className="text-center text-6xl font-bold bg-red-400 border rounded-full border-red-900 border-8 w-20 h-20">3</h1>
        </div>
        <div className="flex justify-between w-full mt-10 space-x-3">
          <div className="p-4 shadow-md  rounded-xl bg-yellow-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded-lg">
                <img src={Jk} alt="Jk" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">SHIM JAE YOON</h2>
            <p className="mb-4 text-lg">Akumulasi :45%  <br />  Jumlah Vote : 117 Voters
            </p>
          </div>
          <div className="p-4 shadow-md bg-cyan-300 rounded-xl ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center border rounded-lg">
                <img src={Kb} alt="Kb" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">KIM BEOM</h2>
            <p className="mb-4 text-lg">Akumulasi :75%
              <br /> Jumlah Vote : 300 Voters</p>
          </div>
          <div className="p-4 shadow-md bg-red-400 rounded-xl ">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded-lg">
                <img src={Mingyu} alt="Mingyu" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">KIM MINGYU</h2>
            <p className="mb-4 text-lg">Akumulasi :45%
              <br/>Jumlah Vote : 117 Voters</p>
          </div>
        </div>
<div className="w-full mt-20 bg-zinc-200 h-[450px]">
  <div className="flex justify-center text-5xl font-black text-black text center">
<h1>LIST VOTER</h1>
</div>
<div className="flex overflow-x-auto mx-auto mt-10">
      <table className="table-auto table-auto w-[875px] h-[200px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">No</th>
            <th className="px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Nama</th>
            <th className="px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Alamat</th>
            <th className="px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Jenis Kelamin</th>
            <th className="px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Paslon</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.no}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.alamat}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.jenisKelamin}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.paslon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<div className="flex w-[487px] h-[29px] mx-auto mt-4 text-2xl font-bold text-black">
  <h1>TOTAL SUARA TERKUMPUL : 1000 Voters</h1>
</div>
</div>
      </div>
    </>
  )
}
export default Admin;