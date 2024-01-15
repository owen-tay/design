"use client"

import Image from "next/image";
import Blob1 from "../../public/blob1.png";
import Blob2 from "../../public/blob2.png";
import Blob3 from "../../public/blob3.png";
import Blob4 from "../../public/blob4.png";
import Logo from "../../public/molten.png";
import { FaAngleDown } from "react-icons/fa";



export default function Home() {

  const scrollToScreen2 = () => {
    const screen2 = document.getElementById('screen2');
    if (screen2) {
      screen2.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <main>
      <div className="relative molten h-screen w-screen overflow-hidden"> {/* Added overflow-hidden */}
        <div className="blob1  w-1/2 sm:w-full max-w-xs md:max-w-sm lg:max-w-xl ease-in-out absolute max-w-xl bottom-0  ">
          <Image src={Blob1} />
        </div>


        <div className=" absolute max-w-xs  md:max-w-sm lg:max-w-xl top-0  ">
          <Image src={Blob2} />
        </div>
        <div className="blob2  max-w-xs  md:max-w-sm lg:max-w-xl ease-in-out absolute top-0 right-0  ">
          <Image src={Blob3} />
        </div>
        <div className="  w-1/2 sm:w-full blob4 max-w-xs md:max-w-sm lg:max-w-md absolute  bottom-0 right-0 md:right-0 lg:right-42  ">
          <Image src={Blob4} />
        </div>
        <div className="flex flex-col  ease-in-out justify-center w-screen h-screen absolute items-center">
          {" "}
          <Image className=" w-72 lg:w-96" src={Logo} />
            
          <FaAngleDown    onClick={scrollToScreen2} className=" animate-bounce text-5xl text-white mt-5" />
          
          
        </div>
      </div>
      <div id="screen2" className="h-screen bg-purple-400 border-purple-400">

      </div>
    </main>
  );
}
