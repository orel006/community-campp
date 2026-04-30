import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <article
            key={item.question}
            className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span className="font-semibold text-slate-900">{item.question}</span>
              <span className="text-xl text-sky-600">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
