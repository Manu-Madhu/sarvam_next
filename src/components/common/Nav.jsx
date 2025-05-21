import React from "react";
import ContainerWrapper from "./ui/containerWrapper";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { NavData } from "@/utils/Nav";

const Navbar = () => {
  return (
    <main>
      {/* top part */}
      <div className="bg-primary p-2 font-sans">
        <ContainerWrapper className={""}>
          <div className="flex justify-end items-center gap-10 text-[14px] font-[500] text-white">
            <div className="relative">
              <input
                type="text"
                className="rounded w-[300px] p-1 px-2 bg-white text-[#020E28] focus:outline-none "
                placeholder="Search products"
              />
              <BsSearch className="absolute right-2 top-2 text-[#212529]" />
            </div>
            <div>Track order</div>
            <div>Register</div>
            <div>Login</div>
          </div>
        </ContainerWrapper>
      </div>

      {/* Nav Bar */}
      <ContainerWrapper className="flex gap-10 items-center justify-between p-3 py-5">
        <div className="w-full">
          <Image
            src={"/assets/sarvam_logo_small.png"}
            className="w-[80%]"
            alt=""
            title=""
            width={1280}
            height={720}
          />
        </div>
        <div className="w-full">
          <ul className="flex gap-10 font-mono text-[22px]">
            {NavData.map((item) =>
              <li className="" key={item?.id}>
                <Link href={item?.link}>{item?.name}</Link>
              </li>
            )}
          </ul>
        </div>
        <div>

        </div>
      </ContainerWrapper>
    </main>
  );
};

export default Navbar;
