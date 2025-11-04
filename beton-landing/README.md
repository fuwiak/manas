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

### ⚠️ WAŻNE: Ustaw Root Directory na `beton-landing/`

**Railway Dashboard - Settings → Build & Deploy:**

1. **Root Directory**: `beton-landing` ⚠️ (OBOWIĄZKOWE!)
2. **Build Command**: `npm ci --prefer-offline --no-audit && npm run build`
3. **Start Command**: `npm start`

**Bez ustawienia Root Directory build się nie powiedzie!**

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
