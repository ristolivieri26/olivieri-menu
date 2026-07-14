# Menù Digitale — Ristorante Pizzeria Da Olivieri

Menù digitale per QR code. Costruito con React + Vite + TypeScript + Tailwind CSS.

## Setup (prima volta)

1. **Installa Node.js** — scarica da [nodejs.org](https://nodejs.org/) (versione LTS)
2. Apri il terminale in questa cartella
3. `npm install`
4. `npm run dev`  →  apri [http://localhost:5173](http://localhost:5173)

## Deploy (per il QR code)

```bash
npm run build
```
Carica la cartella `dist/` su qualsiasi hosting statico:
- **Netlify** (gratuito): trascina la cartella `dist/` su netlify.com/drop
- **Vercel** (gratuito): `npx vercel` nella cartella
- **GitHub Pages**: pusha il codice su GitHub e attiva Pages

## Aggiungere le foto dei piatti

1. Metti le foto nella cartella `public/photos/`  
   (es. `public/photos/spaghetti-scoglio.jpg`)
2. In `src/data/menu.ts`, aggiungi `photo` al piatto corrispondente:
   ```ts
   { id: 'pm1', name: 'Spaghetto allo Scoglio', ..., photo: '/photos/spaghetti-scoglio.jpg' }
   ```
3. Salva → la foto appare nella card e nel modal quando si clicca il piatto.

## Struttura

```
src/
  data/menu.ts          ← tutto il menù (piatti, prezzi, allergeni)
  components/
    HeroSection.tsx     ← intestazione con nome e tagline
    CategoryNav.tsx     ← barra categorie scrollabile (sticky)
    MenuSection.tsx     ← sezione per categoria (antipasti terra/mare, ecc.)
    MenuItem.tsx        ← card singolo piatto
    DishModal.tsx       ← modal con foto + allergeni completi
    BeverageSection.tsx ← lista bevande e vini
    Footer.tsx          ← legend allergeni + info ristorante
```

## Aggiornare il menù

Modifica solo `src/data/menu.ts` — prezzi, piatti, allergeni sono tutti lì.