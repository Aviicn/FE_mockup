import React from 'react';
import '../src/index.css'
import KPU from './assets/images/KPU.png'; // Import gambar dengan sintaks yang benar

function Card2() {
  return (
    <div className="content body pt-28">
      <div className="mx-32 relative">
        <div className="grid grid-cols-3 gap-4 py-24 px-32">
          <div className="col-span-2 relative bg-gradient-to-b from-gray-500 to-black">
            <img
              className="mix-blend-overlay w-full h-96"
              src={KPU}
              alt="KPU"
            />
            <div className="">
              <div className="absolute bottom-24 left-4 red-KPU text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-white text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-white text-2xl font-light">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-KPU text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-2xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-KPU text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-2xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-KPU text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-2xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="bg-white relative w-full h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute bottom-32 left-4 red-KPU text-white rounded-xl px-2 py-2 font-semibold text-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-2xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgc px-36 py-28">
      <div className="">
        <h3 className="text-[30px] text-center font-bold">
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK <br /> YANG JELAS
          PASTIKAN MEREKA TIDAK MEMILIKI VISI <br /> MISI UNTUK MELEGALKAN SLOT
        </h3>
      </div>
    </div>
    </div>

  );
}

export default Card2;
