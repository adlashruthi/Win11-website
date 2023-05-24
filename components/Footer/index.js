import React from "react";
import Image from "next/image";
import Cup from "/public/assets/Group.png";
import Line from "/public/assets/Line 106.png";

import GirlImg from "/public/assets/Group 42141.png";
import BoyImg from "/public/assets/Group 42142.png";

import Linkdin from "/public/assets/Vector (4).png";
import Twitter from "/public/assets/Vector (5).png";
import Facebook from "/public/assets/Vector (6).png";
import InstaGram from "/public/assets/Vector (7).png";
import Youtube from "/public/assets/Vector (8).png";
import Win11 from "/public/assets/navbarimg/Group 42120.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#132F27] sm:mb-[650px] lg:mb-0  ">
      <div className="hidden sm:block">
        <div className="flex">
          <div className="pl-14 pt-14">
            <Image
              src={Cup}
              alt="/"
              height={100}
              width={100}
              className="pt-16"
            />
            <h1 className="font-[Poppins] text-[#5db588] font-bold text-[28px] pt-3">
              Win11
            </h1>
            <p className="text-[12px] text-[#5db588]">
              Your Winning Destination
            </p>
            <div className="m-1">
              <button className="mr-1 ">
                <Image src={Linkdin} alt="/" className="h-[20px] w-[20px]" />
              </button>
              <button className=" ml-2 mb-3">
                {" "}
                <Image src={Youtube} alt="/" className="h-[20px] w-[20px]" />
              </button>
              <button className=" ml-2 mr-1 mb-3">
                {" "}
                <Image src={Twitter} alt="/" className="h-[20px] w-[20px]" />
              </button>
              <button className="   mb-3 lg:mr-10  ">
                {" "}
                <Image src={InstaGram} alt="/" className="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
          <div className="lg:ml-60 sm:ml-24 lg:mt-32 sm:mt-32 mb-10">
            <ul className="list-none text-white font-semibold lg:text-[14px] sm:text-[13px] font-mono">
              <Link href="/getapp">
                <li className="pb-2">Get The App</li>
              </Link>

              <li className="pb-2">How To Play</li>
              <Link href="/fantasybasketball">
                <li className="pb-2">fantacy Basketball</li>
              </Link>
              <Link href="/fantasycricket">
                <li className="pb-2">fantacy Cricket</li>
              </Link>
              <Link href="/fantasyfootball">
                <li className="pb-2">fantacy football</li>
              </Link>
              <Link href="/fantasykabaddi">
                <li className="pb-2">fantacy Kabaddi</li>
              </Link>
              <Link href="/cricketapp">
                <li className="pb-2">
                  fantacy Cricket App
                  <br />
                  Install
                </li>
              </Link>
            </ul>
          </div>

          <div className="lg:ml-28 sm:ml-16 mt-32 mb-10">
            <ul className="list-none text-white font-semibold text-[14px] font-[Montserrat Alternates]">
              <Link href="/about">
                <li className="pb-2">About Us</li>
              </Link>
              <Link href="/jobs">
                <li className="pb-2">Jobs</li>
              </Link>
              <Link href="/contact">
                <li className="pb-2">Contact Us</li>
              </Link>
              <Link href="/community">
                <li className="pb-2">Community Guidelines</li>
              </Link>
              <Link href="/invitepage">
                <li className="pb-2">Invite friends</li>
              </Link>
            </ul>
          </div>
          <Image src={Line} alt="/" className="ml-8 h-[400px] w-[2px]" />
          <div className="lg:ml-20 sm:ml-6 mr-8 mt-32 mb-1">
            <ul className="list-none text-white font-semibold text-[14px] font-[Montserrat Alternates]">
              <li className="pb-2">founding member</li>
              <Link href="/play">
                <li className="pb-2">play Responsibily</li>
              </Link>
              <Link href="/terms">
                <li className="pb-2">Terms & conditions</li>
              </Link>
              <Link href="/privacy">
                <li className="pb-2">Privacy Policy</li>
              </Link>
            </ul>
            <div className="flex lg:ml-14 sm:ml-1 mt-14">
              <Image
                src={GirlImg}
                alt="/"
                className="lg:h-[120px] lg:w-[80px] sm:h-[100px] sm:w-[70px]"
              />
              <Image
                src={BoyImg}
                alt="/"
                className="lg:h-[120px] lg:w-[80px] sm:h-[100px] sm:w-[70px]"
              />
            </div>
          </div>
        </div>

        <hr className=" my-8 bg-gray-200 border-0 dark:bg-green-900 h-[2px] mb-6 text-bold" />
        <div className="flex">
          <h3 className="text-white justify-center items-center w-[250px] lg:text-[16px] sm:text-[14px] lg:pl-6 sm:pl-5 lg:pb-7">
            @ Win11 2022
          </h3>
          <h1 className="text-white justify-center  lg:text-[16px] sm:text-[14px] lg:pl-72 sm:pl-48 pb-7 ">
            This game might be habit-forming or financially risky. Play
            responsibly and with restraint.
          </h1>
        </div>
      </div>

      <div className="bg-[#132F27] block sm:hidden mb-40">
        <div className="">
          <div className="flex justify-center mt-5 ">
            <div className="  lg:ml-10">
              <Image src={Win11} alt="/" className="h-[50px] w-[160px] pt-3" />

              <div className="ml-5 mt-6">
                <button className="mr-1 ">
                  <Image src={Linkdin} alt="/" className="h-[20px] w-[20px]" />
                </button>
                <button className=" ml-2 mb-3">
                  {" "}
                  <Image src={Youtube} alt="/" className="h-[20px] w-[20px]" />
                </button>
                <button className=" ml-2 mr-1 mb-3">
                  {" "}
                  <Image src={Twitter} alt="/" className="h-[20px] w-[20px]" />
                </button>
                <button className="   mb-3 lg:mr-10  ">
                  {" "}
                  <Image
                    src={InstaGram}
                    alt="/"
                    className="h-[20px] w-[20px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className=" h-[2px] my-8 bg-gray-200 border-0 dark:bg-[#00A547] mb-10 ml-6 mr-6" />

        <div className="flex">
          <div>
            <ul className="ml-3">
              <Link href="/getapp">
                <h3 className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px]">
                  Get The App
                </h3>
              </Link>
              <Link href="/play">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  How To Play
                </li>
              </Link>
              <Link href="/fantasybasketball">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Fantasy Basketball
                </li>
              </Link>
              <Link href="/fantasycricket">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Fantasy Cricket
                </li>
              </Link>
              <Link href="/fantasyfootball">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Fantasy Football
                </li>
              </Link>
              <Link href="/fantasykabaddi">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Fantasy Kabaddi
                </li>
              </Link>
              <Link href="/cricketapp">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Fantasy Cricket App Install
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className=" ml-2 lg:ml-6 mr-2">
              <Link href="/about">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  About us
                </li>
              </Link>
              <Link href="/jobs">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Jobs
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Contact us
                </li>
              </Link>
              <Link href="/community">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Community guidelines
                </li>
              </Link>
              <Link href="/invitepage">
                <li className="text-[#FFFFFF] font-mono font-[400]  text-[14px] lg:text-[20px] pt-2">
                  Invite friends
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <hr className=" h-[2px] my-8 bg-gray-200 border-0 dark:bg-[#00A547] mb-4 ml-6 mr-6" />
        <div className="flex justify-around pb-2">
          <h4 className="text-white">Founding member</h4>
          <h4 className="text-white">Play Responsibly</h4>
        </div>
        <hr className=" h-[2px] my-2 bg-gray-200 border-0 dark:bg-[#00A547] mb-4 ml-6 mr-6" />
        <div className="flex justify-around pb-2">
          <Link href="/terms">
            <h4 className="text-white underline">Terms & conditions</h4>
          </Link>
          <Link href="/privacy">
            <h4 className="text-white underline">Privacy policy</h4>
          </Link>
        </div>
        <h4 className="text-white text-[14px] mx-7 pb-6">
          This game might be habit-forming or financially risky. Play
          responsibly and with restraint.
        </h4>
        <h4 className="text-white text-[14px] mx-7 pb-6">@ Win 11 2022</h4>
      </div>
    </div>
  );
};

export default Footer;
