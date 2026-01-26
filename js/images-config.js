(function () {
  const placeholders = {
    islandBackground: {
      id: 'islandBackground',
      width: 1080,
      height: 1920,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920">' +
        '<defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1">' +
        '<stop offset="0" stop-color="#2ba4d6" />' +
        '<stop offset="1" stop-color="#0b5f7a" />' +
        '</linearGradient></defs>' +
        '<rect width="1080" height="1920" fill="url(#g)" />' +
        '<text x="50%" y="50%" font-size="64" text-anchor="middle" fill="#ffffff" font-family="Arial">Island Screen</text>' +
        '</svg>'
    },
    seaBackground: {
      id: 'seaBackground',
      width: 1080,
      height: 1920,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920">' +
        '<defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1">' +
        '<stop offset="0" stop-color="#1c6dd0" />' +
        '<stop offset="1" stop-color="#073763" />' +
        '</linearGradient></defs>' +
        '<rect width="1080" height="1920" fill="url(#g)" />' +
        '<text x="50%" y="50%" font-size="64" text-anchor="middle" fill="#ffffff" font-family="Arial">Open Sea</text>' +
        '</svg>'
    },
    ship: {
      id: 'ship',
      width: 420,
      height: 420,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420">' +
        '<rect width="420" height="420" rx="32" fill="#0f3554" />' +
        '<path d="M80 280 L340 280 L290 340 L130 340 Z" fill="#7b4b2a" />' +
        '<rect x="190" y="120" width="40" height="160" fill="#7b4b2a" />' +
        '<path d="M230 130 L330 220 L230 220 Z" fill="#ffffff" />' +
        '<path d="M190 150 L90 220 L190 220 Z" fill="#e0e0e0" />' +
        '<circle cx="70" cy="80" r="24" fill="#ffd166" />' +
        '<text x="50%" y="380" font-size="28" text-anchor="middle" fill="#ffffff" font-family="Arial">Ship</text>' +
        '</svg>'
    },
    palmLeafLeft: {
      id: 'palmLeafLeft',
      width: 480,
      height: 360,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360">' +
        '<rect width="480" height="360" fill="#0b3d24" />' +
        '<path d="M60 320 C120 200, 200 120, 440 40" stroke="#2dd36f" stroke-width="28" fill="none" />' +
        '<path d="M60 320 C180 240, 260 200, 460 160" stroke="#1faa59" stroke-width="20" fill="none" />' +
        '<text x="50%" y="340" font-size="24" text-anchor="middle" fill="#ffffff" font-family="Arial">Palm Leaf</text>' +
        '</svg>'
    },
    palmLeafRight: {
      id: 'palmLeafRight',
      width: 480,
      height: 360,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360">' +
        '<rect width="480" height="360" fill="#0b3d24" />' +
        '<path d="M420 320 C320 200, 240 120, 40 40" stroke="#2dd36f" stroke-width="28" fill="none" />' +
        '<path d="M420 320 C300 240, 220 200, 20 160" stroke="#1faa59" stroke-width="20" fill="none" />' +
        '<text x="50%" y="340" font-size="24" text-anchor="middle" fill="#ffffff" font-family="Arial">Palm Leaf</text>' +
        '</svg>'
    },
    mapPanel: {
      id: 'mapPanel',
      width: 420,
      height: 220,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="420" height="220">' +
        '<rect width="420" height="220" rx="24" fill="#d6a45f" stroke="#8b5a2b" stroke-width="6" />' +
        '<path d="M40 160 L140 60 L240 140 L360 40" stroke="#2f855a" stroke-width="8" fill="none" />' +
        '<text x="50%" y="190" font-size="24" text-anchor="middle" fill="#4a2f12" font-family="Arial">Island Map</text>' +
        '</svg>'
    },
    compassButton: {
      id: 'compassButton',
      width: 120,
      height: 120,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">' +
        '<circle cx="60" cy="60" r="56" fill="#c58940" stroke="#6b3f1a" stroke-width="6" />' +
        '<path d="M60 20 L70 60 L60 100 L50 60 Z" fill="#ef476f" />' +
        '<text x="50%" y="114" font-size="16" text-anchor="middle" fill="#fff" font-family="Arial">Compass</text>' +
        '</svg>'
    },
    coinIcon: {
      id: 'coinIcon',
      width: 90,
      height: 90,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">' +
        '<circle cx="45" cy="45" r="40" fill="#f6c453" stroke="#b7791f" stroke-width="6" />' +
        '<text x="50%" y="55" font-size="26" text-anchor="middle" fill="#5c3b00" font-family="Arial">$</text>' +
        '</svg>'
    },
    actionButton: {
      id: 'actionButton',
      width: 160,
      height: 160,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">' +
        '<circle cx="80" cy="80" r="70" fill="#ff6b6b" stroke="#b22222" stroke-width="8" />' +
        '<path d="M80 40 L110 80 L80 120 L50 80 Z" fill="#fff" />' +
        '</svg>'
    },
    seaButton: {
      id: 'seaButton',
      width: 160,
      height: 90,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90">' +
        '<rect width="160" height="90" rx="18" fill="#1b98e0" stroke="#0b4f6c" stroke-width="6" />' +
        '<text x="50%" y="58" font-size="24" text-anchor="middle" fill="#ffffff" font-family="Arial">Sea</text>' +
        '</svg>'
    },
    islandButton: {
      id: 'islandButton',
      width: 160,
      height: 90,
      url: '',
      svgFallbackImage:
        '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90">' +
        '<rect width="160" height="90" rx="18" fill="#2ca58d" stroke="#1b6b5b" stroke-width="6" />' +
        '<text x="50%" y="58" font-size="24" text-anchor="middle" fill="#ffffff" font-family="Arial">Island</text>' +
        '</svg>'
    }
  };

  window.ImagesConfig = placeholders;
})();
