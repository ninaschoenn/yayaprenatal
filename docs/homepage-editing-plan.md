# Homepage Editing Plan

_Last updated: 2026-04-11_

This document is the shared editing plan for trimming and tightening the Yaya Prenatal homepage. It builds on two earlier reviews and turns their suggestions into concrete decisions we can execute file by file.

**Editorial direction: calm care.** Nina has chosen the calmer, less sales-shaped version of the page. That decision shapes every edit below. The goal is a quieter, more welcoming page that reads like care rather than like a funnel.

## Source material

Two reviews fed into this plan. Both are worth keeping around.

1. **`website-structure-review.md`** (repo root, dated 2026-04-08) — a section-by-section review of the whole site, written through a **tonal** lens. Its core message is that the page feels "slightly too commercial" and "slightly too persuasive" for a practice that should feel like care, not a funnel. This is the review whose direction we are following.
2. **Chat review from 2026-04-11** — a section-by-section review of `src/data/content/home/*.ts`, written through a **structural** lens. Its core message is that the page is too long and repeats the same 4–5 ideas across several sections. Its structural cuts (remove USP Bridge, trim the Coaching dialogues, reduce overlap in the How It Works / Packages / Journey cluster) are kept in this plan, but its more "sales-efficient" suggestions (moving Packages up, keeping Gap Stats as the strongest argument) have been dropped in favour of the calm-care direction.

---

## What "calm care" means for the edits

Nina's call to pick the calm-care direction resolves several decisions in one go. For each of the places where the two reviews disagreed, this plan now locks in the calmer answer:

| Decision | Locked answer (calm care) |
|---|---|
| **Gap Stats** | Soften the tone. Still explain the gap, but with less "the system is failing you" edge. |
| **Packages placement** | Keep in its current position in the page. Do not move it up. |
| **"For You" bullets** | Soften the slightly sharp edge ("not just within range") so it does not sound anti-doctor. |
| **About Nina** | Move earlier in the page so trust arrives before the more persuasive middle cluster. |
| **Baby First** | Shrink to a 2-sentence pull-quote. Do not delete outright. |
| **How It Works** | Keep as a separate section. Do not merge into Packages — merging would make the pricing area look denser and more funnel-shaped. |
| **Overall voice** | Quieter, more selective, less "look how different we are." Fewer repeated justifications. |

All remaining decisions below inherit from this direction.

---

## Current page flow

For reference, here are the 14 sections the visitor walks through today, in order:

| # | Section | File | What it does |
|---|---|---|---|
| 1 | Hero | `hero.ts` | "Understand what is happening inside you" + 3 bullets |
| 2 | For You | `for-you.ts` | 4 "you may recognize yourself here" bullets |
| 3 | USP Bridge | `usp-bridge.ts` | 1 line: Bloodwork. Nourishment. Inner support. |
| 4 | Gap Stats | `gap-stats.ts` | 10 min / 18 markers / 0 min + 3 steps (doctor / midwife / Yaya) |
| 5 | Baby First | `baby-first.ts` | Fetal programming, body sends signals |
| 6 | Body Map | `body-map.ts` | Interactive body with 12 markers and long descriptions |
| 7 | Coaching | `coaching.ts` | "The appointment ends. The question stays." + 7 dialogues + note |
| 8 | How It Works | `how-it-works.ts` | 4 features of Complete Care |
| 9 | Packages | `packages.ts` | Intro call + Complete Care + 4 single offers |
| 10 | Journey | `journey.ts` | 6 chapters over 6 months |
| 11 | About Nina | `about.ts` | Bio + credentials |
| 12 | Testimonials | `testimonials.ts` | 3 quotes |
| 13 | CTA | `cta.ts` | "Ready for more?" contact block |
| 14 | Disclaimer | `disclaimer.ts` | Legal |

---

## Proposed new page flow (calm care)

After all the calm-care edits land, the page should read in this order:

