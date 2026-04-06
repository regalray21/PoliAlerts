"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-xl bg-bg-faqs md:p-10 p-3">
      {items.map((item, index) => (
        <section key={index} className="my-2">
          <div
            className="flex items-center justify-between border-b border-b-gray-line cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="font-bold text-xl leading-[1.875rem] md:text-[1.625rem] md:leading-[2.375rem] py-6 text-black-text">
              {item.question}
            </h3>
            <p className="px-1 md:text-5xl text-3xl text-blue-button">
              {openIndex === index ? (
                <span className="md:text-6xl text-4xl">-</span>
              ) : (
                "+"
              )}
            </p>
          </div>
          {openIndex === index && (
            <div className="pb-3 text-clifford text-base leading-[1.75rem]">
              {item.answer}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
