import Container from '@/components/layout/Container'
import SectionHeading from '@/components/typography/SectionHeading'
import SectionSubHeading from '@/components/typography/SectionSubHeading'
import Image from 'next/image'
import React from 'react'
import cf from "@/assets/corporate-hosting/cf.png"
import ChooiseCard from '@/components/shared/ChooiseCard'

export default function Features() {
    const data = [
    {
      title: "Blazing Fast Speeds for Optimal Performance",
      subtitle:
        "Host Orbis delivers high-speed web hosting for faster load times, better Google rankings, and a smoother user experience across all devices.",
      id:1
    },
    {
      title: "Customer-Centric Support, Available 24/7",
      subtitle:
        "Host Orbis provides 24/7 expert support, helping you with setup, troubleshooting, and technical issues whenever you need assistance.",

      id:2
    },
    {
      title: "Uncompromised Security",
      subtitle:
        "Host Orbis offers secure web hosting with firewalls, DDoS protection, malware scanning, and SSL certificates to keep your website and data safe.",

      id:3
    },

    {
      title: "Flexible and Affordable Hosting Plans",
      subtitle:
        "Host Orbis offers affordable, flexible hosting plans for blogs, businesses, and everything in between—delivering great value at every level.",

      id:4
    },
    {
      title: "Reliable Uptime - We Keep You Online",
      subtitle:
        "Host Orbis ensures reliable uptime with robust server infrastructure, keeping your website online and accessible without interruptions.",

      id:5
    },
    {
      title: "Discover the Difference with HostOrbis",
      subtitle:
        "Host Orbis is your trusted hosting partner, providing reliable, secure, and high-performance solutions backed by local expertise and global standards.",

      id:6
    },
  ];
  return (
    <Container className='lg:flex py-12 '>
        <div className='lg:w-1/2 hidden lg:block'>
        <Image width={550} alt='features' src={cf}/>

        </div>
        <div className='lg:w-1/2'>
            <div className='max-w-xl text-center mx-auto'>
                <SectionHeading className='mb-4'>Our Corporate Hosting Features</SectionHeading>
                <SectionSubHeading>
                    Enjoy unlimited storage and unmetered bandwidth with our unbeatable hosting solutions. We've got everything you need to grow your website, plus a free domain for the first year—on us!
                </SectionSubHeading>
            </div>

            <div className='mt-6 md:hidden'>
        <Image width={550} alt='features' src={cf}/>

        </div>

            <div className='gap-4 md:grid md:grid-cols-2 lg:flex flex mt-8 lg:h-[50vh] overflow-y-scroll flex-col'>
          {data.map((ch, indx) => {
            return (
              <div key={indx} className='lg:w-3/4'>
                <ChooiseCard choice={ch} key={indx}/>
              </div>
            );
          })}
          </div>
        </div>
      
    </Container>
  )
}
