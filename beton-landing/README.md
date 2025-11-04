# Бетон партнёр — Landing Page

Landing page dla zakładu betonowego w Боброво.

## Technologie

- Vite (build tool)
- Express.js (server)
- Leaflet (OpenStreetMap)
- Swiper.js (sliders)

## Lokalny development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Deploy na Railway

### Ważne: Ustaw Root Directory

Railway musi wiedzieć, że projekt jest w folderze `beton-landing/`:

**W Railway Dashboard:**
1. Przejdź do projektu → Settings → Build & Deploy
2. Ustaw **Root Directory** na: `beton-landing`
3. Ustaw **Build Command**: `npm ci && npm run build`
4. Ustaw **Start Command**: `npm start`

**Lub użyj Railway CLI:**
```bash
npm install -g @railway/cli
railway login
cd beton-landing
railway init
railway up
```

**Alternatywnie - deploy z GitHub:**
1. Upewnij się, że wszystkie pliki są w repozytorium
2. Połącz repozytorium z Railway
3. W Settings ustaw Root Directory na `beton-landing`
4. Railway automatycznie wykryje Node.js i uruchomi build

## Environment Variables

Railway automatycznie ustawia `PORT` - nie trzeba konfigurować ręcznie.

## Struktura projektu

```
beton-landing/
├── index.html          # Główny plik HTML
├── static/            # Statyczne pliki
│   ├── css/
│   ├── js/
│   └── img/
├── server.js          # Express server dla production
├── vite.config.js     # Konfiguracja Vite
└── package.json       # Zależności i skrypty
```
