"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item${openIndex === index ? " open" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              className="faq-chevron"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
