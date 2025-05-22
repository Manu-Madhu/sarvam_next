import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavData } from "@/utils/Nav";
import { LuMenu } from "react-icons/lu";
import ContainerWrapper from "./ui/ContainerWrapper.jsx";

const Navbar = () => {
  return (
    <main>
      {/* top part */}
      <div className="bg-primary p-3.5 font-sans">
        <ContainerWrapper className={""}>
          <div className="flex md:justify-end items-center md:gap-10 text-[14px] font-[500] text-white">
            <div className="relative md:mr-6 w-full md:w-fit">
              <input
                type="text"
                className="rounded w-full md:w-[300px] p-1 px-2 bg-white text-[#020E28] focus:outline-none "
                placeholder="Search products"
              />
              <BsSearch className="absolute right-2 top-2 text-[#212529]" />
            </div>
            <div className="hidden md:block text-nowrap">Track order</div>
            <div className="hidden md:block">Register</div>
            <div className="hidden md:block">Login</div>
          </div>
        </ContainerWrapper>
      </div>

      {/* Nav Bar */}
      <div className="shadow-xl">
        <ContainerWrapper className="flex gap-5 items-center justify-between p-3 py-5">
          <div className="w-full">
            <Image
              src={"/assets/sarvam_logo_small.png"}
              className=" md:w-[80%] object-contain"
              alt="sarvam logo"
              title="sarvam logo"
              width={1280}
              height={720}
            />
          </div>
          <div className="md:w-full flex items-center">
            <ul className="flex gap-5 md:gap-10 font-mono text-[22px]">
              {NavData.map(item =>
                <li className="hidden md:block" key={item.id}>
                  <Link className="text-nowrap" title={item.name} href={item.link}>
                    {item.name}
                  </Link>
                </li>
              )}
              <div className="relative">
                <BsCart className=" md:text-[24px]" />
                <div className="bg-red-500 rounded-full absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm text-white font-sans">0</span>
                </div>
              </div>
              <div className="relative">
                <IoMdHeartEmpty className="text-[24px] md:text-[28px]" />
                <div className="bg-red-500 rounded-full absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm text-white font-sans">0</span>
                </div>
              </div>
            </ul>
          </div>
          <div className="md:hidden">
            <LuMenu size={30} />
          </div>
        </ContainerWrapper>
      </div>
    </main>
  );
};

export default Navbar;
