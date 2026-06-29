import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold cursor-pointer rounded-md  transition-colors duration-200 focus:outline-none",

        // Variants
        variant === "primary" && "bg-primary text-white hover:bg-primary/90",
        variant === "secondary" && "bg-gray-200 text-black hover:bg-gray-300",
        variant === "outline" &&
          "border border-primary border-2 text-primary hover:text-white hover:bg-primary",

        // Sizes
        size === "sm" && "px-3 lg:px-4 py-1.5 lg:py-2 text-sm",
        size === "md" && "px-5 lg:px-6 py-2 lg:py-2.5 text-base",
        size === "lg" && "px-6 lg:px-8 py-3 lg:py-4 text-lg",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
