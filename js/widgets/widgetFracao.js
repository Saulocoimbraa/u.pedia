/**
 * js/widgets/widgetFracao.js
 * Widget interativo: Frações e Equivalência (Ultra Fluido e Compacto)
 * Expõe window.initWidgetFracao(containerId)
 */
(function () {
  window.initWidgetFracao = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = {
      num: 3,
      den: 4,
      viewMode: "pie"
    };

    var SLICE_COLORS = [
      "#6366f1", "#3b82f6", "#06b6d4", "#10b981",
      "#84cc16", "#f59e0b", "#f97316", "#ef4444",
      "#ec4899", "#a855f7", "#8b5cf6", "#14b8a6"
    ];

    function mdc(a, b) {
      return b === 0 ? a : mdc(b, a % b);
    }

    container.innerHTML =
      '<style>' +
        '.wfrac-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wfrac-ctrls { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.8rem; font-size: 0.85rem; }' +
        '.wfrac-ctrl { display: flex; align-items: center; gap: 8px; font-weight: 600; }' +
        '.wfrac-slider { -webkit-appearance: none; appearance: none; width: 85px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wfrac-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); transition: transform 0.1s; }' +
        '.wfrac-slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.2); }' +
        '.wfrac-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: #6366f1; border: none; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wfrac-toggle { background: #ffffff; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 5px; font-size: 0.75rem; font-weight: 700; color: #475569; cursor: pointer; transition: all 0.15s; }' +
        '.wfrac-toggle.active { background: #eef2ff; border-color: #6366f1; color: #4338ca; }' +
        '.wfrac-body { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-around; gap: 1rem; background: #fafafa; border: 1px solid #f1f5f9; border-radius: 8px; padding: 0.75rem; margin-bottom: 0.8rem; }' +
        '.wfrac-slice:hover { filter: brightness(1.15); }' +
        '.wfrac-bar-box { display: flex; width: 140px; height: 36px; border-radius: 6px; overflow: hidden; border: 1.5px solid #cbd5e1; }' +
        '.wfrac-bar-seg { flex: 1; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; border-right: 1px solid #fff; cursor: pointer; user-select: none; }' +
        '.wfrac-bar-seg:last-child { border-right: none; }' +
        '.wfrac-math { display: flex; align-items: center; gap: 0.75rem; font-size: 1.2rem; font-weight: 800; font-family: "Outfit", sans-serif; }' +
        '.wfrac-frac { display: inline-flex; flex-direction: column; align-items: center; }' +
        '.wfrac-frac-line { width: 100%; min-width: 26px; height: 2px; background: #334155; margin: 2px 0; }' +
        '.wfrac-irred .wfrac-frac-line { background: #059669; }' +
        '.wfrac-footer { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.82rem; }' +
        '.wfrac-badge { padding: 2px 6px; border-radius: 4px; font-weight: 700; font-size: 0.72rem; }' +
      '</style>' +

      '<div class="wfrac-wrapper">' +
        '<div class="wfrac-ctrls">' +
          '<div class="wfrac-ctrl">' +
            '<span style="color:#4338ca;">Num (a):</span>' +
            '<input type="range" class="wfrac-slider" id="wfrac-n" min="0" max="4" value="' + state.num + '">' +
            '<strong id="wfrac-val-n" style="width: 14px; color:#4338ca;">' + state.num + '</strong>' +
          '</div>' +

          '<div class="wfrac-ctrl">' +
            '<span style="color:#1d4ed8;">Den (b):</span>' +
            '<input type="range" class="wfrac-slider" id="wfrac-d" min="1" max="10" value="' + state.den + '">' +
            '<strong id="wfrac-val-d" style="width: 14px; color:#1d4ed8;">' + state.den + '</strong>' +
          '</div>' +

          '<div style="display:flex; gap:4px;">' +
            '<button type="button" class="wfrac-toggle active" id="wfrac-t-pie">🍕 Pizza</button>' +
            '<button type="button" class="wfrac-toggle" id="wfrac-t-bar">🍫 Barra</button>' +
          '</div>' +
        '</div>' +

        '<div class="wfrac-body">' +
          '<div id="wfrac-visual-box"></div>' +
          '<div class="wfrac-math" id="wfrac-math"></div>' +
        '</div>' +

        '<div class="wfrac-footer">' +
          '<span id="wfrac-desc"></span>' +
          '<div id="wfrac-badge-box"></div>' +
        '</div>' +
      '</div>';

    var sliderN = container.querySelector("#wfrac-n");
    var sliderD = container.querySelector("#wfrac-d");
    var valN = container.querySelector("#wfrac-val-n");
    var valD = container.querySelector("#wfrac-val-d");
    var visualBox = container.querySelector("#wfrac-visual-box");
    var mathBox = container.querySelector("#wfrac-math");
    var descEl = container.querySelector("#wfrac-desc");
    var badgeBox = container.querySelector("#wfrac-badge-box");
    var tPie = container.querySelector("#wfrac-t-pie");
    var tBar = container.querySelector("#wfrac-t-bar");

    function update() {
      var den = parseInt(sliderD.value, 10);
      sliderN.max = den;
      if (parseInt(sliderN.value, 10) > den) {
        sliderN.value = den;
      }
      var num = parseInt(sliderN.value, 10);

      state.num = num;
      state.den = den;

      valN.textContent = num;
      valD.textContent = den;

      var divisor = mdc(num, den);
      var irredNum = divisor > 0 ? num / divisor : 0;
      var irredDen = divisor > 0 ? den / divisor : 1;
      var isIrredutivel = (divisor === 1 && num > 0) || (num === 0 && den === 1);
      var pct = den > 0 ? Math.round((num / den) * 100) : 0;

      // Desenhar Visualização
      if (state.viewMode === "pie") {
        var cx = 70, cy = 70, r = 55;
        var pieSVG = "";
        if (den === 1) {
          var fill = num >= 1 ? SLICE_COLORS[0] : "#f1f5f9";
          pieSVG = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '" stroke="#cbd5e1" stroke-width="2"/>';
        } else {
          var angleStep = (Math.PI * 2) / den;
          for (var i = 0; i < den; i++) {
            var startAngle = i * angleStep - Math.PI / 2;
            var endAngle = (i + 1) * angleStep - Math.PI / 2;
            var x1 = cx + r * Math.cos(startAngle);
            var y1 = cy + r * Math.sin(startAngle);
            var x2 = cx + r * Math.cos(endAngle);
            var y2 = cy + r * Math.sin(endAngle);
            var isSelected = i < num;
            var color = isSelected ? SLICE_COLORS[i % SLICE_COLORS.length] : "#f8fafc";
            var stroke = isSelected ? "#ffffff" : "#cbd5e1";
            var largeArc = angleStep > Math.PI ? 1 : 0;
            var d = "M " + cx + " " + cy + " L " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 1 " + x2 + " " + y2 + " Z";

            pieSVG += '<path d="' + d + '" fill="' + color + '" stroke="' + stroke + '" stroke-width="1.5" class="wfrac-slice" data-idx="' + i + '" style="cursor:pointer;" />';
          }
          pieSVG += '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>';
          pieSVG += '<text x="' + cx + '" y="' + (cy + 4) + '" font-size="8" font-weight="800" fill="#334155" text-anchor="middle">' + num + '/' + den + '</text>';
        }
        visualBox.innerHTML = '<svg width="140" height="140" viewBox="0 0 140 140">' + pieSVG + '</svg>';
      } else {
        var barHTML = "";
        for (var b = 0; b < den; b++) {
          var sel = b < num;
          var bCol = sel ? SLICE_COLORS[b % SLICE_COLORS.length] : "#f8fafc";
          barHTML += '<div class="wfrac-bar-seg" data-idx="' + b + '" style="background:' + bCol + '; color:' + (sel ? '#fff' : '#94a3b8') + ';">' + (b + 1) + '</div>';
        }
        visualBox.innerHTML = '<div class="wfrac-bar-box">' + barHTML + '</div>';
      }

      // Adicionar clique nas fatias/barras
      var parts = visualBox.querySelectorAll(".wfrac-slice, .wfrac-bar-seg");
      parts.forEach(function (p) {
        p.addEventListener("click", function () {
          var idx = parseInt(p.getAttribute("data-idx"), 10);
          sliderN.value = (sliderN.value == idx + 1) ? idx : idx + 1;
          update();
        });
      });

      // Atualizar Matemática e Rodapé
      mathBox.innerHTML =
        '<div class="wfrac-frac">' +
          '<span style="color:#4338ca;">' + num + '</span>' +
          '<div class="wfrac-frac-line"></div>' +
          '<span style="color:#1d4ed8;">' + den + '</span>' +
        '</div>' +
        (isIrredutivel ? '' :
          '<span style="color:#64748b;">=</span>' +
          '<div class="wfrac-frac wfrac-irred" style="color:#059669;" title="Forma Irredutível">' +
            '<span>' + irredNum + '</span>' +
            '<div class="wfrac-frac-line"></div>' +
            '<span>' + irredDen + '</span>' +
          '</div>'
        ) +
        '<span style="font-size:0.95rem; font-weight:700; color:#64748b; margin-left:4px;">(' + pct + '%)</span>';

      descEl.textContent = (num === 0 ? 'Fração nula (0)' : (num === den ? '1 Inteiro completo' : num + ' de ' + den + ' partes'));

      badgeBox.innerHTML = isIrredutivel
        ? '<span class="wfrac-badge" style="background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0;">✓ Irredutível</span>'
        : '<span class="wfrac-badge" style="background:#fffbeb; color:#b45309; border:1px solid #fde68a;">Simplifica ÷ ' + divisor + '</span>';
    }

    sliderN.addEventListener("input", update);
    sliderD.addEventListener("input", update);

    tPie.addEventListener("click", function () {
      state.viewMode = "pie";
      tPie.classList.add("active");
      tBar.classList.remove("active");
      update();
    });

    tBar.addEventListener("click", function () {
      state.viewMode = "bar";
      tBar.classList.add("active");
      tPie.classList.remove("active");
      update();
    });

    update();
  };
})();
