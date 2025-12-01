# Sansopedia

An Undertale-focused reference site that documents fan-made Alternate Universes (AUs) and Alternate Timelines (ATs), alongside core information about the base game. Built with React + TypeScript.

Live features include:
- A hero section themed around Undertale with a Sans sprite
- Overview content explaining Undertale, its routes (Neutral, True Pacifist, Genocide), and legacy
- Dedicated sections/components for AUs and ATs (fan-created variants of the Undertale universe)

> Note: Sansopedia is a community fan project. Undertale and related characters, names, and assets are the property of their respective owners. This site is not affiliated with Toby Fox.

## Tech Stack
- React + TypeScript
- CSS modules/styles in `src/App.css`
- Assets served from `public/` and `src/assets/`

## Getting Started
1. Install dependencies:
   - `npm install`
2. Start the development server:
   - `npm start`
   - Open http://localhost:3000 in your browser
3. Build for production:
   - `npm run build` (outputs to `build/`)
4. Run tests (if any are added):
   - `npm test`

## Project Structure
```
D:/sansopedia
├── public/                  # Static files (HTML, images not processed by bundler)
├── src/
│   ├── components/
│   │   ├── Home.tsx        # Landing page with Undertale overview and visuals
│   │   ├── AUs.tsx         # Alternate Universes listing/view
│   │   └── ATs.tsx         # Alternate Timelines listing/view
│   ├── App.tsx             # App entry and routing between sections
│   ├── App.css             # Global styles
│   └── assets/             # Project images (e.g., Sans sprite)
├── package.json
├── tsconfig.json
└── README.md
```

## Development Notes
- Image assets: primary Sans sprite located under `src/assets/` and referenced in `Home.tsx`.
- The UI content emphasizes Undertale routes and community creations (AUs/ATs). Extend `AUs.tsx` and `ATs.tsx` with data sources or links as the project grows.
- Styling is centralized in `src/App.css`. Prefer class-based styles consistent with existing conventions.

## Scripts
- `npm start` — Run the dev server
- `npm run build` — Production build to `build/`
- `npm test` — Run tests (if present)

## Roadmap
- Populate AU/AT pages with structured data (titles, creators, links, tags)
- Add search and filtering
- Theming and accessibility improvements

## Legal / Attribution
Undertale © Toby Fox. This is a non-commercial fan project for educational/documentation purposes.
