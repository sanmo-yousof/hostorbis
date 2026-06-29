import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import Button from "@/components/ui/Button";
import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import background from "@/assets/home/background1.png"
import PricingCard from "@/components/shared/PricingCard";

export default function Pricing() {
  const price = [
    {
      plan: "BDIX STARTER",
      amount: 199,
      feture: [
        "2GB SSD Disk Space",
        "100GB/m Bandwidth",
        "20 E-mail Accounts",
        "2 Subdomains",
        "2 Addon Domain",
      ],
    },
    {
      plan: "BDIX BASIC",
      amount: 318,
      feture: [
        "5GB SSD Disk Space",
        "250GB/m Bandwidth",
        "25 E-mail Accounts",
        "5 Subdomains",
        "5 Addon Domain",
      ],
    },
    {
      plan: "BDIX BUSINESS",
      amount: 487,
      feture: [
        "10GB SSD Disk Space",
        "500GB/m Bandwidth",
        "40 E-mail Accounts",
        "10 Subdomains",
        "10 Addon Domain",
      ],
    },
    {
      plan: "BDIX PRO",
      amount: 935,
      feture: [
        "20GB SSD Disk Space",
        "800GB/m Bandwidth",
        "50 E-mail Accounts",
        "15 Subdomains",
        "15 Addon Domain",
      ],
    },
  ];
  return (
    <div className="py-12 space-y-6 lg:space-y-10 w-full bg-cover bg-center bg-no-repeat "
    style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="text-center">
        <SectionHeading>Our Best-Selling Hosting Solution</SectionHeading>
        <SectionSubHeading className="max-w-2xl mx-auto mt-2">
          Boost your website with high-speed BDIX Hosting for faster performance
          across Bangladesh. Choose your plan below.
        </SectionSubHeading>
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-4">
        {price.map((items, indx) => {
          return (
            
            <PricingCard key={indx} price={items}/>
          );
        })}
      </Container>
    </div>
  );
}
