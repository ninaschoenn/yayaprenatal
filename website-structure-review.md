# Website Structure Review

Last updated: 2026-04-08

This document maps the current website structure in plain language.

The goal is not just to list the sections, but to answer four questions for each one:

1. What is this section doing?
2. Why is it here?
3. What is good about it?
4. If we want a leaner site, should we keep it, simplify it, merge it, or question it?

There is also one important editorial lens behind this review:

- less commercial
- less “business funnel”
- more modern
- more calm
- more grounded
- more welcoming
- less pressure
- less “selling”

This matters because the site is not selling a product like shoes.
It is offering care, trust, safety, time, and emotional steadiness.

So the question is not only “does this section convert?”
It is also:

- does this section calm people down?
- does it feel respectful?
- does it sound like care instead of marketing?

## 1. Big Picture

The website is currently built as:

- one main marketing homepage in German at `/`
- one English version of the same homepage at `/en/`
- two legal pages in German: `/impressum/` and `/datenschutz/`
- two legal pages in English: `/en/imprint/` and `/en/privacy/`

Both homepage versions use the same structure. Only the language changes.

Main homepage file flow:

- Page entry: `src/pages/index.astro`
- English entry: `src/pages/en/index.astro`
- Shared homepage template: `src/templates/HomePage.astro`
- Shared layout and SEO: `src/layouts/BaseLayout.astro`

So structurally, the site is really:

- one long homepage story
- plus legal pages
- plus shared layout pieces like header, footer, SEO, language switching

## 2. Homepage Flow At A Glance

Current homepage order from top to bottom:

1. Header
2. Hero
3. For You
4. USP Bridge
5. Gap Stats
6. Baby First
7. Body Map
8. Coaching
9. How It Works
10. Packages
11. Journey
12. About Nina
13. Testimonials
14. CTA / Contact
15. Disclaimer
16. Footer

In plain language, the page currently tells this story:

1. Here is what Yaya is.
2. Here is who it is for.
3. Here is the gap in normal care.
4. Here is the blood-analysis proof.
5. Here is the emotional coaching proof.
6. Here is how the offer works.
7. Here is what it costs.
8. Here is who Nina is.
9. Here is social proof.
10. Here is how to contact her.

That is a strong sales flow.

The main question is not whether the structure works.
It does.

The main question is whether it is too long and slightly too persuasive for the tone you want.

My answer is: yes, probably a little.

## 3. Global Pieces

### Header

- File: `src/components/Header.astro`
- Working title: `Navigation / Brand Entry`

What it does:

- shows the logo
- shows the main navigation
- gives access to the language switcher
- opens the mobile menu

Why it exists:

- it orients people
- it gives the site a calm, branded top frame
- it lets people jump directly to important areas

What is good:

- clear
- lightweight
- bilingual
- feels premium and not overloaded

What is weaker:

- the homepage is mostly one long page, so navigation is helpful but not deeply necessary
- if the site gets much shorter, too many nav anchors may start to feel unnecessary

My take:

- Keep
- Good as a structural piece
- If the homepage gets stripped down, the nav can become simpler too

### Base Layout / SEO Layer

- File: `src/layouts/BaseLayout.astro`
- Working title: `Site Frame + Metadata`

What it does:

- applies global styling
- sets title, description, canonical URL, alternate language links
- sets Open Graph and Twitter sharing data
- sets structured data for Google
- loads favicon and manifest assets

Why it exists:

- this is the invisible structure that makes the site behave like a proper website

What is good:

- technically solid
- covers search, sharing, device icons, and language alternates

What is weaker:

- nothing serious structurally
- this is not a user-facing section, so it only needs maintenance, not simplification

My take:

- Keep
- Essential

### Footer

- File: `src/components/Footer.astro`
- Working title: `Legal Exit / Quiet Brand Close`

What it does:

- repeats the logo
- links to legal pages
- shows the location line

Why it exists:

- gives the page a proper ending
- provides legal navigation and brand reinforcement

What is good:

- simple
- elegant
- not cluttered

What is weaker:

- nothing major

My take:

- Keep

## 4. Homepage Sections

### 1. Hero

- File: `src/components/Hero.astro`
- Working title: `Main Promise`

What it says:

- Yaya helps women understand what is happening in their body
- the support combines blood analysis, tailored supplements, and inner work

Why it exists:

