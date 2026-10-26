# AI usage

## Tools

- **Claude Code** (Anthropic, Claude Opus model) in VS Code: planning, writing code, running tests and the build.

No AI model is used **inside** the app. Categories are decided only by the rules in `backend/app/brain/`.

## How it helped

- Read the task and compared the two assessment options; proposed the gig-driver use case and the plan.
- Scaffolded the backend modules, the rule engine, the sample statements and the test suite.
- Built the Next.js frontend (landing page and the review screen).
- Ran the samples through the brain and the tests after every change, which surfaced the bugs below.

## Where it got things wrong (and how it was fixed)

| Problem | How it showed up | Fix |
|---|---|---|
| A **bank** statement was read as a **card** statement, flipping every sign | `T-MOBILE AUTOPAY` matched the "card payment" hint | Card-payment patterns made specific; card layout now also requires most purchase rows to be positive. Test added. |
| `T-MOBILE AUTOPAY` categorized as *Card Payment* | Same over-broad `AUTOPAY` pattern | Card payment now requires a card/bank name after AUTOPAY. |
| `SPOTHERO` became `OTHERO` | The `SP *` prefix cleaner did not require the `*` | Prefix requires the asterisk. Test added. |
| `DD *KITCHEN LUNCH BOX` went to review | `DD *` (DoorDash's card prefix) was stripped before matching | DoorDash orders detected on the raw description. |
| `UBER EATS PROMOTION CREDIT` counted as driver income | "PROMOTION" matched the bonus rule | Credits on the driver's own food order are refunds. Test added. |
| A refund did not reduce its purchase category | Merchant key kept the word "REFUND" | Refund words dropped from the key. Test added. |
| Same merchant got different keys (`JOES CAFE DALLAS` vs `JOES CAFE`) | Key used three words, so a city or store code leaked in | Key uses the first two words. |
| `DELETE` endpoint crashed at start-up | 204 response declared with a body | Returns an empty `Response`. |
| React lint error | A helper named `useSample` looked like a hook | Renamed to `loadSample`. |

## Token usage

<!-- Fill in from your Claude usage page / `/cost` in Claude Code, and add the screenshots. -->

| Session | Input tokens | Output tokens | Notes |
|---|---|---|---|
| Planning + build | _to fill_ | _to fill_ | |

Screenshots: `docs/ai-usage/` (to add).
