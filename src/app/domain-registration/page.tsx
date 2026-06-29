import Banner from '@/components/pages/domain-registration/Banner'
import Help from '@/components/pages/domain-registration/Help'
import PopularDomain from '@/components/pages/domain-registration/PopularDomain'
import SmartChoice from '@/components/pages/domain-registration/SmartChoice'
import Thinking from '@/components/pages/home/Thinking'
import Faq from '@/components/shared/Faq'
import React from 'react'

export default function page() {
  return (
    <>
      <Banner/>
      <PopularDomain/>
      <Help/>
      <SmartChoice/>
      <Faq/>
    </>
  )
}
