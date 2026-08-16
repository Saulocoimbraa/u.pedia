/**
 * js/widgets/widgetTales.js
 * Widget interativo do Teorema de Tales:
 * - Feixe de 3 retas paralelas (r₁, r₂, r₃) e 2 retas transversais (t₁, t₂).
 * - Retas transversais 100% RETAS (sem nenhuma distorção).
 * - Deslocamento fluido da reta paralela central (r₂) e da inclinação/posição das transversais.
 * - Leitura clara, legível e destacada da proporção AB/BC = DE/EF.
 * - Estética alinhada às diretrizes da μ.pedia (fundo claro, tipografia Inter/sans-serif).
 */
(function () {
  window.initWidgetTales = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var W = 380, H = 270;

    // Retas paralelas horizontais Y (r1 topo, r3 base fixas; r2 meio móvel)
    var y1 = 45;
    var y3 = 225;

    // Estado reativo
    var state = {
      y2: 135,         // Posição da reta r₂ (meio)
      t1_topX: 70,     // X da transversal 1 no topo (y1)
      t1_botX: 130,    // X da transversal 1 na base (y3)
      t2_topX: 310,    // X da transversal 2 no topo (y1)
      t2_botX: 250     // X da transversal 2 na base (y3)
    };

    function dist(x1, y1, x2, y2) {
      var dx = x2 - x1, dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // Calcula X em uma reta perfeita dados topX, botX e o Y desejado
    function calcX(topX, botX, y) {
      return topX + (botX - topX) * (y - y1) / (y3 - y1);
    }

    container.innerHTML =
      '<div style="background: var(--card-bg, #ffffff); border: 1px solid var(--border-color, #e2e8f0); border-radius: 14px; padding: 1.25rem; color: var(--text-color, #1e293b); font-family: var(--font-family, sans-serif); text-align: center; max-width: 460px; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">' +
        '<h3 style="margin-top: 0; margin-bottom: 0.85rem; font-size: 1.1rem; color: #1e293b;">Teorema de Tales — Proporcionalidade</h3>' +

        '<!-- Controles do Widget -->' +
        '<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.75rem 1rem; margin-bottom: 0.85rem; display: flex; flex-direction: column; gap: 0.6rem;">' +
          '<div style="display: flex; justify-content: space-between; align-items: center;">' +
            '<label for="wtales-slider-y2" style="font-size: 0.85rem; font-weight: 600; color: #475569;">Posição da Reta r₂ (Central):</label>' +
            '<span id="wtales-val-y2" style="font-weight: 700; font-size: 0.9rem; color: #4f46e5; background: #e0e7ff; padding: 0.15rem 0.5rem; border-radius: 12px;">Y = 135</span>' +
          '</div>' +
          '<input type="range" id="wtales-slider-y2" min="70" max="200" value="135" step="1" style="width: 100%; accent-color: #4f46e5; cursor: pointer;">' +

          '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.2rem;">' +
            '<label for="wtales-slider-t1" style="font-size: 0.85rem; font-weight: 600; color: #475569;">Inclinação Transversal 1:</label>' +
            '<input type="range" id="wtales-slider-t1" min="40" max="160" value="130" step="1" style="width: 55%; accent-color: #2563eb; cursor: pointer;">' +
          '</div>' +
        '</div>' +

        '<!-- SVG Canvas -->' +
        '<div style="display: flex; justify-content: center; margin-bottom: 0.85rem;">' +
          '<svg id="wtales-svg" width="380" height="270" viewBox="0 0 380 270" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.02); display: block;">' +

            // Sombreamento transparente dos feixes
            '<polygon id="wtales-poly-top" points="0,0 0,0 0,0 0,0" fill="#2563eb" fill-opacity="0.06" />' +
            '<polygon id="wtales-poly-bot" points="0,0 0,0 0,0 0,0" fill="#16a34a" fill-opacity="0.06" />' +

            // Retas paralelas (r1, r2, r3)
            '<line x1="20" y1="45" x2="360" y2="45" stroke="#64748b" stroke-width="2" stroke-dasharray="6,4"/>' +
            '<text x="365" y="49" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#64748b">r₁</text>' +

            '<line id="wtales-line-r2" x1="20" y1="135" x2="360" y2="135" stroke="#4f46e5" stroke-width="2.5"/>' +
            '<text id="wtales-lbl-r2" x="365" y="139" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#4f46e5">r₂</text>' +

            '<line x1="20" y1="225" x2="360" y2="225" stroke="#64748b" stroke-width="2" stroke-dasharray="6,4"/>' +
            '<text x="365" y="229" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#64748b">r₃</text>' +

            // Retas transversais completas estendidas (t1 e t2)
            '<line id="wtales-line-t1" x1="0" y1="0" x2="0" y2="0" stroke="#cbd5e1" stroke-width="2"/>' +
            '<text id="wtales-lbl-t1" x="0" y="0" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">t₁</text>' +

            '<line id="wtales-line-t2" x1="0" y1="0" x2="0" y2="0" stroke="#cbd5e1" stroke-width="2"/>' +
            '<text id="wtales-lbl-t2" x="0" y="0" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#059669">t₂</text>' +

            // Segmentos destacados sobre as transversais
            // Segmentos superiores (AB e DE) em AZUL (#2563eb)
            '<line id="wtales-seg-AB" x1="0" y1="0" x2="0" y2="0" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round"/>' +
            '<line id="wtales-seg-DE" x1="0" y1="0" x2="0" y2="0" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round"/>' +

            // Segmentos inferiores (BC e EF) em VERDE (#16a34a)
            '<line id="wtales-seg-BC" x1="0" y1="0" x2="0" y2="0" stroke="#16a34a" stroke-width="4.5" stroke-linecap="round"/>' +
            '<line id="wtales-seg-EF" x1="0" y1="0" x2="0" y2="0" stroke="#16a34a" stroke-width="4.5" stroke-linecap="round"/>' +

            // Pontos de interseção (A, B, C na t1; D, E, F na t2)
            '<circle id="wtales-pt-A" cx="0" cy="0" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/>' +
            '<circle id="wtales-pt-B" cx="0" cy="0" r="5" fill="#4f46e5" stroke="#ffffff" stroke-width="1.5"/>' +
            '<circle id="wtales-pt-C" cx="0" cy="0" r="5" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/>' +

            '<circle id="wtales-pt-D" cx="0" cy="0" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/>' +
            '<circle id="wtales-pt-E" cx="0" cy="0" r="5" fill="#4f46e5" stroke="#ffffff" stroke-width="1.5"/>' +
            '<circle id="wtales-pt-F" cx="0" cy="0" r="5" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/>' +

            // Rótulos dos pontos
            '<text id="wtales-lbl-A" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#2563eb">A</text>' +
            '<text id="wtales-lbl-B" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#4f46e5">B</text>' +
            '<text id="wtales-lbl-C" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#16a34a">C</text>' +

            '<text id="wtales-lbl-D" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#2563eb">D</text>' +
            '<text id="wtales-lbl-E" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#4f46e5">E</text>' +
            '<text id="wtales-lbl-F" x="0" y="0" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#16a34a">F</text>' +

          '</svg>' +
        '</div>' +

        '<!-- Painel Demonstrativo de Proporção em Destaque -->' +
        '<div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.85rem; display: flex; flex-direction: column; gap: 0.6rem;">' +

          '<div style="display: grid; grid-template-columns: 1fr 1.2fr 1fr; align-items: center; justify-items: center; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 0.4rem;">' +
            
            '<!-- Razão 1 (t1) -->' +
            '<div style="display: flex; flex-direction: column; align-items: center;">' +
              '<div style="display: flex; flex-direction: column; align-items: center; font-weight: bold; font-size: 0.95rem;">' +
                '<span style="color: #2563eb;">AB = <span id="wtales-val-AB">0.00</span></span>' +
                '<div style="width: 100%; height: 2px; background: #94a3b8; margin: 3px 0;"></div>' +
                '<span style="color: #16a34a;">BC = <span id="wtales-val-BC">0.00</span></span>' +
              '</div>' +
              '<span style="margin-top: 4px; font-size: 0.9rem; font-weight: 800; color: #1e293b;">= <span id="wtales-ratio1">1.00</span></span>' +
            '</div>' +

            '<!-- Sinal de Congruência/Igualdade das Razões -->' +
            '<div style="display: flex; flex-direction: column; align-items: center;">' +
              '<span style="font-size: 1.4rem; font-weight: 900; color: #059669;">=</span>' +
              '<span style="font-size: 0.72rem; font-weight: 700; color: #059669; text-transform: uppercase; background: #dcfce7; padding: 2px 6px; border-radius: 4px; margin-top: 2px;">Razão Constante</span>' +
            '</div>' +

            '<!-- Razão 2 (t2) -->' +
            '<div style="display: flex; flex-direction: column; align-items: center;">' +
              '<div style="display: flex; flex-direction: column; align-items: center; font-weight: bold; font-size: 0.95rem;">' +
                '<span style="color: #2563eb;">DE = <span id="wtales-val-DE">0.00</span></span>' +
                '<div style="width: 100%; height: 2px; background: #94a3b8; margin: 3px 0;"></div>' +
                '<span style="color: #16a34a;">EF = <span id="wtales-val-EF">0.00</span></span>' +
              '</div>' +
              '<span style="margin-top: 4px; font-size: 0.9rem; font-weight: 800; color: #1e293b;">= <span id="wtales-ratio2">1.00</span></span>' +
            '</div>' +

          '</div>' +

          '<p style="margin: 0; font-size: 0.82rem; color: #64748b; text-align: center;">' +
            'Mesmo movendo a reta <strong>r₂</strong> ou inclinando a transversal, a razão <strong>AB/BC</strong> permanece idêntica a <strong>DE/EF</strong>.' +
          '</p>' +

        '</div>' +
      '</div>';

    // Elementos DOM
    var sliderY2 = container.querySelector('#wtales-slider-y2');
    var sliderT1 = container.querySelector('#wtales-slider-t1');
    var valY2 = container.querySelector('#wtales-val-y2');

    var polyTop = container.querySelector('#wtales-poly-top');
    var polyBot = container.querySelector('#wtales-poly-bot');

    var lineR2 = container.querySelector('#wtales-line-r2');
    var lblR2  = container.querySelector('#wtales-lbl-r2');

    var lineT1 = container.querySelector('#wtales-line-t1');
    var lineT2 = container.querySelector('#wtales-line-t2');
    var lblT1  = container.querySelector('#wtales-lbl-t1');
    var lblT2  = container.querySelector('#wtales-lbl-t2');

    var segAB  = container.querySelector('#wtales-seg-AB');
    var segBC  = container.querySelector('#wtales-seg-BC');
    var segDE  = container.querySelector('#wtales-seg-DE');
    var segEF  = container.querySelector('#wtales-seg-EF');

    var ptA = container.querySelector('#wtales-pt-A');
    var ptB = container.querySelector('#wtales-pt-B');
    var ptC = container.querySelector('#wtales-pt-C');
    var ptD = container.querySelector('#wtales-pt-D');
    var ptE = container.querySelector('#wtales-pt-E');
    var ptF = container.querySelector('#wtales-pt-F');

    var lblA = container.querySelector('#wtales-lbl-A');
    var lblB = container.querySelector('#wtales-lbl-B');
    var lblC = container.querySelector('#wtales-lbl-C');
    var lblD = container.querySelector('#wtales-lbl-D');
    var lblE = container.querySelector('#wtales-lbl-E');
    var lblF = container.querySelector('#wtales-lbl-F');

    var valAB = container.querySelector('#wtales-val-AB');
    var valBC = container.querySelector('#wtales-val-BC');
    var valDE = container.querySelector('#wtales-val-DE');
    var valEF = container.querySelector('#wtales-val-EF');

    var ratio1El = container.querySelector('#wtales-ratio1');
    var ratio2El = container.querySelector('#wtales-ratio2');

    function update() {
      var y2 = state.y2;
      var t1_botX = state.t1_botX;

      if (valY2) valY2.textContent = 'Y = ' + y2;

      // Coordenadas dos pontos de interseção em t1 (A, B, C)
      var Ax = calcX(state.t1_topX, t1_botX, y1), Ay = y1;
      var Bx = calcX(state.t1_topX, t1_botX, y2), By = y2;
      var Cx = calcX(state.t1_topX, t1_botX, y3), Cy = y3;

      // Coordenadas dos pontos de interseção em t2 (D, E, F)
      var Dx = calcX(state.t2_topX, state.t2_botX, y1), Dy = y1;
      var Ex = calcX(state.t2_topX, state.t2_botX, y2), Ey = y2;
      var Fx = calcX(state.t2_topX, state.t2_botX, y3), Fy = y3;

      // Atualizar a linha r2
      if (lineR2) { lineR2.setAttribute('y1', y2); lineR2.setAttribute('y2', y2); }
      if (lblR2)  { lblR2.setAttribute('y', y2 + 4); }

      // Atualizar as retas transversais estendidas
      var extT1_topX = calcX(state.t1_topX, t1_botX, 20);
      var extT1_botX = calcX(state.t1_topX, t1_botX, 250);
      if (lineT1) {
        lineT1.setAttribute('x1', extT1_topX); lineT1.setAttribute('y1', 20);
        lineT1.setAttribute('x2', extT1_botX); lineT1.setAttribute('y2', 250);
      }
      if (lblT1) { lblT1.setAttribute('x', extT1_topX - 6); lblT1.setAttribute('y', 15); }

      var extT2_topX = calcX(state.t2_topX, state.t2_botX, 20);
      var extT2_botX = calcX(state.t2_topX, state.t2_botX, 250);
      if (lineT2) {
        lineT2.setAttribute('x1', extT2_topX); lineT2.setAttribute('y1', 20);
        lineT2.setAttribute('x2', extT2_botX); lineT2.setAttribute('y2', 250);
      }
      if (lblT2) { lblT2.setAttribute('x', extT2_topX - 6); lblT2.setAttribute('y', 15); }

      // Polígonos de preenchimento
      if (polyTop) polyTop.setAttribute('points', Ax+','+Ay+' '+Dx+','+Dy+' '+Ex+','+Ey+' '+Bx+','+By);
      if (polyBot) polyBot.setAttribute('points', Bx+','+By+' '+Ex+','+Ey+' '+Fx+','+Fy+' '+Cx+','+Cy);

      // Segmentos destacados
      if (segAB) { segAB.setAttribute('x1', Ax); segAB.setAttribute('y1', Ay); segAB.setAttribute('x2', Bx); segAB.setAttribute('y2', By); }
      if (segBC) { segBC.setAttribute('x1', Bx); segBC.setAttribute('y1', By); segBC.setAttribute('x2', Cx); segBC.setAttribute('y2', Cy); }

      if (segDE) { segDE.setAttribute('x1', Dx); segDE.setAttribute('y1', Dy); segDE.setAttribute('x2', Ex); segDE.setAttribute('y2', Ey); }
      if (segEF) { segEF.setAttribute('x1', Ex); segEF.setAttribute('y1', Ey); segEF.setAttribute('x2', Fx); segEF.setAttribute('y2', Fy); }

      // Pontos
      if (ptA) { ptA.setAttribute('cx', Ax); ptA.setAttribute('cy', Ay); }
      if (ptB) { ptB.setAttribute('cx', Bx); ptB.setAttribute('cy', By); }
      if (ptC) { ptC.setAttribute('cx', Cx); ptC.setAttribute('cy', Cy); }

      if (ptD) { ptD.setAttribute('cx', Dx); ptD.setAttribute('cy', Dy); }
      if (ptE) { ptE.setAttribute('cx', Ex); ptE.setAttribute('cy', Ey); }
      if (ptF) { ptF.setAttribute('cx', Fx); ptF.setAttribute('cy', Fy); }

      // Rótulos dos pontos posicionados para fora
      if (lblA) { lblA.setAttribute('x', Ax - 16); lblA.setAttribute('y', Ay + 4); }
      if (lblB) { lblB.setAttribute('x', Bx - 16); lblB.setAttribute('y', By + 4); }
      if (lblC) { lblC.setAttribute('x', Cx - 16); lblC.setAttribute('y', Cy + 4); }

      if (lblD) { lblD.setAttribute('x', Dx + 8); lblD.setAttribute('y', Dy + 4); }
      if (lblE) { lblE.setAttribute('x', Ex + 8); lblE.setAttribute('y', Ey + 4); }
      if (lblF) { lblF.setAttribute('x', Fx + 8); lblF.setAttribute('y', Fy + 4); }

      // Cálculo das distâncias reais (em unidades proporcionais amigáveis, ex: 10px = 1 unidade)
      var uScale = 20;
      var lenAB = dist(Ax, Ay, Bx, By) / uScale;
      var lenBC = dist(Bx, By, Cx, Cy) / uScale;
      var lenDE = dist(Dx, Dy, Ex, Ey) / uScale;
      var lenEF = dist(Ex, Ey, Fx, Fy) / uScale;

      var r1 = lenAB / lenBC;
      var r2 = lenDE / lenEF;

      if (valAB) valAB.textContent = lenAB.toFixed(2);
      if (valBC) valBC.textContent = lenBC.toFixed(2);
      if (valDE) valDE.textContent = lenDE.toFixed(2);
      if (valEF) valEF.textContent = lenEF.toFixed(2);

      if (ratio1El) ratio1El.textContent = r1.toFixed(2);
      if (ratio2El) ratio2El.textContent = r2.toFixed(2);
    }

    if (sliderY2) {
      sliderY2.addEventListener('input', function (e) {
        state.y2 = parseInt(e.target.value, 10);
        update();
      });
    }

    if (sliderT1) {
      sliderT1.addEventListener('input', function (e) {
        state.t1_botX = parseInt(e.target.value, 10);
        update();
      });
    }

    update();
  };
})();
