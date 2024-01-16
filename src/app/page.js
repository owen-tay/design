"use client";

import Image from "next/image";
import Blob1 from "../../public/blob1.png";
import Blob2 from "../../public/blob2.png";
import Blob3 from "../../public/blob3.png";
import Blob4 from "../../public/blob4.png";
import Logo from "../../public/molten.png";
import { FaAngleDown } from "react-icons/fa";
import Brutalist from "../../public/Brutalist.png";
import Screen3Incon from "../../public/icon.svg";
import Model from "../../public/Model.jpg";

import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const scrollToScreen2 = () => {
    const screen2 = document.getElementById("screen2");
    if (screen2) {
      screen2.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToScreen3 = () => {
    const screen3 = document.getElementById("screen3");
    if (screen3) {
      screen3.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="relative molten h-screen w-screen overflow-hidden">
        {" "}
        {/* Added overflow-hidden */}
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
          <FaAngleDown
            onClick={scrollToScreen2}
            className=" animate-bounce text-5xl text-white mt-5"
          />
        </div>
      </div>
      <div id="screen2" className="relative h-screen w-screen bg-orange-500">
        <div className="mx-0 h-5 rounded-2xl"></div>
        <div className="mx-0 bg-black h-1 rounded-2xl"></div>
        <div
          id="nav"
          className="flex text-2xl justify-evenly font-bold bg-orange-500 pt-5"
        >
          <p onClick={scrollToScreen3}>Owen Taylor</p>
          <p onClick={scrollToScreen3}>Projects</p>
          <p onClick={scrollToScreen3}>Info</p>
          <p onClick={scrollToScreen3}>Other</p>
        </div>
        <div className="kerning absolute text-[15rem] font-kern bottom-0">
          <Image onClick={scrollToScreen3} src={Brutalist} />
        </div>
      </div>
      <div id="screen3" className="h-screen bg-yellow-100">
        <div className="flex lg:flex-row justify-evenly pt-3">
          <div className="flex justify-center mt-8 lg:mt-0 lg:justify-start gap-3 text-5xl lg:text-6xl mb-3 lg:mb-0">
            <FaTwitter className="hover:scale-125 ease-in-out duration-150" />
            <FaTumblr className="hover:scale-125 ease-in-out duration-150" />
            <FaInstagram className="hover:scale-125 ease-in-out duration-150" />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 text-2xl lg:text-4xl mb-3 lg:mb-0">
            <Image
              className="overflow-hidden h-24 hover:scale-125 ease-in-out duration-150"
              src={Screen3Incon}
              alt="Icon"
            />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 text-sm lg:text-2xl">
            <button className="bg-black text-white p-1 md:p-3 rounded-3xl hover:scale-105 ease-in-out duration-150 w-24 lg:w-40 ">
              Login
            </button>
            <button className="border-4 border-black text-blackp-1 md:p-3  rounded-3xl w-24 lg:w-40 hover:scale-105 ease-in-out duration-150">
              Sign Up
            </button>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl mx-6 lg:mx-64 my-6">
            lorensdjfjsdf fhsdjkf ksjdjh fksdjkh fsadh jkfdsh jkfds
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">asdasdsd</div>
          <div className="w-full lg:w-1/2 h-full lg:h-1/2">
            <Image className="w-full h-auto" src={Model} alt="Model" />
          </div>
        </div>
      </div>
    </main>
  );
}
