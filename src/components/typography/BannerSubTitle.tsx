import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BannerSubTitleProps {
  children: ReactNode;
  className?: string;
}

export default function BannerSubTitle({
  children,
  className,
}: BannerSubTitleProps) {
  return (
    <p
      className={cn(
        "font-medium text-black text-lg lg:text-xl text-center",
        className,
      )}
    >
      {children}
    </p>
  );
}
