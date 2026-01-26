(function () {
  function renderBackground(layer) {
    const background = window.GameUI.createImageElement('seaBackground');
    background.className = 'screen-background';
    window.GameUI.setPercentPosition(background, { left: 50, top: 50, width: 100 });
    background.style.transform = 'translate(-50%, -50%)';
    layer.appendChild(background);
  }

  function renderWaves(layer) {
    const wave1 = document.createElement('div');
    const wave2 = document.createElement('div');
    wave1.className = 'wave-band';
    wave2.className = 'wave-band';
    wave2.style.top = '72%';
    layer.appendChild(wave1);
    layer.appendChild(wave2);
  }

  function renderShip(layer) {
    const ship = window.GameUI.createImageElement('ship');
    window.GameUI.setPercentPosition(ship, { left: 50, top: 58, width: 24, zIndex: 4 });
    ship.style.transform = 'translate(-50%, -50%)';
    layer.appendChild(ship);
  }

  function renderStatusPanel(layer) {
    const panel = document.createElement('div');
    panel.className = 'ui-panel';
    window.GameUI.setPercentPosition(panel, { left: 8, top: 6, zIndex: 8 });

    const badge = window.GameUI.createBadge('Курс: Северо-Восток');
    panel.appendChild(badge);

    layer.appendChild(panel);
  }

  function renderBottomActions(layer) {
    const panel = document.createElement('div');
    panel.className = 'ui-bottom';

    const seaSlot = document.createElement('div');
    seaSlot.className = 'ui-slot';
    const seaBtn = document.createElement('button');
    seaBtn.type = 'button';
    seaBtn.className = 'ui-action-button';
    const seaImg = window.GameUI.createImageElement('seaButton');
    seaImg.style.width = '100%';
    seaBtn.appendChild(seaImg);
    seaBtn.addEventListener('click', () => {
      window.GameUI.showToast('Открываем карты маршрутов.');
    });
    seaSlot.appendChild(seaBtn);
    seaSlot.appendChild(document.createElement('span')).textContent = 'Карты';

    const islandSlot = document.createElement('div');
    islandSlot.className = 'ui-slot';
    const islandBtn = document.createElement('button');
    islandBtn.type = 'button';
    islandBtn.className = 'ui-action-button';
    const islandImg = window.GameUI.createImageElement('islandButton');
    islandImg.style.width = '100%';
    islandBtn.appendChild(islandImg);
    islandBtn.addEventListener('click', () => {
      window.GameUI.showToast('Курс на ближайший порт.');
    });
    islandSlot.appendChild(islandBtn);
    islandSlot.appendChild(document.createElement('span')).textContent = 'Порт';

    panel.appendChild(seaSlot);
    panel.appendChild(islandSlot);
    layer.appendChild(panel);
  }

  function initScreen() {
    const root = document.getElementById('screen-root');
    root.classList.add('sea-sky');

    const backgroundLayer = document.createElement('div');
    backgroundLayer.className = 'screen-layer';

    const midLayer = document.createElement('div');
    midLayer.className = 'screen-layer';

    const uiLayer = document.createElement('div');
    uiLayer.className = 'screen-layer';

    renderBackground(backgroundLayer);
    renderWaves(midLayer);
    renderShip(midLayer);
    renderStatusPanel(uiLayer);
    renderBottomActions(uiLayer);

    root.appendChild(backgroundLayer);
    root.appendChild(midLayer);
    root.appendChild(uiLayer);
  }

  document.addEventListener('DOMContentLoaded', initScreen);
})();
