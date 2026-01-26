(function () {
  function svgToDataUri(svgString) {
    const encoded = encodeURIComponent(svgString)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');
    return `data:image/svg+xml;charset=UTF-8,${encoded}`;
  }

  function resolveImageSource(imageConfig) {
    if (!imageConfig) {
      return '';
    }
    if (imageConfig.url && imageConfig.url.includes('images')) {
      return imageConfig.url;
    }
    return svgToDataUri(imageConfig.svgFallbackImage);
  }

  function createImageElement(imageId, className) {
    const config = window.ImagesConfig?.[imageId];
    const img = document.createElement('img');
    img.alt = imageId;
    img.dataset.imageId = imageId;
    img.src = resolveImageSource(config);
    img.loading = 'lazy';
    img.decoding = 'async';
    if (className) {
      img.className = className;
    }
    return img;
  }

  function setPercentPosition(element, { left, top, width, height, zIndex }) {
    if (left !== undefined) {
      element.style.left = `${left}%`;
    }
    if (top !== undefined) {
      element.style.top = `${top}%`;
    }
    if (width !== undefined) {
      element.style.width = `${width}%`;
    }
    if (height !== undefined) {
      element.style.height = `${height}%`;
    }
    if (zIndex !== undefined) {
      element.style.zIndex = `${zIndex}`;
    }
  }

  function createBadge(text) {
    const badge = document.createElement('div');
    badge.className = 'ui-badge';
    badge.textContent = text;
    return badge;
  }

  window.GameUI = {
    createImageElement,
    setPercentPosition,
    createBadge
  };
})();