| # | Section | What changed |
|---|---|---|
| 1 | Hero | Unchanged |
| 2 | For You | Trimmed to 3 softer bullets; one sentence from Baby First woven in |
| 3 | Gap Stats | Kept, but softened and slimmer (one block removed) |
| 4 | Baby First | Shrunk to a 2-sentence pull-quote (inside or next to Body Map) |
| 5 | Body Map | Same position; "Gap" label removed from each marker; marker count reduced; single source of the "22/18" number |
| 6 | About Nina | **Moved up here** — trust arrives before the pricing middle |
| 7 | Coaching | 3 dialogues instead of 7, shorter note |
| 8 | How It Works | Kept as a separate section, lightly tightened |
| 9 | Journey | Collapsed from 6 chapters to 3 phases |
| 10 | Testimonials | Unchanged |
| 11 | Packages + Contact | **Merged into one final section.** Packages on top, contact options underneath — "book a call, write to me, or read more below" all live in one place |
| 12 | Disclaimer | Unchanged |

**Two sections are removed:** USP Bridge (deleted entirely) and the standalone CTA (merged into Packages). The page goes from 14 sections to 12.

Why the merged Packages + Contact section sits at the end:
- The story of the page (problem → proof → Nina → process) can finish on social proof (Testimonials) and then land on a single, gentle close.
- The visitor never passes through a pricing zone and then back out into more content — the pricing *is* the close.
- Calm-care shape: `story → social proof → gentle close`, instead of `sales → story → sales`.

---

## Repetition map

Five ideas repeat across multiple sections today. Each repetition weakens the next mention.

1. **"The standard care misses things"** — told in `gap-stats.ts`, implied in `baby-first.ts`, told again in `body-map.ts`, told again in `about.ts`.
2. **"18 markers / 22 markers"** — told in `gap-stats.ts`, `body-map.ts`, and `packages.ts`.
3. **"75 minutes just for you"** — told in `how-it-works.ts` and echoed in `testimonials.ts`. This one is fine — a testimonial echoing a promise is good.
4. **"Complete Care described from different angles"** — `how-it-works.ts` lists the 4 features, `packages.ts` lists what's included, `journey.ts` walks through the same 6 months. Three sections, one offer.
5. **"Baby takes from your reserves"** — told in `baby-first.ts` and again inside the minerals entry of `body-map.ts`.

The goal is to let each of these ideas live in **one** clearly owned section and only be echoed elsewhere through specific details (like a testimonial naming the 75 minutes).

---

## Section-by-section decisions

### 1. Hero — `hero.ts`
- Keep as is. Strong opener, clear promise, good three bullets. No changes.

### 2. For You — `for-you.ts`
- Trim from 4 bullets to 3. Bullets 1 and 3 are near-duplicates ("understand your bloodwork" vs. "don't take supplements blindly"). Merge them.
- Soften the remaining bullets so they do not sound anti-doctor. The current wording "nicht nur 'im Normbereich'" has a slightly sharp edge that works in a persuasive funnel but not in a calm-care page. Rewrite so the meaning stays ("I want to really understand my own body") but the implicit criticism of the gynaecologist is gone.
- Weave one soft sentence from Baby First into this section — something like *"Dein Körper schickt dir Botschaften. Du möchtest lernen, sie zu lesen."* This keeps the "baby first" idea alive even after Baby First shrinks to a pull-quote.

### 3. USP Bridge — `usp-bridge.ts`
- Remove. Both reviews agree this is the first candidate to cut. Its content already lives in the hero's three bullets. Deleting it is the single biggest "less funnel" move on the whole page.

### 4. Gap Stats — `gap-stats.ts`
- Keep the section, but pick one of the two parallel blocks. Right now there are *three stats* AND *three steps* (doctor / midwife / Yaya) on the same theme, right below each other. Two parallel threes weaken each other.
  - **Proposal:** keep the three steps (doctor / midwife / Yaya) because they are warmer and more collaborative in tone. Remove the "10 min / 18 markers / 0 min" stat block — those numbers feel accusatory and are the most "the system is failing you" part of the page.
- Stop saying "18 markers" here. Let `body-map.ts` be the single source of truth for that number.
- Tone: reframe from "what standard care does not see" into "what Yaya adds alongside your existing care team." Keep the idea, drop the sharpness.

