import React from "react";
import herobg from "@/assets/home/herobg.png";
import Container from "@/components/layout/Container";
import BannerTitle from "@/components/typography/BannerTitle";
import BannerSubTitle from "@/components/typography/BannerSubTitle";
import c1 from "@/assets/corporate-hosting/c1.png";
import c2 from "@/assets/corporate-hosting/c2.png";

import Button from "@/components/ui/Button";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSecurity, MdSpeed } from "react-icons/md";
import Image from "next/image";
import { BiGlobe, BiHome, BiServer } from "react-icons/bi";

export default function Banner() {
  return (
    <div
      className="md:h-[60vh] h-[80vh] lg:h-[100vh]  w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg.src})`,
      }}
    >
      <Container className=" flex items-center  justify-center h-full">
        <div className="flex w-full lg:gap-12 ">
          <div className="lg:w-3/5 w-xl mx-auto space-y-6 lg:space-y-14 ">
            <div>
              <BannerTitle className="text-center lg:text-left">
                Best Corporate Hosting in Bangladesh
              </BannerTitle>
              <BannerSubTitle className="text-center mt-4 lg:text-left">
                Built for growing businesses and enterprises, our Corporate
                Hosting delivers high performance, advanced security, and
                scalable resources to support websites, applications, and
                critical business operations with maximum reliability.
              </BannerSubTitle>
            </div>
            <div className="text-primary flex flex-col items-center lg:gap-6 lg:flex-row">
              <div className=" flex items-center justify-center gap-1 ">
                <IoMdTime />
                <p>Professional Support 24/7</p>
              </div>
              <div className=" flex items-center justify-center gap-1  ">
                <MdSpeed />
                <p>Speed Guaranteed</p>
              </div>
              <div className=" flex items-center justify-center gap-1 ">
                <MdOutlineSecurity />
                <p>Zero-Compromise Security</p>
              </div>
            </div>
            <div className="flex justify-center mt- lg:justify-start">
              <Button size="lg">Get Started</Button>
            </div>
          </div>
          <div className="w-2/5 hidden lg:block">
            <div className=" relative">
              <Image src={c1} alt="back" />
              <div className="absolute -bottom-35 left-50">
                <Image width={300} src={c2} alt="back" />
              </div>
              <div className="inline-flex text-sm rounded-lg absolute top-40 -left-10 p-2 bg-background-secondary">
                {" "}
                https://hostorbis.com/{" "}
              </div>
              <div className="bg-background-secondary -left-8 -bottom-20 text-primary text-sm space-y-2 absolute rounded-lg p-4">
                <p>Navigation</p>
                <div className="flex items-center">
                  <BiHome />
                  <p>Website</p>
                </div>
                <div className="flex items-center">
                  <BiGlobe />
                  <p>Domain</p>
                </div>
                <div className="flex items-center">
                  <BiServer />
                  <p>Clude Server</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
