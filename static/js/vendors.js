// Swiper init helper
export function initProjectsSlider() {
    const el = document.querySelector('.projects .swiper');
    if (!el) return;
    const slider = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: '.projects__control_next',
        prevEl: '.projects__control_prev',
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        920: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
      },
    });
    return slider;
  }

  // Prices slider init
  function initPricesSlider() {
    const el = document.querySelector('.prices .swiper');
    if (!el) return;
    const slides = el.querySelectorAll('.swiper-slide');
    const slider = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: '.prices__control_next',
        prevEl: '.prices__control_prev',
      },
      pagination: {
        el: '.prices__pagination',
        clickable: true,
        dynamicBullets: true,
      },
      loop: slides.length > 2,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        920: {
          slidesPerView: 2,
          loop: slides.length > 2,
        },
      },
    });
    return slider;
  }
  
  // OpenStreetMap init
  export function initMap() {
    // Sprawdź czy Leaflet jest załadowany
    if (typeof L === 'undefined') {
      console.error('Leaflet library not loaded');
      return;
    }
    
    const mapEl = document.getElementById('map');
    if (!mapEl) {
      console.error('Map element not found');
      return;
    }
    
    // Ustawienia mapy na Kreml w Moskwie
    const kremlLat = 55.7520;
    const kremlLon = 37.6175;
    
    try {
      const map = L.map('map', {
        center: [kremlLat, kremlLon],
        zoom: 14,
        scrollWheelZoom: false
      });
      
      // Alternatywa 1: CartoDB (open source, darmowy)
      const cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
        errorTileUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      });
      
      // Alternatywa 2: OpenStreetMap France (fallback)
      const osmFranceLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">HOT</a>',
        maxZoom: 19
      });
      
      // Alternatywa 3: CyclOSM (open source)
      const cyclosmLayer = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.cyclosm.org">CyclOSM</a>',
        maxZoom: 20
      });
      
      // Dodaj pierwszą warstwę (CartoDB)
      cartoLayer.addTo(map);
      
      // Obsługa błędów - jeśli główna warstwa nie działa, spróbuj alternatywnej
      cartoLayer.on('tileerror', function() {
        console.warn('CartoDB tiles failed, trying fallback');
        map.removeLayer(cartoLayer);
        osmFranceLayer.addTo(map);
      });
      
      // Marker z popupem na Kremlu
      const marker = L.marker([kremlLat, kremlLon])
        .addTo(map)
        .bindPopup('Бетонный завод Боброво<br>Боброво, ул. Транспортная, 6А')
        .openPopup();
      
      console.log('Map initialized successfully at Kreml, Moscow');
      
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
  