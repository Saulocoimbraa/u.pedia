/**
 * js/widgets/widgetSimetria.js
 * Widget interativo de Transformações Geométricas:
 * - Três modos: Translação, Reflexão, Rotação.
 * - Controles deslizantes específicos por modo.
 * - Polígono original (azul) e transformado (laranja) desenhados no SVG.
 * - 60fps via rAF.
 */
(function () {
  window.initWidgetSimetria = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    // Polígono-base: hexágono regular centrado em (0,0), raio 50
    var BASE_VERTS = (function () {
      var verts = [];
      for (var i = 0; i < 6; i++) {
        var a = (Math.PI / 3) * i - Math.PI / 6;
        verts.push({ x: 50 * Math.cos(a), y: 50 * Math.sin(a) });
      }
      return verts;
    })();

    var W = 340, H = 260;
    var OX = 170, OY = 130; // centro do canvas SVG

    var state = {
      mode: 'translacao',
      tx: 70, ty: 0,       // translação
      refAxis: 'x',        // reflexão: 'x' ou 'y'
      rotDeg: 60           // rotação em graus
    };

    // ─── Helpers ─────────────────────────────────────────────────────────────
    function toSVG(v) { return { x: OX + v.x, y: OY - v.y }; }

    function polyStr(verts) {
      return verts.map(function (v) { var s = toSVG(v); return s.x + ',' + s.y; }).join(' ');
    }

    function translateVerts(verts, tx, ty) {
      return verts.map(function (v) { return { x: v.x + tx, y: v.y + ty }; });
    }

    function reflectVerts(verts, axis) {
      return verts.map(function (v) {
        return axis === 'x' ? { x: v.x, y: -v.y } : { x: -v.x, y: v.y };
      });
    }

    function rotateVerts(verts, deg) {
      var rad = deg * Math.PI / 180;
      var cos = Math.cos(rad), sin = Math.sin(rad);
      return verts.map(function (v) {
        return { x: v.x * cos - v.y * sin, y: v.x * sin + v.y * cos };
      });
    }

    // ─── Build HTML completo ──────────────────────────────────────────────────
    function buildHTML() {
      return (
        '<div style="background:var(--card-bg,#fff);border:1px solid var(--border-color,#e2e8f0);border-radius:14px;padding:1.2rem 1rem;color:var(--text-color,#1e293b);font-family:var(--font-family,sans-serif);text-align:center;max-width:420px;margin:0 auto;">' +
          '<h3 style="margin:0 0 0.85rem;font-size:1rem;">Transformações Geométricas</h3>' +

          // Botões de modo
          '<div style="display:flex;gap:0.5rem;justify-content:center;margin-bottom:0.9rem;flex-wrap:wrap;">' +
            '<button id="w-sim-btn-translacao" style="padding:0.3rem 0.85rem;border-radius:20px;border:2px solid #3b82f6;background:#3b82f6;color:#fff;font-weight:700;font-size:0.82rem;cursor:pointer;">↗ Translação</button>' +
            '<button id="w-sim-btn-reflexao"   style="padding:0.3rem 0.85rem;border-radius:20px;border:2px solid #cbd5e1;background:#f8fafc;color:#475569;font-weight:700;font-size:0.82rem;cursor:pointer;">⟺ Reflexão</button>' +
            '<button id="w-sim-btn-rotacao"    style="padding:0.3rem 0.85rem;border-radius:20px;border:2px solid #cbd5e1;background:#f8fafc;color:#475569;font-weight:700;font-size:0.82rem;cursor:pointer;">↻ Rotação</button>' +
          '</div>' +

          // Painel de controles (renderizado dinamicamente)
          '<div id="w-sim-controls" style="margin-bottom:0.85rem;"></div>' +

          // SVG
          '<div style="display:flex;justify-content:center;">' +
            '<svg id="w-sim-svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">' +
              // Eixos
              '<line x1="20" y1="' + OY + '" x2="' + (W-20) + '" y2="' + OY + '" stroke="#cbd5e1" stroke-width="1.2"/>' +
              '<line x1="' + OX + '" y1="15" x2="' + OX + '" y2="' + (H-15) + '" stroke="#cbd5e1" stroke-width="1.2"/>' +
              // Eixo de reflexão (visível somente no modo reflexão)
              '<line id="w-sim-ref-axis" x1="20" y1="' + OY + '" x2="' + (W-20) + '" y2="' + OY + '" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="6,4" opacity="0"/>' +
              // Polígono original
              '<polygon id="w-sim-orig" points="' + polyStr(BASE_VERTS) + '" fill="#bfdbfe" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.2"/>' +
              // Polígono transformado
              '<polygon id="w-sim-trans" points="' + polyStr(BASE_VERTS) + '" fill="#fed7aa" fill-opacity="0.6" stroke="#f97316" stroke-width="2.2" stroke-dasharray="5,3"/>' +
              // Legenda
              '<rect x="12" y="' + (H-38) + '" width="10" height="10" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>' +
              '<text x="26" y="' + (H-29) + '" font-family="Inter,sans-serif" font-size="10" fill="#2563eb" font-weight="bold">Original</text>' +
              '<rect x="90" y="' + (H-38) + '" width="10" height="10" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>' +
              '<text x="104" y="' + (H-29) + '" font-family="Inter,sans-serif" font-size="10" fill="#f97316" font-weight="bold">Transformado</text>' +
            '</svg>' +
          '</div>' +
        '</div>'
      );
    }

    // ─── Controles por modo ───────────────────────────────────────────────────
    function buildControls() {
      var el = document.getElementById('w-sim-controls');
      if (!el) return;
      if (state.mode === 'translacao') {
        el.innerHTML =
          '<div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center;">' +
            '<label style="font-size:0.82rem;font-weight:600;">Δx = <span id="w-sim-tx-val">' + state.tx + '</span></label>' +
            '<input type="range" id="w-sim-tx" min="-110" max="110" value="' + state.tx + '" step="1" style="width:260px;accent-color:#3b82f6;">' +
            '<label style="font-size:0.82rem;font-weight:600;">Δy = <span id="w-sim-ty-val">' + state.ty + '</span></label>' +
            '<input type="range" id="w-sim-ty" min="-90" max="90" value="' + state.ty + '" step="1" style="width:260px;accent-color:#3b82f6;">' +
          '</div>';
      } else if (state.mode === 'reflexao') {
        el.innerHTML =
          '<div style="display:flex;flex-direction:column;gap:0.5rem;align-items:center;">' +
            '<p style="margin:0;font-size:0.82rem;font-weight:600;">Eixo de reflexão:</p>' +
            '<div style="display:flex;gap:0.75rem;">' +
              '<label style="display:flex;align-items:center;gap:0.35rem;font-size:0.85rem;font-weight:600;cursor:pointer;">' +
                '<input type="radio" id="w-sim-ref-x" name="w-sim-ref" value="x"' + (state.refAxis === 'x' ? ' checked' : '') + ' style="accent-color:#a855f7;"> Eixo X (horizontal)' +
              '</label>' +
              '<label style="display:flex;align-items:center;gap:0.35rem;font-size:0.85rem;font-weight:600;cursor:pointer;">' +
                '<input type="radio" id="w-sim-ref-y" name="w-sim-ref" value="y"' + (state.refAxis === 'y' ? ' checked' : '') + ' style="accent-color:#a855f7;"> Eixo Y (vertical)' +
              '</label>' +
            '</div>' +
          '</div>';
      } else { // rotacao
        el.innerHTML =
          '<div style="display:flex;flex-direction:column;gap:0.4rem;align-items:center;">' +
            '<label style="font-size:0.82rem;font-weight:600;">Rotação: <span id="w-sim-rot-val">' + state.rotDeg + '</span>°</label>' +
            '<input type="range" id="w-sim-rot" min="0" max="360" value="' + state.rotDeg + '" step="1" style="width:260px;accent-color:#10b981;">' +
          '</div>';
      }
      attachControlEvents();
    }

    function attachControlEvents() {
      var txSlider = document.getElementById('w-sim-tx');
      var tySlider = document.getElementById('w-sim-ty');
      var rotSlider = document.getElementById('w-sim-rot');
      var refX = document.getElementById('w-sim-ref-x');
      var refY = document.getElementById('w-sim-ref-y');

      if (txSlider) txSlider.addEventListener('input', function (e) { state.tx = parseInt(e.target.value); document.getElementById('w-sim-tx-val').textContent = state.tx; updateSVG(); });
      if (tySlider) tySlider.addEventListener('input', function (e) { state.ty = parseInt(e.target.value); document.getElementById('w-sim-ty-val').textContent = state.ty; updateSVG(); });
      if (rotSlider) rotSlider.addEventListener('input', function (e) { state.rotDeg = parseInt(e.target.value); document.getElementById('w-sim-rot-val').textContent = state.rotDeg; updateSVG(); });
      if (refX) refX.addEventListener('change', function () { state.refAxis = 'x'; updateSVG(); });
      if (refY) refY.addEventListener('change', function () { state.refAxis = 'y'; updateSVG(); });
    }

    // ─── Atualização SVG ──────────────────────────────────────────────────────
    function updateSVG() {
      var orig = document.getElementById('w-sim-orig');
      var trans = document.getElementById('w-sim-trans');
      var refAxis = document.getElementById('w-sim-ref-axis');
      if (!orig || !trans) return;

      orig.setAttribute('points', polyStr(BASE_VERTS));

      var transformed;
      if (state.mode === 'translacao') {
        transformed = translateVerts(BASE_VERTS, state.tx, state.ty);
        if (refAxis) refAxis.setAttribute('opacity', '0');
      } else if (state.mode === 'reflexao') {
        transformed = reflectVerts(BASE_VERTS, state.refAxis);
        // Eixo de reflexão
        if (refAxis) {
          refAxis.setAttribute('opacity', '1');
          if (state.refAxis === 'x') {
            refAxis.setAttribute('x1', '20'); refAxis.setAttribute('y1', OY); refAxis.setAttribute('x2', W-20); refAxis.setAttribute('y2', OY);
          } else {
            refAxis.setAttribute('x1', OX); refAxis.setAttribute('y1', '15'); refAxis.setAttribute('x2', OX); refAxis.setAttribute('y2', H-15);
          }
        }
      } else { // rotacao
        transformed = rotateVerts(BASE_VERTS, state.rotDeg);
        if (refAxis) refAxis.setAttribute('opacity', '0');
      }

      trans.setAttribute('points', polyStr(transformed));
    }

    // ─── Botões de modo ───────────────────────────────────────────────────────
    function setMode(mode) {
      state.mode = mode;
      var btns = {
        translacao: document.getElementById('w-sim-btn-translacao'),
        reflexao:   document.getElementById('w-sim-btn-reflexao'),
        rotacao:    document.getElementById('w-sim-btn-rotacao')
      };
      var colors = { translacao: '#3b82f6', reflexao: '#a855f7', rotacao: '#10b981' };
      Object.keys(btns).forEach(function (k) {
        var btn = btns[k];
        if (!btn) return;
        if (k === mode) {
          btn.style.background = colors[k];
          btn.style.borderColor = colors[k];
          btn.style.color = '#fff';
        } else {
          btn.style.background = '#f8fafc';
          btn.style.borderColor = '#cbd5e1';
          btn.style.color = '#475569';
        }
      });
      buildControls();
      updateSVG();
    }

    function attachModeButtons() {
      var bT = document.getElementById('w-sim-btn-translacao');
      var bR = document.getElementById('w-sim-btn-reflexao');
      var bRot = document.getElementById('w-sim-btn-rotacao');
      if (bT) bT.addEventListener('click', function () { setMode('translacao'); });
      if (bR) bR.addEventListener('click', function () { setMode('reflexao'); });
      if (bRot) bRot.addEventListener('click', function () { setMode('rotacao'); });
    }

    // ─── Init ──────────────────────────────────────────────────────────────────
    container.innerHTML = buildHTML();
    attachModeButtons();
    buildControls();
    updateSVG();
  };
})();
