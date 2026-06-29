import React from "react";
import { BsLightningCharge } from "react-icons/bs";

export default function FastBadge() {
  return (
    <div className="border px-4 lg:px-8 inline-flex  items-center gap-4 text-primary py-2 md:text-lg border-primary rounded-lg text-base">
      <BsLightningCharge/>
      <p>Blazing Fast. Secure. Reliable.</p>
    </div>
  );
}
