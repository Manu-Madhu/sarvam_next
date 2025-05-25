import classNames from "classnames";
import React from "react";
import ContainerWrapper from "./ui/ContainerWrapper";
import Image from "next/image";
import { RiHome2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IMAGE_ENDPOINT } from "@/utils/endPoints";

const CommonBanner = ({ className, title, banner, subtitle }) => {
  return (
    <div className={classNames(  " relative lg:h-[37vh] w-full bg-cover bg-no-repeat ",className )} >
      <Image src={`${IMAGE_ENDPOINT}${banner}`}  alt={subtitle} title={title} fill className="object-container lg:object-cover w-full absolute left-0 top-0 -z-0" />
      <ContainerWrapper
        className={"p-3 flex flex-col w-full h-full items-start text-white pt-5 md:pt-12"}
      >
        <h1 className="z-20 text-[20px] md:text-[50px] font-sans font-semibold ">
          {title}
        </h1>
        <div className="flex items-center justify-center z-20 text-[16px] md:text-[22px] font-semibold">
          <RiHome2Fill /> <span className="pl-2 pr-3">Home</span> <MdOutlineKeyboardArrowRight />{" "}
          <span className="pl-3">{subtitle}</span>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default CommonBanner;
