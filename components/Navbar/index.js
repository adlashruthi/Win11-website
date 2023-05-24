import React from "react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import Cup from "/public/assets/aboutimg/Group (5).png";
import NavIcon from "/public/assets/navbarimg/Group 41823.png";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="z-50">
      <div className="fixed w-full h-20 bg-gradient-to-r from-[#C8F5F5] to-[#0FC16C]">
        <div className="justify-between  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex  justify-between py-3 md:py-5 md:block">
              <Image src={Cup} alt="/" className="h-[40px] w-[120px] ml-8" />

              <div className="md:hidden mr-8">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <Image src={NavIcon} alt="/" height={25} width={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 lg:mt-0 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex md:flex md:flex-row flex-col md:items-center lg:pl-12 lg:pr-16 pl-28 sm:pl-0  bg-[#C8F5F5] h-[500px] sm:h-0 ">
                <li className=" sm:text-[18px] text-[18px] hover:border-b text-green-600 font-bold pt-10 sm:pt-0">
                  <Link href="/fantasycricket">
                    <li>Fantasy Cricket</li>
                  </Link>
                </li>
                <li className="sm:ml-6 sm:text-[18px] text-[18px]  hover:border-b text-green-600 font-bold pt-5 sm:pt-0">
                  <Link href="/fantasyfootball">Fantasy Football</Link>
                </li>
                <li className="sm:ml-8 sm:text-[18px] text-[18px]   hover:border-b mr-4 text-green-600 font-bold pt-5 sm:pt-0">
                  <Link href="/fantasykabaddi">Fantasy Kabaddi</Link>
                </li>

                <button className="text-white text-center bg-[#00A547] rounded-md h-[30px] w-[82px] ml-2 mt-5 sm:mt-0">
                  <Link href="/getapp"> Get App</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}
