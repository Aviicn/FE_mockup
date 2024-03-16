import Navbar2 from "./navbar2";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Partais } from "../interface/auth"


interface ListPartaiProps {}

const ListPartai: React.FC<ListPartaiProps> = ({}) => {
  const [listPartais, setListPartais] = React.useState<Partais[]>([]);
  const navigate = useNavigate();

  

  React.useEffect(() => {
    const authToken = localStorage.getItem("authToken")
    console.log(authToken)

    const fetchPartais = async () => {
      const { data, status } = await axios.get<Partais[]>(
        'http://localhost:3000/api/partais',
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      console.log(data.data)
      //const partais = await response.data.data
      setListPartais(data.data);
      console.log("listPartais",listPartais)
    };


    fetchPartais();
  }, []);

  const handleClickAddPartai = () => {
    navigate("/add-partai");
  };
  return (
    <>
      <Navbar2 />
      <div className="flex justify-center mt-20 text-5xl font-black text">
        <h1>LIST PARTAI</h1>
      </div>
      <div className="flex items-start justify-end mt-4 mr-36">
          <button
            onClick={handleClickAddPartai}
            className="bg-[#5E5400] text-white px-4 py-2 rounded-md"
          >
            Add Partai
          </button>
        </div>
      <div className="flex mx-auto mt-4 overflow-x-auto">
      <table className="table-fixed w-[1095px] h-[153px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
            <thead>
            <tr>
              <th className="py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 -px-6 text-l border-slate-600">No.Urut</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Nama Partai</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Logo</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Ketua Umum</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600 w-[325px] h-[113px]">Visi Misi </th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 text-l border-slate-600">Alamat </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {listPartais?.map((Partais, index) => {
                return (
                  <tr key={index} className="border-b dark:border-neutral-500">
                  <td className="px-6 py-4 font-medium text-center border-r whitespace-nowrap dark:border-neutral-500">
                  {Partais.nomor_urut}
                  </td>
                  <td className="px-6 py-4 font-medium border-r whitespace-nowrap dark:border-neutral-500">
                    <img
                      src={Partais.picture}
                      alt=""
                      className="w-[78px] h-[94px] rounded-lg"
                    />
                  </td>
                    <td className="px-6 py-4 font-medium text-center border-r whitespace-nowrap dark:border-neutral-500">
                  {Partais.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-center border-r whitespace-nowrap dark:border-neutral-500">
                    {Partais.chairman}
                  </td>
                  <td className="px-6 py-4 font-medium text-center border-r whitespace-nowrap dark:border-neutral-500">
                  {Partais.visionAndMission}
                  </td>
                  <td className="px-6 py-4 font-medium text-center border-r whitespace-nowrap dark:border-neutral-500">
                  {Partais.address}
                  </td>
                </tr>
                   );
                })}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ListPartai;