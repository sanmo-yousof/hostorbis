import React from "react";
import herobg from "@/assets/home/herobg.png";
import Container from "@/components/layout/Container";
import FastBadge from "@/components/shared/FastBadge";
import BannerTitle from "@/components/typography/BannerTitle";
import BannerSubTitle from "@/components/typography/BannerSubTitle";
import SearchDomain from "@/components/shared/SearchDomain";

const domain = [
  {
    name: ".com",
    price: "৳1590/Year",
  },
  {
    name: ".net",
    price: "৳1750/Year",
  },
  {
    name: ".org",
    price: "৳1450/Year",
  },
  {
    name: ".xyz",
    price: "৳399/Year",
  },
];

export default function Banner() {
  return (
    <div
      className="md:h-[60vh] h-[100vh] lg:h-[100vh]  w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg.src})`,
      }}
    >
      <div className="w-full h-full  flex items-center  ">
        <Container className="w-full">
          <div className="max-w-[700px] mx-auto  w-full  flex flex-col items-center space-y-6 lg:space-y-8">
            <FastBadge />
            <BannerTitle>
              Trusted Domain Registration for Businesses in Bangladesh
            </BannerTitle>
            <BannerSubTitle>
              Looking for a trusted domain provider in Bangladesh? Hostorbis
              helps you find and register the perfect domain name quickly and
              easily, so your business can stand out online.
            </BannerSubTitle>
          </div>
          <SearchDomain />

          <div className="grid grid-cols-2 text-base md:text-lg lg:text-xl md:flex md:flex-wrap gap-4 mt-6 justify-center md:mt-8">
            {domain.map((d, indx) => (
              <div
                key={indx}
                className="border border-border flex  gap-2 md:gap-0 md:flex-col p-2 md:p-3 lg:p-4 rounded-lg bg-background "
              >
                <p className="text-red-500">{d.name}</p>
                <p className="font-semibold text-primary ">{d.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