### 5. Baby First — `baby-first.ts`
- Shrink to a 2-sentence pull-quote and attach it visually to the Body Map section (for example, as a soft italic callout just above the body map). The "fetal programming" science hook survives, but it no longer occupies a full section of scroll.
- Suggested pull-quote (DE):
  > *"Dein Körper schickt dir Botschaften. Was er dir in diesen neun Monaten mitgibt, prägt dein Kind ein Leben lang — die Wissenschaft nennt das fetale Programmierung."*

### 6. Body Map — `body-map.ts`
- Remove the "Gap" label from every marker. We explain the gap once (softly) in Gap Stats; repeating it inside every marker description makes the tone cold and repetitive.
- Drop the intro line ("Wir schauen nicht einfach auf Werte") — it repeats the hero's promise.
- Make this the single place the page names "22 markers" and "18 not in the maternity record." Also soften the "18 davon testet deine Frauenärztin nicht" phrasing — something like *"18 davon sind kein Teil der Standardvorsorge"* lands the same information without pointing a finger.
- **Marker count still open.** See the Open Questions section below. Recommended default: **8 markers.**

### 7. Coaching — `coaching.ts`
- Cut the dialogues from 7 to 3. Three is enough to show the range. Recommended keepers:
  1. *"Ich habe Angst vor der Geburt."* (fear)
  2. *"Ich habe das Gefühl, ich verliere mich selbst."* (identity)
  3. *"Mein Partner und ich streiten mehr."* (partnership)
- Shorten the closing `note` paragraph. The first two sentences ("not therapy, not advice — a space where you find your own answers") are the important part. The list of topics at the end is already covered by the dialogues themselves.

