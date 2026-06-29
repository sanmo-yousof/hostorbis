import Container from "@/components/layout/Container";
import SectionHeading from "@/components/typography/SectionHeading";
import SectionSubHeading from "@/components/typography/SectionSubHeading";
import React from "react";

import ChooiseCard from "@/components/shared/ChooiseCard";
import ch1 from "@/assets/corporate-hosting/ch1.png"
import ch2 from "@/assets/corporate-hosting/ch2.png"
import ch3 from "@/assets/corporate-hosting/ch3.png"
import ch4 from "@/assets/corporate-hosting/ch4.png"

export default function AdditionalCost() {
  const data = [
    {
      title: "Speed Optimization",
      subtitle:
        "We make sure your website loads quickly, so your visitors can enjoy a smooth experience without the wait. Faster websites, happier users!",
      icon: ch1,
      id: 1,
    },
    {
      title: "Security Features",
      subtitle:
        "Your website’s safety is our priority. With top-notch security features like SSL certificates and regular updates, we keep your data and visitors protected from online threats.",
      icon: ch2,
      id: 2,
    },
    {
      title: "Improved Performance",
      subtitle:
        "We work behind the scenes to make sure your website performs at its best. That means faster load times, better reliability, and a seamless experience for every visitor.",
      icon: ch3,
      id: 3,
    },

    {
      title: "User-Friendly Experience",
      subtitle:
        "Managing your website should be simple and stress-free. With our easy-to-use interface, you can update and maintain your site with ease—no tech skills required.",
      icon: ch4,
      id: 4,
    },
  ];
  return (
    <div className="py-12">
      <Container className=" relative hidden lg:flex">
        <div className="w-[560px] mx-auto rounded-full h-[560px] border border-primary/30 flex items-center justify-center">
          <div className="w-[480px] mx-auto rounded-full h-[480px] border border-primary/30 flex items-center justify-center">
            <div className="w-[400px] mx-auto rounded-full h-[400px] border border-primary/30 flex items-center justify-center">
              <div className="text-center  max-w-[360px] mx-auto ">
                <SectionHeading className="lg:text-3xl">
                  Get Faster & Secure Websitesat no Additional Cost
                </SectionHeading>
                <SectionSubHeading className="mt-2 lg:text-base">
                  We provide fast, secure, and high-performance websites with
                  no hidden fees. Here’s how we make it happen.
                </SectionSubHeading>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[420px] absolute left-0 top-0">
          <ChooiseCard choice={data[0]} />
        </div>
        <div className="max-w-[420px] absolute left-0 bottom-0">
          <ChooiseCard choice={data[2]} />
        </div>
        <div className="max-w-[420px] absolute right-0 top-0">
          <ChooiseCard choice={data[1]} />
        </div>
        <div className="max-w-[420px] absolute right-0 bottom-0">
          <ChooiseCard choice={data[3]} />
        </div>
      </Container>

      <Container className="lg:hidden ">
        <div className="max-w-xl mx-auto mb-6 md:mb-10 text-center">
            <SectionHeading>
          Get Faster & Secure Websitesat no Additional Cost
        </SectionHeading>
        <SectionSubHeading >
          We provide fast, secure, and high-performance websites with no hidden
          fees. Here’s how we make it happen.
        </SectionSubHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                data.map((d,indx) => {
                    return(
                        <ChooiseCard key={d.id} choice={d} />
                    )
                })
            }

        </div>
      </Container>
    </div>
  );
}
