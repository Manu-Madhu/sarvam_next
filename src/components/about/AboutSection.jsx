import { getAboutData } from "@/service/api";
import { API_BASE_URL } from "@/utils/endPoints";
import Image from "next/image";
import React from "react";
import ContainerWrapper from "../common/ui/ContainerWrapper";

const AboutSection = async () => {
  const getData = await getAboutData();

  if (!getData) {
    return <p className="text-red-500">Failed to load content.</p>;
  }
  return (
    <ContainerWrapper className="flex flex-col md:flex-row p-3 md:gap-7 my-7 mb-14 md:my-14 font-sans ">
      <div className="w-full">
        <h2 className="heading_font text-primary mt-2 md:w-[90%]">
          {getData.log_title}
        </h2>
        <div
          className="font-[500] text-[15px] custom-html-content max-w-none mt-2 leading-6 text-justify"
          dangerouslySetInnerHTML={{ __html: getData.log_content }}
        />
      </div>
      <div className="w-full md:mt-14">
        <Image
          src={`${API_BASE_URL}/site/${getData.log_imgone}`}
          alt={getData.log_title}
          title={getData.log_title}
          width={1280}
          height={720}
        />
      </div>
    </ContainerWrapper>
  );
};

export default AboutSection;
