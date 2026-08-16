/**
 * js/widgets/widgetReta.js
 * Widget interativo da Reta no Plano Cartesiano (y = ax + b):
 * - Malha do Plano Cartesiano completa com escala graduada (-5 a +5).
 * - Arraste ultra-fluido (60fps) dos dois pontos determinantes P1 e P2.
 * - Cálculo automático do coeficiente angular (a) e coeficiente linear (b).
 */
(function () {
  window.initWidgetReta = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { p1: { x: -2, y: -1 }, p2: { x: 2, y: 3 } };
    var draggingPoint = null;
    var size = 300;
    var gridMax = 5;
    var step = size / (gridMax * 2);

    function toPx(x) { return (x + gridMax) * step; }
    function toPy(y) { return (gridMax - y) * step; }

    // Gerar linhas da malha e números de escala do plano cartesiano
    var gridLinesHtml = "";
    var labelsHtml = "";

    for (var i = -gridMax; i <= gridMax; i++) {
      var gx = toPx(i);
      var gy = toPy(i);

      // Linhas verticais e horizontais da grade
      gridLinesHtml += '<line x1="' + gx + '" y1="0" x2="' + gx + '" y2="' + size + '" stroke="#f1f5f9" stroke-width="1" />';
      gridLinesHtml += '<line x1="0" y1="' + gy + '" x2="' + size + '" y2="' + gy + '" stroke="#f1f5f9" stroke-width="1" />';

      if (i !== 0) {
        // Marcações de escala no eixo X
        gridLinesHtml += '<line x1="' + gx + '" y1="' + (size / 2 - 3) + '" x2="' + gx + '" y2="' + (size / 2 + 3) + '" stroke="#64748b" stroke-width="1.5" />';
        labelsHtml += '<text x="' + gx + '" y="' + (size / 2 + 15) + '" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#64748b">' + i + '</text>';

        // Marcações de escala no eixo Y
        gridLinesHtml += '<line x1="' + (size / 2 - 3) + '" y1="' + gy + '" x2="' + (size / 2 + 3) + '" y2="' + gy + '" stroke="#64748b" stroke-width="1.5" />';
        labelsHtml += '<text x="' + (size / 2 - 8) + '" y="' + (gy + 3) + '" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="#64748b">' + i + '</text>';
      }
    }

    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1.25rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); max-width: 420px; margin: 0 auto;">' +
        '<h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem;">A Reta no Plano Cartesiano (y = ax + b)</h3>' +

        '<!-- Plano Cartesiano SVG -->' +
        '<div style="display: flex; justify-content: center; margin-bottom: 0.85rem;">' +
          '<div id="cartesian-plane-reta" style="position: relative; width: ' + size + 'px; height: ' + size + 'px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; user-select: none; touch-action: none; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">' +
            '<svg width="100%" height="100%" style="position: absolute; top: 0; left: 0;">' +
              '<!-- Malha de Fundo -->' +
              gridLinesHtml +

              '<!-- Eixos Principais X e Y -->' +
              '<line x1="0" y1="' + (size / 2) + '" x2="' + size + '" y2="' + (size / 2) + '" stroke="#334155" stroke-width="2" />' +
              '<line x1="' + (size / 2) + '" y1="0" x2="' + (size / 2) + '" y2="' + size + '" stroke="#334155" stroke-width="2" />' +
              '<text x="' + (size - 12) + '" y="' + (size / 2 - 6) + '" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e293b">X</text>' +
              '<text x="' + (size / 2 + 6) + '" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e293b">Y</text>' +

              '<!-- Números das Escalas -->' +
              labelsHtml +

              '<!-- Reta Infinita -->' +
              '<line id="w-reta-line" x1="0" y1="0" x2="0" y2="0" stroke="#4f46e5" stroke-width="3" stroke-linecap="round" />' +
            '</svg>' +

            '<!-- Vértices Móveis P1 e P2 -->' +
            '<div id="w-reta-p1" style="position: absolute; width: 18px; height: 18px; background: #ef4444; border-radius: 50%; border: 2.5px solid #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transform: translate(-50%, -50%); cursor: grab; z-index: 10;"></div>' +
            '<div id="w-reta-p2" style="position: absolute; width: 18px; height: 18px; background: #10b981; border-radius: 50%; border: 2.5px solid #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transform: translate(-50%, -50%); cursor: grab; z-index: 10;"></div>' +
          '</div>' +
        '</div>' +

        '<!-- Painel de Equação e Coeficientes -->' +
        '<div style="padding: 0.75rem 0.9rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5; text-align: left;">' +
          '<p id="w-reta-eq" style="margin: 0; font-size: 1.05rem; font-weight: bold; color: #4f46e5;">y = 1.00x + 1.00</p>' +
          '<p id="w-reta-info" style="margin: 0.3rem 0 0 0; font-size: 0.82rem; color: #64748b;">Arraste <span style="color:#dc2626;font-weight:bold;">P₁</span> e <span style="color:#047857;font-weight:bold;">P₂</span> para modificar o coeficiente angular (a) e a interseção linear (b).</p>' +
        '</div>' +
      '</div>';

    // Elementos DOM
    var plane = container.querySelector("#cartesian-plane-reta");
    var pt1 = container.querySelector("#w-reta-p1");
    var pt2 = container.querySelector("#w-reta-p2");
    var line = container.querySelector("#w-reta-line");
    var eqDisp = container.querySelector("#w-reta-eq");

    function update() {
      var px1 = toPx(state.p1.x), py1 = toPy(state.p1.y);
      var px2 = toPx(state.p2.x), py2 = toPy(state.p2.y);

      if (pt1) { pt1.style.left = px1 + "px"; pt1.style.top = py1 + "px"; }
      if (pt2) { pt2.style.left = px2 + "px"; pt2.style.top = py2 + "px"; }

      if (line) {
        if (state.p1.x === state.p2.x) {
          line.setAttribute("x1", px1); line.setAttribute("y1", 0);
          line.setAttribute("x2", px1); line.setAttribute("y2", size);
          if (eqDisp) eqDisp.innerHTML = 'Equação: <strong style="color:#4f46e5;">x = ' + state.p1.x + '</strong> (Reta Vertical)';
        } else {
          var a = (state.p2.y - state.p1.y) / (state.p2.x - state.p1.x);
          var b = state.p1.y - a * state.p1.x;

          var yAtMin = a * (-gridMax) + b;
          var yAtMax = a * (gridMax) + b;

          line.setAttribute("x1", 0);
          line.setAttribute("y1", toPy(yAtMin));
          line.setAttribute("x2", size);
          line.setAttribute("y2", toPy(yAtMax));

          var eqStr = "y = ";
          if (a !== 0) {
            eqStr += (a === 1 ? "x" : a === -1 ? "-x" : Number(a.toFixed(2)) + "x");
          }
          if (b !== 0) {
            eqStr += (b > 0 && a !== 0 ? " + " : a === 0 ? "" : " - ") + Math.abs(Number(b.toFixed(2)));
          }
          if (a === 0 && b === 0) eqStr += "0";

          if (eqDisp) eqDisp.innerHTML = 'Equação: <strong style="color:#4f46e5;">' + eqStr + '</strong>';
        }
      }
    }

    function handleDrag(e) {
      if (!draggingPoint || !plane) return;
      var rect = plane.getBoundingClientRect();
      var clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      var clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      var mx = clientX - rect.left;
      var my = clientY - rect.top;

      var rawX = (mx / step) - gridMax;
      var rawY = gridMax - (my / step);

      var newX = Math.max(-gridMax, Math.min(gridMax, Math.round(rawX)));
      var newY = Math.max(-gridMax, Math.min(gridMax, Math.round(rawY)));

      if (draggingPoint === "p1" && (newX !== state.p2.x || newY !== state.p2.y)) {
        state.p1 = { x: newX, y: newY };
      } else if (draggingPoint === "p2" && (newX !== state.p1.x || newY !== state.p1.y)) {
        state.p2 = { x: newX, y: newY };
      }
      update();
    }

    if (pt1) {
      pt1.addEventListener("mousedown", function (e) { draggingPoint = "p1"; e.stopPropagation(); });
      pt1.addEventListener("touchstart", function (e) { draggingPoint = "p1"; e.preventDefault(); e.stopPropagation(); });
    }
    if (pt2) {
      pt2.addEventListener("mousedown", function (e) { draggingPoint = "p2"; e.stopPropagation(); });
      pt2.addEventListener("touchstart", function (e) { draggingPoint = "p2"; e.preventDefault(); e.stopPropagation(); });
    }

    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", function () { draggingPoint = null; });
    window.addEventListener("touchmove", handleDrag);
    window.addEventListener("touchend", function () { draggingPoint = null; });

    update();
  };
})();
