"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <div key={i} className="bg-paper-dim border border-ink/10">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center gap-4 px-6 py-5 text-left"
            aria-expanded={openFaq === i}
          >
            <span className="font-mono text-xs text-hazard-deep shrink-0">
              Q{String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-semibold text-brand-deep pr-4 flex-1">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-brand-deep shrink-0 transition-transform ${
                openFaq === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openFaq === i && (
            <div className="px-6 pb-5 pl-16">
              <p className="text-ink/60 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
