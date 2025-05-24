import CommonBanner from '@/components/common/CommonBanner';
import TrackOrderForm from '@/components/track-order/TrackOrderForm';
import { getAboutBanner } from '@/service/api';
import { API_BASE_URL } from '@/utils/endPoints';
import React from 'react'

const page = async () => {
     const pageData = await getAboutBanner();
  return (
    <div>
          {/*  Banner */}
      <CommonBanner
        banner={`${API_BASE_URL}/site/${pageData.pge_banner}`}
        title={pageData.pge_title}
        subtitle={pageData.pge_subtitle}
      />
    <TrackOrderForm
    />
    </div>
  )
}

export default page
