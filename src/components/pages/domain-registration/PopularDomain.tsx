import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import Button from "@/components/ui/Button";
import React from "react";

const domain = [
  {
    name: ".com",
    price: "1590",
  },
  {
    name: ".org",
    price: "1280",
  },
  {
    name: ".shop",
    price: "399",
  },
  {
    name: ".xyz",
    price: "399",
  },
];

export default function PopularDomain() {
  return (
    <div className="py-12  w-full">
      <Container
        className="space-y-6
        lg:space-y-10"
      >
        <div className="text-center">
          <SectionHeading>Look for the Most Popular Domain</SectionHeading>
          <SectionSubHeading className="max-w-2xl mx-auto mt-2">
            Search for the domain that holds the highest popularity among users.
          </SectionSubHeading>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {domain.map((d, indx) => {
            return (
              <div
                className="bg-background-secondary p-2 rounded-lg"
                key={indx}
              >
                <div className="px-3 py-4  bg-[radial-gradient(circle_at_bottom_left,rgba(255,120,220,0.35),transparent_30%),radial-gradient(circle_at_top_left,rgba(130,140,255,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(160,170,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(120,180,255,0.18),transparent_28%)] rounded-lg">
                  <div className="flex justify-between items-center ">
                    <h4 className="font-bold text-base md:text:lg">{d.name}</h4>
                    <p className="text-xs rounded-md  p-1 bg-background-secondary text-primary">
                      One click install
                    </p>
                  </div>
                  <h2 className="mt-6 lg:mt-8 font-bold text-base md:text-lg">
                    ৳<span className="text-4xl">{d.price}</span>/yr
                  </h2>
                </div>
                <div className="p-4">
                  <Button className="w-full">Get Offer</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
