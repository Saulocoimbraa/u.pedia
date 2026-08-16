/**
 * js/widgets/widgetTriangulo.js
 * Widget interativo do Triângulo:
 * - Área útil expandida (viewBox 0 0 360 260) com limites de arrasto amplos.
 * - Permite arrastar o vértice A livremente até a altura do Triângulo Equilátero.
 * - Interface limpa sem botões extras ou atração artificial.
 * - Modo 1: Soma dos Ângulos (180°) & Classificação Lados/Ângulos.
 * - Modo 2: Reta Paralela r // BC: Base BC fixa, Reta r e Vértice A móveis,
 *   arcos congruentes coloridos (β=β' verde, γ=γ' amarelo, α vermelho).
 */
(function () {
  window.initWidgetTriangulo = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var activeTab = 1; // 1: Soma & Tipos | 2: Retas Paralelas
    var svgWidth = 360;
    var svgHeight = 260;

    // Estado dos vértices
    // Em Modo 2 (Retas Paralelas): B(70, 220) e C(290, 220) são FIXOS na base horizontal (comprimento 220px).
    // Equilátero perfeito ocorre quando A está em (180, 29.5).
    var state = {
      A: { x: 180, y: 30 },
      B: { x: 70,  y: 220 },
      C: { x: 290, y: 220 }
    };

    var dragging = null;

    function dist(p1, p2) {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    function calcAngle(p1, p2, p3) {
      var a = dist(p2, p3);
      var b = dist(p1, p3);
      var c = dist(p1, p2);
      if (a === 0 || c === 0) return 0;
      var cosVal = (a * a + c * c - b * b) / (2 * a * c);
      cosVal = Math.max(-1, Math.min(1, cosVal));
      return Math.acos(cosVal) * (180 / Math.PI);
    }

    function getSideClassification(a, b, c) {
      var eps = 3.5;
      var eqAB = Math.abs(a - b) < eps;
      var eqBC = Math.abs(b - c) < eps;
      var eqAC = Math.abs(a - c) < eps;

      if (eqAB && eqBC && eqAC) return "Equilátero";
      if (eqAB || eqBC || eqAC) return "Isósceles";
      return "Escaleno";
    }

    function getAngleClassification(angA, angB, angC) {
      var eps = 2.5;
      if (Math.abs(angA - 90) < eps || Math.abs(angB - 90) < eps || Math.abs(angC - 90) < eps) {
        return "Retângulo";
      }
      if (angA > 90.5 || angB > 90.5 || angC > 90.5) {
        return "Obtusângulo";
      }
      return "Acutângulo";
    }

    function drawArcRad(cx, cy, radius, startRad, endRad, color, opacity) {
      var diff = endRad - startRad;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      while (diff > Math.PI) diff -= 2 * Math.PI;

      var sAngle = startRad;
      var eAngle = startRad + diff;
      var sweep = diff > 0 ? 1 : 0;
      var largeArc = Math.abs(diff) > Math.PI ? 1 : 0;

      var x1 = cx + radius * Math.cos(sAngle);
      var y1 = cy + radius * Math.sin(sAngle);
      var x2 = cx + radius * Math.cos(eAngle);
      var y2 = cy + radius * Math.sin(eAngle);

      return '<path d="M ' + cx + ' ' + cy + ' L ' + x1 + ' ' + y1 + ' A ' + radius + ' ' + radius + ' 0 ' + largeArc + ' ' + sweep + ' ' + x2 + ' ' + y2 + ' Z" fill="' + color + '" fill-opacity="' + (opacity || 0.4) + '" stroke="' + color + '" stroke-width="1.5"/>';
    }

    function describeVertexArc(p1, p2, p3, radius, color) {
      var a1 = Math.atan2(p1.y - p2.y, p1.x - p2.x);
      var a2 = Math.atan2(p3.y - p2.y, p3.x - p2.x);
      return drawArcRad(p2.x, p2.y, radius, a1, a2, color, 0.4);
    }

    // Estrutura HTML limpa do Widget
    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 12px; padding: 1.25rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); max-width: 440px; margin: 0 auto;">' +
        '<h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.2rem;">Demonstração Interativa do Triângulo</h3>' +

        '<!-- Seletor de Abas -->' +
        '<div style="display: flex; gap: 0.4rem; justify-content: center; margin-bottom: 1rem;">' +
          '<button id="w-tri-tab1" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; font-weight: bold; border-radius: 6px; border: 1px solid #4f46e5; background: #4f46e5; color: #fff; cursor: pointer;">1. Soma (180°) & Tipos</button>' +
          '<button id="w-tri-tab2" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; font-weight: bold; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; color: #475569; cursor: pointer;">2. Retas Paralelas</button>' +
        '</div>' +

        '<!-- SVG do Triângulo (Área Útil Ampliada 360x260) -->' +
        '<div style="display: flex; justify-content: center; margin-bottom: 0.85rem;">' +
          '<svg id="w-tri-svg" width="100%" height="260" viewBox="0 0 360 260" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; cursor: crosshair; user-select: none; box-shadow: 0 2px 4px rgba(0,0,0,0.03); max-width: 360px;">' +
            
            '<!-- Camada de Arcos e Retas (Dinâmica) -->' +
            '<g id="w-tri-dynamic-layer"></g>' +

            '<!-- Polígono do Triângulo ABC -->' +
            '<polygon id="w-tri-polygon" points="180,30 70,220 290,220" fill="#e0e7ff" fill-opacity="0.45" stroke="#4f46e5" stroke-width="2.5" />' +

            '<!-- Vértice A -->' +
            '<circle id="w-pt-a" cx="180" cy="30" r="9" fill="#ef4444" stroke="#fca5a5" stroke-width="3" style="cursor: grab;" />' +
            '<text id="w-lbl-a" x="180" y="16" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">A</text>' +

            '<!-- Vértice B -->' +
            '<circle id="w-pt-b" cx="70" cy="220" r="9" fill="#10b981" stroke="#a7f3d0" stroke-width="3" style="cursor: grab;" />' +
            '<text id="w-lbl-b" x="50" y="235" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#047857">B</text>' +

            '<!-- Vértice C -->' +
            '<circle id="w-pt-c" cx="290" cy="220" r="9" fill="#f59e0b" stroke="#fde68a" stroke-width="3" style="cursor: grab;" />' +
            '<text id="w-lbl-c" x="310" y="235" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#b45309">C</text>' +
          '</svg>' +
        '</div>' +

        '<!-- Painel de Informações e Resultados -->' +
        '<div id="w-tri-info" style="padding: 0.75rem 0.9rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5; text-align: left;">' +
          '<div id="w-tri-angles-row" style="display: flex; justify-content: space-between; font-weight: bold; font-size: 0.95rem; margin-bottom: 0.4rem; flex-wrap: wrap;">' +
            '<span style="color: #dc2626;">α = <span id="w-val-a">60</span>°</span>' +
            '<span style="color: #047857;">β = <span id="w-val-b">60</span>°</span>' +
            '<span style="color: #b45309;">γ = <span id="w-val-c">60</span>°</span>' +
            '<span style="color: #4f46e5;">Soma = 180°</span>' +
          '</div>' +
          '<p id="w-tri-desc" style="margin: 0; font-size: 0.85rem; color: #475569;">Classificação: <strong id="w-tri-class" style="color: #4f46e5;">Acutângulo Equilátero</strong></p>' +
        '</div>' +
      '</div>';

    // Elementos DOM
    var svg = container.querySelector("#w-tri-svg");
    var poly = container.querySelector("#w-tri-polygon");
    var ptA = container.querySelector("#w-pt-a");
    var ptB = container.querySelector("#w-pt-b");
    var ptC = container.querySelector("#w-pt-c");
    var lblA = container.querySelector("#w-lbl-a");
    var lblB = container.querySelector("#w-lbl-b");
    var lblC = container.querySelector("#w-lbl-c");
    var dynamicLayer = container.querySelector("#w-tri-dynamic-layer");

    var valA = container.querySelector("#w-val-a");
    var valB = container.querySelector("#w-val-b");
    var valC = container.querySelector("#w-val-c");
    var classDisp = container.querySelector("#w-tri-class");
    var descDisp = container.querySelector("#w-tri-desc");

    var tab1Btn = container.querySelector("#w-tri-tab1");
    var tab2Btn = container.querySelector("#w-tri-tab2");

    function update() {
      // No Modo 2, a base BC é FIXA em B(70, 220) e C(290, 220). O vértice A varia livremente!
      if (activeTab === 2) {
        state.B.x = 70;  state.B.y = 220;
        state.C.x = 290; state.C.y = 220;
        ptB.style.cursor = "default";
        ptC.style.cursor = "default";
      } else {
        ptB.style.cursor = "grab";
        ptC.style.cursor = "grab";
      }

      // Atualizar polígono e vértices no SVG
      poly.setAttribute("points", state.A.x + "," + state.A.y + " " + state.B.x + "," + state.B.y + " " + state.C.x + "," + state.C.y);

      ptA.setAttribute("cx", state.A.x); ptA.setAttribute("cy", state.A.y);
      ptB.setAttribute("cx", state.B.x); ptB.setAttribute("cy", state.B.y);
      ptC.setAttribute("cx", state.C.x); ptC.setAttribute("cy", state.C.y);

      lblA.setAttribute("x", state.A.x); lblA.setAttribute("y", Math.max(14, state.A.y - 12));
      lblB.setAttribute("x", Math.max(15, state.B.x - 14)); lblB.setAttribute("y", Math.min(255, state.B.y + 18));
      lblC.setAttribute("x", Math.min(345, state.C.x + 14)); lblC.setAttribute("y", Math.min(255, state.C.y + 18));

      // Cálculo dos 3 Ângulos Internos
      var rawA = calcAngle(state.B, state.A, state.C);
      var rawB = calcAngle(state.A, state.B, state.C);
      var rawC = calcAngle(state.A, state.C, state.B);

      var degA = Math.round(rawA);
      var degB = Math.round(rawB);
      var degC = 180 - degA - degB;

      if (valA) valA.textContent = degA;
      if (valB) valB.textContent = degB;
      if (valC) valC.textContent = degC;

      var sidec = dist(state.A, state.B);
      var sidea = dist(state.B, state.C);
      var sideb = dist(state.A, state.C);

      var angleClass = getAngleClassification(degA, degB, degC);
      var sideClass = getSideClassification(sidea, sideb, sidec);

      if (activeTab === 1) {
        // MODO 1: Arcos Internos nos 3 Vértices & Classificação
        var arcsHtml =
          describeVertexArc(state.B, state.A, state.C, 25, "#ef4444") +
          describeVertexArc(state.A, state.B, state.C, 25, "#10b981") +
          describeVertexArc(state.A, state.C, state.B, 25, "#f59e0b");

        if (dynamicLayer) dynamicLayer.innerHTML = arcsHtml;
        if (classDisp) classDisp.textContent = angleClass + " " + sideClass;
        if (descDisp) descDisp.innerHTML = 'Classificação: <strong style="color: #4f46e5;">' + angleClass + ' ' + sideClass + '</strong> (Soma: ' + (degA + degB + degC) + '°)';
      } else {
        // MODO 2: Reta Paralela r // BC passando por A. Base BC é FIXA!
        var yA = state.A.y;
        var xA = state.A.x;

        // Ângulos polares a partir de A
        var angAB = Math.atan2(state.B.y - yA, state.B.x - xA);
        var angAC = Math.atan2(state.C.y - yA, state.C.x - xA);

        var rLeft = Math.PI;
        var rRight = 0;

        // Arcos Congruentes no Vértice A
        var arcAltB = drawArcRad(xA, yA, 28, rLeft, angAB, "#10b981", 0.5);   // β' (verde)
        var arcAltC = drawArcRad(xA, yA, 28, angAC, rRight, "#f59e0b", 0.5);  // γ' (amarelo)
        var arcAlphaA = drawArcRad(xA, yA, 28, angAB, angAC, "#ef4444", 0.5); // α (vermelho)

        // Arcos nos Vértices Internos B e C
        var arcInternalB = describeVertexArc(state.C, state.B, state.A, 26, "#10b981");
        var arcInternalC = describeVertexArc(state.A, state.C, state.B, 26, "#f59e0b");

        var mode2Html =
          '<!-- Reta Paralela r passando por A -->' +
          '<line x1="10" y1="' + yA + '" x2="350" y2="' + yA + '" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" />' +
          '<text x="345" y="' + Math.max(12, yA - 6) + '" text-anchor="end" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#ef4444">Reta r // BC</text>' +
          
          '<!-- Arcos Congruentes no Vértice A -->' +
          arcAltB + arcAlphaA + arcAltC +

          '<!-- Arcos nos Vértices Internos B e C -->' +
          arcInternalB + arcInternalC +

          '<!-- Rótulos dos Ângulos Congruentes no Vértice A -->' +
          '<text x="' + (xA - 36) + '" y="' + (yA + 16) + '" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#047857">β\'</text>' +
          '<text x="' + xA + '" y="' + (yA + 38) + '" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">α</text>' +
          '<text x="' + (xA + 32) + '" y="' + (yA + 16) + '" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b45309">γ\'</text>';

        if (dynamicLayer) dynamicLayer.innerHTML = mode2Html;

        if (descDisp) {
          descDisp.innerHTML = '<strong style="color: #4f46e5;">Demonstração:</strong> A base <strong>BC é fixa</strong> e a <strong>reta r // BC</strong> passa por A. Os ângulos alternos internos <span style="color:#047857;font-weight:bold;">β\' = β (' + degB + '°)</span> e <span style="color:#b45309;font-weight:bold;">γ\' = γ (' + degC + '°)</span> provam que <span style="color:#047857;font-weight:bold;">β\'</span> + <span style="color:#b91c1c;font-weight:bold;">α</span> + <span style="color:#b45309;font-weight:bold;">γ\'</span> = <strong>180°</strong> sobre a reta r!';
        }
      }
    }

    // Interatividade com arraste ultra-fluido dos vértices sem restrição artificial
    function handlePointer(e) {
      if (!dragging || !svg) return;
      if (activeTab === 2 && dragging !== "A") return;

      var rect = svg.getBoundingClientRect();
      var clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      var clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      var mouseX = clientX - rect.left;
      var mouseY = clientY - rect.top;

      // Limites amplos que cobrem toda a área útil do viewBox (360x260)
      var svgX = Math.max(10, Math.min(350, (mouseX / rect.width) * svgWidth));
      var svgY = Math.max(10, Math.min(245, (mouseY / rect.height) * svgHeight));

      state[dragging].x = Math.round(svgX);
      state[dragging].y = Math.round(svgY);
      update();
    }

    function bindPointEvents(elem, ptId) {
      if (!elem) return;
      elem.addEventListener("mousedown", function (e) {
        if (activeTab === 2 && ptId !== "A") return;
        dragging = ptId;
        e.stopPropagation();
      });
      elem.addEventListener("touchstart", function (e) {
        if (activeTab === 2 && ptId !== "A") return;
        dragging = ptId;
        e.preventDefault();
        e.stopPropagation();
      });
    }

    bindPointEvents(ptA, "A");
    bindPointEvents(ptB, "B");
    bindPointEvents(ptC, "C");

    window.addEventListener("mousemove", handlePointer);
    window.addEventListener("mouseup", function () { dragging = null; });
    window.addEventListener("touchmove", handlePointer);
    window.addEventListener("touchend", function () { dragging = null; });

    // Alternância entre Abas
    if (tab1Btn) {
      tab1Btn.addEventListener("click", function () {
        activeTab = 1;
        tab1Btn.style.background = "#4f46e5"; tab1Btn.style.color = "#fff"; tab1Btn.style.borderColor = "#4f46e5";
        tab2Btn.style.background = "#f8fafc"; tab2Btn.style.color = "#475569"; tab2Btn.style.borderColor = "#cbd5e1";
        update();
      });
    }

    if (tab2Btn) {
      tab2Btn.addEventListener("click", function () {
        activeTab = 2;
        tab2Btn.style.background = "#4f46e5"; tab2Btn.style.color = "#fff"; tab2Btn.style.borderColor = "#4f46e5";
        tab1Btn.style.background = "#f8fafc"; tab1Btn.style.color = "#475569"; tab1Btn.style.borderColor = "#cbd5e1";
        update();
      });
    }

    // Render Inicial
    update();
  };
})();
