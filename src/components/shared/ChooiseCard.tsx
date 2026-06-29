import Image, { StaticImageData } from "next/image";
import React from "react";


type Choice = {
  id: number;
  icon?: StaticImageData | undefined;
  title: string;
  subtitle: string;
};

type ChoiceCardProps = {
  choice: Choice;
};

export default function ChooiseCard({choice}:ChoiceCardProps) {
  return (
    <div
      className=" px-4 pb-6 md:pb-10  md:px-6 bg-background-secondary   rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <div className="text-3xl lg:text-4xl inline-flex bg-primary font-bold text-white px-1 rounded-b-2xl py-3 ">
          0{choice.id}
        </div>
        {
            choice.icon && <Image quality={100} width={50} src={choice.icon} alt="icon" />
        }
        
      </div>
      <h4 className="font-bold mt-6 mb-3 text-lg md:text-xl">{choice.title}</h4>
      <p className="text-base font-medium text-foreground-secondary">
        {choice.subtitle}
      </p>
    </div>
  );
}
