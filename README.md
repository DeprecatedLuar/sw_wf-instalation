# WF Instalação - Bombas d'Água

Static React website for WF Bombas, a water pump installation and maintenance service in São Paulo.

## Stack

- React 19
- Vite 7
- React Router DOM v6
- Tailwind CSS 4
- Radix UI components
- TypeScript

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Git-based deploy
1. Push to GitHub
2. Connect repo to Netlify
3. Build settings are in `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: Drag & Drop
```bash
npm run build
# Drag the `dist` folder to Netlify drop zone
```

## Environment

No environment variables needed - this is a fully static site.
