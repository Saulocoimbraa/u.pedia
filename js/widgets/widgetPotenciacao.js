/**
 * js/widgets/widgetPotenciacao.js
 * Widget interativo: Potenciação como Ramificação Fractal Multidirecional (Árvore N-ária)
 * Expõe window.initWidgetPotenciacao(containerId)
 */
(function () {
  window.initWidgetPotenciacao = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = {
      base: 3,
      exp: 3,
      mode: "fan" // "fan" (leque vertical) ou "radial" (360° explosão)
    };

    var LEVEL_COLORS = [
      "#6366f1", // Nível 0: Indigo
      "#3b82f6", // Nível 1: Blue
      "#06b6d4", // Nível 2: Cyan
      "#10b981", // Nível 3: Emerald
      "#84cc16", // Nível 4: Lime
      "#f59e0b", // Nível 5: Amber
      "#f97316", // Nível 6: Orange
      "#ec4899"  // Nível 7+: Pink
    ];

    var PRESETS = [
      { b: 2, e: 4, label: "2⁴ = 16" },
      { b: 2, e: 6, label: "2⁶ = 64" },
      { b: 3, e: 2, label: "3² = 9" },
      { b: 3, e: 3, label: "3³ = 27 (Trifurcação)" },
      { b: 4, e: 3, label: "4³ = 64 (4 Ramos)" },
      { b: 5, e: 3, label: "5³ = 125" }
    ];

    // Monta o layout uma única vez
    container.innerHTML =
      '<style>' +
        '.wpot-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wpot-presets { display: flex; flex-wrap: wrap; gap: 0.35rem; justify-content: center; margin-bottom: 0.75rem; }' +
        '.wpot-preset-btn { background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; padding: 2px 7px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }' +
        '.wpot-preset-btn:hover { background: #e2e8f0; color: #1e293b; }' +
        '.wpot-preset-btn.active { background: #6366f1; border-color: #4f46e5; color: #ffffff; }' +
        '.wpot-ctrls { display: flex; flex-wrap: wrap; gap: 0.8rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.5rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.75rem; font-size: 0.85rem; font-weight: 600; }' +
        '.wpot-ctrl { display: flex; align-items: center; gap: 8px; }' +
        '.wpot-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wpot-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); transition: transform 0.1s; }' +
        '.wpot-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wpot-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #6366f1; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wpot-toggle { background: #ffffff; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 5px; font-size: 0.75rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.15s; }' +
        '.wpot-toggle.active { background: #eef2ff; border-color: #6366f1; color: #4338ca; }' +
        '.wpot-stage { display: flex; align-items: center; justify-content: center; min-height: 180px; height: 190px; padding: 0.25rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.75rem; overflow: hidden; position: relative; }' +
        '.wpot-svg { width: 100%; height: 100%; display: block; }' +
        '.wpot-footer { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.9rem; }' +
        '.wpot-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; font-family: "Outfit", sans-serif; }' +
        '.wpot-badge { padding: 2px 7px; border-radius: 5px; font-weight: 700; font-size: 0.72rem; }' +
      '</style>' +

      '<div class="wpot-wrapper">' +
        '<div class="wpot-presets" id="wpot-presets"></div>' +

        '<div class="wpot-ctrls">' +
          '<div class="wpot-ctrl">' +
            '<span style="color:#4338ca;">Base (a):</span>' +
            '<input type="range" class="wpot-slider" id="wpot-b" min="2" max="6" step="1" value="' + state.base + '">' +
            '<strong id="wpot-val-b" style="width: 14px; color:#4338ca; font-size: 1rem;">' + state.base + '</strong>' +
          '</div>' +

          '<div class="wpot-ctrl">' +
            '<span style="color:#1d4ed8;">Expoente (n):</span>' +
            '<input type="range" class="wpot-slider" id="wpot-e" min="0" max="6" step="1" value="' + state.exp + '">' +
            '<strong id="wpot-val-e" style="width: 14px; color:#1d4ed8; font-size: 1rem;">' + state.exp + '</strong>' +
          '</div>' +

          '<div style="display:flex; gap:3px;">' +
            '<button type="button" class="wpot-toggle active" id="wpot-t-fan">🌿 Leque</button>' +
            '<button type="button" class="wpot-toggle" id="wpot-t-rad">☀️ Radial</button>' +
          '</div>' +
        '</div>' +

        '<div class="wpot-stage" id="wpot-stage"></div>' +

        '<div class="wpot-footer">' +
          '<div class="wpot-eq" id="wpot-eq"></div>' +
          '<div id="wpot-badge-box"></div>' +
        '</div>' +
      '</div>';

    var sliderB = container.querySelector("#wpot-b");
    var sliderE = container.querySelector("#wpot-e");
    var valB = container.querySelector("#wpot-val-b");
    var valE = container.querySelector("#wpot-val-e");
    var stageEl = container.querySelector("#wpot-stage");
    var eqEl = container.querySelector("#wpot-eq");
    var badgeBox = container.querySelector("#wpot-badge-box");
    var presetsEl = container.querySelector("#wpot-presets");
    var toggleFan = container.querySelector("#wpot-t-fan");
    var toggleRad = container.querySelector("#wpot-t-rad");

    function renderPresets() {
      presetsEl.innerHTML = PRESETS.map(function (p) {
        var active = (p.b === state.base && p.e === state.exp) ? " active" : "";
        return '<button type="button" class="wpot-preset-btn' + active + '" data-b="' + p.b + '" data-e="' + p.e + '">' + p.label + '</button>';
      }).join("");

      var pBtns = presetsEl.querySelectorAll(".wpot-preset-btn");
      pBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var b = parseInt(btn.getAttribute("data-b"), 10);
          var e = parseInt(btn.getAttribute("data-e"), 10);
          sliderB.value = b;
          sliderE.value = e;
          update();
        });
      });
    }

    function update() {
      var b = parseInt(sliderB.value, 10);
      var e = parseInt(sliderE.value, 10);

      // Limitações inteligentes para manter SVG responsivo e ultra-fluido
      var maxAllowedExp = 6;
      if (b === 2) maxAllowedExp = 7;
      else if (b === 3) maxAllowedExp = 5;
      else if (b === 4) maxAllowedExp = 4;
      else if (b >= 5) maxAllowedExp = 4;

      sliderE.max = maxAllowedExp;
      if (e > maxAllowedExp) {
        e = maxAllowedExp;
        sliderE.value = e;
      }

      state.base = b;
      state.exp = e;

      valB.textContent = b;
      valE.textContent = e;

      var total = Math.pow(b, e);

      // Geração da Árvore Fractal Multidirecional N-ária em SVG
      var svgW = 540;
      var svgH = 180;
      var linesHTML = "";
      var nodesHTML = "";

      if (e === 0) {
        // Nível 0: apenas o nó raiz
        var cx = svgW / 2;
        var cy = svgH / 2;
        nodesHTML =
          '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="#6366f1" />' +
          '<text x="' + cx + '" y="' + (cy + 4) + '" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">1</text>';
      } else if (state.mode === "radial") {
        // MODO RADIAL (360°): Árvore Fractal que se expande do centro para todas as direções!
        var cx0 = svgW / 2;
        var cy0 = svgH / 2;
        var maxR = 80;
        var rStep = maxR / e;

        // Fila de nós: { x, y, angle, spanAngle, level }
        var queue = [{ x: cx0, y: cy0, angle: 0, span: Math.PI * 2, level: 0 }];

        // Nó raiz no centro
        nodesHTML += '<circle cx="' + cx0 + '" cy="' + cy0 + '" r="6" fill="' + LEVEL_COLORS[0] + '" />';

        while (queue.length > 0) {
          var curr = queue.shift();
          if (curr.level >= e) continue;

          var nextLevel = curr.level + 1;
          var childSpan = curr.span / b;
          var childDist = rStep * nextLevel;
          var nodeRadius = Math.max(1.8, 5.5 - nextLevel * 0.7);
          var strokeW = Math.max(0.6, 2.2 - nextLevel * 0.35);

          for (var bi = 0; bi < b; bi++) {
            var childAngle = (curr.level === 0)
              ? (bi * (Math.PI * 2 / b) - Math.PI / 2)
              : (curr.angle - curr.span / 2 + childSpan * (bi + 0.5));

            var childX = cx0 + childDist * Math.cos(childAngle);
            var childY = cy0 + childDist * Math.sin(childAngle);

            linesHTML += '<line x1="' + curr.x + '" y1="' + curr.y + '" x2="' + childX + '" y2="' + childY + '" stroke="#cbd5e1" stroke-width="' + strokeW + '" stroke-linecap="round" />';
            nodesHTML += '<circle cx="' + childX + '" cy="' + childY + '" r="' + nodeRadius + '" fill="' + LEVEL_COLORS[nextLevel % LEVEL_COLORS.length] + '" />';

            queue.push({ x: childX, y: childY, angle: childAngle, span: childSpan, level: nextLevel });
          }
        }
      } else {
        // MODO LEQUE VERTICAL (Árvore Hierárquica N-ária Multidirecional)
        var startX = svgW / 2;
        var startY = 16;
        var dy = (svgH - 32) / e;

        var queueFan = [{ x: startX, y: startY, leftBound: 15, rightBound: svgW - 15, level: 0 }];

        nodesHTML += '<circle cx="' + startX + '" cy="' + startY + '" r="5.5" fill="' + LEVEL_COLORS[0] + '" />';

        while (queueFan.length > 0) {
          var fNode = queueFan.shift();
          if (fNode.level >= e) continue;

          var fNextLvl = fNode.level + 1;
          var spanW = (fNode.rightBound - fNode.leftBound) / b;
          var childYFan = startY + dy * fNextLvl;
          var fRadius = Math.max(1.8, 5.5 - fNextLvl * 0.65);
          var fStrokeW = Math.max(0.6, 2.2 - fNextLvl * 0.35);

          for (var fbi = 0; fbi < b; fbi++) {
            var childLeft = fNode.leftBound + spanW * fbi;
            var childRight = childLeft + spanW;
            var childXFan = (childLeft + childRight) / 2;

            linesHTML += '<line x1="' + fNode.x + '" y1="' + fNode.y + '" x2="' + childXFan + '" y2="' + childYFan + '" stroke="#cbd5e1" stroke-width="' + fStrokeW + '" stroke-linecap="round" />';
            nodesHTML += '<circle cx="' + childXFan + '" cy="' + childYFan + '" r="' + fRadius + '" fill="' + LEVEL_COLORS[fNextLvl % LEVEL_COLORS.length] + '" />';

            queueFan.push({ x: childXFan, y: childYFan, leftBound: childLeft, rightBound: childRight, level: fNextLvl });
          }
        }
      }

      stageEl.innerHTML = '<svg class="wpot-svg" viewBox="0 0 ' + svgW + ' ' + svgH + '">' + linesHTML + nodesHTML + '</svg>';

      // Multiplicação Expandida
      var expansion = "";
      if (e === 0) {
        expansion = '<span style="font-size:0.85rem; color:#64748b; font-weight:normal;"> (Definição: expoente zero = 1)</span>';
      } else {
        var factors = [];
        for (var f = 0; f < e; f++) {
          factors.push('<span style="color:#4338ca;">' + b + '</span>');
        }
        expansion = '<span style="font-size:0.95rem; color:#64748b; font-weight:600; margin-left:6px;">(' + factors.join(" × ") + ')</span>';
      }

      var totalFormatted = total.toLocaleString("pt-BR");

      eqEl.innerHTML =
        '<span style="color:#4338ca;">' + b + '</span>' +
        '<sup style="color:#1d4ed8; font-size:0.75em;">' + e + '</sup>' +
        ' = <span style="color:#059669;">' + totalFormatted + '</span>' +
        expansion;

      badgeBox.innerHTML = (e === 0)
        ? '<span class="wpot-badge" style="background:#f1f5f9; color:#475569;">Elemento Neutro (1)</span>'
        : '<span class="wpot-badge" style="background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0;">' + totalFormatted + ' folhas no nível ' + e + '</span>';

      renderPresets();
    }

    sliderB.addEventListener("input", update);
    sliderE.addEventListener("input", update);

    toggleFan.addEventListener("click", function () {
      state.mode = "fan";
      toggleFan.classList.add("active");
      toggleRad.classList.remove("active");
      update();
    });

    toggleRad.addEventListener("click", function () {
      state.mode = "radial";
      toggleRad.classList.add("active");
      toggleFan.classList.remove("active");
      update();
    });

    update();
  };
})();
