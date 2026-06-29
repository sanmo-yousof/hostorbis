import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold md:text-3xl lg:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}