import AdditionalCost from '@/components/pages/corporate-hosting/AdditionalCost'
import Banner from '@/components/pages/corporate-hosting/Banner'
import CorporatePricing from '@/components/pages/corporate-hosting/CorporatePricing'
import Features from '@/components/pages/corporate-hosting/Features'
import Faq from '@/components/shared/Faq'

import React from 'react'

export default function page() {
  return (
    <>
      <Banner/>
      <CorporatePricing/>
      <AdditionalCost/>
      <Features/>
      <Faq/>
    </>
  )
}
