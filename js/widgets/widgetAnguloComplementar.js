/**
 * js/widgets/widgetAnguloComplementar.js
 * Widget interativo: Ângulos Complementares
 * Expõe window.initWidgetAngulocomplementar(containerId)
 */
window.initWidgetAngulocomplementar = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  // ─── HTML do Widget ───────────────────────────────────────────────────────
  container.innerHTML = [
    '<div class="wcmp-wrapper">',

      /* ── Painel visual ── */
      '<div class="wcmp-main-grid">',

        '<div class="wcmp-visual-box">',
          '<div class="wcmp-svg-wrapper">',
            '<svg id="wcmp-svg" viewBox="0 0 800 500" style="width:100%;height:100%;">',
              '<defs>',
                '<pattern id="wcmp-grid" width="40" height="40" patternUnits="userSpaceOnUse">',
                  '<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="1"/>',
                '</pattern>',
              '</defs>',
              '<rect width="100%" height="100%" fill="url(#wcmp-grid)"/>',
              /* Ângulo reto base */
              '<line x1="200" y1="400" x2="650" y2="400" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>',
              '<line x1="200" y1="400" x2="200" y2="50"  stroke="#64748b" stroke-width="4" stroke-linecap="round"/>',
              /* Marcação do ângulo reto */
              '<path d="M 200 365 L 235 365 L 235 400" fill="none" stroke="#cbd5e1" stroke-width="2"/>',
              '<circle cx="217.5" cy="382.5" r="3" fill="#cbd5e1"/>',
              /* Vértice */
              '<circle cx="200" cy="400" r="6" fill="#475569"/>',
              /* Camadas dinâmicas */
              '<g id="wcmp-arcs"></g>',
              '<line id="wcmp-ray" stroke="#f472b6" stroke-width="5" stroke-linecap="round"/>',
              '<g id="wcmp-labels"></g>',
            '</svg>',
          '</div>',
          '<div class="wcmp-status-bar">',
            '<div class="wcmp-status-title">Status da Análise</div>',
            '<p id="wcmp-status" class="wcmp-status-main">Ajuste o controle para alterar os ângulos. A soma é sempre 90°.</p>',
          '</div>',
        '</div>',

        /* ── Sidebar de controles ── */
        '<div class="wcmp-sidebar">',
          '<div class="wcmp-control-dark">',
            '<div class="wcmp-label-row">',
              '<span class="wcmp-lbl-alpha">&#945;: <strong id="wcmp-val-alpha">60&deg;</strong></span>',
            '</div>',
            '<div class="wcmp-label-row" style="margin-top:6px">',
              '<span class="wcmp-lbl-beta">&#946;: <strong id="wcmp-val-beta">30&deg;</strong></span>',
            '</div>',
            '<input type="range" id="wcmp-slider" min="5" max="85" value="60" class="wcmp-slider" style="margin-top:14px">',
            '<div class="wcmp-eq-box">&#945; + &#946; = 90&deg;</div>',
          '</div>',
          '<button class="wcmp-btn" data-val="45">Bissetriz (45° e 45°)</button>',
          '<button class="wcmp-btn" data-val="60">Esquadro Padrão (60° e 30°)</button>',
          '<button class="wcmp-btn" data-val="37">Triângulo 3-4-5 (≈37° e 53°)</button>',
          '<button class="wcmp-btn" data-val="75">Ângulo agudo intenso (75° e 15°)</button>',
        '</div>',

      '</div>',

      /* ── Conteúdo textual ── */
      '<div class="wcmp-info-grid">',

        '<div class="wcmp-card-cyan">',
          '<h3 style="margin:0 0 12px 0">A Natureza dos Ângulos Complementares</h3>',
          '<p>Dois ângulos são <strong>complementares</strong> quando a soma de suas medidas é exatamente 90°. Juntos, eles compõem um ângulo reto — a base da geometria e da trigonometria.</p>',
          '<div class="wcmp-quote">',
            '"Em qualquer triângulo retângulo os dois ângulos agudos são sempre complementares, pois o terceiro ângulo já consome 90° da soma total de 180°."',
          '</div>',
        '</div>',

        '<div class="wcmp-card-white">',
          '<h3 style="margin:0 0 12px 0;color:#1e293b">Propriedades</h3>',
          '<ul style="padding:0;list-style:none;font-size:14px;color:#64748b;line-height:2.1">',
            '<li><strong>Seno/Cosseno:</strong> sen(α) = cos(β)</li>',
            '<li><strong>Tangente:</strong> tan(α) = cot(β)</li>',
            '<li><strong>Independência:</strong> Não precisam ser adjacentes — basta a soma ser 90°.</li>',
          '</ul>',
        '</div>',

        '<div class="wcmp-bottom-row">',
          '<div><h4 class="wcmp-app-title">Construção e Arquitetura</h4><p class="wcmp-app-text">Cortes de 45° em molduras e sancas somam dois ângulos complementares para fechar um canto de 90°.</p></div>',
          '<div><h4 class="wcmp-app-title">Física — Alcance de Projéteis</h4><p class="wcmp-app-text">Dois projéteis lançados com a mesma velocidade em ângulos complementares (ex: 30° e 60°) atingem a mesma distância horizontal.</p></div>',
          '<div><h4 class="wcmp-app-title">Rampas e Inclinações</h4><p class="wcmp-app-text">O ângulo de uma rampa com o chão e o ângulo no topo com a parede vertical são sempre complementares.</p></div>',
        '</div>',

      '</div>',

    '</div>'
  ].join('');

  // ─── Estilos escopados ────────────────────────────────────────────────────
  if (!document.getElementById('wcmp-styles')) {
    var style = document.createElement('style');
    style.id = 'wcmp-styles';
    style.textContent = [
      '.wcmp-wrapper{font-family:"Inter",sans-serif;color:#1e293b;}',
      '.wcmp-main-grid{display:grid;grid-template-columns:1fr 300px;gap:20px;margin-bottom:24px;}',
      '.wcmp-visual-box{background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;}',
      '.wcmp-svg-wrapper{height:460px;width:100%;position:relative;}',
      '.wcmp-status-bar{background:#eff6ff;border-left:4px solid #3b82f6;padding:14px 18px;}',
      '.wcmp-status-title{font-size:10px;font-weight:800;color:#60a5fa;text-transform:uppercase;margin-bottom:3px;}',
      '.wcmp-status-main{font-size:14px;font-weight:700;color:#1e3a8a;margin:0;}',
      '.wcmp-sidebar{display:flex;flex-direction:column;gap:14px;}',
      '.wcmp-control-dark{background:#0f172a;color:#fff;padding:20px;border-radius:10px;}',
      '.wcmp-label-row{display:flex;align-items:center;font-size:15px;font-weight:700;}',
      '.wcmp-lbl-alpha{color:#34d399;}',
      '.wcmp-lbl-beta{color:#60a5fa;}',
      '.wcmp-slider{width:100%;cursor:pointer;}',
      '.wcmp-eq-box{background:#1e293b;color:#34d399;font-family:"Courier New",monospace;font-size:15px;text-align:center;padding:10px;border-radius:6px;margin-top:14px;}',
      '.wcmp-btn{width:100%;text-align:left;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;background:#fff;font-size:13px;font-weight:600;cursor:pointer;transition:0.2s;color:#475569;}',
      '.wcmp-btn:hover{border-color:#94a3b8;color:#0f172a;}',
      '.wcmp-btn.wcmp-active{background:#2563eb!important;color:#fff!important;border-color:#2563eb;}',
      '.wcmp-info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;}',
      '.wcmp-card-cyan{grid-column:span 2;background:#0891b2;color:#fff;padding:24px;border-radius:10px;}',
      '.wcmp-card-white{background:#fff;border:1px solid #e2e8f0;padding:24px;border-radius:10px;}',
      '.wcmp-bottom-row{grid-column:span 3;background:#f8fafc;border:1px solid #e2e8f0;padding:24px;border-radius:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;}',
      '.wcmp-quote{background:rgba(0,0,0,0.15);padding:14px;border-radius:8px;border-left:4px solid #fff;font-style:italic;margin-top:14px;font-size:14px;}',
      '.wcmp-app-title{color:#0369a1;margin:0 0 6px 0;font-size:14px;}',
      '.wcmp-app-text{font-size:13px;color:#64748b;margin:0;}',
      '@media(max-width:850px){.wcmp-main-grid,.wcmp-info-grid,.wcmp-bottom-row{grid-template-columns:1fr!important;}.wcmp-card-cyan,.wcmp-bottom-row,.wcmp-card-white{grid-column:span 1!important;}}',
      '@media(max-width:450px){.wcmp-svg-wrapper{height:260px!important;}.wcmp-status-main{font-size:12px;}}',
    ].join('');
    document.head.appendChild(style);
  }

  // ─── Lógica Interativa ────────────────────────────────────────────────────
  var slider   = container.querySelector('#wcmp-slider');
  var valAlpha = container.querySelector('#wcmp-val-alpha');
  var valBeta  = container.querySelector('#wcmp-val-beta');
  var ray      = container.querySelector('#wcmp-ray');
  var arcsG    = container.querySelector('#wcmp-arcs');
  var labelsG  = container.querySelector('#wcmp-labels');
  var statusEl = container.querySelector('#wcmp-status');
  var btns     = container.querySelectorAll('.wcmp-btn');
  var deg      = '\u00B0';
  var SVG_NS   = 'http://www.w3.org/2000/svg';

  function drawArc(cx, cy, r, a0, a1, color) {
    var s = (a0 * Math.PI) / 180;
    var e = (a1 * Math.PI) / 180;
    var x1 = cx + r * Math.cos(s), y1 = cy - r * Math.sin(s);
    var x2 = cx + r * Math.cos(e), y2 = cy - r * Math.sin(e);
    var large = (a1 - a0 > 180) ? 1 : 0;
    var p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', 'M '+cx+' '+cy+' L '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 0 '+x2+' '+y2+' Z');
    p.setAttribute('fill', color);
    p.setAttribute('fill-opacity', '0.18');
    p.setAttribute('stroke', color);
    p.setAttribute('stroke-width', '2');
    arcsG.appendChild(p);
  }

  function addLabel(cx, cy, r, angleMid, text, color) {
    var rad = (angleMid * Math.PI) / 180;
    var t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', cx + r * Math.cos(rad));
    t.setAttribute('y', cy - r * Math.sin(rad));
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('dominant-baseline', 'middle');
    t.style.cssText = 'font-size:1.7rem;font-weight:700;fill:' + color;
    t.textContent = text;
    labelsG.appendChild(t);
  }

  function update() {
    var alpha = parseInt(slider.value);
    var beta  = 90 - alpha;

    valAlpha.textContent = alpha + deg;
    valBeta.textContent  = beta  + deg;

    /* Raio dinâmico */
    var rad  = (alpha * Math.PI) / 180;
    var len  = 430;
    var ex   = 200 + len * Math.cos(rad);
    var ey   = 400 - len * Math.sin(rad);
    ray.setAttribute('x1', 200); ray.setAttribute('y1', 400);
    ray.setAttribute('x2', ex);  ray.setAttribute('y2', ey);

    /* Redesenhar arcos e rótulos */
    arcsG.innerHTML  = '';
    labelsG.innerHTML = '';

    drawArc(200, 400, 135, 0,     alpha, '#34d399'); /* α — verde */
    drawArc(200, 400, 100, alpha, 90,    '#60a5fa'); /* β — azul  */

    addLabel(200, 400, 168, alpha / 2,           alpha + deg, '#059669');
    addLabel(200, 400, 132, alpha + beta / 2,    beta  + deg, '#2563eb');

    /* Estado dos botões */
    btns.forEach(function (b) { b.classList.remove('wcmp-active'); });
    var activeBtn = null;
    btns.forEach(function (b) {
      if (parseInt(b.getAttribute('data-val')) === alpha) { activeBtn = b; }
    });
    if (activeBtn) {
      activeBtn.classList.add('wcmp-active');
      statusEl.textContent = 'Visualizando: ' + activeBtn.textContent.split(' (')[0] + '. A soma continua sendo 90' + deg + '.';
    } else {
      statusEl.textContent = 'Ajuste o controle: ' + alpha + deg + ' + ' + beta + deg + ' = 90' + deg + '.';
    }
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      slider.value = b.getAttribute('data-val');
      update();
    });
  });
  slider.addEventListener('input', update);
  update();
};
