import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function Logo({
  className,
  width = 140,
  height = 40,
}: LogoProps) {
  return (
    <div
      className={cn("relative cursor-pointer", className)}
      style={{
        width,
        height,
      }}
    >
      <Link href="/" className="block h-full w-full">
        <Image
          src="/logo.png"
          alt="HostOrbis Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}