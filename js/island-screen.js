(function () {
  function renderBackground(layer) {
    const background = window.GameUI.createImageElement('islandBackground');
    background.className = 'screen-background';
    window.GameUI.setPercentPosition(background, { left: 50, top: 50, width: 100 });
    background.style.transform = 'translate(-50%, -50%)';
    layer.appendChild(background);
  }

  function renderShip(layer) {
    const ship = window.GameUI.createImageElement('ship', 'ship-rock');
    window.GameUI.setPercentPosition(ship, { left: 55, top: 56, width: 26, zIndex: 4 });
    ship.style.transform = 'translate(-50%, -50%)';
    layer.appendChild(ship);
  }

  function renderPalmLeaves(layer) {
    const leftLeaf = window.GameUI.createImageElement('palmLeafLeft', 'leaf-sway-left');
    window.GameUI.setPercentPosition(leftLeaf, { left: 18, top: 80, width: 40, zIndex: 6 });
    leftLeaf.style.transform = 'translate(-50%, -50%)';

    const rightLeaf = window.GameUI.createImageElement('palmLeafRight', 'leaf-sway-right');
    window.GameUI.setPercentPosition(rightLeaf, { left: 82, top: 82, width: 40, zIndex: 6 });
    rightLeaf.style.transform = 'translate(-50%, -50%)';

    layer.appendChild(leftLeaf);
    layer.appendChild(rightLeaf);
  }

  function renderMapPanel(layer) {
    const panel = document.createElement('div');
    panel.className = 'ui-panel';
    window.GameUI.setPercentPosition(panel, { left: 8, top: 6, zIndex: 8 });

    const map = window.GameUI.createImageElement('mapPanel');
    map.style.width = '42%';

    const badge = window.GameUI.createBadge('Остров: Теплая бухта');

    panel.appendChild(map);
    panel.appendChild(badge);
    layer.appendChild(panel);
  }

  function renderStatusPanel(layer) {
    const panel = document.createElement('div');
    panel.className = 'ui-panel';
    window.GameUI.setPercentPosition(panel, { left: 65, top: 6, zIndex: 8 });

    const coin = window.GameUI.createImageElement('coinIcon');
    coin.style.width = '10%';

    const text = document.createElement('div');
    text.className = 'ui-text';
    text.textContent = 'Золото: 128';

    panel.appendChild(coin);
    panel.appendChild(text);
    layer.appendChild(panel);
  }

  function renderBottomActions(layer) {
    const panel = document.createElement('div');
    panel.className = 'ui-bottom';

    const actionSlot = document.createElement('div');
    actionSlot.className = 'ui-slot';
    const actionBtn = window.GameUI.createImageElement('actionButton');
    actionBtn.style.width = '18%';
    actionSlot.appendChild(actionBtn);
    actionSlot.appendChild(document.createElement('span')).textContent = 'Экспедиция';

    const compassSlot = document.createElement('div');
    compassSlot.className = 'ui-slot';
    const compassBtn = window.GameUI.createImageElement('compassButton');
    compassBtn.style.width = '14%';
    compassSlot.appendChild(compassBtn);
    compassSlot.appendChild(document.createElement('span')).textContent = 'Навигация';

    panel.appendChild(actionSlot);
    panel.appendChild(compassSlot);
    layer.appendChild(panel);
  }

  function initScreen() {
    const root = document.getElementById('screen-root');
    root.classList.add('island-sky');

    const backgroundLayer = document.createElement('div');
    backgroundLayer.className = 'screen-layer';

    const midLayer = document.createElement('div');
    midLayer.className = 'screen-layer';

    const uiLayer = document.createElement('div');
    uiLayer.className = 'screen-layer';

    renderBackground(backgroundLayer);
    renderShip(midLayer);
    renderPalmLeaves(midLayer);
    renderMapPanel(uiLayer);
    renderStatusPanel(uiLayer);
    renderBottomActions(uiLayer);

    root.appendChild(backgroundLayer);
    root.appendChild(midLayer);
    root.appendChild(uiLayer);
  }

  document.addEventListener('DOMContentLoaded', initScreen);
})();
