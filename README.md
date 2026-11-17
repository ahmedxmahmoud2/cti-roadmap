# CTI Roadmap

An open, track-based Cyber Threat Intelligence roadmap: from zero to advanced CTI analyst, with self-checks, progress tracking, portfolio deliverables and a MENA focus. English first, with Arabic.

**Site:** https://ahmedxmahmoud2.github.io/cti-roadmap/

## Run locally

```sh
npm install
npm run dev
```

## Structure

- `src/data/roadmap.ts` — every checklist item (stable ids; never rename them)
- `src/data/resources.ts` — the resource library
- `src/content/docs/` — English pages; `src/content/docs/ar/` — Arabic pages
- `src/components/` — interactive pieces (entry wizard, checklists, progress, resource filters)

Built with [Astro Starlight](https://starlight.astro.build/). Deployed to GitHub Pages on every push to `main`.

## Contributing

See the [contributing page](https://ahmedxmahmoud2.github.io/cti-roadmap/contributing/).
