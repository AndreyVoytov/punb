(function () {
  const screens = {
    island: { title: 'Остров', src: 'island-screen.html', icon: 'islandButton' },
    sea: { title: 'Море', src: 'sea-screen.html', icon: 'seaButton' }
  };

  function createNavButton(screenKey) {
    const config = screens[screenKey];
    const button = document.createElement('button');
    button.type = 'button';
    const img = window.GameUI.createImageElement(config.icon);
    img.style.width = '80px';
    img.style.height = 'auto';
    img.alt = config.title;
    button.appendChild(img);
    button.addEventListener('click', () => {
      const frame = document.getElementById('screen-frame');
      frame.src = config.src;
    });
    return button;
  }

  function renderNav() {
    const nav = document.getElementById('frame-nav');
    nav.appendChild(createNavButton('island'));
    nav.appendChild(createNavButton('sea'));
  }

  document.addEventListener('DOMContentLoaded', renderNav);
})();
