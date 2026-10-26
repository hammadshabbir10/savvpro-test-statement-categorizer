import { ButtonLink } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="pb-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-14 text-center text-white">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">Ready for tax time?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-brand-100">
            Try it with one of the sample statements, or upload your own CSV export.
          </p>
          <div className="relative mt-8 flex justify-center">
            <ButtonLink href="/categorize" variant="secondary">
              Sort a statement now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
