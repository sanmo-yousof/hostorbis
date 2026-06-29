import Image from "next/image";
import React from "react";
import location from "@/assets/home/map.png";
import SectionHeading from "@/components/typography/SectionHeading";
import Container from "@/components/layout/Container";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSecurity, MdSpeed } from "react-icons/md";
import mappin from '@/assets/home/mappin.png'

export default function Location() {
  return (
    <Container className="py-12 px-0 space-y-6 lg:space-y-10  ">
      <div>
        <SectionHeading className="text-center">
          Our Global Datacenter
        </SectionHeading>
        
        <div className="text-primary mt-2 flex md:items-center justify-center flex-wrap md:gap-6 lg:gap-8 text-base md:text-lg">
          <div className=" flex items-center justify-center gap-2 ">
            <IoMdTime />
            <p>Professional Support 24/7</p>
          </div>
          <div className=" flex items-center justify-center gap-2  ">
            <MdSpeed />
            <p>Speed Guaranteed</p>
          </div>
          <div className=" flex items-center justify-center gap-2  ">
            <MdOutlineSecurity />
            <p>Zero-Compromise Security</p>
          </div>
        </div>

      </div>
      <div className="relative w-full">
        <Image alt="map" src={location} quality={100} className="w-full" />
        <div className="flex absolute lg:top-[42%] lg:right-[24%] md:top-[35%] md:right-[22%] top-[25%] right-[15%] flex-col gap-1 items-center">
          <Image
          alt="mappin"
          src={mappin}
          quality={100}
          width={30}
          />
          <span className="px-2 py-1 rounded-lg text-white font-semibold bg-primary text-xs">Bangladesh</span>
        </div>
        <div className="flex absolute top-[20%] left-[10%]  lg:top-[38%]  md:top-[34%] md:left-[14%]  flex-col gap-1 items-center">
          <Image
          alt="mappin"
          src={mappin}
          quality={100}
          width={30}
          />
          <span className="px-2 py-1 rounded-lg text-white font-semibold bg-primary text-xs">USA</span>
        </div>
      </div>
    </Container>
  );
}
