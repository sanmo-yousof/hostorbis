import React from "react";
import background from "@/assets/home/background3.png";
import server from "@/assets/home/server.png";
import Image from "next/image";
import SectionHeading from "@/components/typography/SectionHeading";
import Button from "@/components/ui/Button";

export default function Thinking() {
  return (
    <div
      className="py-12 relative top-0  w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
     <div className="w-full absolute items-center justify-center">
         <div className="max-w-4xl border border-border  shadow p-3 mx-auto bg-background-secondary flex items-center rounded-full">
        <div className="bg-primary rounded-full inline-flex p-3">
          <Image src={server} alt="server" width={40} />
        </div>
        <SectionHeading className="flex-1 text-xl text-center">
          Thinking of Switching Hosts?
        </SectionHeading>
      </div>
     </div>
      <div className="max-w-[800px] mx-auto bg-background-secondary shadow  mt-22 rounded-b-xl p-6 lg:p-10 ">
        <p className="text-lg md:text-xl lg:text-2xl text-center font-medium">
          Choose the best plan for your business by comparing our offerings, or
          get in touch for a custom-built solution. We will customize services
          and infrastructure to meet your company's demands, no matter what.
        </p>
        <div className="flex items-center gap-4 mt-6 md:mt-8 justify-center">
            <Button>Get Started</Button>
            <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
