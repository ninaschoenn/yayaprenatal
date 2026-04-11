# Homepage Editing Plan

_Last updated: 2026-04-11_

This document is the shared editing plan for trimming and tightening the Yaya Prenatal homepage. It builds on two earlier reviews and turns their suggestions into concrete decisions we can execute file by file.

**Editorial direction: calm care, Option C — nine sections for nine months.** Nina has chosen the calmest, most distilled version of the page. The page goes from 14 sections to 9, and the count is intentional: one section per month of pregnancy. That framing guides every edit below.

## Source material

Two reviews fed into this plan. Both are worth keeping around.

1. **`website-structure-review.md`** (repo root, dated 2026-04-08) — a section-by-section review of the whole site, written through a **tonal** lens. Its core message is that the page feels "slightly too commercial" and "slightly too persuasive" for a practice that should feel like care, not a funnel. This is the review whose direction we are following.
2. **Chat review from 2026-04-11** — a section-by-section review of `src/data/content/home/*.ts`, written through a **structural** lens. Its core message is that the page is too long and repeats the same 4–5 ideas across several sections. Its structural cuts (remove USP Bridge, trim Coaching dialogues, reduce overlap between How It Works / Packages / Journey) are kept in this plan.

---

## Proposed new page flow — Option C

After all the edits land, the page reads in this order:

| # | Section | What it is | Source files |
|---|---|---|---|
| 1 | **Hero** | Unchanged | `hero.ts` |
| 2 | **Why Yaya** | Audience recognition + the gap in standard care, **merged and softened** | `for-you.ts` + `gap-stats.ts` |
| 3 | **The Offer: Blood** | Body Map **kept exactly as it is today**, with a small Baby First pull-quote as its emotional opener | `body-map.ts` (untouched) + `baby-first.ts` |
| 4 | **The Offer: Coaching** | 3 dialogues, shorter note | `coaching.ts` |
| 5 | **The Journey** | The rhythm + the 6-month arc, **merged into one flow section** | `how-it-works.ts` + `journey.ts` |
| 6 | **Packages** | Complete Care pushed harder as "the journey you just read about"; single sessions de-emphasized below | `packages.ts` |
| 7 | **About Nina** | Nina's personal story; duplicate "gap" sentence removed | `about.ts` |
| 8 | **Testimonials** | Unchanged | `testimonials.ts` |
| 9 | **Close** | Small, gentle contact block + legal disclaimer as a single final footer-like module | `cta.ts` + `disclaimer.ts` |

**Sections removed entirely:** USP Bridge (deleted). **Sections merged:** For You + Gap Stats (into Why Yaya), Baby First (into The Offer: Blood as a pull-quote), How It Works + Journey (into The Journey), CTA + Disclaimer (into Close).

**Narrative arc:** `who it is for + why it exists → what we do (blood, coaching) → how it unfolds (journey) → how to book (packages) → who is behind this (Nina) → what others say → gentle close`. Classic product-page shape, but with a calm voice throughout.

---

## Repetition map (why the merges make sense)

Five ideas repeat across multiple sections today. Each repetition weakens the next mention. The Option C merges fix most of this automatically.

1. **"The standard care misses things"** — told in `gap-stats.ts`, implied in `baby-first.ts`, told again in `body-map.ts`, told again in `about.ts`. → Now softened inside **Why Yaya** and removed from About Nina. Body Map keeps its own framing because we are not touching that file.
2. **"18 markers / 22 markers"** — told in `gap-stats.ts`, `body-map.ts`, and `packages.ts`. → Removed from `gap-stats.ts` during the Why Yaya merge. Body Map and Packages keep their current wording. The number goes from being told in three places to being told in two.
3. **"75 minutes just for you"** — told in `how-it-works.ts` and echoed in `testimonials.ts`. Kept — a testimonial echoing a promise is good.
4. **"Complete Care described from different angles"** — `how-it-works.ts` lists 4 features, `packages.ts` lists what's included, `journey.ts` walks through the same 6 months. → Now How It Works and Journey are merged into **The Journey**, and Packages explicitly ties Complete Care back to it ("This is the journey you just read about").
5. **"Baby takes from your reserves"** — told in `baby-first.ts` and in `body-map.ts` under minerals. → Now only in the Baby First pull-quote at the top of The Offer: Blood.

---

## Section-by-section decisions

The numbering below matches the new page flow, not the current one. For each section I'm noting what changes and which source files are touched.

### 1. Hero — `hero.ts`
- Keep as is. Strong opener, clear promise, good three bullets. No changes.

