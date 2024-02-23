import React from 'react';
import '../src/index.css'
import KPU from './assets/images/KPU.png'; // Import gambar dengan sintaks yang benar

function Card2() {
  return (
    <div className="content body pt-27">
      <div className="relative mx-32">
        <div className="grid grid-cols-3 gap-4 px-32 py-24">
          <div className="relative col-span-2 bg-gradient-to-b from-gray-500 to-black">
            <img
              className="w-full mix-blend-overlay h-96"
              src={KPU}
              alt="KPU"
            />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-24 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold text-white">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl font-light text-white">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
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
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
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
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
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
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
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
