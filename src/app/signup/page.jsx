import CommonBanner from '@/components/common/CommonBanner';
import SignupForm from '@/components/signup/SignupForm'
import { getAboutBanner } from '@/service/api';
import { API_BASE_URL } from '@/utils/endPoints';
import React from 'react'

const Signup =async () => {
    const pageData = await getAboutBanner();
  return (
    <div>
          {/*  Banner */}
      <CommonBanner
        banner={`${API_BASE_URL}/site/${pageData.pge_banner}`}
        title={pageData.pge_title}
        subtitle={pageData.pge_subtitle}
      />
        <SignupForm/>
    </div>
  )
}

export default Signup