- this is the homepage opener
- it has to explain the offer fast
- it has to make the site feel distinct and premium

What is good:

- clear promise
- visually strong
- says very quickly that Yaya is not just one thing
- makes the site feel more high-end than generic health websites

What is weaker:

- it still carries a lot of information for a hero
- the promise is strong, but slightly abstract at first glance

My take:

- Keep
- Core section
- If simplifying later, reduce text before changing structure

### 2. For You

- File: `src/components/ForYou.astro`
- Working title: `Audience Recognition`

What it says:

- this is for women who want real clarity, not vague reassurance
- this is for women who suspect something may be missed
- this is for women who want both physical and inner support

Why it exists:

- helps the right visitor recognize herself
- filters out people who are not looking for this level of support

What is good:

- strong empathy
- easy to understand
- useful right after the hero because it answers “is this for me?”

What is weaker:

- some of its function overlaps with the hero and later sections
- if the site gets shorter, this could partly merge with the hero

My take:

- Keep, but it is mergeable
- Good section, not untouchable

### 3. USP Bridge

- File: `src/components/USPBridge.astro`
- Working title: `Three-Part Positioning Bridge`

What it says:

- Yaya combines bloodwork, nourishment, and inner support

Why it exists:

- gives a very short summary of the unique combination
- acts like a bridge between “who this is for” and “what the gap is”

What is good:

- concise
- memorable
- sharpens the concept

What is weaker:

- this exact idea already appears in the hero
- if the page is too long, this is one of the first sections I would question

My take:

- Good but optional
- Strong candidate to merge into the hero or another section

### 4. Gap Stats

- File: `src/components/GapStats.astro`
- Working title: `Problem Framing`

What it says:

- standard prenatal care has limits
- there is not enough time for expanded bloodwork
- there is no real room for emotional preparation
- Yaya fills that missing space

Why it exists:

- creates urgency
- explains why Yaya should exist at all

What is good:

- very clear strategic role
- probably one of the strongest persuasion sections on the page
- makes the offer legible

What is weaker:

- slightly aggressive in tone
- risks sounding too anti-doctor if not handled carefully
- one of the more commercial / sales-shaped sections on the site

My take:

- Keep the idea
- Possibly soften the tone
- If stripping down, keep a shorter version of this rather than remove it entirely

### 5. Baby First

- File: `src/components/BabyFirst.astro`
- Working title: `Biological Reframing`

What it says:

- the baby takes what it needs first
- symptoms can be messages, not just “normal discomfort”
- fetal programming matters

Why it exists:

- deepens the biological logic behind the offer
- prepares the visitor to care about blood analysis and nutrient status

What is good:

- emotionally strong
- conceptually memorable
- gives seriousness to the physical side of the offer

What is weaker:

- it is more abstract than the sections around it
- it can feel like one more explanatory layer on an already dense page

My take:

- Good section
- Mergeable with Body Map or Gap Stats if the goal is a shorter homepage

### 6. Body Map

- File: `src/components/BodyMap.astro`
- Working title: `Interactive Proof`

What it says:

- Yaya does a much deeper blood reading than standard care
- different markers matter for both mother and baby
- the offer is specific, not vague

Why it exists:

- this is the clearest proof section for the blood-analysis side
- it turns the promise into something concrete and differentiated

What is good:

- highly distinctive
- strongest “this is not a generic coach” section on the page
- visually memorable
- makes the medical angle feel real

What is weaker:

- dense
- asks a lot from the visitor
- some people may not interact with it at all

My take:

- Keep
- This is one of the most valuable sections on the site
- If simplifying, keep the concept but maybe shorten the surrounding explanation

### 7. Coaching

- File: `src/components/CoachingSection.astro`
- Working title: `Emotional Proof`

What it says:

- pregnancy changes identity, relationships, and fear
- systemic coaching is not advice and not therapy
- Nina helps women find their own answers

Why it exists:

- justifies the coaching half of the business
- shows what the conversations actually sound like

What is good:

- human
- emotionally intelligent
- very useful for people who do not immediately understand what “systemic coaching” means

What is weaker:

- still fairly long
- its note box and its dialogue examples both explain the same thing

My take:

- Keep
- Important section
- Good candidate for tightening, not removing

### 8. How It Works

- File: `src/components/HowItWorks.astro`
- Working title: `Operational Clarity`

What it says:

- what is included in the main support package
- how often appointments happen
- what the rhythm of support looks like

