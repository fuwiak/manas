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

**Railway Dashboard - Settings → Build & Deploy:**

1. **Root Directory**: (puste - root projektu)
2. **Build Command**: `npm ci --prefer-offline --no-audit && npm run build`
3. **Start Command**: `npm start`

**Lub użyj Railway CLI:**
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

**Deploy z GitHub:**
1. Połącz repozytorium z Railway
2. Railway automatycznie wykryje Node.js i uruchomi build
3. Nie trzeba ustawiać Root Directory - wszystkie pliki są w root

## Environment Variables

Railway automatycznie ustawia `PORT` - nie trzeba konfigurować ręcznie.

## Struktura projektu

```
.
├── index.html          # Główny plik HTML
├── static/            # Statyczne pliki
│   ├── css/
│   ├── js/
│   └── img/
├── server.js          # Express server dla production
├── vite.config.js     # Konfiguracja Vite
├── package.json       # Zależności i skrypty
├── nixpacks.toml      # Konfiguracja Nixpacks
└── railway.json       # Konfiguracja Railway
```
