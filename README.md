# DriverNexo - Landing Page

Landing page pentru **DriverNexo**: jurnal digital de conducere pentru șoferi începători + ghid structurat pentru părinte, cu lecții video scurte pe 12 săptămâni.

## Cuprins

- [Prezentare](#prezentare)
- [Tehnologii](#tehnologii)
- [Structură](#structură)
- [Dezvoltare locală](#dezvoltare-locală)
- [Deployment](#deployment)

## Prezentare

Pagina prezintă:

- **Hero** cu propunerea de valoare și un mockup de telefon cu progresul elevului
- **Problema reală** (3 dureri: lipsa structurii, lipsa progresului măsurabil, pregătire haotică pentru examen)
- **6 funcționalități** (plan 12 săptămâni, Dual Control, contor ore, quiz teoretic, comunitate, export dosar)
- **Cum funcționează** în 4 pași
- **Poveste + persona** cu citat și cifre concrete
- **Prețuri** (Gratuit vs. Pro 119 lei/an)
- **FAQ** cu 6 întrebări
- **CTA strip** pentru descărcare
- **Footer** cu linkuri

Designul este **dark-mode modern**, mobile-first, complet responsive, cu animații subtile de reveal la scroll. Fără build tools — un singur fișier HTML cu CSS și JS inline.

## Tehnologii

- HTML5 semantic
- CSS modern (custom properties, grid, flexbox, backdrop-filter)
- Vanilla JS (IntersectionObserver pentru reveal + FAQ single-open)
- Google Fonts: **Inter** + **JetBrains Mono**
- Fără framework-uri, fără bundlere, fără dependențe

## Structură

```
drivernexo/
├── index.html      # landing page completă (~1325 linii)
└── README.md       # acest fișier
```

## Dezvoltare locală

Deschide `index.html` în browser sau servește cu un static server:

```bash
python3 -m http.server 8080
# apoi vizitează http://localhost:8080
```

## Deployment

Pagina este publicată automat prin **GitHub Pages** la:
**https://garconai93.github.io/drivernexo/**

Deploy manual:

```bash
git add -A
git commit -m "Update landing"
git push origin main
```

---

Construit cu ⚡ pentru părinții din România care vor să predea condusul cu metodă.
