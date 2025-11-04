# 🔍 Jak monitorować Desktop i Mobile jednocześnie

## Metoda 1: Chrome DevTools (Najprostsza)

1. Uruchom dev server: `npm run dev`
2. Otwórz Chrome DevTools (F12)
3. Kliknij ikonę **Device Toolbar** (Ctrl+Shift+M / Cmd+Shift+M)
4. Wybierz urządzenie mobilne (np. iPhone 12 Pro, Samsung Galaxy)
5. **Otwórz nowe okno przeglądarki** z tym samym URL - jedno w trybie mobile, drugie desktop

## Metoda 2: Telefon w tej samej sieci WiFi

1. Uruchom dev server: `npm run dev`
2. Sprawdź lokalny IP swojego komputera:
   ```bash
   # macOS/Linux
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # Windows
   ipconfig
   ```
3. Na telefonie (w tej samej sieci WiFi) otwórz:
   ```
   http://[TWÓJ_IP]:3000
   ```
   Np: `http://192.168.1.100:3000`

4. Teraz masz:
   - Desktop: `http://localhost:3000`
   - Mobile: `http://[IP]:3000` na telefonie

## Metoda 3: Responsively App (Darmowe narzędzie)

1. Zainstaluj: https://responsive.app
2. Uruchom dev server: `npm run dev`
3. W Responsively App dodaj URL: `http://localhost:3000`
4. Zobaczysz jednocześnie wiele widoków (desktop, tablet, mobile)

## Metoda 4: Dwa okna Chrome z różnymi widokami

1. Otwórz `http://localhost:3000` w pierwszym oknie (desktop)
2. Otwórz `http://localhost:3000` w drugim oknie
3. W drugim oknie włącz Device Toolbar (F12 → Ctrl+Shift+M)
4. Ustaw widok mobile
5. Masz oba widoki jednocześnie!

## Metoda 5: Chrome DevTools z USB Debugging (Android)

1. Włącz USB Debugging na telefonie Android
2. Podłącz telefon przez USB
3. W Chrome: chrome://inspect
4. Wybierz "Port forwarding" i dodaj port 3000
5. Otwórz na telefonie: `localhost:3000`

## Hot Reload

Wszystkie metody wspierają Hot Module Replacement (HMR) - zmiany w kodzie automatycznie odświeżają oba widoki!

## Pro Tip

Użyj **Metody 1 + Metoda 2** jednocześnie:
- Desktop: Chrome DevTools Device Toolbar
- Telefon: prawdziwy telefon w WiFi

Daje to najlepsze doświadczenie testowania!

