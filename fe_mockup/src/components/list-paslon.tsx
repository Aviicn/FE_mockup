import Navbar2 from "./navbar2";
import React from "react";

const ListPaslon: React.FC = () => {
  const data = [
    {
      no: 1,
      image: 'src/assets/images/hs.jpg',
      name: 'Lee Heesung',
      visimisi: '',
      koalisi: '',
    },

  ];

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center mt-20 text-5xl font-black text">
        <h1>LIST PASLON</h1>
      </div>
      <div className="flex mx-auto mt-10 overflow-x-auto">
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
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.no}</td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700"><img src={item.image} className="h-[94px] w-[78px] object-cover rounded-lg" /> </td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.name}</td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.visimisi}
                <div className="flex flex-col ">
                  <p>1.Memindahkan I-LAND di Puncak Bogor  {item.visimisi}</p>
                  <p>2.Mengadakan Comeback di Indonesia {item.visimisi}</p>
                  <p>3.Melakukan peresapan pada budaya Korea Selatan {item.visimisi}</p>
                </div></td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.koalisi}
                <div className="flex flex-col ">
                  <p>1.Partai PLEDIS  {item.koalisi}</p>
                  <p>2.Partai SOOP {item.koalisi}</p>
                  <p>3.Partai RAIN{item.koalisi}</p>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ListPaslon;