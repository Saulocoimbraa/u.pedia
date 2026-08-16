/**
 * js/widgets/widgetPonto.js
 * Widget interativo para visualização de pontos no plano cartesiano,
 * equipado com malha graduada em escala alinhada e linhas de projeção.
 */
(function () {
  window.initWidgetPonto = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { x: 3, y: 2 };
    var gridMax = 5; // Limites de -5 a +5
    var cx = 160;    // Centro em SVG px
    var cy = 160;
    var step = 28;   // 28px por unidade -> 5 * 28 = 140px de cada lado (margem 20px)

    function toSvgCoords(x, y) {
      return {
        px: cx + x * step,
        py: cy - y * step
      };
    }

    function fromSvgCoords(px, py) {
      var rx = (px - cx) / step;
      var ry = (cy - py) / step;
      return {
        x: Math.max(-gridMax, Math.min(gridMax, Math.round(rx))),
        y: Math.max(-gridMax, Math.min(gridMax, Math.round(ry)))
      };
    }

    // Gerar linhas da malha (Grid)
    var gridLinesHtml = "";
    var axisLabelsHtml = "";

    for (var i = -gridMax; i <= gridMax; i++) {
      var pos = toSvgCoords(i, i);

      // Linhas Verticais
      var vColor = (i === 0) ? "#475569" : "#e2e8f0";
      var vWidth = (i === 0) ? "2" : "1";
      gridLinesHtml += '<line x1="' + pos.px + '" y1="15" x2="' + pos.px + '" y2="305" stroke="' + vColor + '" stroke-width="' + vWidth + '" />';

      // Linhas Horizontais
      var hColor = (i === 0) ? "#475569" : "#e2e8f0";
      var hWidth = (i === 0) ? "2" : "1";
      gridLinesHtml += '<line x1="15" y1="' + pos.py + '" x2="305" y2="' + pos.py + '" stroke="' + hColor + '" stroke-width="' + hWidth + '" />';

      // Rótulos numéricos dos eixos X e Y
      if (i !== 0) {
        axisLabelsHtml += '<text x="' + pos.px + '" y="174" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#64748b">' + i + '</text>';
        axisLabelsHtml += '<text x="150" y="' + (pos.py + 3) + '" text-anchor="end" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#64748b">' + i + '</text>';
      }
    }

    // Estrutura HTML do Widget
    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1.5rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">' +
        '<h3 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem;">O Ponto no Plano Cartesiano</h3>' +

        '<!-- Controles de Coordenadas -->' +
        '<div style="display: flex; justify-content: center; gap: 1rem; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap;">' +
          '<div style="display: flex; align-items: center; gap: 0.4rem; background: #fef2f2; border: 1px solid #fca5a5; padding: 0.4rem 0.8rem; border-radius: 8px;">' +
            '<span style="font-weight: 700; color: #dc2626;">Eixo X:</span>' +
            '<button id="w-pt-x-dec" style="padding: 0.1rem 0.5rem; font-weight: bold; border-radius: 4px; border: 1px solid #fca5a5; background: #fff; cursor: pointer;">-</button>' +
            '<span id="w-pt-x-val" style="font-weight: 800; font-size: 1.1rem; width: 24px; color: #dc2626;">3</span>' +
            '<button id="w-pt-x-inc" style="padding: 0.1rem 0.5rem; font-weight: bold; border-radius: 4px; border: 1px solid #fca5a5; background: #fff; cursor: pointer;">+</button>' +
          '</div>' +

          '<div style="display: flex; align-items: center; gap: 0.4rem; background: #f0fdf4; border: 1px solid #86efac; padding: 0.4rem 0.8rem; border-radius: 8px;">' +
            '<span style="font-weight: 700; color: #16a34a;">Eixo Y:</span>' +
            '<button id="w-pt-y-dec" style="padding: 0.1rem 0.5rem; font-weight: bold; border-radius: 4px; border: 1px solid #86efac; background: #fff; cursor: pointer;">-</button>' +
            '<span id="w-pt-y-val" style="font-weight: 800; font-size: 1.1rem; width: 24px; color: #16a34a;">2</span>' +
            '<button id="w-pt-y-inc" style="padding: 0.1rem 0.5rem; font-weight: bold; border-radius: 4px; border: 1px solid #86efac; background: #fff; cursor: pointer;">+</button>' +
          '</div>' +
        '</div>' +

        '<!-- Plano Cartesiano SVG com Malha Alinhada -->' +
        '<div style="display: flex; justify-content: center; margin-bottom: 1rem;">' +
          '<svg id="w-ponto-svg" width="320" height="320" viewBox="0 0 320 320" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; cursor: crosshair; user-select: none; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">' +
            '<!-- Malha Graduada -->' +
            gridLinesHtml +
            axisLabelsHtml +

            '<!-- Setas dos Eixos -->' +
            '<polygon points="315,160 305,155 305,165" fill="#475569" />' +
            '<text x="310" y="150" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#334155">X</text>' +
            '<polygon points="160,5 155,15 165,15" fill="#475569" />' +
            '<text x="170" y="15" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#334155">Y</text>' +
            '<text x="148" y="174" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#94a3b8">0</text>' +

            '<!-- Projeção no Eixo X (Tracejada Vermelha) -->' +
            '<line id="w-proj-x" x1="244" y1="104" x2="244" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="3" />' +

            '<!-- Projeção no Eixo Y (Tracejada Verde) -->' +
            '<line id="w-proj-y" x1="244" y1="104" x2="160" y2="104" stroke="#16a34a" stroke-width="2" stroke-dasharray="3" stroke-linecap="round" />' +

            '<!-- Ponto P(x, y) Destaque -->' +
            '<circle id="w-point-dot" cx="244" cy="104" r="7" fill="#4f46e5" stroke="#a5b4fc" stroke-width="3" />' +

            '<!-- Rótulo do Ponto -->' +
            '<text id="w-point-lbl" x="254" y="96" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#3730a3">P(3, 2)</text>' +
          '</svg>' +
        '</div>' +

        '<!-- Card de Coordenadas -->' +
        '<div style="padding: 0.85rem 1rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5; text-align: left;">' +
          '<p style="margin: 0; font-size: 1.05rem; color: #1e293b;">Localização: <strong id="w-coord-text" style="color: #4f46e5;">P(3, 2)</strong></p>' +
          '<p style="margin: 0.3rem 0 0 0; font-size: 0.85rem; color: #64748b;">Clique ou arraste no plano cartesiano para posicionar o ponto diretamente sobre a malha graduada.</p>' +
        '</div>' +
      '</div>';

    // Elementos DOM para atualização direta
    var svg = container.querySelector("#w-ponto-svg");
    var projX = container.querySelector("#w-proj-x");
    var projY = container.querySelector("#w-proj-y");
    var pointDot = container.querySelector("#w-point-dot");
    var pointLbl = container.querySelector("#w-point-lbl");
    var coordText = container.querySelector("#w-coord-text");
    var xValDisp = container.querySelector("#w-pt-x-val");
    var yValDisp = container.querySelector("#w-pt-y-val");

    function updatePoint(newX, newY) {
      state.x = Math.max(-gridMax, Math.min(gridMax, newX));
      state.y = Math.max(-gridMax, Math.min(gridMax, newY));

      var p = toSvgCoords(state.x, state.y);

      if (pointDot) {
        pointDot.setAttribute("cx", p.px);
        pointDot.setAttribute("cy", p.py);
      }

      if (projX) {
        projX.setAttribute("x1", p.px);
        projX.setAttribute("y1", p.py);
        projX.setAttribute("x2", p.px);
        projX.setAttribute("y2", cy);
      }

      if (projY) {
        projY.setAttribute("x1", p.px);
        projY.setAttribute("y1", p.py);
        projY.setAttribute("x2", cx);
        projY.setAttribute("y2", p.py);
      }

      if (pointLbl) {
        var lx = p.px + (state.x >= 0 ? 10 : -55);
        var ly = p.py + (state.y >= 0 ? -8 : 18);
        pointLbl.setAttribute("x", Math.max(10, Math.min(260, lx)));
        pointLbl.setAttribute("y", Math.max(20, Math.min(300, ly)));
        pointLbl.textContent = "P(" + state.x + ", " + state.y + ")";
      }

      if (coordText) coordText.textContent = "P(" + state.x + ", " + state.y + ")";
      if (xValDisp) xValDisp.textContent = state.x;
      if (yValDisp) yValDisp.textContent = state.y;
    }

    // Interatividade ao clicar/arrastar no SVG
    var isDragging = false;

    function handleSvgPointer(e) {
      if (!svg) return;
      var rect = svg.getBoundingClientRect();
      var clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      var clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      var mouseX = clientX - rect.left;
      var mouseY = clientY - rect.top;

      // Converter coordenadas do SVG para o viewBox 320x320
      var svgX = (mouseX / rect.width) * 320;
      var svgY = (mouseY / rect.height) * 320;

      var coords = fromSvgCoords(svgX, svgY);
      updatePoint(coords.x, coords.y);
    }

    if (svg) {
      svg.addEventListener("mousedown", function (e) {
        isDragging = true;
        handleSvgPointer(e);
      });

      window.addEventListener("mousemove", function (e) {
        if (isDragging) handleSvgPointer(e);
      });

      window.addEventListener("mouseup", function () {
        isDragging = false;
      });

      svg.addEventListener("touchstart", function (e) {
        isDragging = true;
        e.preventDefault();
        handleSvgPointer(e);
      });

      window.addEventListener("touchmove", function (e) {
        if (isDragging) handleSvgPointer(e);
      });

      window.addEventListener("touchend", function () {
        isDragging = false;
      });
    }

    // Botões de incremento/decremento
    var xInc = container.querySelector("#w-pt-x-inc");
    var xDec = container.querySelector("#w-pt-x-dec");
    var yInc = container.querySelector("#w-pt-y-inc");
    var yDec = container.querySelector("#w-pt-y-dec");

    if (xInc) xInc.addEventListener("click", function () { updatePoint(state.x + 1, state.y); });
    if (xDec) xDec.addEventListener("click", function () { updatePoint(state.x - 1, state.y); });
    if (yInc) yInc.addEventListener("click", function () { updatePoint(state.x, state.y + 1); });
    if (yDec) yDec.addEventListener("click", function () { updatePoint(state.x, state.y - 1); });

    // Inicialização
    updatePoint(state.x, state.y);
  };
})();
