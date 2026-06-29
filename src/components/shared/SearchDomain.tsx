import React from "react";
import Button from "../ui/Button";
import { IoIosSend } from "react-icons/io";

export default function SearchDomain() {
  return (
    <div className="w-full mt-6 md:mt-8 lg:mt-12 flex items-center justify-center">
      <div className="border lg:max-w-[900px] w-full overflow-hidden rounded-md inline-flex border-border bg-background-secondary">
        <input
          placeholder="Search Domain"
          className="outline-none w-full p-4 lg:p-5 text-base"
          type="text"
        />
        <Button className="rounded-l-none  ">
          Search
        </Button>
      </div>
    </div>
  );
}
