import "./index.css";
import React from "react";
import Kotak from "./assets/images/kotak.png" ;
import Dumbways from "./assets/images/dumbways.png";

const Card = () => {
  return (
    <>      
     <section className="gradient rounded-2xl pb-10">
      <div className="relative ">
        <div className="">
          <div>
            <img src={Dumbways} className="h-64 w-96 opacity-50" alt="" />
          </div>
          <div className="mt-[10%] ml-5 leading-[60px]">
            <h1 className="text-white font-bold text-[64px]">SELAMAT DATANG</h1>
            <h4 className=" text-white font-bold  text-[24px] text-wrap w-[54%] leading-[30px]">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI
              NAMA
            </h4>
          </div>
        </div>
        <div className="absolute right-24 top-0">
          <img src={Kotak} className="h-[473px]" alt="" />
        </div>
      </div>
    </section>
    
        </>
  );
}

export default Card;
       

  
