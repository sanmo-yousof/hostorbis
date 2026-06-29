import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import React from "react";
import s1 from "@/assets/domain-registration/s1.png";
import s2 from "@/assets/domain-registration/s2.png";
import s3 from "@/assets/domain-registration/s3.png";
import Image from "next/image";

const data = [
  {
    icon: s1,
    title: "Free Thief Protection",
    subtitle:
      "We understand the importance of protecting your online assets. That's why we offer robust Domain Theft Protection to safeguard your domain name from unauthorized transfers.",
  },
  {
    icon: s2,
    title: "Name Server and DNS Management",
    subtitle:
      "Name servers are the backbone of the internet, ensuring that domain names are translated into IP addresses, allowing users to access websites and online services. A well-managed DNS system is crucial for a website's performance, security, and overall user experience.",
  },
  {
    icon: s3,
    title: "Domain Full Control Panel",
    subtitle:
      "Domain Full Control Panel provides comprehensive tools for managing all aspects of a domain, including DNS settings, email forwarding, subdomains, WHOIS data, and security features, enabling complete control over domain configurations.",
  },
];

export default function SmartChoice() {
  return (
    <div className="py-12  w-full">
      <Container
        className="space-y-6
            lg:space-y-10"
      >
        <div className="">
          <SectionHeading>
            Hostorbis: The Smart <br />
            Choice for Domains
          </SectionHeading>
          <SectionSubHeading className="max-w-2xl mt-2">
            Focus on your business and avoid all the web hosting hassles. Our
            managed with 24/7 support that acts as your extended team,
          </SectionSubHeading>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-8">
          {data.map((d, indx) => (
            <div
              key={indx}
              className={`max-w-[750px] w-full rounded-lg flex border-2 border-primary ${
                indx === 1 ? "lg:self-end" : ""
              }`}
            >
              <div className="w-1/4 flex items-center justify-center">
                <Image className="w-12 md:w-16" quality={100} alt="choice" src={d.icon} />
              </div>

              <div className="w-3/4 bg-primary p-4 md:p-6 text-white">
                <h3 className="mb-2 md:mb-4 text-base md:text-lg font-bold lg:mb-6 lg:text-xl">
                  {d.title}
                </h3>
                <p className="text-xs not-only:md:text-base lg:text-lg">{d.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
