import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import React from "react";
import offer1 from "@/assets/home/offer1.png";
import offer2 from "@/assets/home/offer2.png";
import offer3 from "@/assets/home/offer3.png";
import Image from "next/image";

export default function WeOffer() {
  const data = [
    {
      title: "Domain Registration & Management",
      subtitle:
        "Secure your online presence with reliable and affordable domain registration services.",
      icon: offer1,
    },
    {
      title: "High-Speed Web Hosting",
      subtitle:
        "Experience ultra-fast load times, a must-have for ranking higher on search engines and keeping users engaged.",
      icon: offer2,
    },
    {
      title: "SSL Certificates & Security Tools",
      subtitle:
        "Keep your data protected with our premium security features, including SSL encryption.",
      icon: offer3,
    },
  ];
  return (
    <div className="py-12 space-y-6 lg:space-y-10  ">
      <div className="text-center">
        <SectionHeading>What We Offer</SectionHeading>
        <SectionSubHeading className="max-w-2xl mx-auto mt-2">
          Launch and secure your website with domain registration, fast web
          hosting, SSL certificates, and advanced security solutions.
        </SectionSubHeading>
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.map((n, indx) => {
            return (
              <div className="text-left space-y-4 p-4 md:p-6 bg-background-secondary border border-border rounded-2xl" key={indx}>
                <Image width={50} src={n.icon} alt="icon" />
                <h4 className="font-bold text-lg md:text-xl">{n.title}</h4>
                <p className="text-base font-medium text-foreground-secondary">{n.subtitle}</p>
              </div>
            );
          })}
        </Container>
    </div>
  );
}