Why it exists:

- converts abstract interest into something understandable
- answers practical questions before pricing

What is good:

- useful
- concrete
- well placed before the packages

What is weaker:

- some parts overlap with Packages and Journey
- there are now three separate “how support works” sections on the page:
  - How It Works
  - Packages
  - Journey

My take:

- Keep the function
- But this area overall is too repetitive

### 9. Packages

- File: `src/components/Packages.astro`
- Working title: `Offer + Pricing`

What it says:

- here is the main monthly package
- here are the one-off options
- here is the price and the value framing

Why it exists:

- it is the commercial core of the page
- without this, people cannot evaluate the offer

What is good:

- clear
- direct
- good separation between the main package and smaller offers

What is weaker:

- this is one of the most sales-shaped parts of the site
- when combined with How It Works and Journey, it can feel like too much offer explanation

My take:

- Keep
- Essential
- If simplifying later, simplify around it rather than cutting it

### 10. Journey

- File: `src/components/Journey.astro`
- Working title: `Timeline Of The Experience`

What it says:

- what six months with Nina feel like over time
- how support evolves during pregnancy

Why it exists:

- gives emotional continuity to the package
- makes the service feel like a relationship, not isolated sessions

What is good:

- warm
- reassuring
- helps the visitor imagine the process

What is weaker:

- overlaps with How It Works and Packages
- if the goal is a leaner homepage, this is one of the strongest candidates to shorten or remove

My take:

- Good section, but optional
- Probably the first larger section I would cut if the page needs to get shorter

### 11. About Nina

- File: `src/components/AboutNina.astro`
- Working title: `Founder Trust Section`

What it says:

- Nina has lived this search herself
- she built the practice from a real gap she experienced
- here are her credentials

Why it exists:

- trust
- human closeness
- founder credibility

What is good:

- essential emotional trust section
- makes the business feel personal instead of transactional
- probably one of the strongest brand-building parts of the site

What is weaker:

- it comes quite late
- some people may want this trust section earlier

My take:

- Keep
- Essential
- Strong case for moving a little higher if the site is shortened

### 12. Testimonials

- File: `src/components/Testimonials.astro`
- Working title: `Social Proof`

What it says:

- other women felt seen, helped, and medically supported

Why it exists:

- gives outside proof
- reduces the feeling that the site is making claims about itself without evidence

What is good:

- short
- readable
- supports the three main offer pillars:
  - blood analysis
  - coaching
  - support

What is weaker:

- there are only three
- because the rest of the page is very carefully written, testimonials need to feel especially believable and grounded

My take:

- Keep
- Good supporting section
- Could stay short

### 13. CTA / Contact

- File: `src/components/CTASection.astro`
- Working title: `Conversion Exit`

What it says:

- if this feels right, write to Nina
- here are the direct contact details

Why it exists:

- makes the next step easy
- gives a gentle final conversion point

What is good:

- clear
- simple
- personal
- not overcomplicated

What is weaker:

- nothing major
- the wording can become softer or stronger later depending on brand tone

My take:

- Keep
- Essential

### 14. Disclaimer

- File: `src/components/Disclaimer.astro`
- Working title: `Boundary / Safety Note`

What it says:

- Yaya complements medical care
- it does not replace doctors or midwives

Why it exists:

- medical clarity
- trust
- legal and ethical positioning

What is good:

- necessary
- calms the tone after stronger sales sections

What is weaker:

- not exciting, but that is fine

My take:

- Keep
- Necessary closing note

## 5. Legal Pages

### Impressum / Imprint

- Files:
  - `src/pages/impressum.astro`
  - `src/pages/en/imprint.astro`
- Working title: `Legal Identity Page`

What it does:

- states who operates the site and practice
- contains legal and professional information

Why it exists:

- legally required
- necessary for trust and transparency

What is good:

- present
- complete
- bilingual

What is weaker:

- not a persuasion page, so no need to optimize it beyond clarity

My take:

- Keep as is unless legal details change

### Datenschutz / Privacy

- Files:
  - `src/pages/datenschutz.astro`
  - `src/pages/en/privacy.astro`
- Working title: `Data Handling Page`

What it does:

- explains what personal data is handled and why

Why it exists:

- legal compliance
- user trust

What is good:

- present
- structured
- bilingual

What is weaker:

- same as the imprint page: this is not a brand or conversion page

