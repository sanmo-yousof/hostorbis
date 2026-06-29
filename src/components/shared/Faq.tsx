"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Container from "../layout/Container";
import SectionHeading from "../typography/SectionHeading";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question:
      "What makes Host Orbis the best domain hosting company in Bangladesh?",
    answer:
      "Host Orbis is recognized as the best hosting provider in Bangladesh due to our high-speed performance, robust security, affordable pricing, and dedicated customer support. We cater to a wide range of clients, from small bloggers to large businesses, with solutions that ensure fast load times, data security, and reliable uptime.",
  },
  {
    question:
      "What makes Host Orbis the best domain hosting company in Bangladesh?",
    answer:
      "We provide premium hosting services with industry-leading uptime and performance.",
  },
  {
    question: "Is Host Orbis a secure web hosting provider?",
    answer:
      "Yes. We offer free SSL, DDoS protection, malware scanning, regular backups, and advanced server security.",
  },
  {
    question: "Can I transfer my existing website to Host Orbis?",
    answer:
      "Absolutely! Our team provides free website migration with minimal downtime.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes. Our technical support team is available 24/7 via live chat, email, and ticket system.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <Container className="py-12 space-y-6 lg:space-y-10">
      <SectionHeading className="text-center">
        Frequently Asked Questions
      </SectionHeading>
      <div className="mx-auto max-w-3xl space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden bg-background-secondary rounded-2xl border border-border transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="lg:text-lg md:text-base text-sm  font-semibold ">{faq.question}</h3>

                {isOpen ? (
  <BiChevronUp className="h-6 w-6 flex-shrink-0" />
) : (
  <BiChevronDown className="h-6 w-6 flex-shrink-0" />
)}
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 md:text-base text-sm leading-6 text-foreground-secondary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
