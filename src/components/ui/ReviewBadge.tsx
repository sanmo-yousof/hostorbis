import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function ReviewBadge() {
  return (
    <div className="border px-4 inline-flex border-border  items-center bg-background py-2 text-base shadow rounded-lg">
      <div className="flex items-center gap-1">
        Excellent{" "}
        <span className="flex gap-1 text-primary">
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
  );
}
