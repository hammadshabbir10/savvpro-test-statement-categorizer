import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/50">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <p>Rule-based categorizer. No AI model decides your categories. Demo data only.</p>
      </div>
    </footer>
  );
}
