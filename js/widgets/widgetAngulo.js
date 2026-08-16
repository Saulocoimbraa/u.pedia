/**
 * js/widgets/widgetAngulo.js
 * Widget interativo para visualização fluida e classificação de ângulos.
 * Ajuste corrigido do arco geométrico (sweepFlag 0 / sentido anti-horário).
 */
(function () {
  window.initWidgetAngulo = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var currentAngle = 45;
    var cx = 160;
    var cy = 140;
    var rayLength = 110;
    var arcRadius = 40;

    function getClassification(a) {
      if (a === 0) return "Nulo (0°)";
      if (a > 0 && a < 90) return "Agudo (0° < θ < 90°)";
      if (a === 90) return "Reto (θ = 90°)";
      if (a > 90 && a < 180) return "Obtuso (90° < θ < 180°)";
      if (a === 180) return "Raso / Meia Volta (θ = 180°)";
      if (a > 180 && a < 360) return "Côncavo / Reentrante (180° < θ < 360°)";
      if (a === 360) return "Completo / Volta Inteira (θ = 360°)";
      return "";
    }

    // Converte ângulo matemático (0° na direita, sentido anti-horário) para coordenadas SVG em pixels
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY - radius * Math.sin(angleInRadians)
      };
    }

    // Descreve o setor circular do ângulo a partir de startAngle (0°) até endAngle (θ)
    function describeArc(x, y, radius, startAngle, endAngle) {
      if (endAngle >= 360) {
        return "M " + (x + radius) + " " + y +
          " A " + radius + " " + radius + " 0 1 0 " + (x - radius) + " " + y +
          " A " + radius + " " + radius + " 0 1 0 " + (x + radius) + " " + y + " Z";
      }
      var start = polarToCartesian(x, y, radius, startAngle); // (x + r, y) para 0°
      var end = polarToCartesian(x, y, radius, endAngle);   // posição terminal θ
      var largeArcFlag = (endAngle - startAngle) > 180 ? 1 : 0;
      var sweepFlag = 0; // 0 varre no sentido anti-horário geométrico (topo da tela em SVG)

      return [
        "M", x, y,
        "L", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, sweepFlag, end.x, end.y,
        "Z"
      ].join(" ");
    }

    // Estrutura HTML do Widget
    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1.5rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">' +
      '<h3 style="margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem;">Demonstração Interativa do Ângulo</h3>' +

      '<!-- Controles e Slider -->' +
      '<div style="margin-bottom: 1.25rem;">' +
      '<div style="display: flex; justify-content: space-between; align-items: center; max-width: 380px; margin: 0 auto 0.5rem;">' +
      '<span style="font-weight: 600; font-size: 0.95rem;">Abertura do Ângulo:</span>' +
      '<span id="w-angulo-val" style="font-weight: 800; font-size: 1.3rem; color: #4f46e5; background: #e0e7ff; padding: 0.2rem 0.75rem; border-radius: 20px;">45°</span>' +
      '</div>' +
      '<input type="range" id="w-angulo-slider" min="0" max="360" value="45" step="1" style="width: 100%; max-width: 380px; accent-color: #4f46e5; cursor: pointer; margin-bottom: 0.75rem;">' +

      '<!-- Botões de Atalho para Ângulos Notáveis -->' +
      '<div style="display: flex; gap: 0.4rem; justify-content: center; flex-wrap: wrap;">' +
      '<button class="w-ang-btn" data-ang="30" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">30°</button>' +
      '<button class="w-ang-btn" data-ang="45" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">45°</button>' +
      '<button class="w-ang-btn" data-ang="90" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">90°</button>' +
      '<button class="w-ang-btn" data-ang="120" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">120°</button>' +
      '<button class="w-ang-btn" data-ang="180" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">180°</button>' +
      '<button class="w-ang-btn" data-ang="360" style="padding: 0.25rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer;">360°</button>' +
      '</div>' +
      '</div>' +

      '<!-- SVG de Visualização Geométrica -->' +
      '<div style="display: flex; justify-content: center; margin-bottom: 1rem;">' +
      '<svg id="w-angulo-svg" width="340" height="320" viewBox="0 0 340 230" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">' +
      '<!-- Definição de Setas para Semirretas -->' +
      '<defs>' +
      '<marker id="ray-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />' +
      '</marker>' +
      '<marker id="ray-arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M 0 1 L 10 5 L 0 9 z" fill="#4f46e5" />' +
      '</marker>' +
      '</defs>' +

      '<!-- Arco de Preenchimento do Ângulo -->' +
      '<path id="w-ang-arc" d="" fill="#e0e7ff" fill-opacity="0.65" stroke="#4f46e5" stroke-width="2" />' +

      '<!-- Indicador de Ângulo Reto (90°) -->' +
      '<g id="w-ang-square" style="display: none;">' +
      '<path d="M 185 140 L 185 115 L 160 115" fill="none" stroke="#4f46e5" stroke-width="2" />' +
      '<circle cx="172.5" cy="127.5" r="2.5" fill="#4f46e5" />' +
      '</g>' +

      '<!-- Semirreta Inicial (r1: Base a 0°) -->' +
      '<line x1="160" y1="140" x2="280" y2="140" stroke="#334155" stroke-width="3" marker-end="url(#ray-arrow)" stroke-linecap="round" />' +
      '<text x="270" y="162" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#64748b">Semirreta r₁</text>' +

      '<!-- Semirreta Terminal (r2: Ângulo θ) -->' +
      '<line id="w-ang-ray2" x1="160" y1="140" x2="237" y2="62" stroke="#4f46e5" stroke-width="3" marker-end="url(#ray-arrow-active)" stroke-linecap="round" />' +
      '<text id="w-ang-ray2-lbl" x="235" y="50" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">Semirreta r₂</text>' +

      '<!-- Vértice (V) em Destaque -->' +
      '<circle cx="160" cy="140" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="3.5" />' +
      '<text x="160" y="172" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Vértice (V)</text>' +

      '<!-- Rótulo do Valor de θ -->' +
      '<text id="w-ang-arc-lbl" x="190" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#4338ca">θ</text>' +
      '</svg>' +
      '</div>' +

      '<!-- Card de Classificação -->' +
      '<div style="padding: 0.85rem 1rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5; text-align: left;">' +
      '<p style="margin: 0; font-size: 1.05rem; color: #1e293b;">Classificação: <strong id="w-ang-class" style="color: #4f46e5;">Agudo (0° < θ < 90°)</strong></p>' +
      '<p style="margin: 0.3rem 0 0 0; font-size: 0.85rem; color: #64748b;">O ângulo varre continuamente o espaço entre a <strong>Semirreta r₁</strong> e a <strong>Semirreta r₂</strong> a partir do <strong>Vértice V</strong>.</p>' +
      '</div>' +
      '</div>';

    // Elementos DOM
    var slider = container.querySelector("#w-angulo-slider");
    var valDisplay = container.querySelector("#w-angulo-val");
    var classDisplay = container.querySelector("#w-ang-class");
    var ray2Line = container.querySelector("#w-ang-ray2");
    var ray2Lbl = container.querySelector("#w-ang-ray2-lbl");
    var arcPath = container.querySelector("#w-ang-arc");
    var squareRect = container.querySelector("#w-ang-square");
    var arcLbl = container.querySelector("#w-ang-arc-lbl");

    function update(angle) {
      currentAngle = angle;
      if (valDisplay) valDisplay.textContent = angle + "°";
      if (classDisplay) classDisplay.textContent = getClassification(angle);

      // Posição da Semirreta 2 (r2)
      var pos2 = polarToCartesian(cx, cy, rayLength, angle);
      if (ray2Line) {
        ray2Line.setAttribute("x2", pos2.x);
        ray2Line.setAttribute("y2", pos2.y);
      }

      // Posicionamento inteligente do rótulo da semirreta r2
      var lblPos = polarToCartesian(cx, cy, rayLength + 22, angle);
      if (ray2Lbl) {
        ray2Lbl.setAttribute("x", Math.max(25, Math.min(300, lblPos.x)));
        ray2Lbl.setAttribute("y", Math.max(25, Math.min(215, lblPos.y)));
      }

      // Desenhar o arco ou quadrado do ângulo reto
      if (angle === 90) {
        if (squareRect) squareRect.style.display = "block";
        if (arcPath) arcPath.setAttribute("d", "");
      } else {
        if (squareRect) squareRect.style.display = "none";
        if (arcPath) {
          if (angle === 0) {
            arcPath.setAttribute("d", "");
          } else {
            arcPath.setAttribute("d", describeArc(cx, cy, arcRadius, 0, angle));
          }
        }
      }

      // Posição do texto θ no centro do setor angular
      if (angle > 0) {
        var midAngle = angle / 2;
        var dist = angle === 90 ? arcRadius + 22 : arcRadius + 18;
        var midPos = polarToCartesian(cx, cy, dist, midAngle);
        if (arcLbl) {
          arcLbl.style.display = "block";
          arcLbl.setAttribute("x", midPos.x);
          arcLbl.setAttribute("y", midPos.y);
          arcLbl.textContent = angle + "°";
        }
      } else {
        if (arcLbl) arcLbl.style.display = "none";
      }
    }

    // Listener ultra-fluido para alteração contínua do slider
    if (slider) {
      slider.addEventListener("input", function (e) {
        update(parseInt(e.target.value, 10));
      });
    }

    // Botões de atalho
    var buttons = container.querySelectorAll(".w-ang-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var a = parseInt(this.getAttribute("data-ang"), 10);
        if (slider) slider.value = a;
        update(a);
      });
    });

    // Render inicial
    update(currentAngle);
  };
})();
