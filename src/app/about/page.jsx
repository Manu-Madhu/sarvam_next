import AboutSection from "@/components/about/AboutSection";
import Carousal from "@/components/about/Carousal";
import Mission_Vision from "@/components/about/Mission_Vision";
import CommonBanner from "@/components/common/CommonBanner";
import { getAboutBanner, getMeetTeam, getTeamData } from "@/service/api";
import { buildSeoMetadata } from "@/service/seohelper";
import { API_BASE_URL } from "@/utils/endPoints";
import React from "react";

// SEO Part
export async function generateMetadata() {
  return await buildSeoMetadata("about-us");
}

const About = async () => {
  const pageData = await getAboutBanner();
  const meetTeam = await getMeetTeam();

  return (
    <div>
      {/*  Banner */}
      <CommonBanner
        banner={`${API_BASE_URL}/site/${pageData.pge_banner}`}
        title={pageData.pge_title}
        subtitle={pageData.pge_subtitle}
      />

      {/* About part */}
      <AboutSection />

      {/* mission and vision */}
      <Mission_Vision />

      {/* Carousal */}
      <Carousal teamData={meetTeam}/>
    </div>
  );
};

export default About;
