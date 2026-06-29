import React from "react";
import logo1 from "@/assets/home/logo1.png";
import logo2 from "@/assets/home/logo2.png";
import logo3 from "@/assets/home/logo3.png";
import logo4 from "@/assets/home/logo4.png";
import logo5 from "@/assets/home/logo5.png";
import Image from "next/image";

export default function Items() {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  return (
    <div className="py-12 flex items-center justify-center px-4 md:gap-8 gap-4 flex-wrap">
      {logos.map((img, indx) => {
        return (
          <Image
            key={indx}
            src={img}
            alt="tech"
            className="h-12 md:h-16 w-auto object-contain"
          />
        );
      })}
    </div>
  );
}
