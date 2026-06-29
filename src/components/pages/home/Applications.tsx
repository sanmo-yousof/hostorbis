import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";
import app1 from "@/assets/home/ap1.png";
import app2 from "@/assets/home/ap2.png";
import app3 from "@/assets/home/ap3.png";
import app4 from "@/assets/home/ap4.png";
import app5 from "@/assets/home/ap5.png";
import app6 from "@/assets/home/ap6.png";
import app7 from "@/assets/home/ap7.png";

export default function Applications() {
  return (
    <div className="py-12 md:py-16 max-w-4xl gap-6 md:gap-32 lg:gap-42 md:items-center mx-auto px-4 flex flex-col md:flex-row">
      <div className="md:space-y-2">
        <h2 className="font-bold text-xl md:text-3xl">Integrated with more</h2>{" "}
        <h2  className="font-bold text-xl md:text-3xl"> than 100+</h2> <h2  className="font-bold text-xl md:text-3xl">applications you love</h2>
      </div>
      <div className="">
        <div className="flex">
          <Image alt="ap" src={app1} width={90} />
          <Image alt="ap" src={app2} width={90} />
        </div>
        <div className="flex">
          <Image alt="ap" src={app3} width={90} />
          <Image alt="ap" src={app4} width={90} />
        </div>
        <div className="flex">
          <Image alt="ap" src={app5} width={90} />
          <Image alt="ap" src={app6} width={90} />
          <Image alt="ap" src={app7} width={90} />
        </div>
      </div>
    </div>
  );
}
