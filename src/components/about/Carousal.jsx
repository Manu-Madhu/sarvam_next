import React from "react";
import TitlePart from "../common/ui/TitlePart";
import ContainerWrapper from "../common/ui/ContainerWrapper";
import TeamCarousel from "./TeamCarousel";

const Carousal = ({ teamData}) => {
  return (
    <ContainerWrapper className="h-full p-3 flex flex-col md:my-14 overflow-hidden relative">
      
      {/* Common Title */}
      <TitlePart
        className={"pt-10"}
        title={teamData.log_title}
        subTitle={teamData.log_Headings}
      />

      {/* Carousal Component */}
      <TeamCarousel/>

    </ContainerWrapper>
  );
};

export default Carousal;
