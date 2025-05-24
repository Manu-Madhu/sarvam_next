
import CommonBanner from '@/components/common/CommonBanner'
import LoginForm from '@/components/login/LoginForm';
import { getAboutBanner } from '@/service/api';
import { API_BASE_URL } from '@/utils/endPoints'
import React from 'react'

const Login = async() => {
    const pageData = await getAboutBanner();
  return (
    <div>
          {/*  Banner */}
      <CommonBanner
        banner={`${API_BASE_URL}/site/${pageData.pge_banner}`}
        title={pageData.pge_title}
        subtitle={pageData.pge_subtitle}
      />
      <LoginForm/>
    </div>
  )
}

export default Login