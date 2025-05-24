import CommonBanner from "@/components/common/CommonBanner";
import { getAboutBanner } from "@/service/api";
import { buildSeoMetadata } from "@/service/seohelper";
import { API_BASE_URL } from "@/utils/endPoints";
import React from "react";

// SEO Part
export async function generateMetadata() {
  return await buildSeoMetadata("about-us");
}

const About = async () => {
  const pageData = await getAboutBanner();

  return (
    <div>
      {/*  Banner */}
      <CommonBanner
        banner={`${API_BASE_URL}/site/${pageData.pge_banner}`}
        title={pageData.pge_title}
        subtitle={pageData.pge_subtitle}
      />
    </div>
  );
};

export default About;
