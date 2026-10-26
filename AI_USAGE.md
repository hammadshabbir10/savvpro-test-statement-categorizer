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

Measured from the Claude Code session transcript, counting only the API requests made **after the task was
pasted** (2026-10-26 16:41 PKT) up to the time of writing. Every request's usage is in
[`docs/ai-usage/token-usage-log.csv`](docs/ai-usage/token-usage-log.csv); totals are in
[`docs/ai-usage/token-usage-summary.json`](docs/ai-usage/token-usage-summary.json).

| Measure | Tokens |
|---|---:|
| API requests | 70 |
| Input tokens (new, uncached) | 140 |
| Output tokens (code and text written) | 119,468 |
| Cache creation (new context added) | 817,886 |
| Cache reads (context re-read each request) | 51,004,562 |
| **Total** | **51,942,056** |

Model: `claude-opus-5-5` (Claude Code).

**Reading these numbers honestly:** the same Claude Code session had already been used for unrelated work before
this task, so every request re-read that earlier conversation from cache (about 680k tokens per request). That is
why cache reads dominate. The work that is really about this task is the **~119k output tokens** and the
**~818k tokens of new context**. Starting a fresh session would have cut the cache reads by more than 90%; that is
the main lesson for next time.
