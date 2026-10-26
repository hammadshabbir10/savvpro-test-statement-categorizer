const steps = [
  { title: "Upload", text: "Drop a CSV from your bank or card. Any common layout works.", icon: "M12 16V4m0 0-4 4m4-4 4 4M4 20h16" },
  { title: "Read & clean", text: "Find the columns, fix the signs, skip junk rows, clean merchant names.", icon: "M4 6h16M4 12h10M4 18h6" },
  { title: "Rule brain", text: "Six layers of readable rules decide each row, with a confidence score.", icon: "M9 3h6v4H9zM5 10h14v11H5zM9 14h6" },
  { title: "You review", text: "Unsure rows wait for you, with the reason and a best guess.", icon: "M9 12l2 2 4-4M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" },
  { title: "Totals & export", text: "Income, deductible expenses and personal spend, ready for your accountant.", icon: "M4 19V5m5 14V9m5 10v-6m5 6V7" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20">
      <div className="container-page">
        <SectionTitle eyebrow="How it works" title="From messy CSV to tax-ready totals" />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-5">
          {/* connector line behind the nodes on wide screens */}
          <div aria-hidden className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 md:block" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-card ring-4 ring-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </span>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-500">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-600">{text}</p>}
    </div>
  );
}
