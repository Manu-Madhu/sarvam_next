import CommonBanner from "@/components/common/CommonBanner";
import ContainerWrapper from "@/components/common/ui/ContainerWrapper";
import EliteContainer from "@/components/elite/EliteContainer";
import { CommonFetch } from "@/service/api";
import { buildSeoMetadata } from "@/service/seohelper";
import { BannerGetAPI } from "@/utils/endPoints";
import React from "react";

// SEO
export async function generateMetadata() {
  return await buildSeoMetadata("elite-products");
}

const EliteProducts = async () => {
  const getBannerData = await CommonFetch(BannerGetAPI);

  return (
    <div className="">
      {/* Common Banner */}
      <CommonBanner
        title={getBannerData.pge_title}
        banner={getBannerData.pge_banner}
        subtitle={getBannerData.pge_subtitle}
      />

      {/* Content */}
      <ContainerWrapper className={"w-full h-full p-3 md:gap-7 my-7 mb-14 md:my-14 font-sans"}>
        <EliteContainer />
      </ContainerWrapper>
    </div>
  );
};

export default EliteProducts;
