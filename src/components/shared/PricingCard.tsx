import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import Button from "../ui/Button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SectionSubHeading from "../typography/SectionSubHeading";


type PricingCardProps = {
  price: {
    plan: string;
    amount: string | number;
    feture: string[];
  };
};


export default function PricingCard({price}: PricingCardProps) {
  return (
    <div  className="px-3 py-8 bg-background-secondary rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{price.plan}</h3>
        <span className="py-1 px-2 rounded-md bg-primary/10 text-primary text-xs">
          One Click Install
        </span>
      </div>
      {/* {items.plan === "BDIX BUSINESS" && (
                    <div className="text-red-500 text-sm font-medium mt-3">
                      <p>Free.com</p>
                      <p>Available in Yearly Plan</p>
                    </div>
                  )} */}
      <div className="flex items-center gap-2">
        <SectionSubHeading className="lg:text-base my-6">
          Only{" "}
          <span className="text-3xl font-bold md:text-4xl">{price.amount}</span>{" "}
          /mo
        </SectionSubHeading>
        <div
          className="relative flex items-center h-6 gap-2 bg-red-500 text-white px-4 py-2 text-[10px] font-medium shadow-lg -rotate-12"
          style={{
            clipPath: "polygon(22px 0%, 100% 0%, 100% 100%, 22px 100%, 0% 50%)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
          <span>30% OFF</span>
        </div>
      </div>
      <div className="space-y-1">
        {price.feture.map((f, i) => {
          return (
            <div className="flex items-center gap-1">
              <IoIosCheckmarkCircle className="text-primary" />
              <p className="text-base text-foreground-secondary">{f}</p>
            </div>
          );
        })}
      </div>

      <div className="flex cursor-pointer items-center gap-1 mt-5 text-primary">
        <FaCircleChevronDown />
        <span>Expand Feature</span>
      </div>

      <Button className="mt-8" variant="outline">
        Purchase Plan
      </Button>
    </div>
  );
}
