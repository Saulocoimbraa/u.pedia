/**
 * js/widgets/widgetTrigonometria.js
 * Círculo Trigonométrico Unitário (r = 1) — construção geométrica clássica:
 *
 *  · Cosseno → segmento horizontal do centro ao pé de P  (AZUL)
 *  · Seno    → segmento vertical do pé de P até P        (VERDE)
 *  · Raio    → segmento do centro a P                    (ÍNDIGO)
 *  · Tangente→ reta vertical tangente ao círculo em (1,0)
 *              segmento de (1,0) a T, onde T = extensão do raio OP (LARANJA)
 *
 * Cores nítidas e distintas; rótulos inline; atualização 60fps sem rebuild DOM.
 */
(function () {
  window.initWidgetTrigonometria = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { angulo: 45 };

    // Centro e raio do círculo unitário no SVG (360 × 320)
    var cx = 165, cy = 160, R = 105;
    // x-SVG da reta tangente x=1 em coordenadas unitárias → cx + R
    var tx = cx + R; // = 270

    // ── Construção inicial do HTML (DOM estático) ──────────────────────────
    container.innerHTML =
      '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:1.2rem;text-align:center;font-family:Inter,sans-serif;max-width:440px;margin:0 auto;color:#1e293b;">' +
        '<h3 style="margin:0 0 0.7rem;font-size:1.05rem;">Círculo Trigonométrico Unitário</h3>' +

        '<div style="margin-bottom:0.8rem;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;max-width:340px;margin:0 auto 0.35rem;">' +
            '<span style="font-weight:600;font-size:0.9rem;">Ângulo θ:</span>' +
            '<span id="wt-val" style="font-weight:800;font-size:1.2rem;color:#4f46e5;background:#ede9fe;padding:0.15rem 0.7rem;border-radius:20px;">45°</span>' +
          '</div>' +
          '<input type="range" id="wt-slider" min="0" max="359" value="45" step="1" style="width:100%;max-width:340px;accent-color:#4f46e5;cursor:pointer;">' +
        '</div>' +

        '<div style="display:flex;justify-content:center;margin-bottom:0.8rem;">' +
          '<svg id="wt-svg" width="360" height="320" viewBox="0 0 360 320" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">' +

            // Grade
            '<line x1="25" y1="160" x2="335" y2="160" stroke="#e2e8f0" stroke-width="1.2"/>' +
            '<line x1="165" y1="18"  x2="165" y2="302" stroke="#e2e8f0" stroke-width="1.2"/>' +
            // Rótulos eixos
            '<text x="330" y="155" font-size="11" fill="#94a3b8" font-weight="bold">X</text>' +
            '<text x="170" y="24"  font-size="11" fill="#94a3b8" font-weight="bold">Y</text>' +
            // Marcas ±1 no eixo X
            '<line x1="270" y1="156" x2="270" y2="164" stroke="#cbd5e1" stroke-width="1.5"/>' +
            '<text x="268" y="178" font-size="9" fill="#94a3b8" text-anchor="middle">1</text>' +
            '<line x1="60"  y1="156" x2="60"  y2="164" stroke="#cbd5e1" stroke-width="1.5"/>' +
            '<text x="60"  y="178" font-size="9" fill="#94a3b8" text-anchor="middle">-1</text>' +

            // Reta tangente ao círculo em (1,0) — linha vertical laranja tracejada
            '<line id="wt-tline" x1="270" y1="22" x2="270" y2="298" stroke="#f97316" stroke-width="1.8" stroke-dasharray="5,3" opacity="0.55"/>' +
            '<text x="274" y="20" font-size="9" fill="#f97316" font-weight="bold">x=1</text>' +

            // Círculo unitário
            '<circle cx="165" cy="160" r="105" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="5,4"/>' +

            // Triângulo interno (fundo)
            '<polygon id="wt-tri" points="165,160 250,75 250,160" fill="#ede9fe" fill-opacity="0.4" stroke="none"/>' +

            // COSSENO — AZUL (#2563eb): centro → pé de P
            '<line id="wt-cos" x1="165" y1="160" x2="250" y2="160" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round"/>' +
            '<text id="wt-lcos" x="207" y="175" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">cos θ</text>' +

            // SENO — VERDE (#16a34a): pé de P → P
            '<line id="wt-sin" x1="250" y1="160" x2="250" y2="75" stroke="#16a34a" stroke-width="4.5" stroke-linecap="round"/>' +
            '<text id="wt-lsin" x="265" y="118" font-size="10" font-weight="bold" fill="#16a34a">sen θ</text>' +

            // RAIO — ÍNDIGO (#4f46e5): centro → P
            '<line id="wt-hyp" x1="165" y1="160" x2="250" y2="75" stroke="#4f46e5" stroke-width="3" stroke-linecap="round"/>' +
            '<text id="wt-lhyp" x="195" y="108" font-size="10" font-weight="bold" fill="#4f46e5">r=1</text>' +

            // TANGENTE — LARANJA (#f97316): ponto (1,0) → T na reta x=1
            // T é a extensão da linha OP até x = 270 (SVG)
            '<line id="wt-tan" x1="270" y1="160" x2="270" y2="75" stroke="#f97316" stroke-width="4.5" stroke-linecap="round"/>' +
            '<text id="wt-ltan" x="285" y="118" font-size="10" font-weight="bold" fill="#f97316">tg θ</text>' +
            // Linha auxiliar do raio estendido até a reta tangente
            '<line id="wt-ext" x1="250" y1="75" x2="270" y2="75" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>' +

            // Ponto T na reta tangente
            '<circle id="wt-ptT" cx="270" cy="75" r="5" fill="#f97316" stroke="#fff" stroke-width="2"/>' +
            // Ponto (1,0)
            '<circle cx="270" cy="160" r="4" fill="#f97316" opacity="0.6"/>' +
            // Ponto P na circunferência
            '<circle id="wt-ptP" cx="250" cy="75" r="7" fill="#4f46e5" stroke="#fff" stroke-width="2.5"/>' +
            '<text id="wt-lblP" x="258" y="68" font-size="10" font-weight="bold" fill="#4338ca">P</text>' +
            // Ponto no pé (cos, 0)
            '<circle id="wt-ptFoot" cx="250" cy="160" r="4" fill="#2563eb" opacity="0.7"/>' +

          '</svg>' +
        '</div>' +

        // Painel de valores — cores correspondentes
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.4rem;padding:0.7rem;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;font-size:0.85rem;">' +
          '<div><strong style="color:#4f46e5;">Raio (r):</strong> <span id="wt-vhyp">1.00</span></div>' +
          '<div><strong style="color:#2563eb;">cos θ:</strong> <span id="wt-vcos">0.71</span></div>' +
          '<div><strong style="color:#16a34a;">sen θ:</strong> <span id="wt-vsin">0.71</span></div>' +
          '<div><strong style="color:#f97316;">tg θ:</strong> <span id="wt-vtan">1.00</span></div>' +
        '</div>' +
      '</div>';

    // ── Referências DOM ────────────────────────────────────────────────────
    var slider   = container.querySelector('#wt-slider');
    var valEl    = container.querySelector('#wt-val');
    var triEl    = container.querySelector('#wt-tri');
    var cosEl    = container.querySelector('#wt-cos');
    var sinEl    = container.querySelector('#wt-sin');
    var hypEl    = container.querySelector('#wt-hyp');
    var tanEl    = container.querySelector('#wt-tan');
    var extEl    = container.querySelector('#wt-ext');
    var ptP      = container.querySelector('#wt-ptP');
    var ptT      = container.querySelector('#wt-ptT');
    var ptFoot   = container.querySelector('#wt-ptFoot');
    var lblP     = container.querySelector('#wt-lblP');
    var lcos     = container.querySelector('#wt-lcos');
    var lsin     = container.querySelector('#wt-lsin');
    var lhyp     = container.querySelector('#wt-lhyp');
    var ltan     = container.querySelector('#wt-ltan');
    var vcos     = container.querySelector('#wt-vcos');
    var vsin     = container.querySelector('#wt-vsin');
    var vtan     = container.querySelector('#wt-vtan');

    // ── Atualização (60fps, sem recriar DOM) ──────────────────────────────
    function update() {
      var deg  = state.angulo;
      var rad  = deg * Math.PI / 180;
      var cosV = Math.cos(rad);
      var sinV = Math.sin(rad);

      // Ponto P no círculo
      var px = cx + R * cosV;
      var py = cy - R * sinV;

      // Pé (projeção horizontal de P no eixo X)
      var footX = px, footY = cy;

      // Ponto T: extensão do raio OP até a reta tangente x = tx (= cx+R = 270)
      // Raio OP: paramétrico (cx + t*cosV, cy - t*sinV). Em x = tx: t = (tx-cx)/cosV = R/cosV
      // y_T = cy - R * sinV/cosV = cy - R*tanV
      var isUndef = (Math.abs(cosV) < 0.01); // θ ≈ 90° ou 270°
      var tanV = isUndef ? null : sinV / cosV;
      var Ty = isUndef ? null : cy - R * tanV;
      // Clipar Ty dentro do SVG
      var TyClip = Ty !== null ? Math.max(18, Math.min(302, Ty)) : null;

      // ── Atualizar elementos ────────────────────────────────────────────
      if (valEl) valEl.textContent = deg + '°';

      if (triEl) triEl.setAttribute('points', cx+','+cy+' '+px+','+py+' '+px+','+cy);

      // Cosseno
      if (cosEl) { cosEl.setAttribute('x1',cx); cosEl.setAttribute('y1',cy); cosEl.setAttribute('x2',px); cosEl.setAttribute('y2',cy); }
      if (lcos)  { lcos.setAttribute('x', (cx+px)/2); lcos.setAttribute('y', cy + (sinV >= 0 ? 14 : -6)); }

      // Seno
      if (sinEl) { sinEl.setAttribute('x1',px); sinEl.setAttribute('y1',cy); sinEl.setAttribute('x2',px); sinEl.setAttribute('y2',py); }
      var sinLblX = px + (cosV >= 0 ? 8 : -42);
      if (lsin)  { lsin.setAttribute('x', sinLblX); lsin.setAttribute('y', (cy+py)/2 + 4); }

      // Raio
      if (hypEl) { hypEl.setAttribute('x1',cx); hypEl.setAttribute('y1',cy); hypEl.setAttribute('x2',px); hypEl.setAttribute('y2',py); }
      if (lhyp)  { lhyp.setAttribute('x', (cx+px)/2 + (sinV>=0?-22:6)); lhyp.setAttribute('y', (cy+py)/2-5); }

      // Tangente: segmento (tx, cy) → (tx, Ty)
      if (!isUndef && TyClip !== null) {
        if (tanEl)  { tanEl.setAttribute('x1',tx); tanEl.setAttribute('y1',cy); tanEl.setAttribute('x2',tx); tanEl.setAttribute('y2',TyClip); tanEl.setAttribute('opacity','1'); }
        if (extEl)  { extEl.setAttribute('x1',px); extEl.setAttribute('y1',py); extEl.setAttribute('x2',tx); extEl.setAttribute('y2',TyClip); extEl.setAttribute('opacity','1'); }
        if (ptT)    { ptT.setAttribute('cx',tx); ptT.setAttribute('cy',TyClip); ptT.setAttribute('opacity','1'); }
        if (ltan)   { ltan.setAttribute('x', tx+7); ltan.setAttribute('y', (cy+TyClip)/2 + 4); ltan.setAttribute('opacity','1'); }
      } else {
        if (tanEl)  tanEl.setAttribute('opacity','0');
        if (extEl)  extEl.setAttribute('opacity','0');
        if (ptT)    ptT.setAttribute('opacity','0');
        if (ltan)   ltan.setAttribute('opacity','0');
      }

      // Pontos
      if (ptP)    { ptP.setAttribute('cx',px); ptP.setAttribute('cy',py); }
      if (ptFoot) { ptFoot.setAttribute('cx',footX); ptFoot.setAttribute('cy',footY); }
      var offX = cosV >= 0 ? 9 : -18;
      var offY = sinV >= 0 ? -10 : 16;
      if (lblP)   { lblP.setAttribute('x', Math.max(8,Math.min(340,px+offX))); lblP.setAttribute('y', Math.max(20,Math.min(310,py+offY))); }

      // Valores
      if (vcos) vcos.textContent = cosV.toFixed(2);
      if (vsin) vsin.textContent = sinV.toFixed(2);
      if (vtan) vtan.textContent = isUndef ? '∞' : tanV.toFixed(2);
    }

    if (slider) {
      slider.addEventListener('input', function (e) {
        state.angulo = parseInt(e.target.value, 10);
        update();
      });
    }

    update();
  };
})();
