import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BannerTitleProps {
  children: ReactNode;
  className?: string;
}

export default function BannerTitle({ children, className }: BannerTitleProps) {
  return (
    <h2
      className={cn(
        "lg:text-5xl md:text-4xl text-3xl text-black text-center font-bold",
        className,
      )}
    >
      {children}
    </h2>
  );
}
