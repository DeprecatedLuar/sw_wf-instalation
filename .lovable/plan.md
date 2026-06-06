
# WF Bombas — Homepage & Navigation Plan

Premium, conversion-focused homepage in **Portuguese (PT-BR)** for a water pump installation & maintenance business in Zona Sul de São Paulo. WhatsApp-first conversion. No backend.

## Language & Voice
- All copy in **Portuguese (Brazil)**
- Brand Type: **Business** → plural/team voice ("Atendemos", "Instalamos", "Nossa equipe")
- No banned phrases, no em dashes, no unverifiable superlatives

## Visual Direction
- **Style:** Blue-Collar Authority — confident, industrial, trustworthy
- **Palette (proposed):**
  - Deep navy `#0B1F3A` (primary / authority)
  - Water blue `#1E73BE` accent (CTA highlights)
  - Safety orange `#F26A1F` (WhatsApp / action) — pulls from the orange pump in attachment 2
  - Warm off-white `#F6F4EF` (surface)
  - Charcoal `#141821` (text)
- **Typography:** Display: `Archivo` (semibold, tight) for H1/H2. Body: `Inter`. Phone number: heavier weight in nav.
- **Hero:** Dark, image-backed (generated pump/plumbing context image, blank/unbranded) with 60% dark scrim. Mobile → solid dark gradient.

## Suggested Grand Slam Offer
**"Diagnóstico gratuito + atendimento em até 2h na Zona Sul de SP. Sem deslocamento cobrado na primeira visita."**

## Homepage Sections (in order)

1. **Sticky Header / Nav**
   - Left: WF Bombas wordmark
   - Center/right: Serviços ▾ | Áreas de Atendimento ▾ | Sobre | Contato
   - Phone `(11) 96806-6749` in **bold** beside primary CTA
   - Primary CTA button: **"Falar no WhatsApp"** (solid, orange accent)
   - Solid navy background, custom spacing (not pill, not evenly distributed)

2. **Hero**
   - H1 (3 semantic lines):
     ```
     Instalação e manutenção
     de bombas d'água
     na Zona Sul de SP
     ```
   - Subhead: "Atendimento em até 2h em Pedreira, Cidade Dutra, Grajaú, Santo Amaro e região. Diagnóstico gratuito na primeira visita."
   - Primary CTA: WhatsApp · Secondary: Click-to-call
   - Trust micro-line: "Residencial · Condominial · Comercial"

3. **Trust Bar** (Cialdini order)
   - Social proof: Google Reviews star count (placeholder until scrape)
   - Authority: "Especialistas em bombas centrífugas, pressurizadoras e submersas"
   - Experience: "Atendimento na Zona Sul de SP"
   - Trust: NAP visible

4. **Serviços Overview** (cards → /servicos/[slug])
   - Instalação de bomba d'água
   - Manutenção preventiva
   - Conserto / manutenção corretiva
   - Substituição de bomba
   - Bomba de pressurização
   - Bomba submersa
   - Bomba de poço artesiano

5. **Portfólio de Trabalhos** — Embla autoplay carousel
   - `max-h-[280px]`, `object-contain`, infinite loop, ~2.5s/slide, pause on hover
   - Uses user's two uploaded photos + 4–6 generated unbranded pump/plumbing images (.webp)

6. **Avaliações Google** — `react-google-reviews` widget reading `/public/reviews.json` (placeholder schema until Apify scrape lands)

7. **Sobre a WF Bombas** — concise; marks unverified facts as Not Provided rather than fabricating years/team size

8. **Áreas de Atendimento** — chips/cards → /areas/[slug] for Pedreira, Cidade Dutra, Grajaú, Campo Grande, Interlagos, Cidade Ademar, Santo Amaro

9. **Bottom CTA Block** — "Bomba com problema? Resolvemos hoje." WhatsApp primary, phone visible

10. **Footer** — NAP, GBP link, nav mirror, copyright

11. **Sticky Mobile Action Bar** — Call + WhatsApp (≤1024px)

## Technical Setup
- `src/config/site.ts` exports `site`, `services`, `areas`
- `src/routes/index.tsx` = homepage; route files for `/servicos/$slug` and `/areas/$slug` get **stubbed** (created but not built out) so nav links typecheck
- `embla-carousel-react` + `embla-carousel-autoplay`
- `react-google-reviews` from GitHub source
- `/public/reviews.json` placeholder with valid schema
- LocalBusiness JSON-LD in homepage `head()`
- `/public/robots.txt` + `/sitemap.xml` route
- All imagery generated as `.webp`, blank/unbranded, plus user's 2 uploaded photos via Lovable Assets CDN
- WhatsApp redirect helper: `https://wa.me/5511968066749?text=...`
- Scroll-to-top on route change

## Out of Scope for This Phase
- Sub-page bodies (services, areas, sobre) — only stubs to satisfy nav typing
- GHL, booking calendar, backend forms
- Real reviews data (waiting on Apify scrape confirmation)

## What I'll Confirm Before Building
See follow-up questions.
