/**
 * js/widgets/widgetPitagoras.js — Widget interativo do Teorema de Pitágoras
 * Expõe window.initWidgetPitagoras(containerId)
 *
 * Três modos:
 *  1. "squares"   — quadrados construídos nos três lados do triângulo
 *  2. "rearrange" — prova por rearranjo (4 triângulos → a² → b²+c²)
 *  3. "grid"      — contagem de blocos 3-4-5
 */
window.initWidgetPitagoras = function (containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  /* ── Estilos ─────────────────────────────────────────────────── */
  if (!document.getElementById("pit-widget-styles")) {
    var s = document.createElement("style");
    s.id = "pit-widget-styles";
    s.textContent = [
      ".pit-wrapper{font-family:var(--font-family);user-select:none;}",
      ".pit-tabs{display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.2rem;}",
      ".pit-tab{display:inline-flex;align-items:center;gap:.35rem;padding:.45rem 1rem;",
      "border-radius:99px;border:1.5px solid var(--border-color);background:var(--card-bg);",
      "color:var(--text-muted);font-family:var(--font-family);font-size:.84rem;font-weight:600;",
      "cursor:pointer;transition:all .2s;}",
      ".pit-tab:hover{border-color:var(--accent);color:var(--accent);}",
      ".pit-tab.active{border-color:var(--accent);background:var(--accent-light);color:var(--accent);}",
      ".pit-sliders{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;}",
      ".pit-slider-row{display:flex;align-items:center;gap:.6rem;font-size:.9rem;font-weight:600;}",
      ".pit-svg-wrap{display:flex;justify-content:center;}",
      ".pit-action{display:flex;justify-content:center;margin-top:.8rem;}",
      ".pit-expl{margin-top:.9rem;padding:.9rem 1.1rem;background:var(--accent-light);",
      "border-left:4px solid var(--accent);border-radius:0 10px 10px 0;font-size:.91rem;line-height:1.65;}",
      ".pit-math{margin-top:1rem;text-align:center;font-weight:600;font-size:1rem;color:var(--text-main);}",
      ".pit-math .eq{font-size:1.2rem;font-weight:800;letter-spacing:.02em;}",
      ".pit-math .sub{font-size:.88rem;color:var(--text-muted);margin-top:.25rem;}"
    ].join("");
    document.head.appendChild(s);
  }

  /* ── HTML ────────────────────────────────────────────────────── */
  container.innerHTML =
    '<div class="pit-wrapper">' +
    '<div class="pit-tabs">' +
    '<button class="pit-tab active" data-tab="squares">' +
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18"/></svg>' +
    'Quadrados nos Lados' +
    '</button>' +
    '<button class="pit-tab" data-tab="rearrange">' +
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>' +
    'Prova por Rearranjo' +
    '</button>' +
    '<button class="pit-tab" data-tab="grid">' +
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>' +
    'Blocos 3-4-5' +
    '</button>' +
    '</div>' +

    '<div class="pit-sliders" id="pit-sliders">' +
    '<div class="pit-slider-row" style="color:#4f46e5">' +
    'Cateto <em style="margin:0 .2rem">b</em>: <strong id="pit-lb">3</strong>' +
    '<input type="range" id="pit-sb" min="2" max="6" step="1" value="3" style="width:100px;accent-color:#4f46e5">' +
    '</div>' +
    '<div class="pit-slider-row" style="color:#10b981">' +
    'Cateto <em style="margin:0 .2rem">c</em>: <strong id="pit-lc">4</strong>' +
    '<input type="range" id="pit-sc" min="2" max="6" step="1" value="4" style="width:100px;accent-color:#10b981">' +
    '</div>' +
    '</div>' +

    '<div class="pit-svg-wrap">' +
    '<svg id="pit-svg" viewBox="0 0 520 400" style="width:100%;max-height:400px;display:block;"></svg>' +
    '</div>' +

    '<div class="pit-action" id="pit-action" style="display:none">' +
    '<button class="btn btn-primary" id="pit-toggle"><span id="pit-toggle-label">Rearranjar →</span></button>' +
    '</div>' +

    '<div class="pit-expl" id="pit-expl" style="display:none"></div>' +

    '<div class="pit-math">' +
    '<div class="eq"><span style="color:#f59e0b">a²</span> = <span style="color:#4f46e5">b²</span> + <span style="color:#10b981">c²</span></div>' +
    '<div class="sub" id="pit-sub"></div>' +
    '</div>' +
    '</div>';

  /* ── Refs ────────────────────────────────────────────────────── */
  var svg = container.querySelector("#pit-svg");
  var sbEl = container.querySelector("#pit-sb");
  var scEl = container.querySelector("#pit-sc");
  var lb = container.querySelector("#pit-lb");
  var lc = container.querySelector("#pit-lc");
  var sliders = container.querySelector("#pit-sliders");
  var action = container.querySelector("#pit-action");
  var toggle = container.querySelector("#pit-toggle");
  var tlabel = container.querySelector("#pit-toggle-label");
  var expl = container.querySelector("#pit-expl");
  var sub = container.querySelector("#pit-sub");
  var tabs = container.querySelectorAll(".pit-tab");

  /* ── Estado ──────────────────────────────────────────────────── */
  var mode = "squares";
  var rearrangeT = 0;   // 0 = estado1 (a²), 1 = estado2 (b²+c²)
  var gridMoved = false;
  var animating = false;
  var animRaf = null;

  var W = 520, H = 400;

  /* ── Helpers ─────────────────────────────────────────────────── */
  function lerp(a, b, t) { return a + (b - a) * t; }
  function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

  function vals() {
    var b = parseInt(sbEl.value), c = parseInt(scEl.value);
    return { b: b, c: c, a: Math.sqrt(b * b + c * c) };
  }

  function updateSub() {
    var v = vals();
    sub.textContent = (v.b * v.b + v.c * v.c) + " = " + v.b * v.b + " + " + v.c * v.c + "   →   a ≈ " + v.a.toFixed(3);
  }

  function setTab(t) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("active", tabs[i].dataset.tab === t);
    }
  }

  function pt(x, y) { return x.toFixed(2) + "," + y.toFixed(2); }

  function poly(pts, fill, stroke, sw, dash) {
    sw = sw || 2; dash = dash || "";
    return '<polygon points="' + pts.map(function (p) { return pt(p[0], p[1]); }).join(" ") + '"' +
      ' fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"' +
      (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
  }

  /* ══════════════════════════════════════════════════════════════
     MODO 1 — Quadrados nos lados
  ══════════════════════════════════════════════════════════════ */
  function drawSquares() {
    var v = vals();
    var b = v.b, c = v.c, a = v.a;
    var sc_ = 36;
    var bs = b * sc_, cs = c * sc_, as = a * sc_;

    var Ax = 200, Ay = 220;
    var Bx = Ax, By = Ay - bs;
    var Cx = Ax + cs, Cy = Ay;

    var hypLen = as;
    var ux = (Cx - Bx) / hypLen, uy = (Cy - By) / hypLen;
    // IMPORTANTE: Para apontar para FORA do triângulo (cujo vértice do ângulo reto A é à esquerda e abaixo),
    // o vetor ortogonal à hipotenusa deve ser (uy, -ux). 
    var wx = uy, wy = -ux; 

    var H1 = [Bx, By], H2 = [Cx, Cy];
    var H3 = [Cx + wx * as, Cy + wy * as], H4 = [Bx + wx * as, By + wy * as];
    var Hcx = (H1[0] + H2[0] + H3[0] + H4[0]) / 4, Hcy = (H1[1] + H2[1] + H3[1] + H4[1]) / 4;

    var B1 = [Ax, Ay], B2 = [Bx, By], B3 = [Bx - bs, By], B4 = [Ax - bs, Ay];
    var Bcx = (B1[0] + B2[0] + B3[0] + B4[0]) / 4, Bcy = (B1[1] + B2[1] + B3[1] + B4[1]) / 4;

    var C1 = [Ax, Ay], C2 = [Cx, Cy], C3 = [Cx, Cy + cs], C4 = [Ax, Ay + cs];
    var Ccx = (C1[0] + C2[0] + C3[0] + C4[0]) / 4, Ccy = (C1[1] + C2[1] + C3[1] + C4[1]) / 4;

    function sqLabel(x, y, big, small, col) {
      return '<text x="' + x + '" y="' + (y - 8) + '" fill="' + col + '" font-size="17" font-weight="800" text-anchor="middle" dominant-baseline="middle">' + big + '</text>' +
        '<text x="' + x + '" y="' + (y + 12) + '" fill="' + col + '" font-size="12" font-weight="600" text-anchor="middle" dominant-baseline="middle" opacity="0.8">' + small + '</text>';
    }

    svg.innerHTML =
      poly([B1, B2, B3, B4], "rgba(79,70,229,0.08)", "#4f46e5", 2.5, "7,3") +
      sqLabel(Bcx, Bcy, "b²", b * b, "#4f46e5") +

      poly([C1, C2, C3, C4], "rgba(16,185,129,0.08)", "#10b981", 2.5, "7,3") +
      sqLabel(Ccx, Ccy, "c²", c * c, "#10b981") +

      poly([H1, H2, H3, H4], "rgba(245,158,11,0.10)", "#f59e0b", 2.5, "") +
      sqLabel(Hcx, Hcy, "a²", b * b + c * c, "#f59e0b") +

      '<path d="M ' + Ax + ' ' + (Ay - 10) + ' L ' + (Ax + 10) + ' ' + (Ay - 10) + ' L ' + (Ax + 10) + ' ' + Ay + '" fill="none" stroke="#9ca3af" stroke-width="1.5"/>' +

      poly([[Ax, Ay], [Bx, By], [Cx, Cy]], "white", "#1a1a1a", 3) +

      '<text x="' + ((Ax + Bx) / 2 - 18) + '" y="' + ((Ay + By) / 2) + '" fill="#4f46e5" font-size="15" font-weight="800" text-anchor="middle" dominant-baseline="middle">b=' + b + '</text>' +
      '<text x="' + ((Ax + Cx) / 2) + '" y="' + ((Ay + Cy) / 2 + 20) + '" fill="#10b981" font-size="15" font-weight="800" text-anchor="middle">c=' + c + '</text>' +
      '<text x="' + ((Bx + Cx) / 2 + wx * 20) + '" y="' + ((By + Cy) / 2 + wy * 20) + '" fill="#f59e0b" font-size="15" font-weight="800" text-anchor="middle">a≈' + a.toFixed(2) + '</text>';

    expl.style.display = "block";
    expl.innerHTML = '<strong>Leitura geométrica:</strong> O quadrado amarelo sobre a hipotenusa (área <strong style="color:#f59e0b">a² = ' + (b * b + c * c) + '</strong>) ocupa exatamente a mesma área que o quadrado do cateto b (<strong style="color:#4f46e5">b² = ' + b * b + '</strong>) somado ao do cateto c (<strong style="color:#10b981">c² = ' + c * c + '</strong>). Arraste os controles para verificar com outros valores.';
    action.style.display = "none";
  }

  /* ══════════════════════════════════════════════════════════════
     MODO 2 — Prova por Rearranjo
  ══════════════════════════════════════════════════════════════ */
  function rearrangePoints(t_anim) {
    var v = vals();
    var b = v.b, c = v.c;
    var scale = Math.min(170 / (b + c), 30);
    var bs = b * scale, cs = c * scale, L = bs + cs;
    var OX = (W - L) / 2, OY = (H - L) / 2;

    var s1 = [
      [[OX, OY], [OX + cs, OY], [OX, OY + bs]],
      [[OX + L, OY], [OX + L, OY + cs], [OX + cs, OY]],
      [[OX + L, OY + L], [OX + bs, OY + L], [OX + L, OY + cs]],
      [[OX, OY + L], [OX, OY + bs], [OX + bs, OY + L]],
    ];

    var s2 = [
      [[OX + bs, OY], [OX + L, OY], [OX + bs, OY + bs]],
      [[OX + L, OY + bs], [OX + bs, OY + bs], [OX + L, OY]],
      [[OX + cs, OY + L], [OX, OY + L], [OX + cs, OY + bs]],
      [[OX, OY + bs], [OX + cs, OY + bs], [OX, OY + L]],
    ];

    var tris = s1.map(function (tri1, i) {
      return tri1.map(function (v1, j) {
        return [lerp(v1[0], s2[i][j][0], t_anim), lerp(v1[1], s2[i][j][1], t_anim)];
      });
    });

    return { tris: tris, OX: OX, OY: OY, L: L, bs: bs, cs: cs, b: b, c: c };
  }

  function renderRearrange(t_anim) {
    var d = rearrangePoints(t_anim);
    var OX = d.OX, OY = d.OY, L = d.L, bs = d.bs, cs = d.cs, b = d.b, c = d.c;

    var triColors = ["rgba(79,70,229,0.55)", "rgba(79,70,229,0.45)", "rgba(79,70,229,0.60)", "rgba(79,70,229,0.40)"];
    var op1 = (1 - t_anim).toFixed(2);
    var op2 = t_anim.toFixed(2);

    var a2pol = '<polygon points="' + (OX + cs) + ',' + OY + ' ' + (OX + L) + ',' + (OY + bs) + ' ' + (OX + bs) + ',' + (OY + L) + ' ' + OX + ',' + (OY + cs) + '"' +
      ' fill="rgba(245,158,11,0.12)" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4" opacity="' + op1 + '"/>' +
      '<text x="' + (OX + L / 2) + '" y="' + (OY + L / 2 - 6) + '" fill="#f59e0b" font-size="19" font-weight="800" text-anchor="middle" opacity="' + op1 + '">a²</text>' +
      '<text x="' + (OX + L / 2) + '" y="' + (OY + L / 2 + 16) + '" fill="#f59e0b" font-size="12" font-weight="600" text-anchor="middle" opacity="' + op1 + '">' + (b * b + c * c) + '</text>';

    var bsq = '<rect x="' + OX + '" y="' + OY + '" width="' + bs + '" height="' + bs + '"' +
      ' fill="rgba(79,70,229,0.07)" stroke="#4f46e5" stroke-width="2" stroke-dasharray="6,3" opacity="' + op2 + '"/>' +
      '<text x="' + (OX + bs / 2) + '" y="' + (OY + bs / 2 - 6) + '" fill="#4f46e5" font-size="17" font-weight="800" text-anchor="middle" opacity="' + op2 + '">b²</text>' +
      '<text x="' + (OX + bs / 2) + '" y="' + (OY + bs / 2 + 14) + '" fill="#4f46e5" font-size="12" font-weight="600" text-anchor="middle" opacity="' + op2 + '">' + (b * b) + '</text>';

    var csq = '<rect x="' + (OX + bs) + '" y="' + (OY + bs) + '" width="' + cs + '" height="' + cs + '"' +
      ' fill="rgba(16,185,129,0.07)" stroke="#10b981" stroke-width="2" stroke-dasharray="6,3" opacity="' + op2 + '"/>' +
      '<text x="' + (OX + bs + cs / 2) + '" y="' + (OY + bs + cs / 2 - 6) + '" fill="#10b981" font-size="17" font-weight="800" text-anchor="middle" opacity="' + op2 + '">c²</text>' +
      '<text x="' + (OX + bs + cs / 2) + '" y="' + (OY + bs + cs / 2 + 14) + '" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle" opacity="' + op2 + '">' + (c * c) + '</text>';

    svg.innerHTML =
      '<rect x="' + OX + '" y="' + OY + '" width="' + L + '" height="' + L + '" fill="none" stroke="#d1d5db" stroke-width="2" rx="4"/>' +
      '<text x="' + (OX + L / 2) + '" y="' + (OY - 14) + '" fill="#888" font-size="11" font-weight="600" text-anchor="middle">lado = b + c = ' + (b + c) + '</text>' +
      a2pol + bsq + csq +
      d.tris.map(function (tri, i) { return poly(tri, triColors[i], "#4f46e5", 1.5); }).join("\n");
  }

  function drawRearrange(immediate) {
    var target = rearrangeT;
    if (immediate) {
      renderRearrange(target);
    } else {
      if (animRaf) cancelAnimationFrame(animRaf);
      var startVal = rearrangeT === 0 ? 1 : 0;
      var startTime = performance.now();
      var duration = 900;
      animating = true;
      function tick(now) {
        var raw = Math.min((now - startTime) / duration, 1);
        var t = lerp(startVal, target, ease(raw));
        renderRearrange(t);
        if (raw < 1) { animRaf = requestAnimationFrame(tick); }
        else { animating = false; }
      }
      animRaf = requestAnimationFrame(tick);
    }

    var v = vals();
    if (rearrangeT === 0) {
      tlabel.textContent = "Rearranjar → expor b² + c²";
      expl.innerHTML = '<strong>Passo 1 — Grande quadrado de lado (b+c):</strong> Quatro triângulos retângulos idênticos ocupam os quatro cantos. O espaço vazio central é o quadrado da hipotenusa com área <strong style="color:#f59e0b">a²</strong>.';
    } else {
      tlabel.textContent = "← Voltar ao Passo 1";
      expl.innerHTML = '<strong>Passo 2 — Dois retângulos:</strong> Reposicionamos os 4 triângulos para dois retângulos (b×c cada). Os espaços livres formam dois quadrados: <strong style="color:#4f46e5">b² = ' + v.b * v.b + '</strong> (canto superior esquerdo) e <strong style="color:#10b981">c² = ' + v.c * v.c + '</strong> (canto inferior direito). Mesmos triângulos, mesma área total → <strong style="color:#f59e0b">a² = b² + c²</strong>.';
    }
    expl.style.display = "block";
    action.style.display = "flex";
  }

  /* ══════════════════════════════════════════════════════════════
     MODO 3 — Grid de blocos 3-4-5
     Implementado com CSS Transforms no lugar de reescrever HTML.
  ══════════════════════════════════════════════════════════════ */
  function getGridData() {
    var sc_ = 32, b = 3, c = 4;
    var Ax = 165, Ay = 248;
    var Bx = Ax, By = Ay - b * sc_;
    var Cx = Ax + c * sc_, Cy = Ay;

    var bOX = Ax - b * sc_, bOY = By; 
    var cOX = Ax, cOY = Ay;

    var hypLen = 5 * sc_;
    var hux = (Cx - Bx) / hypLen;
    var huy = (Cy - By) / hypLen;
    var hwx = huy;  
    var hwy = -hux; 
    
    var hypAngle = Math.atan2(huy, hux) * 180 / Math.PI; 

    function hypCell(col, row) {
      return {
        x: Bx + col * sc_ * hux + (row + 1) * sc_ * hwx,
        y: By + col * sc_ * huy + (row + 1) * sc_ * hwy
      };
    }

    var bBlocks = [];
    for (var r = 0; r < b; r++)
      for (var cl = 0; cl < b; cl++)
        bBlocks.push({ x: bOX + cl * sc_, y: bOY + r * sc_ });

    var cBlocks = [];
    for (var r2 = 0; r2 < c; r2++)
      for (var cl2 = 0; cl2 < c; cl2++)
        cBlocks.push({ x: cOX + cl2 * sc_, y: cOY + r2 * sc_ });

    var hypSlots = [];
    for (var row = 0; row < 5; row++)
      for (var col = 0; col < 5; col++)
        hypSlots.push(hypCell(col, row));

    return {
      sc_: sc_, Ax: Ax, Ay: Ay, Bx: Bx, By: By, Cx: Cx, Cy: Cy,
      bOX: bOX, bOY: bOY, cOX: cOX, cOY: cOY, b: b, c: c,
      h00: hypCell(0,0), h50: hypCell(5,0), h55: hypCell(5,5), h05: hypCell(0,5),
      hypAngle: hypAngle, bBlocks: bBlocks, cBlocks: cBlocks, hypSlots: hypSlots
    };
  }

  function initGridDOM(d) {
    var content = "";
    content += '<rect x="' + d.bOX + '" y="' + d.bOY + '" width="' + (d.b * d.sc_) + '" height="' + (d.b * d.sc_) + '" fill="none" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="5,3" rx="2" opacity="0.4"/>';
    content += '<rect x="' + d.cOX + '" y="' + d.cOY + '" width="' + (d.c * d.sc_) + '" height="' + (d.c * d.sc_) + '" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3" rx="2" opacity="0.4"/>';
    content += '<polygon points="' + pt(d.h00.x, d.h00.y) + ' ' + pt(d.h50.x, d.h50.y) + ' ' + pt(d.h55.x, d.h55.y) + ' ' + pt(d.h05.x, d.h05.y) + '" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.4"/>';

    d.hypSlots.forEach(function (slot) {
      content += '<rect x="0" y="0" width="' + (d.sc_ - 1) + '" height="' + (d.sc_ - 1) + '" rx="2"' +
        ' fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.5"' +
        ' style="transform: translate(' + slot.x + 'px, ' + slot.y + 'px) rotate(' + d.hypAngle + 'deg);"/>';
    });

    content += '<path d="M ' + d.Ax + ' ' + (d.Ay - 10) + ' L ' + (d.Ax + 10) + ' ' + (d.Ay - 10) + ' L ' + (d.Ax + 10) + ' ' + d.Ay + '" fill="none" stroke="#9ca3af" stroke-width="1.5"/>';
    content += poly([[d.Ax, d.Ay], [d.Bx, d.By], [d.Cx, d.Cy]], "white", "#1a1a1a", 3);

    content += '<text x="' + ((d.Ax + d.Bx) / 2 - 22) + '" y="' + ((d.Ay + d.By) / 2) + '" fill="#4f46e5" font-size="14" font-weight="800" text-anchor="middle" dominant-baseline="middle">b = 3</text>';
    content += '<text x="' + ((d.Ax + d.Cx) / 2) + '" y="' + ((d.Ay + d.Cy) / 2 + 22) + '" fill="#10b981" font-size="14" font-weight="800" text-anchor="middle">c = 4</text>';
    content += '<text x="' + ((d.Bx + d.Cx) / 2 + 18) + '" y="' + ((d.By + d.Cy) / 2 - 14) + '" fill="#f59e0b" font-size="14" font-weight="800" text-anchor="middle">a = 5</text>';

    // Textos dinâmicos
    content += '<g id="grid-labels-start">';
    content += '<text x="' + (d.bOX + d.b * d.sc_ / 2) + '" y="' + (d.bOY - 12) + '" fill="#4f46e5" font-size="13" font-weight="800" text-anchor="middle">b² = 9 blocos</text>';
    content += '<text x="' + (d.cOX + d.c * d.sc_ / 2) + '" y="' + (d.cOY + d.c * d.sc_ + 18) + '" fill="#10b981" font-size="13" font-weight="800" text-anchor="middle">c² = 16 blocos</text>';
    content += '</g>';

    content += '<g id="grid-labels-end" style="opacity:0; transition: opacity 0.5s;">';
    var cx_ = (d.h00.x + d.h50.x + d.h55.x + d.h05.x) / 4;
    var cy_ = (d.h00.y + d.h50.y + d.h55.y + d.h05.y) / 4;
    content += '<text x="' + cx_ + '" y="' + (cy_ - 10) + '" fill="#f59e0b" font-size="14" font-weight="800" text-anchor="middle">a² = 25 blocos</text>';
    content += '<text x="' + cx_ + '" y="' + (cy_ + 12) + '" fill="#f59e0b" font-size="11" font-weight="600" text-anchor="middle">9 + 16 = 25 ✓</text>';
    content += '</g>';

    // Cria as caixas animáveis para b² e c²
    d.bBlocks.forEach(function(pos, idx) {
      content += '<rect id="gblk-b-' + idx + '" x="0" y="0" width="' + (d.sc_ - 3) + '" height="' + (d.sc_ - 3) + '" rx="3"' +
        ' fill="rgba(79,70,229,0.9)" stroke="rgba(79,70,229,0.4)" stroke-width="1"' +
        ' style="transform: translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(0deg); transition: transform 0.9s cubic-bezier(0.25,1,0.5,1) ' + (idx*0.035) + 's;"/>';
    });

    d.cBlocks.forEach(function(pos, idx) {
      content += '<rect id="gblk-c-' + idx + '" x="0" y="0" width="' + (d.sc_ - 3) + '" height="' + (d.sc_ - 3) + '" rx="3"' +
        ' fill="rgba(16,185,129,0.9)" stroke="rgba(16,185,129,0.4)" stroke-width="1"' +
        ' style="transform: translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(0deg); transition: transform 0.9s cubic-bezier(0.25,1,0.5,1) ' + ((9+idx)*0.035) + 's;"/>';
    });

    svg.innerHTML = content;
    svg.dataset.gridRendered = "true";
  }

  function updateGridDOM(d) {
    d.bBlocks.forEach(function(pos, idx) {
      var tgt = d.hypSlots[idx];
      var el = container.querySelector("#gblk-b-" + idx);
      if(!el) return;
      var tx = gridMoved ? tgt.x : pos.x;
      var ty = gridMoved ? tgt.y : pos.y;
      var rot = gridMoved ? d.hypAngle : 0;
      el.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) rotate(' + rot + 'deg)';
    });

    d.cBlocks.forEach(function(pos, idx) {
      var tgt = d.hypSlots[9 + idx];
      var el = container.querySelector("#gblk-c-" + idx);
      if(!el) return;
      var tx = gridMoved ? tgt.x : pos.x;
      var ty = gridMoved ? tgt.y : pos.y;
      var rot = gridMoved ? d.hypAngle : 0;
      el.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) rotate(' + rot + 'deg)';
    });

    var lStart = container.querySelector("#grid-labels-start");
    var lEnd = container.querySelector("#grid-labels-end");
    if(lStart) lStart.style.opacity = gridMoved ? "0" : "1";
    if(lEnd) lEnd.style.opacity = gridMoved ? "1" : "0";
  }

  function drawGrid() {
    var d = getGridData();
    if(svg.dataset.gridRendered !== "true") {
      initGridDOM(d);
      // Força o reflow para garantir que as animações entrem da próxima vez
      svg.getBoundingClientRect(); 
    }
    
    // Atualiza posições e animações
    updateGridDOM(d);

    tlabel.textContent = gridMoved ? "← Devolver blocos" : "Mover blocos → hipotenusa";
    expl.style.display = "block";
    action.style.display = "flex";

    if (!gridMoved) {
      expl.innerHTML = '<strong>Triângulo 3-4-5:</strong> Os <strong style="color:#4f46e5">9 blocos roxos</strong> (3×3 = b²) e os <strong style="color:#10b981">16 blocos verdes</strong> (4×4 = c²) estão sobre seus respectivos catetos. Clique para vê-los migrar para o quadrado da hipotenusa!';
    } else {
      expl.innerHTML = '<strong>Prova concreta:</strong> Os <strong style="color:#4f46e5">9 blocos roxos</strong> e os <strong style="color:#10b981">16 blocos verdes</strong> preenchem perfeitamente os <strong style="color:#f59e0b">25 espaços do quadrado da hipotenusa</strong>. <strong>3² + 4² = 9 + 16 = 25 = 5²</strong> ✓';
    }
  }

  /* ── Dispatcher ──────────────────────────────────────────────── */
  function draw(animate) {
    updateSub();
    lb.textContent = sbEl.value;
    lc.textContent = scEl.value;
    setTab(mode);
    action.style.display = "none";

    // Reseta estado do Grid se mudar de aba
    if(mode !== "grid") {
      svg.dataset.gridRendered = "false";
    }

    if (mode === "squares") {
      sliders.style.display = "flex";
      drawSquares();
    } else if (mode === "rearrange") {
      sliders.style.display = "flex";
      drawRearrange(!animate);
    } else {
      sliders.style.display = "none";
      drawGrid();
    }
  }

  /* ── Eventos ─────────────────────────────────────────────────── */
  for (var k = 0; k < tabs.length; k++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        if (btn.dataset.tab === mode) return;
        mode = btn.dataset.tab;
        rearrangeT = 0;
        gridMoved = false;
        draw(false);
      });
    })(tabs[k]);
  }

  sbEl.addEventListener("input", function () { rearrangeT = 0; draw(false); });
  scEl.addEventListener("input", function () { rearrangeT = 0; draw(false); });

  toggle.addEventListener("click", function () {
    if (animating) return;
    if (mode === "rearrange") {
      rearrangeT = rearrangeT === 0 ? 1 : 0;
      draw(true);
    } else if (mode === "grid") {
      gridMoved = !gridMoved;
      draw(false);
    }
  });

  draw(false);
};
