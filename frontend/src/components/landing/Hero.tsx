import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const preview = [
  { desc: "UBER *PAYOUT DRIVER WEEKLY", amount: "+$1,284.50", cat: "Platform Income", tone: "green" as const },
  { desc: "SHELL OIL 57444 DALLAS TX", amount: "-$48.20", cat: "Fuel", tone: "blue" as const },
  { desc: "DOORDASH*TACO SPOT", amount: "-$23.18", cat: "Meals (Personal)", tone: "slate" as const },
  { desc: "SHELL OIL 57444 DALLAS TX", amount: "-$6.49", cat: "Needs Review", tone: "amber" as const },
  { desc: "TRANSFER TO SAVINGS", amount: "-$500.00", cat: "Transfer", tone: "violet" as const },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <Badge tone="blue">For rideshare &amp; delivery drivers</Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
            Your statements, sorted for tax time.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Upload a bank or card CSV. LedgerLane sorts every transaction into Schedule C style categories, explains each
            decision, and asks you about the ones it is not sure of. A wrong guess is worse than asking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/categorize">Sort a statement</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-slate-500">No AI model decides your categories. Every rule is readable.</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-brand-100">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-brand-900">checking_september.csv</p>
            <Badge tone="amber">1 needs review</Badge>
          </div>
          <ul className="divide-y divide-slate-100">
            {preview.map((row) => (
              <li key={row.desc + row.amount} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="truncate font-mono text-xs text-slate-500">{row.desc}</p>
                  <p className="text-sm font-medium text-slate-800">{row.amount}</p>
                </div>
                <Badge tone={row.tone}>{row.cat}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
