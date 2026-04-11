# Homepage Editing Plan

_Last updated: 2026-04-11_

This document is the shared editing plan for trimming and tightening the Yaya Prenatal homepage. It builds on two earlier reviews and turns their suggestions into concrete decisions we can execute file by file.

## Source material

Two reviews fed into this plan. Both are worth keeping around.

1. **`website-structure-review.md`** (repo root, dated 2026-04-08) — a section-by-section review of the whole site, written through a **tonal** lens. Its core message is that the page feels "slightly too commercial" and "slightly too persuasive" for a practice that should feel like care, not a funnel.
2. **Chat review from 2026-04-11** — a section-by-section review of `src/data/content/home/*.ts`, written through a **structural** lens. Its core message is that the page is too long, repeats the same 4–5 ideas, and the offer (Complete Care) lands too late in the reading flow.

These two reviews mostly agree, but they disagree on a few important decisions. That disagreement is the most interesting thing in this document, so it sits at the top.

---

## The editorial fork

Before we start cutting, Nina needs to pick a direction. The two reviews point at slightly different versions of "shorter."

| Decision | Sales-efficient version | Calm-care version |
|---|---|---|
| **Gap Stats** | Keep as-is — strongest argument on the page | Soften tone, less "standard care is failing you" |
| **Packages placement** | Move earlier (section 6) so booking is closer to the top | Keep where it is, don't over-emphasize pricing |
| **"For You" bullets** | Tighten, keep the edge ("not just within range") | Soften the edge so it doesn't sound anti-doctor |
| **About Nina** | Keep in current position | Move earlier so trust comes before the sales-shaped middle |
| **Baby First** | Delete entirely (Nina's breakdown) | Shrink to a 2-sentence pull-quote |
| **Overall voice** | Warm but confident, with a clear funnel shape | Quieter, more selective, less "look how different we are" |

Both directions keep the same roster of cuts: remove USP Bridge, trim the Coaching dialogues, reduce the overlap between How It Works / Packages / Journey, keep the Body Map as the strongest proof section. What changes between the two is **tone** and a handful of **structural choices** marked in the section-by-section list below.

**Question for Nina:** calm care, or sales-efficient? Everything else depends on this.

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

The visitor currently meets the **offer in section 9**. Both reviews agree that is too late, though they disagree on whether the fix is "move the offer up" or "make everything above it feel less like a pitch."

---

## Repetition map

Five ideas repeat across multiple sections. Each repetition weakens the next mention.

1. **"The standard care misses things"** — told in `gap-stats.ts`, implied in `baby-first.ts`, told again in `body-map.ts`, told again in `about.ts`.
2. **"18 markers / 22 markers"** — told in `gap-stats.ts`, `body-map.ts`, and `packages.ts`.
3. **"75 minutes just for you"** — told in `how-it-works.ts` and echoed in `testimonials.ts`. This one is fine — a testimonial echoing a promise is good.
4. **"Complete Care described from different angles"** — `how-it-works.ts` lists the 4 features, `packages.ts` lists what's included, `journey.ts` walks through the same 6 months. Three sections, one offer.
5. **"Baby takes from your reserves"** — told in `baby-first.ts` and again inside the minerals entry of `body-map.ts`.

The goal is to let each of these ideas live in **one** clearly owned section and only be echoed elsewhere through specific details (like a testimonial naming the 75 minutes).

---

## Section-by-section decisions

Each row below is marked **SAFE** (both reviews agree, can be executed without further input) or **FORK** (depends on the editorial fork above).

### 1. Hero — `hero.ts`
- **SAFE.** Keep as is. Strong opener, clear promise, good three bullets. No changes.

### 2. For You — `for-you.ts`
- **SAFE:** Trim from 4 bullets to 3. Bullets 1 and 3 are near-duplicates ("understand your bloodwork" vs. "don't take supplements blindly"). Merge them.
- **SAFE:** Weave the single best sentence from Baby First ("Dein Baby nimmt sich, was es braucht — aus deinen Reserven, deshalb spürst du den Mangel zuerst") into this section, so the "baby first" idea survives even if Baby First as a whole section is deleted.
- **FORK:** The remaining bullets can either keep their slightly sharp edge ("not just 'within range'") or be softened to feel less anti-doctor. Pick based on the fork above.

### 3. USP Bridge — `usp-bridge.ts`
- **SAFE.** Remove or merge. Both reviews agree this is the first candidate to cut. Its content already exists in the hero's three bullets.

### 4. Gap Stats — `gap-stats.ts`
- **SAFE:** Pick one of the two parallel blocks. Right now there are *three stats* AND *three steps* (doctor / midwife / Yaya) on the same theme, right below each other. Two parallel threes weaken each other. Keep one.
- **SAFE:** Stop saying "18 markers" here. Let `body-map.ts` be the single source of truth for that number.
- **FORK:** Tone decision. Sales-efficient version keeps the punch ("0 minutes for your fears — not part of standard prenatal care"). Calm-care version softens the "the system is failing you" edge.

### 5. Baby First — `baby-first.ts`
- **FORK:** Nina's breakdown says delete this section entirely and move its best sentence into For You. The existing review calls it "emotionally strong" and "conceptually memorable" but "mergeable." A good middle option is to shrink it to a 2-sentence pull-quote that keeps the "fetal programming" hook visible, because that is arguably the strongest "oh wow" science moment on the page.
- Decision needed: delete, shrink, or merge.

### 6. Body Map — `body-map.ts`
- **SAFE:** Remove the "Gap" label from every marker. We explain the gap once in Gap Stats; repeating it inside every single marker description makes the tone cold and repetitive. This is Nina's idea and both reviews support it.
- **SAFE:** Drop the intro line ("Wir schauen nicht einfach auf Werte") — it repeats the hero's promise.
- **SAFE:** Make this the single place the page names "22 markers" and "18 not in the maternity record."
- **FORK:** Marker count. Nina's breakdown proposes 6 (Thyroid, Vitamin D, Ferritin, Blood Sugar, Infections/CMV, Liver). Open concerns with the 6-marker set:
  - **Folate** is the most famous pregnancy nutrient. Dropping it from a body map a visitor came to read could feel strange.
  - **Minerals (Magnesium / Calcium / Zinc)** covers calf cramps, sleep trouble, and palpitations — the most universally relatable pregnancy complaints. Probably the biggest "oh that's me" moment for a first-time visitor.
  - **Recommended middle ground: 8 markers** — Thyroid, Vitamin D, Ferritin, Folate, Minerals, Blood Sugar, Infections/CMV, Liver. Still a meaningful cut from 12, without losing the two most emotionally relatable entries.
- Decision needed: 6, 8, or 12 markers, and which specific ones.

### 7. Coaching — `coaching.ts`
- **SAFE:** Cut the dialogues from 7 to 3 or 4. Seven is a lot to scroll through; three or four is enough to show the range (fear, identity, partnership, readiness). Recommended keepers: "Ich habe Angst vor der Geburt," "Ich habe das Gefühl, ich verliere mich selbst," "Mein Partner und ich streiten mehr," and optionally "Ich weiß nicht, ob ich bereit bin, Mutter zu sein."
- **SAFE:** Shorten the closing `note` paragraph. The first two sentences ("not therapy, not advice — a space where you find your own answers") are the important part. The list of topics at the end is already covered by the dialogues themselves.

### 8. How It Works — `how-it-works.ts`
- **FORK:** In the sales-efficient version, merge the 4 icons directly into the Complete Care card in `packages.ts` — one place, one story. In the calm-care version, keep it as a separate section because the visual rhythm matters and merging makes the packages section look more sales-shaped.
- Either way: small copy edits to remove overlap with `packages.ts` bullet list.

### 9. Packages — `packages.ts`
- **SAFE:** Keep the Complete Care offer and the free Intro Call visually prominent.
- **SAFE:** De-emphasize the 4 single-session options so they don't compete visually with the main offer. A compact list or a collapsible section works.
- **FORK:** Position on the page. Sales-efficient version moves Packages up to roughly section 6 (after Body Map). Calm-care version leaves it where it is.

### 10. Journey — `journey.ts`
- **SAFE:** Collapse from 6 chapters to 3 phases so it doesn't duplicate `how-it-works.ts` and `packages.ts` for a third time. Proposed phases:
  - **Arrive & Understand** (old chapters 1–2): first meeting, baseline blood analysis, supplement plan.
  - **Deepen & Connect** (old chapters 3–4): second analysis, partner session, inner work, fears.
  - **Trust & Let Go** (old chapters 5–6): final analysis, body check, chat access to the big day.
- Note: the existing review is willing to go even further and question whether this section is needed at all. If the final page still feels too long after all other cuts, Journey is the next thing to remove.

### 11. About Nina — `about.ts`
- **SAFE:** Remove the sentence "Zwischen Gynäkologin und Hebamme … gibt es eine Lücke" — the gap idea is already told in Gap Stats. Keep the rest of Nina's personal story exactly as it is; it's the strongest trust moment on the page.
- **FORK:** Position on the page. Sales-efficient version keeps About Nina where it is. Calm-care version moves it earlier (somewhere between For You and Body Map) so trust arrives before the more persuasive middle cluster.

### 12. Testimonials — `testimonials.ts`
- **SAFE.** Keep as is. Three quotes, three angles (blood, coaching, time). Clean.

### 13. CTA — `cta.ts`
- **SAFE.** Keep as is. Warm and simple.

### 14. Disclaimer — `disclaimer.ts`
- **SAFE.** Keep as is. Necessary closing note.

---

## Things to flag before we start cutting

These are the points where my instinct disagrees with the fastest version of Nina's breakdown. They're not blockers — just moments Nina should decide consciously.

1. **Body Map 12 → 6 is aggressive.** The body map is the main "dig in if you want" interactive on the page, and a big part of why Yaya feels serious and medical. Cutting it in half might go too far. 8 markers is a safer cut.
2. **Folate should probably stay in the body map.** It's the first nutrient anyone associates with pregnancy. A visitor who comes to a blood-work section and doesn't see folate may quietly wonder why.
3. **Minerals should probably stay in the body map.** Calf cramps and sleep trouble are the symptoms first-time visitors most often arrive with. That marker earns its place.
4. **Baby First does not have to disappear completely.** Shrinking it to a 2-sentence pull-quote keeps the "fetal programming" moment visible without adding a whole new section. Full deletion is also defensible if the calm-care direction wins.
5. **Merging How It Works into Packages is only worth it in the sales-efficient direction.** In the calm-care direction, keeping them separate is better because merging them makes the pricing section look denser and more funnel-shaped.

---

## Open questions for Nina

In order of importance:

1. **Editorial fork: calm care, or sales-efficient?** Everything else depends on this.
2. **Body Map — how many markers?** 6, 8, or 12?
3. **Body Map — which markers specifically?** Recommended 8: Thyroid, Vitamin D, Ferritin, Folate, Minerals, Blood Sugar, Infections/CMV, Liver. Or Nina's proposed 6: Thyroid, Vitamin D, Ferritin, Blood Sugar, Infections/CMV, Liver.
4. **Baby First** — full delete, 2-sentence pull-quote, or merge into Body Map?
5. **About Nina** — move earlier on the page, or leave in place?

---

## Next step

Once Nina answers the open questions, the edits happen in this order:

1. Work on the feature branch `claude/streamline-home-content-roKlN` (or on `main` if Nina prefers — that's her call).
2. Make all SAFE edits first — these are uncontroversial and both reviews support them.
3. Make the FORK edits in the direction Nina chooses.
4. Run `npm run build` to confirm nothing is broken.
5. Start `npm run dev` for a local preview at http://localhost:4321 so Nina can see the new, shorter page.
6. Only after Nina has seen and approved the preview do we publish to the live website.

No edits happen to any `.ts` file until Nina says yes.
