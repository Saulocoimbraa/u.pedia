/**
 * js/widgets/widgetAnguloComplementar.js
 * Widget interativo: Ângulos Complementares
 * Expõe window.initWidgetAngulocomplementar(containerId)
 */
window.initWidgetAngulocomplementar = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  // ─── Estilos escopados ────────────────────────────────────────────────────
  if (!document.getElementById('wcmp-styles')) {
    var style = document.createElement('style');
    style.id = 'wcmp-styles';
    style.textContent = [
      /* Layout geral */
      '.wcmp{font-family:"Inter",sans-serif;color:#1e293b;background:#f8fafc;border-radius:12px;overflow:hidden;}',

      /* SVG — ocupa toda a largura */
      '.wcmp-canvas{background:#fff;border-bottom:1px solid #e2e8f0;}',
      '.wcmp-canvas svg{display:block;width:100%;height:380px;}',

      /* Status */
      '.wcmp-status{display:flex;align-items:center;gap:10px;padding:10px 20px;background:#eff6ff;border-bottom:1px solid #e2e8f0;}',
      '.wcmp-status-dot{width:8px;height:8px;border-radius:50%;background:#3b82f6;flex-shrink:0;}',
      '.wcmp-status-txt{font-size:13px;font-weight:600;color:#1e3a8a;margin:0;}',

      /* Controles — slider + botões em linha */
      '.wcmp-controls{display:grid;grid-template-columns:1fr auto;gap:0;background:#0f172a;}',

      '.wcmp-slider-panel{padding:20px 24px;}',
      '.wcmp-angle-row{display:flex;gap:24px;margin-bottom:14px;}',
      '.wcmp-angle-chip{display:flex;flex-direction:column;align-items:center;background:rgba(255,255,255,0.06);border-radius:8px;padding:8px 18px;min-width:80px;}',
      '.wcmp-chip-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;opacity:.6;}',
      '.wcmp-chip-val{font-size:22px;font-weight:800;font-variant-numeric:tabular-nums;}',
      '.wcmp-chip-alpha .wcmp-chip-val{color:#34d399;}',
      '.wcmp-chip-beta  .wcmp-chip-val{color:#60a5fa;}',
      '.wcmp-eq{font-size:11px;text-align:center;color:rgba(255,255,255,.4);font-family:"Courier New",monospace;margin-bottom:8px;}',
      '.wcmp-slider{width:100%;cursor:pointer;accent-color:#34d399;}',

      /* Painel de botões */
      '.wcmp-btn-panel{display:flex;flex-direction:column;gap:0;border-left:1px solid rgba(255,255,255,0.08);}',
      '.wcmp-btn{',
        'padding:0 22px;',
        'border:none;border-bottom:1px solid rgba(255,255,255,0.07);',
        'background:transparent;',
        'font-size:12px;font-weight:600;cursor:pointer;transition:.18s;',
        'color:rgba(255,255,255,.55);text-align:left;',
        'min-height:52px;',
      '}',
      '.wcmp-btn:last-child{border-bottom:none;}',
      '.wcmp-btn:hover{background:rgba(255,255,255,.06);color:#fff;}',
      '.wcmp-btn.wcmp-active{background:#2563eb;color:#fff;}',
      '',

      /* Cards de informação */
      '.wcmp-info{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding:20px;}',
      '.wcmp-card{border-radius:10px;padding:18px 20px;}',
      '.wcmp-card-h{font-size:13px;font-weight:700;margin:0 0 8px 0;}',
      '.wcmp-card-p{font-size:13px;line-height:1.6;margin:0;color:inherit;opacity:.85;}',
      '.wcmp-c1{background:#0e7490;color:#fff;grid-column:span 2;}',
      '.wcmp-c2{background:#fff;border:1px solid #e2e8f0;color:#475569;}',
      '.wcmp-c2 .wcmp-card-h{color:#1e293b;}',

      /* Responsivo */
      '@media(max-width:720px){',
        '.wcmp-controls{grid-template-columns:1fr;}',
        '.wcmp-btn-panel{flex-direction:row;flex-wrap:wrap;border-left:none;border-top:1px solid rgba(255,255,255,0.08);}',
        '.wcmp-btn{flex:1 1 calc(50% - 1px);min-height:44px;border-bottom:none;border-right:1px solid rgba(255,255,255,0.07);}',
        '.wcmp-info{grid-template-columns:1fr;}',
        '.wcmp-c1{grid-column:span 1;}',
      '}',
      '@media(max-width:450px){.wcmp-canvas svg{height:240px;}}',
    ].join('');
    document.head.appendChild(style);
  }

  // ─── HTML ─────────────────────────────────────────────────────────────────
  container.innerHTML = [
    '<div class="wcmp">',

      /* — SVG — */
      '<div class="wcmp-canvas">',
        '<svg id="wcmp-svg" viewBox="0 0 800 380">',
          '<defs>',
            '<pattern id="wcmp-grid" width="40" height="40" patternUnits="userSpaceOnUse">',
              '<path d="M40 0L0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="1"/>',
            '</pattern>',
          '</defs>',
          '<rect width="100%" height="100%" fill="url(#wcmp-grid)"/>',
          /* Eixo horizontal */
          '<line x1="140" y1="310" x2="660" y2="310" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/>',
          /* Eixo vertical */
          '<line x1="140" y1="310" x2="140" y2="40"  stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/>',
          /* Marcação ângulo reto */
          '<path d="M140 278 L172 278 L172 310" fill="none" stroke="#94a3b8" stroke-width="1.8"/>',
          '<circle cx="156" cy="294" r="2.5" fill="#94a3b8"/>',
          /* Vértice */
          '<circle cx="140" cy="310" r="6" fill="#475569"/>',
          /* Label eixos */
          '<text x="675" y="315" style="fill:#94a3b8;font-size:18px;font-weight:700;font-style:italic">x</text>',
          '<text x="130" y="32"  style="fill:#94a3b8;font-size:18px;font-weight:700;font-style:italic">y</text>',
          /* Camadas dinâmicas */
          '<g id="wcmp-arcs"></g>',
          '<line id="wcmp-ray" stroke="#f472b6" stroke-width="5" stroke-linecap="round"/>',
          '<g id="wcmp-labels"></g>',
        '</svg>',
      '</div>',

      /* — Status bar — */
      '<div class="wcmp-status">',
        '<div class="wcmp-status-dot"></div>',
        '<p id="wcmp-status" class="wcmp-status-txt">Selecione um preset ou arraste o slider para investigar.</p>',
      '</div>',

      /* — Controles — */
      '<div class="wcmp-controls">',

        '<div class="wcmp-slider-panel">',
          '<div class="wcmp-angle-row">',
            '<div class="wcmp-angle-chip wcmp-chip-alpha">',
              '<span class="wcmp-chip-label" style="color:#34d399">&#945;</span>',
              '<span class="wcmp-chip-val" id="wcmp-val-alpha">60&deg;</span>',
            '</div>',
            '<div class="wcmp-angle-chip wcmp-chip-beta">',
              '<span class="wcmp-chip-label" style="color:#60a5fa">&#946;</span>',
              '<span class="wcmp-chip-val" id="wcmp-val-beta">30&deg;</span>',
            '</div>',
          '</div>',
          '<div class="wcmp-eq" style="color:rgba(255,255,255,.4)">&#945; + &#946; = 90&deg;</div>',
          '<input type="range" id="wcmp-slider" min="5" max="85" value="60" class="wcmp-slider">',
        '</div>',

        '<div class="wcmp-btn-panel">',
          '<button class="wcmp-btn" data-val="45">Bissetriz do Quadrante</button>',
          '<button class="wcmp-btn" data-val="60">Esquadro 60° / 30°</button>',
          '<button class="wcmp-btn" data-val="free">Ajuste Livre ↔</button>',
        '</div>',

      '</div>',

      /* — Cards informativos — */
      '<div class="wcmp-info">',

        '<div class="wcmp-card wcmp-c1">',
          '<p class="wcmp-card-h">Trigonometria dos Complementares</p>',
          '<p class="wcmp-card-p">Por definição, <strong>sen(α) = cos(β)</strong> e <strong>tan(α) = cot(β)</strong>. É exatamente por isso que a função co-seno tem o prefixo "co": ela é o <em>complemento</em> do seno.</p>',
        '</div>',

        '<div class="wcmp-card wcmp-c2">',
          '<p class="wcmp-card-h">No Triângulo Retângulo</p>',
          '<p class="wcmp-card-p">Os dois ângulos agudos de qualquer triângulo retângulo são sempre complementares — o terceiro ângulo consome os 90° restantes da soma interna de 180°.</p>',
        '</div>',

      '</div>',

    '</div>',
  ].join('');

  // ─── Lógica ───────────────────────────────────────────────────────────────
  var slider   = container.querySelector('#wcmp-slider');
  var valAlpha = container.querySelector('#wcmp-val-alpha');
  var valBeta  = container.querySelector('#wcmp-val-beta');
  var ray      = container.querySelector('#wcmp-ray');
  var arcsG    = container.querySelector('#wcmp-arcs');
  var labelsG  = container.querySelector('#wcmp-labels');
  var statusEl = container.querySelector('#wcmp-status');
  var btns     = container.querySelectorAll('.wcmp-btn');
  var SVG_NS   = 'http://www.w3.org/2000/svg';
  var DEG      = '\u00B0';
  var CX = 140, CY = 310; // vértice no SVG

  function arc(cx, cy, r, a0, a1, color) {
    var toRad = function(d) { return d * Math.PI / 180; };
    var x1 = cx + r * Math.cos(toRad(a0)), y1 = cy - r * Math.sin(toRad(a0));
    var x2 = cx + r * Math.cos(toRad(a1)), y2 = cy - r * Math.sin(toRad(a1));
    var p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', 'M'+cx+' '+cy+' L'+x1+' '+y1+' A'+r+' '+r+' 0 0 0 '+x2+' '+y2+' Z');
    p.setAttribute('fill', color); p.setAttribute('fill-opacity', '0.15');
    p.setAttribute('stroke', color); p.setAttribute('stroke-width', '2');
    arcsG.appendChild(p);
  }

  function label(cx, cy, r, mid, text, color) {
    var rad = mid * Math.PI / 180;
    var t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', cx + r * Math.cos(rad));
    t.setAttribute('y', cy - r * Math.sin(rad));
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('dominant-baseline', 'middle');
    t.style.cssText = 'font-size:18px;font-weight:800;fill:'+color;
    t.textContent = text;
    labelsG.appendChild(t);
  }

  function update(freeMode) {
    var alpha = parseInt(slider.value);
    var beta  = 90 - alpha;

    valAlpha.textContent = alpha + DEG;
    valBeta.textContent  = beta  + DEG;

    /* Raio dinâmico */
    var rad = alpha * Math.PI / 180;
    var len = 520;
    ray.setAttribute('x1', CX); ray.setAttribute('y1', CY);
    ray.setAttribute('x2', CX + len * Math.cos(rad));
    ray.setAttribute('y2', CY - len * Math.sin(rad));

    arcsG.innerHTML = ''; labelsG.innerHTML = '';
    arc(CX, CY, 120, 0,     alpha, '#34d399');
    arc(CX, CY,  88, alpha, 90,    '#60a5fa');
    label(CX, CY, 152, alpha / 2,          alpha + DEG, '#059669');
    label(CX, CY, 112, alpha + beta / 2,   beta  + DEG, '#2563eb');

    /* Status */
    if (freeMode) {
      statusEl.textContent = 'Ajuste livre: ' + alpha + DEG + ' + ' + beta + DEG + ' = 90' + DEG + '. Observe que sen(' + alpha + DEG + ') = cos(' + beta + DEG + ').';
    }
  }

  /* Botões */
  btns.forEach(function(b) {
    b.addEventListener('click', function() {
      btns.forEach(function(x){ x.classList.remove('wcmp-active'); });
      b.classList.add('wcmp-active');
      var val = b.getAttribute('data-val');
      if (val === 'free') {
        statusEl.textContent = 'Modo investigação — arraste o slider para explorar.';
        update(false);
      } else {
        slider.value = val;
        var alpha = parseInt(val), beta = 90 - alpha;
        statusEl.textContent = b.textContent.replace(/\s+/g,' ').trim() + ': ' + alpha + DEG + ' e ' + beta + DEG + ' — complementares perfeitos.';
        update(false);
      }
    });
  });

  slider.addEventListener('input', function() {
    /* Desativa todos os presets ao mover livremente */
    btns.forEach(function(b) {
      if (b.getAttribute('data-val') !== 'free') b.classList.remove('wcmp-active');
    });
    container.querySelector('[data-val="free"]').classList.add('wcmp-active');
    update(true);
  });

  /* Estado inicial */
  container.querySelector('[data-val="60"]').classList.add('wcmp-active');
  statusEl.textContent = 'Esquadro 60° / 30°: ângulos complementares do triângulo equilátero bissetado.';
  update(false);
};
