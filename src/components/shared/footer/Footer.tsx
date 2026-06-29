import React from "react";
import background from "@/assets/home/background5.png";
import Container from "@/components/layout/Container";
import Logo from "../logo";
import Button from "@/components/ui/Button";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";

const links = [
  {
    heading: "Hosting",
    items: [
      { label: "Bdix Shared Hosting", href: "/hosting/bdix-shared" },
      { label: "Corporate Hosting", href: "/hosting/corporate" },
      { label: "Uddokta Hosting", href: "/hosting/uddokta" },
      { label: "Student Hosting", href: "/hosting/student" },
      { label: "Newsportal Hosting", href: "/hosting/newsportal" },
      { label: "Testimonial", href: "/hosting/testimonial" },
    ],
  },
  {
    heading: "Reseller",
    items: [
      { label: "BDIX Reseller Hosting", href: "/reseller/bdix" },
      { label: "USA Reseller Hosting", href: "/reseller/usa" },
      { label: "BDIX Root Reseller", href: "/reseller/bdix-root" },
      { label: "USA Root Reseller", href: "/reseller/usa-root" },
    ],
  },
  {
    heading: "Domain",
    items: [
      { label: "Domain Registration", href: "/domain/registration" },
      { label: "Transfer Domain", href: "/domain/transfer" },
      { label: "Free Domain", href: "/domain/free" },
    ],
  },
  {
    heading: "Quick Links",
    items: [
      { label: "Offer", href: "/quick/offer" },
      { label: "Affiliate", href: "/quick/affiliate" },
      { label: "Blog", href: "/quick/blog" },
      { label: "Career", href: "/quick/career" },
    ],
  },
  {
    heading: "Important Links",
    items: [
      { label: "About", href: "/important/about" },
      { label: "Contact", href: "/important/contact" },
      { label: "Privacy Policy", href: "/important/privacy-policy" },
      { label: "Terms & Conditions", href: "/important/terms-conditions" },
    ],
  },
];

export default function Footer() {
  return (
    <div
      className="py-12 space-y-6 w-full bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <Container>
        <div className="flex pb-6 md:pb-8 lg:pb-12 flex-col md:justify-between md:gap-0 md:flex-row gap-4">
          <Logo className="hidden lg:flex" width={450} height={90} />
          <Logo className="md:hidden " width={200} height={70} />
          <Logo className="lg:hidden hidden md:flex" width={300} height={70} />
          <p className="lg:w-2/5 md:w-1/2 text-base text-foreground-secondary">
            Choose <span className="text-primary">Hostorbis</span> , and you’ll
            be on your way to a smooth and successful web hosting experience.
            Let’s make your online presence shine together!
          </p>
        </div>
        <div className="flex border-y border-border py-6 md:py-8 lg:py-12 flex-col items-center">
          <div className="border max-w-[300px] mb-6 lg:mb-12 w-full overflow-hidden rounded-xl inline-flex border-border bg-background-secondary">
            <input
              placeholder="Your Email Address"
              className="outline-none w-full p-3 text-sm"
              type="text"
            />
            <Button className="px-2 lg:px-2 py-2 rounded-l-none lg:py-2">
              <IoIosSend className="text-2xl" />
            </Button>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:px-6 lg:grid-cols-5 gap-4">
            {links.map((l, indx) => {
              return (
                <div key={indx}>
                  <h2 className="font-bold mb-2 text-lg">{l.heading}</h2>
                  <ul className="md:space-y-2 space-y-1">
                    {
                        l.items.map((i,ind) => {
                            return(
                                <li className="text-sm font-semibold text-primary/60"><Link href={i.href}>{i.label}</Link></li>
                            )
                        })
                    }
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-foreground-secondary font-semibold pt-6 md:pt-8 pt:py-12 text-center text-sm">
            <span className="text-primary">HostOrbis</span> .© 2026 All Rights Reserved
        </p>
      </Container>
    </div>
  );
}
