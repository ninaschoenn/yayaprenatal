# Yaya Prenatal Website — Claude Code Instructions

## Who is using this

**Nina** manages this website. She is NOT a developer — she has never used VS Code, GitHub, or the terminal before. Every interaction must be:

- In **simple, everyday language** — no jargon, no technical terms without explanation
- **Patient and supportive** — never assume she knows what something means
- **Safe** — always confirm before doing anything that changes the live website

## Communication Rules

1. **Always speak simply.** Instead of "I'll commit and push to main," say "I'll save your changes and update the live website."
2. **Always confirm before publishing.** Before any `git push` or action that affects the real website, ask Nina explicitly: "This will update the real website that visitors see. Should I go ahead?"
3. **Offer to preview first.** Before publishing, always suggest: "Want me to start a local preview so you can check how it looks before we put it live?"
4. **Explain what you're doing.** After each step, briefly tell Nina what happened in plain language.
5. **When Nina asks to change something, repeat back what you understood** in simple terms and ask: "Did I understand that correctly?" before making changes.
6. **If something goes wrong, don't panic Nina.** Explain calmly what happened and what you'll do to fix it. Never show raw error dumps — summarize the issue.
7. **Use German when Nina writes in German.** Match her language. If she writes in German, respond in German. If in English, respond in English.

## The Website

- **URL:** https://yayaprenatal.de
- **What it is:** A website for Nina's holistic pregnancy support practice in Berlin
- **Built with:** Astro (a tool that creates fast websites)
- **Styling:** Tailwind CSS with a warm, earthy color theme (cream, blush, terra)

## Project Structure (for Claude, not for Nina)

```
src/pages/          → The actual pages (index.astro, impressum.astro, datenschutz.astro)
src/components/     → Reusable sections (Header, Hero, Packages, Footer, etc.)
src/layouts/        → The base page template with SEO
src/styles/         → Global styles and theme colors
public/             → Static files (images, favicons, CNAME)
.github/workflows/  → Automatic deployment pipeline
```

**Key files Nina will most likely want to change:**
- `src/pages/index.astro` — The main landing page
- `src/components/Packages.astro` — Pricing and service packages
- `src/components/AboutNina.astro` — Nina's bio section
- `src/components/Testimonials.astro` — Client testimonials
- `src/components/Footer.astro` — Contact info in the footer
- `src/components/Header.astro` — Navigation menu
- `src/pages/impressum.astro` — Legal notice
- `src/pages/datenschutz.astro` — Privacy policy
- `src/components/HowItWorks.astro` — Process explanation
- `src/components/CTASection.astro` — Call-to-action buttons
- `src/components/CoachingSection.astro` — Coaching offerings
- `src/components/Hero.astro` — The hero/banner at the top

## How Things Work (for Claude to explain to Nina)

### Testing locally (preview before publishing)
```bash
npm run dev
```
This starts a local preview at http://localhost:4321 — only Nina can see it, not the public. Changes appear instantly when files are saved.

### Publishing to the live website
The process is:
1. Save the changes (git add + git commit)
2. Push to GitHub (git push)
3. GitHub automatically builds and deploys — takes about 1-2 minutes
4. The live website at https://yayaprenatal.de is updated

**IMPORTANT:** Always follow this sequence with Nina:
1. Make the changes she asked for
2. Offer to preview locally: "Want to see how it looks before we put it live?"
3. If she confirms, start `npm run dev` and tell her to open http://localhost:4321
4. When she's happy, ask: "Ready to update the real website?"
5. Only then commit and push

### Pushing to GitHub using the GitHub MCP (preferred method)
The GitHub MCP server is installed and authenticated. Use it to push changes directly without needing the terminal:
1. Run `npm run build` first to check everything works
2. Use git (via Bash tool) to stage and commit: `git add -A && git commit -m "describe the change"`
3. Use the GitHub MCP to push to main — this avoids needing Nina to use the terminal
4. Tell Nina: "Done! The website will update in 1-2 minutes."

**npm path note:** When running npm commands via Bash, always set the PATH first:
```bash
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH" && npm run build
```

### Building (checking if everything works)
```bash
npm run build
```
This creates the production version. If this fails, something is broken and needs fixing before publishing.

## Workflow for Common Tasks

### When Nina wants to change text on the website
1. Ask: "Which text do you want to change? Can you tell me the current text or which section it's in?"
2. Find the text in the source files
3. Show Nina what you found and confirm: "I found this text in [section name]. You want to change it to [new text]. Is that right?"
4. Make the change
5. Offer local preview
6. Ask before publishing

### When Nina wants to change images
1. She needs to provide the new image file
2. Place it in `public/images/`
3. Update the reference in the relevant component
4. Offer local preview
5. Ask before publishing

### When Nina wants to add a new page
1. Discuss what the page should contain
2. Create a new `.astro` file in `src/pages/`
3. Add a link in the navigation (Header.astro)
4. Offer local preview
5. Ask before publishing

### When Nina wants to undo a change
1. Explain: "I can undo the last change. Nothing on the live website will change until we publish again."
2. Use `git checkout` or `git revert` as appropriate
3. Confirm the undo worked

## Safety Rules

- **NEVER push to the repository without explicit confirmation from Nina**
- **NEVER delete files without asking first**
- **ALWAYS offer a local preview before publishing**
- **ALWAYS explain what will happen before doing it**
- **ALWAYS run `npm run build` before pushing** to make sure nothing is broken
- If the build fails, explain the issue simply and fix it before trying to publish
- Keep commits small and focused — one change per commit when possible
- Write commit messages that describe what changed in simple terms (e.g., "update phone number in footer")

## Color Theme Reference

If Nina wants to adjust colors, these are the current theme colors:
- **Cream** (#F7F3EE) — background
- **Warm** (#E8DDD3) — subtle backgrounds
- **Blush** (#D4A89A) — soft accents
- **Terra** (#C4856C) — main accent color (buttons, highlights)
- **Deep** (#5C3D2E) — text
- **Ink** (#3A2A1F) — dark text
- **Pearl** (#FFFCF9) — lightest background

## Fonts
- **Headlines:** Cormorant Garamond (elegant serif)
- **Body text:** DM Sans (clean, readable)

## Deployment Details (for Claude, not for Nina)

- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Trigger:** Every push to `main` branch triggers automatic build + deploy
- **Custom domain:** `yayaprenatal.de` (configured via `public/CNAME`)
- **Build tool:** Astro's official GitHub Action (`withastro/action@v5`)
- **Deploy time:** ~1-2 minutes after push

## Troubleshooting

### If `npm run dev` doesn't work
Run `npm install` first to make sure all tools are installed, then try again.

### If the build fails
Read the error carefully. Common issues:
- Typo in the code (unclosed tags, missing quotes)
- Missing image file that's referenced in the code
- Syntax error in a component

Always fix the issue before trying to publish.

### If Nina accidentally broke something
Stay calm. Use `git diff` to see what changed, and either fix it or revert with `git checkout`.
