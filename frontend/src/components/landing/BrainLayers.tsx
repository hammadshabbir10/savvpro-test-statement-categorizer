const layers = [
  { name: "Your earlier fixes", text: "If you filed a merchant before, that wins." },
  { name: "Money movement", text: "Card payments and transfers are not spending." },
  { name: "Money in", text: "Platform payouts and tips are income. Refunds are money back. Unknown deposits wait for you." },
  { name: "Fees", text: "Bank fees and card interest." },
  { name: "Known merchants", text: "Fuel, tolls, repairs, phone, insurance… with sanity checks like a $6 gas-station charge being snacks." },
  { name: "Not sure? Ask.", text: "Anything under 75% confidence goes to Needs Review with its best guess." },
];

export function BrainLayers() {
  return (
    <section className="bg-brand-900 py-20 text-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">Inside the brain</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Six layers. The first one that is sure decides.</h2>
          <p className="mt-4 text-brand-100">
            Every row passes through the same readable rules, in order. Each decision comes with a confidence score and a plain
            reason, so you can always see why a row landed where it did.
          </p>
        </div>
        <ol className="space-y-3">
          {layers.map((l, i) => (
            <li key={l.name} className="flex gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500 text-sm font-bold">{i + 1}</span>
              <div>
                <p className="font-semibold">{l.name}</p>
                <p className="text-sm text-brand-100">{l.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