### 2. Why Yaya — merged from `for-you.ts` + `gap-stats.ts`
- **USP Bridge is deleted entirely** before this merge happens. Its content already lives in the hero's three bullets, and removing it is the single biggest "less funnel" move on the page.
- Merge For You + Gap Stats into one compact section with two short parts:
  - **Part 1 — "Vielleicht erkennst du dich hier wieder"**: 3 softened bullets (down from 4), merging the near-duplicate "understand your bloodwork" / "don't take supplements blindly" points into one. The current "nicht nur 'im Normbereich'" edge is softened so the section does not sound anti-doctor.
  - **Part 2 — "Was Yaya hinzufügt"**: the three steps (doctor / midwife / Yaya) from the current Gap Stats, reframed from *"what standard care does not see"* into *"what Yaya adds alongside your existing care team"*.
- The "10 min / 18 markers / 0 min" stat block is removed — those numbers feel accusatory and are the most "the system is failing you" part of the page. The "18 markers" number now lives only inside The Offer: Blood.
- Weave one soft sentence from Baby First into this section as a gentle bridge into the next one — something like *"Dein Körper schickt dir Botschaften. Yaya hilft dir, sie zu lesen."*

### 3. The Offer: Blood — `body-map.ts` is **not touched** (+ Baby First pull-quote from `baby-first.ts`)
- **`body-map.ts` stays exactly as it is today.** Nina's decision: no marker changes, no gap-label removals, no intro edits, no softening of the "18 markers" wording. The Body Map is one of the strongest sections on the site and it stays whole.
- This section is still the first half of "what Yaya actually does." It gets a shared framing header ("Das Angebot" / "What Yaya does") with The Offer: Coaching below it — this framing lives in the page template, not inside `body-map.ts`.
- **Baby First shrinks to a 2-sentence pull-quote** and is rendered *above* the Body Map as its emotional opener. The pull-quote is a separate element in the page template; it does not modify `body-map.ts`.
  > *"Dein Körper schickt dir Botschaften. Was er dir in diesen neun Monaten mitgibt, prägt dein Kind ein Leben lang — die Wissenschaft nennt das fetale Programmierung."*

### 4. The Offer: Coaching — `coaching.ts`
- The second half of "what Yaya actually does." Sits directly under Blood, under the shared "Das Angebot" header.
- Cut the dialogues from 7 to 3. Three is enough to show the range. Recommended keepers:
  1. *"Ich habe Angst vor der Geburt."* (fear)
  2. *"Ich habe das Gefühl, ich verliere mich selbst."* (identity)
  3. *"Mein Partner und ich streiten mehr."* (partnership)
- Shorten the closing `note` paragraph. Keep the first two sentences ("not therapy, not advice — a space where you find your own answers") and drop the list of topics at the end, which is already covered by the dialogues themselves.

### 5. The Journey — merged from `how-it-works.ts` + `journey.ts`
- Merge How It Works and Journey into one section that answers the question *"how does this actually unfold over time?"*. Structure top-to-bottom:
  - **The rhythm** — the 4 icons from How It Works (bi-weekly 75-minute sessions, chat access, nutrition & supplements, partner session), lightly tightened so they don't duplicate the Packages bullet list below.
  - **The arc** — Journey collapsed from 6 chapters to 3 phases:
    - **Arrive & Understand** (old chapters 1–2): first meeting, baseline blood analysis, supplement plan.
    - **Deepen & Connect** (old chapters 3–4): second analysis, partner session, inner work, fears.
    - **Trust & Let Go** (old chapters 5–6): final analysis, body check, chat access to the big day.
- A short closing line ties it back to Complete Care so the next section (Packages) picks it up naturally — something like *"So sehen sechs Monate Complete Care aus."* / *"This is what six months of Complete Care look like."*

### 6. Packages — `packages.ts`
- Position: directly after The Journey, so Complete Care reads as *"the journey you just saw, here is how to start it."* This is the editorial choice Nina asked for — push harder on the main package by tying it explicitly to the story that precedes it.
- Visual hierarchy:
  - **Free Intro Call** — visible and inviting at the top.
  - **Complete Care** — the big card. Visually prominent. Frame it as *"die volle Begleitung, die du gerade kennengelernt hast"* (the full journey you just read about).
  - **Single sessions** (Blood Basic, Blood Basic+Extended, Coaching, Couples) — de-emphasized as a smaller secondary group below. Compact cards, quieter style, less visual weight. Keep the prices visible.
- No merge with CTA anymore. In Option C, Packages is in the middle of the page — the contact block belongs to the Close section at the end.
- **Future roadmap (not part of this edit pass):** each package card will become clickable → calendar link for Intro Call and Complete Care → Stripe checkout for single sessions. Structure the Packages component so that adding one call-to-action slot per card is straightforward later.