### 8. How It Works — `how-it-works.ts`
- Keep as a separate section. Do not merge into Packages — in the calm-care direction, keeping them apart lets Packages stay visually lighter and less funnel-shaped.
- Light copy pass to remove duplication with the Packages bullet list (don't re-list the same items in both places; let How It Works describe the rhythm and Packages describe the offer).

### 9. Packages + Contact — `packages.ts` + `cta.ts` (**merged**)
- The standalone CTA section is removed. Its contact block (email, phone, address, "write to me" message) moves into the Packages section so that everything a visitor needs to take the next step lives in one place.
- New position: **at the end of the page, just before Testimonials → Disclaimer.** Packages moves from its current section 9 to the final content section. See the "Proposed new page flow" table above.
- Visual structure of the merged section (top to bottom):
  1. A soft header in Nina's voice ("Bereit für mehr?" / "Ready for more?") — reused from the current CTA content.
  2. The free Intro Call, visually prominent.
  3. Complete Care, visually prominent.
  4. The 4 single-session options, de-emphasized (compact list or collapsible card) so they don't compete with Complete Care.
  5. The contact block — email, phone, address, with click-to-copy — as a soft footer to the section.
- **Future roadmap (not part of this edit pass):** each package card will become clickable. The click will open a calendar link for the Intro Call and Complete Care, and a Stripe checkout for the single sessions. The merged section should be structured in a way that makes adding those buttons straightforward later (one call-to-action slot per card).
- Keep the prices visible — just quieter than a conversion-shaped pricing page would show them.
- All content from `cta.ts` (the title "Bereit für mehr?", the body, the labels for email/phone/address/copy) stays in the codebase and is rendered inside the new merged section.

### 10. Journey — `journey.ts`
- Collapse from 6 chapters to 3 phases so it stops duplicating `how-it-works.ts` and `packages.ts` for a third time. Proposed phases:
  - **Arrive & Understand** (old chapters 1–2): first meeting, baseline blood analysis, supplement plan.
  - **Deepen & Connect** (old chapters 3–4): second analysis, partner session, inner work, fears.
  - **Trust & Let Go** (old chapters 5–6): final analysis, body check, chat access to the big day.
- If the page still feels too long after all the other calm-care edits land, Journey is the next section to question or remove entirely. The existing review explicitly flags it as the "first big section" to consider cutting.

### 11. About Nina — `about.ts` — **moves earlier in the page**
- Move About Nina up the page so it lands between For You (or Gap Stats) and the Body Map. The goal is for trust and Nina's personal voice to arrive *before* the pricing middle, not after. Exact new position to be decided during the edit, but roughly slot 6 in the new flow.
- Remove the sentence "Zwischen Gynäkologin und Hebamme … gibt es eine Lücke" — the gap idea is already told in Gap Stats, and repeating it inside the personal story makes Nina sound less like herself and more like marketing.
- Keep the rest of Nina's personal story exactly as it is. It's the strongest trust moment on the page.

### 12. Testimonials — `testimonials.ts`
- Keep as is. Three quotes, three angles (blood, coaching, time). Clean.

### 13. CTA — `cta.ts`
- **Merged into Packages.** See section 9 above. The copy and labels inside `cta.ts` are not deleted from the codebase — they are reused inside the merged Packages + Contact section at the end of the new page flow.

### 14. Disclaimer — `disclaimer.ts`
- Keep as is. Necessary closing note.

---

## Beyond the home content: Footer

One change sits outside `src/data/content/home/`. It fits this streamlining pass because it's part of making contact easier.

### Footer — `src/components/Footer.astro`
- Add Nina's contact email and phone number to the footer so a visitor can reach her from anywhere on the page, not only after scrolling to the Packages + Contact section.
- Keep the footer calm and understated — a simple line like:
  > *hello@yayaprenatal.de · +49 [phone] · Friedrichshain, Berlin*
- Still link to the legal pages (Impressum / Datenschutz) as today.
- Do not duplicate the full click-to-copy contact widget that lives inside the merged Packages + Contact section — the footer version should be lighter.

---

## Still open for Nina

The calm-care direction resolves most decisions, but two questions remain:

### 1. Body Map — how many markers, and which ones?

- Current: 12 markers (Thyroid, Vitamin D, Ferritin, B12, Folate, Minerals, Blood Count, Liver, Blood Sugar, Kidneys, Infections, Inflammation).
- Nina's earlier proposal: 6 markers (Thyroid, Vitamin D, Ferritin, Blood Sugar, Infections/CMV, Liver).
- My recommendation: **8 markers** (Thyroid, Vitamin D, Ferritin, **Folate**, **Minerals**, Blood Sugar, Infections/CMV, Liver).

Why the middle ground:
- **Folate** is the single most famous pregnancy nutrient. A visitor who arrives specifically looking for it would find it strange if the body map did not include it.
- **Minerals (Magnesium / Calcium / Zinc)** covers calf cramps, sleep trouble, and palpitations — the symptoms first-time visitors most often arrive with. It is probably the biggest "oh that's me" moment of the whole map.
- Cutting from 12 to 8 still removes a third of the dense medical text, which is the main point of the cut.

If Nina prefers the tighter 6-marker version, that is also valid — the two dropped entries (Folate, Minerals) are simply the ones I'd flag as the most noticeable absences.

### 2. Footer — confirm the contact details to show

The footer currently does not show Nina's email and phone. To add them, I need:

- The email address to display (I can check what's already in the codebase — if `hello@yayaprenatal.de` or similar is already used in the CTA section, I'll reuse it without asking).
- **The phone number to show publicly.** If Nina wants to show it, tell me which number. If not, I will only add the email.
- Whether the address ("Friedrichshain, Berlin" or a full street address) should appear in the footer too.

---

## Next step

1. Work directly on the `main` branch. No feature branch, no pull request.
2. Wait for Nina's answers on the two open questions above (Body Map marker count, footer contact details).
3. Make all the calm-care edits listed above in one focused pass, including:
   - Home content edits inside `src/data/content/home/*.ts`.
   - Merging the Packages and CTA components in `src/components/` so the two sections render as one.
   - Adding contact details to `src/components/Footer.astro`.
4. Run `npm run build` to confirm nothing is broken.
5. Start `npm run dev` for a local preview at http://localhost:4321 so Nina can see the new, quieter page.
6. Only after Nina has seen and approved the preview do we push to the live website.

No edits happen to any `.ts` or `.astro` file until Nina says the plan is ready to execute.
