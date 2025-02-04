"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Blob1 from "../../public/blob1.png";
import Blob2 from "../../public/blob2.png";
import Blob3 from "../../public/blob3.png";
import Blob4 from "../../public/blob4.png";
import Logo from "../../public/molten.png";
import Logo2 from "../../public/Logo2.svg";
import Logo3 from "../../public/Logo3.svg";

import { FaAngleDown } from "react-icons/fa";
import Brutalist from "../../public/Brutalist.png";

import Screen3Incon from "../../public/icon.svg";
import Model from "../../public/model.jpg";

import OutwestIcon from "../../public/logo.svg";
import Outwest from "../../public/outwest.svg";
import Outwest2 from "../../public/outwest.svg";



import '/styles2.css'; 



import { FaNewspaper, FaBell, FaCalendarDay } from "react-icons/fa";







import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, );

    return () => clearTimeout(timer);
  }, []);
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
    <>
      {isLoading && ( // Conditional rendering based on isLoading state
        <div
          className="fixed inset-0 bg-slate-700 z-50 flex justify-center items-center transition-opacity duration-1000"
          style={{ opacity: isLoading ? "1" : "0" }}
        >
<span className=" animate-bounce text-xl text-white">Loading...</span>

        </div>

      )}
      <main>

     
        <div className="relative molten h-screen w-screen overflow-hidden">
          {" "}
          <div className="blob1  w-1/2 sm:w-full max-w-xs md:max-w-sm lg:max-w-xl ease-in-out absolute max-w-xl bottom-0  ">
            <Image src={Blob1} />
          </div>
          <div className="blob2  max-w-xs  md:max-w-sm lg:max-w-xl ease-in-out absolute top-0 right-0  ">
            <Image src={Blob3} />
          </div>
          <div className="blobleft absolute max-w-xs  md:max-w-sm lg:max-w-xl top-0  ">
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

        <div>
          <div className="left-column" id="screen2">
            <div className="hero ">
              <div className="content">
                <Image className="logo flex justify-center w-full items-center mx-auto " src={OutwestIcon} alt="Logo" />
                <div className="line"></div>
                <div className="margin">
                  <h1>Your <span className="textGradient">Hyper-Local</span> tool for finding out what's on near you.</h1>
                  <h1> <span className="textGradient">Coming Soon</span></h1>
                </div>
                <div className="section2round"></div>
                <div className="section2 svgpad">
                  <Image className="leftsvg svgpad mx-auto" src={Outwest2} alt="Logo" />
                  <ul className="inline-list">
                    <li>Eating Out</li>
                    <li>Drinking Venues</li>
                    <li>Gigs</li>
                    <li>For Kids</li>
                    <li>Sports</li>
                    <li>Fashion</li>
                    <li>Arts</li>
                    <li>Community</li>
                    <li>Hotels</li>
                    <li>Local Services</li>
                  </ul>
                  <div className="news-section">
                    <div className="news-content-wrapper">
                      <div className="news-header">
                        <h2 className="whiteheader">Local News</h2>
                      </div>
                      <div className="news-content">
                        <div className="news-card">
                        <i class="fa-solid fa-newspaper icongradient"></i>
                        <div className="news-text">
                            <h3>Community Events</h3>
                            <p>Stay informed about upcoming events happening in your area!</p>
                          </div>
                        </div>
                        <div className="news-card">
                        <i class="fa-solid fa-bell icongradient"></i>
                        <div className="news-text">
                            <h3>Breaking Stories</h3>
                            <p>Catch up on the latest news and updates from your neighborhood.</p>
                          </div>
                        </div>
                        <div className="news-card">
                        <i class="fa-solid fa-calendar-day icongradient"></i>
                        <div className="news-text">
                            <h3>Daily Updates</h3>
                            <p>Get a daily feed of local news directly to your fingertips.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-screen  flex justify-around z-30 bg-transparent offwhite  ">
          <div className="mt-3 ">
            <Image className="w-10" src={Logo3} />
          </div>

          <div className="mt-3">
            <button
              class="inline-block sm:ml-0 px-4 sm:px-8 py-2  text-sm font-medium text-black border-2 border-black rounded hover:bg-black hover:text-white active:bg-black focus:outline-none focus:ring"
              href="/"
            >
              Contact
            </button>
          </div>

          
        </div>

        

        <div
          className="relative offwhite flex pt-5 sm:pt-0 sm:items-center justify-center  spinvid w-screen overflow-hidden"
        >
          <Image
            className="w-24 pt-20 sm:pt-0 sm:w-44 absolute  z-20"
            src={Logo2}
          />

          <video
            className=" absolute z-10"
            src="rendered.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="offwhite secondspin h-screen  w-screen">
          <div className="container mx-auto p-4 items-center">
            <div className="flex flex-wrap items-center justify-center mt-0 sm:mt-24 -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className=" p-6">
                  <h2 className="text-5xl font-bold text-black mb-4">
                    Why Choose Us?
                  </h2>
                  <p className="text-black text-xl mb-4">
                    We offer unparalleled expertise in{" "}
                    <span className="">business strategy</span>,{" "}
                    <span className="">
                      digital transformation
                    </span>
                    , and{" "}
                    <span className="">
                      operational excellence
                    </span>
                    . Our solutions are customized to meet your unique needs,
                    driving growth and innovation in your organization.
                  </p>
                  <ul className="list-disc list-inside  text-xl space-y-2">
                    <li>
                      Customized solutions tailored to your business needs.
                    </li>
                    <li>
                      Strategic insights based on industry best practices.
                    </li>
                    <li>
                      Proven track record of delivering sustainable growth.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4">
                <div className=" p-6  mt-4 md:mt-0">
                  <h2 className="text-5xl font-bold text-black mb-4">
                    Our Expertise
                  </h2>
                  <p className="text-black  text-xl mb-4">
                    Our team brings deep industry knowledge and experience in{" "}
                    <span className="">specific sectors</span> to
                    provide actionable insights and solutions. We're committed
                    to your success and offer a range of services to help your
                    business excel.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className=" font-bold text-2xl">
                        Strategy
                      </p>
                      <p className="text-black">
                        Innovative business strategies that drive success.
                      </p>
                    </div>
                    <div className="text-center">
                      <p className=" font-bold text-2xl">
                        Innovation
                      </p>
                      <p className="text-black">
                        Embracing technology to lead in your industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="screen2" className="relative h-screen w-screen bg-orange-500">
          <div className="mx-0 h-5 rounded-2xl"></div>
          <div className="mx-0 bg-black h-1 rounded-2xl"></div>
          <div
            id="nav"
            className="flex text-xl sm:text-2xl justify-evenly font-bold bg-orange-500 pt-5"
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
                  <span
                    class="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-green-600 p-4 text-2xl  hover:-translate-y-3 
    active:translate-x-0 active:translate-y-0
    transition-all"
                  >
                    {" "}
                    Press this{" "}
                  </span>
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
    </>
  );
}
