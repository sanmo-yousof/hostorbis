import React from "react";
import background from "@/assets/home/background4.png";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import ch1 from "@/assets/home/ch1.png";
import ch2 from "@/assets/home/ch2.png";
import ch3 from "@/assets/home/ch3.png";
import ch4 from "@/assets/home/ch4.png";
import ch5 from "@/assets/home/ch5.png";
import ch6 from "@/assets/home/ch6.png";
import Image from "next/image";
import ChooiseCard from "@/components/shared/ChooiseCard";

export default function Choose() {
  const data = [
    {
      title: "Blazing Fast Speeds for Optimal Performance",
      subtitle:
        "Host Orbis delivers high-speed web hosting for faster load times, better Google rankings, and a smoother user experience across all devices.",
      icon: ch1,
      id:1
    },
    {
      title: "Customer-Centric Support, Available 24/7",
      subtitle:
        "Host Orbis provides 24/7 expert support, helping you with setup, troubleshooting, and technical issues whenever you need assistance.",
      icon: ch2,
      id:2
    },
    {
      title: "Uncompromised Security",
      subtitle:
        "Host Orbis offers secure web hosting with firewalls, DDoS protection, malware scanning, and SSL certificates to keep your website and data safe.",
      icon: ch3,
      id:3
    },

    {
      title: "Flexible and Affordable Hosting Plans",
      subtitle:
        "Host Orbis offers affordable, flexible hosting plans for blogs, businesses, and everything in between—delivering great value at every level.",
      icon: ch4,
      id:4
    },
    {
      title: "Reliable Uptime - We Keep You Online",
      subtitle:
        "Host Orbis ensures reliable uptime with robust server infrastructure, keeping your website online and accessible without interruptions.",
      icon: ch5,
      id:5
    },
    {
      title: "Discover the Difference with HostOrbis",
      subtitle:
        "Host Orbis is your trusted hosting partner, providing reliable, secure, and high-performance solutions backed by local expertise and global standards.",
      icon: ch6,
      id:6
    },
  ];
  return (
    <div
      className="py-12 space-y-6 w-full bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <Container className="flex flex-col items-center gap-6 lg:gap-18 md:flex-row-reverse">
        <div className="md:w-1/2 lg:w-3/5">
          <div className="">
            <SectionHeading>Why Choose HostOrbis?</SectionHeading>
            <SectionSubHeading className="max-w-2xl mx-auto mt-2">
              When you choose Host Orbis, you’re choosing quality, reliability,
              and excellence in web hosting. Here’s what makes us the top domain
              hosting provider in Bangladesh
            </SectionSubHeading>
          </div>
          <div className="mt-6 md:mt-10">
            <h2 className="lg:text-9xl md:text-7xl text-5xl font-bold text-primary">
              2+
            </h2>
            <h4 className="font-bold text-lg md:text-2xl">
              Years In Providing Digital Service
            </h4>
          </div>
        </div>
        <div className="flex flex-col lg:w-2/5 overflow-y-scroll lg:max-h-[60vh] md:max-h-[50vh] md:w-1/2 gap-6">
          {data.map((ch, indx) => {
            return (
              <ChooiseCard choice={ch} key={indx}/>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
