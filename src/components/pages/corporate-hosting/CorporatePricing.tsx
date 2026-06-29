import Container from "@/components/layout/Container";
import PricingCard from "@/components/shared/PricingCard";
import SectionHeading from "@/components/typography/SectionHeading";
import React from "react";

export default function CorporatePricing() {
  const price = [
    {
      plan: "Corporate Starter",
      amount: 2597,
      feture: [
        "1GB SSD Disk Space",
        "50GB/m Bandwidth",
        "10 E-mail Accounts",
        "1 Subdomains",
        "1 Addon Domain",
        "1GB SSD Disk Space",
        "50GB/m Bandwidth",
        "10 E-mail Accounts"
      ],
    },
    {
      plan: "Corporate Basic",
      amount: 3856,
      feture: [
        "3GB SSD Disk Space",
        "100GB/m Bandwidth",
        "10 E-mail Accounts",
        "3 Subdomains",
        "3 Addon Domain",
        "10 Database",
        "Daily cPanel Backup",
        "cPanel Control Panel"]
    },
    {
      plan: "Corporate Business",
      amount: 5529,
      feture: [
        "10GB SSD Disk Space",
        "500GB/m Bandwidth",
        "40 E-mail Accounts",
        "10 Subdomains",
        "10 Addon Domain",
      ],
    },
    {
      plan: "Corporate Pro",
      amount: 7150,
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
    <div className="py-12">
      <Container>
        <SectionHeading className="w-2xl text-center mx-auto mb-6 lg:mb-10">
          Unlock Greater Potential with Our Powerful Corporate Hosting
          Solutions.
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 lg:grid-cols-4">
          {price.map((items, indx) => {
            return <PricingCard key={indx} price={items} />;
          })}
        </div>
      </Container>
    </div>
  );
}
