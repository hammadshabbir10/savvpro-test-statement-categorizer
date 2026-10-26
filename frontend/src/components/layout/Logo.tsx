export function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold text-brand-900">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16M4 12h10M4 17h7" />
          <path d="m15 16 2 2 4-4" />
        </svg>
      </span>
      LedgerLane
    </span>
  );
}
