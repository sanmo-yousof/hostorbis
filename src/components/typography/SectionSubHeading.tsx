import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionSubHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-base md:text-lg  font-medium",
        className
      )}
    >
      {children}
    </h2>
  );
}