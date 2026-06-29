"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaStar, FaStarHalf } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Logo from "../logo";
import { MdMenu } from "react-icons/md";
import Image from "next/image";

const navItems = [
  { text: "Home", href: "/", dropdown: false },
  { text: "Domain", href: "/", dropdown: true },
  { text: "Hosting", href: "/", dropdown: true },
  { text: "Server", href: "/", dropdown: true },
  { text: "About", href: "/", dropdown: false },
  { text: "Contact", href: "/", dropdown: false },
];

const dropdownContent = {
  Domain: [".com", ".net", ".org", "Transfer Domain"],
  Hosting: ["Shared Hosting", "VPS Hosting", "Cloud Hosting"],
  Server: ["Dedicated Server", "GPU Server", "Managed Server"],
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav>
      <div
        className="relative hidden lg:block w-full max-w-[1200px] mx-auto"
        onMouseLeave={() => setActiveItem(null)}
      >
        <div className="max-w-[1060px] mx-auto">
          <ul className="flex items-center justify-around py-4">
            {navItems.map((item) => (
              <li
                key={item.text}
                onMouseEnter={() =>
                  item.dropdown ? setActiveItem(item.text) : setActiveItem(null)
                }
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 font-bold transition-colors hover:text-primary"
                >
                  {item.text}
                  {item.dropdown && (
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        activeItem === item.text ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown */}
        {activeItem && (
          <div
            className="absolute left-0 top-full z-50 w-full bg-background-secondary border border-border rounded-xl shadow-lg"
            onMouseEnter={() => setActiveItem(activeItem)}
          >
            <div className=" p-6">
              <h3 className="mb-4 text-xl font-semibold">{activeItem}</h3>

              <ul className="space-y-2">
                {dropdownContent[
                  activeItem as keyof typeof dropdownContent
                ]?.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="block rounded-md px-3 py-2 transition-colors hover:bg-background"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="lg:hidden flex p-3 shadow justify-between items-center">
        <div className="flex items-center gap-3">
          <MdMenu size={25} />
          <Logo className="w-[110px] h-[30px]" />
        </div>
        <div className="flex  gap-2 ">
          <Button size="sm">Login</Button>
          <Button size="sm" variant="outline">
            Signup
          </Button>
        </div>
      </div>

      <div className="border-b lg:hidden flex border-border justify-center  items-center  py-2 text-sm  ">
        <div className="flex items-center justify-center gap-1">
          Excellent{" "}
          <span className="flex gap-0.5  text-primary">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </span>{" "}
          200+reviews on
          <Image alt="logo" src={"/logo.png"} width={70} height={20} />
        </div>
      </div>
    </nav>
  );
}
