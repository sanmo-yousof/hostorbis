import SectionHeading from '@/components/typography/SectionHeading'
import ReviewCard from '@/components/ui/ReviewCard'
import background from '@/assets/home/background2.png'
import React from 'react'
import Container from '@/components/layout/Container'

export default function Review() {
  return (
    <div className='py-12 space-y-6 lg:space-y-10 w-full bg-cover bg-center bg-no-repeat'
    style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <SectionHeading className='text-center'>
        Why Customers Choose Us
      </SectionHeading>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Array.from({ length: 6 }).map((_, index) => (
                <ReviewCard/>
            )
                
            )}
      </Container>
    </div>
  )
}
