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
import Model from "../../public/model.jpg";

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
        <div className="blob1  w-1/2 sm:w-full max-w-xs md:max-w-sm lg:max-w-xl ease-in-out absolute max-w-xl bottom-0  ">
          <Image src={Blob1} />
        </div>
        <div className="blob2  max-w-xs  md:max-w-sm lg:max-w-xl ease-in-out absolute top-0 right-0  ">
          <Image src={Blob3} />
        </div>
        <div className=" absolute max-w-xs  md:max-w-sm lg:max-w-xl top-0  ">
          <Image src={Blob2} />
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
          <div className="flex justify-center mt-8 md:mt-8 lg:mt-4 lg:justify-start gap-3 text-3xl md:text-4xl  lg:text-6xl mb-3 lg:mb-0">
            <FaTwitter className="hover:scale-125 ease-in-out duration-150" />
            <FaTumblr className="hover:scale-125 ease-in-out duration-150" />
            <FaInstagram className="hover:scale-125 ease-in-out duration-150" />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 text-2xl lg:text-4xl mb-5 lg:mb-0">
            <Image
              className=" h-24 hover:scale-125 ease-in-out duration-150"
              src={Screen3Incon}
              alt="Icon"
            />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 text-xs  md:text-xl">
            <button className="bg-black text-white mt-3 w-16 sm:w-20  h-16 rounded-3xl hover:scale-105 ease-in-out duration-150  ">
              Login
            </button>
            <button className="border-4 border-black mt-3 w-16 sm:w-20 h-16  rounded-3xl hover:scale-105 ease-in-out duration-150">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold my-6 text-green-600 mx-10 lg:mx-0">
              Fashion trends to trust in 2024
            </h1>
            <p className="text-3xl mx-10 lg:mx-0">
              Latest streetwear and accessories available now from our store
            </p>
            <div className="mt-10">
            <button class="rounded-md bg-black">
    <span class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-green-600 p-4 text-2xl  hover:-translate-y-3 
    active:translate-x-0 active:translate-y-0
    transition-all"> Press this </span>
  </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-10 lg:mt-0">
            <Image
              className="rounded-xl"
              src={Model}
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
