/**
 * js/widgets/widgetAngulocomplementar.js
 * Widget interativo de Ângulos Complementares (α + β = 90°):
 * - SVG ampliado e centralizado (viewBox 400 x 320).
 * - Estética original dos arcos preservada (setor em fatia a partir do vértice).
 * - Foco exclusivo na exploração do slider e relação α + β = 90°.
 */
(function () {
  window.initWidgetAngulocomplementar = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { alpha: 60 };

    // SVG viewBox 400 x 320 — vértice bem posicionado no centro-baixo
    var cx = 200, cy = 270, radius = 190;

    function polarToCartesian(centerX, centerY, r, angleInDegrees) {
      var angleInRadians = (angleInDegrees * Math.PI) / 180.0;
      return {
        x: centerX + r * Math.cos(angleInRadians),
        y: centerY - r * Math.sin(angleInRadians)
      };
    }

    // Setor em fatia do vértice (estilo original)
    function drawArcSector(x, y, r, startAngle, endAngle, color, opacity) {
      var start = polarToCartesian(x, y, r, startAngle);
      var end = polarToCartesian(x, y, r, endAngle);
      var largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
      return '<path d="M ' + x + ' ' + y +
        ' L ' + start.x + ' ' + start.y +
        ' A ' + r + ' ' + r + ' 0 ' + largeArcFlag + ' 0 ' + end.x + ' ' + end.y +
        ' Z" fill="' + color + '" fill-opacity="' + (opacity || 0.35) + '" stroke="' + color + '" stroke-width="2"/>';
    }

    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1.25rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; max-width: 480px; margin: 0 auto;">' +
      '<h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem;">Ângulos Complementares (α + β = 90°)</h3>' +

      '<div style="margin-bottom: 0.85rem;">' +
      '<div style="display: flex; justify-content: space-around; align-items: center; max-width: 400px; margin: 0 auto 0.5rem; background: #f8fafc; padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0;">' +
      '<span style="font-weight: bold; color: #059669; font-size: 1.1rem;">α = <span id="w-cmp-alpha-val">60</span>°</span>' +
      '<span style="font-weight: bold; color: #2563eb; font-size: 1.1rem;">β = <span id="w-cmp-beta-val">30</span>°</span>' +
      '<span style="font-weight: bold; color: #4f46e5; font-size: 1rem;">α + β = 90°</span>' +
      '</div>' +

      '<input type="range" id="w-cmp-slider" min="1" max="89" value="60" step="1" style="width: 100%; max-width: 400px; accent-color: #059669; cursor: pointer; margin-bottom: 0.6rem;">' +

      '<div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">' +
      '<button class="w-cmp-preset" data-ang="30" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; font-weight: bold; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #475569; cursor: pointer;">α=30° / β=60°</button>' +
      '<button class="w-cmp-preset" data-ang="45" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; font-weight: bold; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #475569; cursor: pointer;">α=45° / β=45°</button>' +
      '<button class="w-cmp-preset" data-ang="60" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; font-weight: bold; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #475569; cursor: pointer;">α=60° / β=30°</button>' +
      '</div>' +
      '</div>' +

      // SVG centralizado via margin auto
      '<div style="display: block; text-align: center; margin-bottom: 0.85rem;">' +
      '<svg id="w-cmp-svg" width="400" height="320" viewBox="0 0 500 320" style="display: inline-block; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">' +

      // Indicador do ângulo reto 90°
      '<rect x="200" y="250" width="20" height="20" fill="none" stroke="#4f46e5" stroke-width="1.8"/>' +
      '<circle cx="210" cy="260" r="2" fill="#4f46e5"/>' +

      // Camada de arcos dinâmicos
      '<g id="w-cmp-arcs-layer"></g>' +

      // Eixo horizontal (0°)
      '<line x1="200" y1="270" x2="385" y2="270" stroke="#334155" stroke-width="3" stroke-linecap="round"/>' +
      // Eixo vertical (90°)
      '<line x1="200" y1="270" x2="200" y2="20" stroke="#334155" stroke-width="3" stroke-linecap="round"/>' +

      // Semirreta divisória dinâmica
      '<line id="w-cmp-ray" x1="200" y1="270" x2="334.5" y2="135.5" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>' +

      // Vértice em destaque
      '<circle cx="200" cy="270" r="7" fill="#4f46e5" stroke="#e0e7ff" stroke-width="2.5"/>' +

      // Rótulos dos ângulos α e β
      '<text id="w-cmp-lbl-alpha" x="270" y="252" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="#047857">α</text>' +
      '<text id="w-cmp-lbl-beta"  x="184" y="170" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="#1d4ed8">β</text>' +
      '</svg>' +
      '</div>' +

      '<div style="padding: 0.75rem 0.9rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #10b981; text-align: left;">' +
      '<p style="margin: 0; font-size: 0.85rem; color: #334155;">Dois ângulos são <strong>complementares</strong> quando a sua soma forma exatamente <strong>90°</strong>. Ao aumentar <span style="color:#047857;font-weight:bold;">α</span>, o ângulo <span style="color:#1d4ed8;font-weight:bold;">β</span> diminui na mesma proporção!</p>' +
      '</div>' +
      '</div>';

    // Elementos DOM
    var slider = container.querySelector('#w-cmp-slider');
    var alphaVal = container.querySelector('#w-cmp-alpha-val');
    var betaVal = container.querySelector('#w-cmp-beta-val');
    var arcsLayer = container.querySelector('#w-cmp-arcs-layer');
    var ray = container.querySelector('#w-cmp-ray');
    var lblAlpha = container.querySelector('#w-cmp-lbl-alpha');
    var lblBeta = container.querySelector('#w-cmp-lbl-beta');
    var presets = container.querySelectorAll('.w-cmp-preset');

    function update() {
      var alpha = state.alpha;
      var beta = 90 - alpha;

      if (alphaVal) alphaVal.textContent = alpha;
      if (betaVal) betaVal.textContent = beta;

      // Semirreta terminal
      var p = polarToCartesian(cx, cy, radius, alpha);
      if (ray) { ray.setAttribute('x2', p.x); ray.setAttribute('y2', p.y); }

      // Arcos em fatia (estilo original)
      var arcAlpha = drawArcSector(cx, cy, 65, 0, alpha, '#10b981', 0.4);
      var arcBeta = drawArcSector(cx, cy, 95, alpha, 90, '#2563eb', 0.35);
      if (arcsLayer) arcsLayer.innerHTML = arcAlpha + arcBeta;

      // Rótulos posicionados no meio de cada arco
      var pAlphaMid = polarToCartesian(cx, cy, 82, alpha / 2);
      var pBetaMid = polarToCartesian(cx, cy, 115, alpha + beta / 2);

      if (lblAlpha) { lblAlpha.setAttribute('x', pAlphaMid.x - 6); lblAlpha.setAttribute('y', pAlphaMid.y + 6); }
      if (lblBeta) { lblBeta.setAttribute('x', pBetaMid.x - 6); lblBeta.setAttribute('y', pBetaMid.y + 6); }
    }

    if (slider) {
      slider.addEventListener('input', function (e) {
        state.alpha = parseInt(e.target.value, 10);
        update();
      });
    }

    presets.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = parseInt(btn.getAttribute('data-ang'), 10);
        state.alpha = val;
        if (slider) slider.value = val;
        update();
      });
    });

    update();
  };
})();
