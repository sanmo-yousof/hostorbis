import React from "react";
import herobg from "@/assets/home/herobg.png";
import orbis from "@/assets/home/orbis.png";
import dashboard from "@/assets/home/dashboard.png";
import Button from "@/components/ui/Button";
import { BsLightningCharge } from "react-icons/bs";
import { IoIosTrendingUp, IoMdTime } from "react-icons/io";
import { MdOutlineSecurity, MdSpeed } from "react-icons/md";
import Container from "@/components/layout/Container";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Image from "next/image";
import ReviewBadge from "@/components/ui/ReviewBadge";
import FastBadge from "@/components/shared/FastBadge";
import BannerTitle from "@/components/typography/BannerTitle";
import BannerSubTitle from "@/components/typography/BannerSubTitle";

export default function Hero() {
  return (
    <div
      className="md:h-[60vh] h-[80vh] lg:h-[100vh] relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${herobg.src})`,
      }}
    >
      <div className="w-full h-full absolute flex items-center justify-center ">
        <Container className="absolute h-full  w-full flex-col flex items-center justify-center">
          <div className="max-w-[700px] relative w-full  flex flex-col items-center space-y-6 lg:space-y-8">
            <FastBadge />
            <BannerTitle>
              Bangladesh's Trusted Domain & Hosting Provider
            </BannerTitle>
            <BannerSubTitle>HostOrbis delivers fast, secure hosting for businesses, bloggers,
              and creators.</BannerSubTitle>
            <div className="flex justify-center gap-4 md:gap-8">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Register Domain
              </Button>
            </div>

            <div className="absolute hidden lg:block -left-68 -top-34">
              <Image
                alt="orbis"
                src={orbis}
                width={200}
                height={100}
                className="mb-4"
              />
              <ReviewBadge />
            </div>

            <div className="absolute hidden lg:flex -left-68 -bottom-30">
              <div className="w-[300px] flex flex-col p-5 shadow rounded-lg border border-border bg-background">
                <p className="font-medium text-lg mb-2">Hosting Performance</p>
                <div className="border-y flex py-1  justify-between items-center border-border">
                  <div>
                    <p className="font-medium">Uptime</p>
                    <h5 className=" font-bold text-primary">99.9%</h5>
                  </div>
                  <IoIosTrendingUp className="text-green-500 text-3xl" />
                </div>
                <div className="flex pt-1  justify-between items-center">
                  <div>
                    <p className="font-medium">Local Time</p>
                    <h5 className=" font-bold text-primary">367 ms</h5>
                  </div>
                  <IoIosTrendingUp className="text-green-500 text-3xl" />
                </div>
              </div>
            </div>

            <div className="absolute hidden lg:flex -right-68 -top-34">
              <div className="w-[350px]">
                <Image
                  src={dashboard}
                  alt="dashboard"
                  width={250}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className=" hidden absolute -right-68 -bottom-18 lg:flex">
              <ReviewBadge />
            </div>
          </div>
          <div className="lg:flex lg:absolute flex-col space-y-2 md:flex-row  max-w-[1000px] bottom-18 justify-between  w-full lg:mt-24 items-center text-primary text-base md:text-lg">
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
        </Container>
      </div>
    </div>
  );
}
