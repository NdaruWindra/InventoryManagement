import React from "react";

const Home = () => {
  return (
    <section className="bg-primary h-[90vh] w-full">
      <div className="flex flex-row h-[90vh] ">
        <div className="container w-1/2 flex-col flex justify-center px-10">
          <h1 className="text-[64px] font-rajhdani font-bold text-[#FFFF] ">
            Kelola Inventaris Barang dengan Mudah dan Efisien
          </h1>
          <p className="font-rajhdani text-[14px] text-[#FFFF]">
            Selamat datang di{" "}
            <span className="text-[25px] font-bold text-[#FF6000]">
              INVENT PRO
            </span>
            , solusi terbaik untuk mengelola dan melacak inventaris barang Anda.
            Dengan antarmuka yang intuitif dan fitur canggih, kami menyediakan
            alat yang Anda butuhkan untuk menjaga persediaan barang Anda tetap
            terorganisir, efisien, dan terkendali.
          </p>
          <button class="rounded-full color bg-orange-500 p-2 w-[20%] my-5 text-[16px] text-[#FFFF] ">
            <span>Selengkapnya</span>
          </button>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