### 7. About Nina — `about.ts`
- Position: after Packages, before Testimonials. Nina's personal story follows the pricing so the reader meets the human right after seeing the offer. In the calm-care direction this works *only if* Packages is quiet — which it is, by design.
- Remove the sentence *"Zwischen Gynäkologin und Hebamme … gibt es eine Lücke"* — the gap idea is already told in Why Yaya, and repeating it inside the personal story makes Nina sound less like herself and more like marketing.
- Keep the rest of Nina's personal story exactly as it is. It's the strongest trust moment on the page.
- **One thing to watch during the preview:** if About Nina lands oddly between Packages and Testimonials — if it feels like being reassured right after being sold to — we can swap its position with Testimonials in a second pass. Flagging it now, not acting on it yet.

### 8. Testimonials — `testimonials.ts`
- Keep as is. Three quotes, three angles (blood, coaching, time). Clean.

### 9. Close — merged from `cta.ts` + `disclaimer.ts`
- A single small, gentle closing module instead of two separate sections. Structure:
  - A soft header in Nina's voice (*"Bereit für mehr?"* / *"Ready for more?"*) — reused from the current CTA.
  - A short invitation line — *"Du kannst mir jederzeit schreiben…"*
  - A compact contact block — email, phone, address with click-to-copy.
  - The disclaimer as a quiet italicized line underneath, not a full separate section.
- This is lighter than a dedicated CTA section — the goal is to feel like a gentle hand offered at the end of a conversation, not a buy-button.
- Because contact details also live in the site footer (see below), this section does not need to shout. It's deliberately small.

---

## Footer

### Footer — `src/components/Footer.astro` — **no changes**
- No contact details added to the footer. Reasoning:
  1. The **Close section** at the bottom of the homepage already handles the warm contact moment (email, phone, address, click-to-copy, "write to me").
  2. The **Impressum page** — legally required — already holds the full legal contact details and is linked from every footer on every page. Anyone on Impressum / Datenschutz is always one click from Nina's contact info.
  3. Duplicating contact info in the footer adds visual weight without clear benefit. Calm care = less repetition.
- The footer stays exactly as it is today: logo, legal links, location line.
- If later Nina notices visitors getting stuck searching for contact info, adding a single email line to the footer is a one-minute follow-up change.

---

## Decisions locked in

Both previously-open questions are now resolved:

- **Body Map** — no changes at all. `body-map.ts` stays exactly as it is today.
- **Footer** — no changes at all. Contact info lives in the Close section on the homepage and on the Impressum page, not in the footer.

The plan is ready to execute. There are no remaining open questions.

---

## Files touched in the execution pass

### Home content (`src/data/content/home/`)
- `hero.ts` — no changes
- `for-you.ts` — rewritten as Part 1 of Why Yaya
- `usp-bridge.ts` — **deleted from `index.ts` and no longer imported**; file can stay on disk for now or be removed
- `gap-stats.ts` — rewritten as Part 2 of Why Yaya (steps only, stats removed)
- `baby-first.ts` — shrunk to a 2-sentence pull-quote, rendered above the Body Map (does not modify `body-map.ts`)
- `body-map.ts` — **not touched**. Kept exactly as it is today.
- `coaching.ts` — dialogues cut from 7 to 3; note shortened
- `how-it-works.ts` — content folded into the merged Journey section
- `journey.ts` — collapsed from 6 chapters to 3 phases; receives the How It Works features
- `packages.ts` — reframed around Complete Care as "the journey you just saw"; single sessions de-emphasized
- `about.ts` — duplicate gap sentence removed
- `testimonials.ts` — no changes
- `cta.ts` — content rendered inside the new Close module
- `disclaimer.ts` — content rendered inside the new Close module

The `index.ts` file in the home content folder will need its import list updated to match the new section structure.

### Components (`src/components/`)
- Section components will need to be adjusted to reflect the new flow: the Why Yaya section may need a new or combined component, The Journey section combines the existing HowItWorks and Journey components, and the Close module combines CTA and Disclaimer. Exact component structure will be decided during the edit pass.

### Page template (`src/templates/HomePage.astro`)
- Update the render order of the sections to match the new 9-section flow.

### Footer (`src/components/Footer.astro`)
- **Not touched.** Stays exactly as it is today.

---

## Next step

1. Work directly on the `main` branch. No feature branch, no pull request.
2. Make all the edits listed above in one focused pass.
3. Run `npm run build` to confirm nothing is broken.
4. Start `npm run dev` for a local preview at http://localhost:4321 so Nina can see the new, quieter page.
5. Only after Nina has seen and approved the preview do we push to the live website.

The plan is ready. Waiting for Nina's green light to start editing.
