import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import wordpress from "@/assets/home/hosting-growth.png";
import vps from "@/assets/home/vps.png";
import vpshosting from "@/assets/home/vps-hosting.png";
import word from "@/assets/home/wordpress.png";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HostingGrowth() {
  const data = [
    
    {
      category: "VPS",
      date: "June 10 2026",
      heading: "Managed VPS, Elevated",
      image: vps,
    },
    {
      category: "VPS",
      date: "June 10 2026",
      heading: "VPS Hosting",
      image: vpshosting,
    },
    {
      category: "Wordpress",
      date: "June 10 2026",
      heading: "Hosting for WordPress",
      image: word,
    },
  ];

  return (
    <Container className="py-12 space-y-6 lg:space-y-10 ">
      <div className="text-center md:text-left">
        <SectionHeading>
          Hosting Engineered <br /> for Growth
        </SectionHeading>
        <SectionSubHeading className="mt-2">
          Built for speed. Optimized for growth. Trusted for reliability.
        </SectionSubHeading>
      </div>
      <div className="lg:flex hidden lg:flex-row bg-background-secondary rounded-xl items-center">
        <div className="rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.2)]">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={wordpress}
              alt="Wordpress"
              width={600}
              height={500}
              quality={100}
              className="rounded-2xl"
            />
          </div>
        </div>

        <div className="p-8 ">
          <div className="flex-1">
            <span className="px-3 py-1 text-sm  md:text-base font-semibold bg-primary/10 rounded-lg text-primary">
              Wordpress
            </span>
            <h2 className="font-bold text-xl my-4 md:text-2xl ">
              Optimized for WordPress
            </h2>
            <p className=" hidden lg:flex lg:text-xl">
              Experience optimized WordPress hosting with advanced tools,
              enhanced security, and effortless site management.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-between">
            <Button>Read More</Button>
            <SectionSubHeading className="text-foreground-secondary ">
              June 10 2026
            </SectionSubHeading>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, indx) => {
          return (
            <div className="bg-background-secondary rounded-2xl">
              <div className="h-68 ">
                <Image
                  src={item.image}
                  alt={item.category}
                  className="h-full rounded-2xl"
                />
              </div>
              <div className="p-4 lg:p-6">
                <span className="px-3 py-1 text-sm  md:text-base font-semibold bg-primary/10 rounded-lg text-primary">
                  Wordpress
                </span>
                <h2 className="font-bold text-lg my-2 md:text-xl ">
                  Optimized for WordPress
                </h2>
                <SectionSubHeading className="text-foreground-secondary ">
                  June 10 2026
                </SectionSubHeading>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