My take:

- Keep as is unless data practices change

## 6. What Feels Essential vs Optional

### Core sections I would clearly keep

- Header
- Hero
- Gap framing in some form
- Body Map
- Coaching
- Packages
- About Nina
- Testimonials
- CTA / Contact
- Disclaimer
- Footer

### Good but not sacred

- For You
- Baby First
- How It Works

### First sections I would question if the goal is a shorter site

- USP Bridge
- Journey

## 7. What Currently Makes The Site Feel Too Commercial

These are not “bad” sections.
They are just the places where the tone starts to feel more like persuasion than care.

### 1. USP Bridge

Why:

- very concise positioning language
- reads like brand messaging
- says the right thing, but in a way that feels slightly more strategic than human

### 2. Parts of Gap Stats

Why:

- strong use of contrast and deficiency
- pushes the “the standard system is failing you” argument quite hard
- effective, but can feel slightly pressuring

### 3. Parts of Packages

Why:

- necessary section, but it is naturally the most commercial part of the page
- phrases like recommendation badges, savings framing, and offer stacking make the page feel more sales-led

### 4. Repetition of justification

Why:

- when the page explains the value again and again, it starts to sound like it is trying to convince
- even if each section is good on its own, too many explanations in a row create pressure

## 8. Direction For A Calmer Tone

If the goal is to make the site feel warmer, calmer, and more modern, I would guide future edits with these rules:

### Lead with care, not persuasion

Good direction:

- “You deserve support that sees the whole of you.”
- “There is space here for your questions.”

Less good direction:

- hard contrast
- heavy proof stacking
- repeated framing around what others are not doing

### Use fewer “sales steps”

The calmer version of the site would need less of this sequence:

- problem
- proof
- proof again
- package
- process
- timeline
- CTA

Instead, it would feel better with:

- invitation
- clarity
- trust
- one or two strong proofs
- gentle next step

### Sound like a person, not a concept deck

Better tone:

- direct
- warm
- precise
- emotionally intelligent

Less fitting tone:

- slogan-heavy
- too polished
- too many short branded statements

### Let important sections breathe

Calm websites usually do not argue at the visitor so much.
They create confidence by being:

- clear
- quiet
- spacious
- selective

That means fewer repeated points, fewer “look how different we are” moments, and more trust in the strongest sections.

## 9. Where The Site Feels Repetitive

The homepage is not badly structured.
The main issue is repetition of explanation.

The same ideas appear multiple times:

- Yaya combines physical and emotional care
- normal care has a gap
- support is deep and personal
- the process unfolds over time

That repetition is not useless, but it does create the feeling of:

- too much text
- slightly too much persuasion
- too many sections explaining the same thing from different angles

The overlapping cluster is mainly this:

- USP Bridge
- Gap Stats
- Baby First
- How It Works
- Journey

This is where I would simplify first.

## 10. If The Goal Is To Strip The Site Down

I would think in layers:

### Layer 1: absolutely necessary

- Hero
- one clear problem section
- one strong proof section for blood analysis
- one strong proof section for coaching
- pricing
- trust
- contact

### Layer 2: supportive but optional

- audience-recognition section
- biological explanation section
- process timeline section

### Layer 3: easiest to remove or merge

- USP Bridge
- part of Journey
- part of How It Works

## 11. If The Goal Is To Strip The Site Down And Make It Less Sales-Led

I would probably do the simplification in this order:

1. Remove or merge USP Bridge.
2. Shorten Gap Stats so it still explains the gap without pushing too hard.
3. Keep Body Map as the main proof section for the physical side.
4. Keep Coaching as the main proof section for the emotional side.
5. Reduce overlap between How It Works, Packages, and Journey.
6. Keep About Nina strong, and possibly move trust a little earlier.
7. Keep the final CTA simple and gentle.

That would make the site feel less like a funnel and more like a calm, confident practice.

## 12. Short Verdict

The current website is well built and tells a coherent story.

Its main weakness is not confusion.
Its main weakness is density.

The structure is strong enough.
The real decision now is editorial:

- Do you want a fuller, more persuasive long-form page?
- Or do you want a calmer, shorter, more distilled page?

If the answer is “shorter, calmer, warmer, and less commercial,” I would not rebuild the whole site.
I would mostly:

- merge a few middle sections
- reduce repeated explanations
- move trust earlier
- keep the strongest proof and conversion sections
