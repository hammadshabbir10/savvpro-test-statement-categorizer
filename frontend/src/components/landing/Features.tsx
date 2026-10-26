import { SectionTitle } from "./HowItWorks";

const features = [
  { title: "Any bank layout", text: "One amount column or Debit/Credit columns, preamble lines, $1,234.56, (12.34), 12.34 CR." },
  { title: "Explains itself", text: "Every row shows the rule that decided it and how confident it is." },
  { title: "Asks when unsure", text: "Ambiguous stores, peer-to-peer payments and unknown deposits go to review, never guessed." },
  { title: "Learns your fixes", text: "Fix a merchant once and similar rows, and future statements, follow." },
  { title: "Refunds done right", text: "Money back reduces the category you spent it in. It is never counted as income." },
  { title: "Export for your accountant", text: "Download a categorized CSV with the deductible flag on every row." },
];

const messy = [
  ["DOORDASH DASHER DIRECT DEP", "Income: you drove"],
  ["DOORDASH*TACO SPOT", "Personal meal: you ordered"],
  ["SHELL OIL  -$6.49", "Review: probably snacks, not fuel"],
  ["T-MOBILE AUTOPAY  x2 same day", "Review: possible duplicate"],
  ["AUTOZONE REFUND  +$24.99", "Refund: nets Vehicle Maintenance"],
  ["MOBILE DEPOSIT  +$300.00", "Review: not income until you say so"],
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20">
      <div className="container-page">
        <SectionTitle eyebrow="Features" title="Built for real, messy statements" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-100">
              <h3 className="font-semibold text-brand-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl ring-1 ring-brand-100">
          <div className="bg-brand-50 px-6 py-4">
            <h3 className="font-semibold text-brand-900">Tricky rows it handles</h3>
          </div>
          <ul className="divide-y divide-brand-100 bg-white">
            {messy.map(([row, result]) => (
              <li key={row} className="grid gap-1 px-6 py-3 sm:grid-cols-2">
                <span className="font-mono text-sm text-slate-600">{row}</span>
                <span className="text-sm font-medium text-brand-900">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
