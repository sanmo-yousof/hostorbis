import Applications from "@/components/pages/home/Applications";
import Choose from "@/components/pages/home/Choose";
import Hero from "@/components/pages/home/Hero";
import HostingGrowth from "@/components/pages/home/HostingGrowth";
import Items from "@/components/pages/home/Items";
import Location from "@/components/pages/home/Location";
import Pricing from "@/components/pages/home/Pricing";
import Review from "@/components/pages/home/Review";
import Thinking from "@/components/pages/home/Thinking";
import WeOffer from "@/components/pages/home/WeOffer";
import Faq from "@/components/shared/Faq";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <HostingGrowth/>
    <Pricing/>
    <Review/>
    <Items/>
    <Thinking/>
    <WeOffer/>
    <Choose/>
    <Applications/>
    <Location/>
    <Faq/>
    </>
  );
}
