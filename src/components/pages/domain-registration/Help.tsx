import SectionHeading from "@/components/typography/SectionHeading";
import Button from "@/components/ui/Button";
import React from "react";
import background from "@/assets/home/background3.png";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosChatbubbles, IoMdCall } from "react-icons/io";

export default function Help() {
  return (
    <div
      className="py-12 relative  w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="w-full absolute  items-center justify-center">
        <div className="max-w-4xl border border-border  shadow p-3 mx-auto bg-background-secondary flex items-center rounded-full">
          <div className="text-primary text-4xl lg:text-6xl">
            <BsFillQuestionCircleFill />
          </div>
          <SectionHeading className="flex-1 text-xl text-center">
            Need Some Help?
          </SectionHeading>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto bg-background-secondary shadow  mt-22 rounded-b-xl p-6 lg:p-10 ">
        <p className="text-lg md:text-xl lg:text-2xl text-center font-medium">
          Our best support is here for you 24/7. Call us or give us a text.
        </p>
        <div className="flex  font-semibold text-primary text-sm md:text-base lg:text-lg gap-4 mt-6 md:mt-8 justify-center">
          <div className="flex bg-primary/10 py-2 px-4 rounded-lg items-center gap-2">
            <IoMdCall className="text-4xl" />
            <div>
              <p>Phone</p>
              <p>+88 09638210977</p>
            </div>
          </div>
          <div className="flex bg-primary/10 p-2 md:p-4 rounded-lg items-center gap-2">
            <IoIosChatbubbles className="text-4xl" />

            <p>Chat Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
