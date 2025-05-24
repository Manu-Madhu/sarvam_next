import React from "react";
import ContainerWrapper from "../common/ui/ContainerWrapper";
import Image from "next/image";
import { API_BASE_URL } from "@/utils/endPoints";
import { getMiData, getViData } from "@/service/api";

const Mission_Vision = async () => {
  const getMission = await getMiData();
  const getVision = await getViData();
  return (
    <div className="bg-[#f5f5f5]">
      <ContainerWrapper
        className={
          "h-full p-3 flex gap-5 md:gap-10 flex-col py-7 md:py-14 overflow-hidden relative"
        }
      >
        {/* Our vision */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <h2 className="heading_font">
              {getVision.log_title}
            </h2>
            <div
              className="paragraphs mt-2 w-full md:w-[87%]"
              dangerouslySetInnerHTML={{ __html: getVision.log_content }}
            />
          </div>

          <div className="w-full flex items-start justify-start ">
            <Image
              src={`${API_BASE_URL}/site/${getVision.log_imgone}`}
              alt={getVision.log_title}
              title={getVision.log_title}
              width={1280}
              height={720}
              className="h-[300px] object-cover md:w-[87%]"
            />
          </div>
        </div>

        {/* Our mission */}
        <div className="flex flex-col md:flex-row ">
          <div className="w-full flex items-start justify-start ">
            <Image
              src={`${API_BASE_URL}/site/${getMission.log_imgone}`}
              alt={getMission.log_title}
              title={getMission.log_title}
              width={1280}
              height={720}
              className="h-[300px] object-cover md:w-[87%]"
            />
          </div>
          <div className="w-full">
            <h2 className="heading_font">
              {getMission.log_title}
            </h2>
            <div
              className="paragraphs mt-2 w-full md:w-[87%]"
              dangerouslySetInnerHTML={{ __html: getMission.log_content }}
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Mission_Vision;
