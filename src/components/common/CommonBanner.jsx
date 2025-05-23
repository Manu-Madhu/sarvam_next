import classNames from "classnames";
import { RiHome2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";
import ContainerWrapper from "./ui/ContainerWrapper";
import Image from "next/image";

const CommonBanner = ({ className, title, banner, subtitle }) => {
  return (
    <div className={classNames(  "relative h-[35vh] w-full bg-cover bg-no-repeat",className )} >
      <Image src={banner} fill className="object-cover w-full absolute left-0 top-0 -z-0" alt={title} title={title} />
      <ContainerWrapper
        className={"p-3 flex flex-col w-full h-full items-start text-white  pt-12"}
      >
        <h1 className="z-20 text-[50px] font-sans font-bold">
          {title}
        </h1>
        <div className="flex items-center justify-center z-20 text-[22px] font-semibold">
          <RiHome2Fill /> <span className="pl-2 pr-3">Home</span> <MdOutlineKeyboardArrowRight />{" "}
          <span className="pl-3">{subtitle}</span>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default CommonBanner;
