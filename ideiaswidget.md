<script>
  (function() {
    const host = document.getElementById('geoapp-shadow-host');
    if (!host) return;
    const shadowRoot = host.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host { display: block; width: 100%; font-family: 'Inter', sans-serif; }
        .geoapp-container { background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #1e293b; }
        
        .geoapp-main-grid { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
        .geoapp-visual-box { background: white; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; }
        .geoapp-svg-wrapper { height: 500px; width: 100%; position: relative; }
        
        .geoapp-status-info { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin-top: 10px; }
        .geoapp-status-title { font-size: 10px; font-weight: 800; color: #60a5fa; text-transform: uppercase; margin-bottom: 2px; }
        .geoapp-status-main { font-size: 14px; font-weight: 700; color: #1e3a8a; margin: 0; }

        .geoapp-sidebar { display: flex; flex-direction: column; gap: 15px; }
        .geoapp-control-dark { background: #0f172a; color: white; padding: 20px; border-radius: 8px; }
        .geoapp-label-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-weight: 700; color: #60a5fa; }
        .geoapp-slider { width: 100%; cursor: pointer; }

        .geoapp-geo-btn { 
          width: 100%; text-align: left; padding: 10px 15px; border-radius: 4px; border: 1px solid #f1f5f9;
          background: white; font-size: 13px; font-weight: 600; cursor: pointer; transition: 0.2s; color: #475569;
        }
        .geoapp-geo-btn:hover { border-color: #cbd5e1; }
        .geoapp-geo-btn.active { background: #2563eb !important; color: white !important; border-color: #2563eb; }

        .geoapp-content-sections { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 30px; }
        .geoapp-full-width { grid-column: span 2; background: #06b6d4; color: white; padding: 25px; border-radius: 8px; }
        .geoapp-side-card { background: white; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; }
        .geoapp-bottom-row { grid-column: span 3; background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }

        .math-eq { font-family: 'Courier New', monospace; background: #1e293b; color: #34d399; padding: 10px; border-radius: 6px; text-align: center; font-size: 16px; margin-top: 10px; }

        @media (max-width: 850px) {
          .geoapp-main-grid, .geoapp-content-sections, .geoapp-bottom-row { grid-template-columns: 1fr; }
          .geoapp-full-width, .geoapp-bottom-row { grid-column: span 1; }
        }
        @media (max-width: 450px) {
          .geoapp-svg-wrapper { height: 250px !important; }
          .geoapp-container { padding: 10px; }
          .geoapp-status-main { font-size: 12px; }
        }
      </style>

      <div class="geoapp-container">
        <div class="geoapp-main-grid">
          <div class="geoapp-visual-box">
            <div class="geoapp-svg-wrapper">
              <svg viewBox="0 0 800 500" style="width: 100%; height: 100%;">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                <!-- Ângulo reto base -->
                <line x1="200" y1="400" x2="650" y2="400" stroke="#64748b" stroke-width="4" stroke-linecap="round" />
                <line x1="200" y1="400" x2="200" y2="50" stroke="#64748b" stroke-width="4" stroke-linecap="round" />
                
                <!-- Marcação de ângulo reto -->
                <path d="M 200 365 L 235 365 L 235 400" fill="none" stroke="#cbd5e1" stroke-width="2" />
                <circle cx="217.5" cy="382.5" r="3" fill="#cbd5e1" />
                
                <!-- Vértice -->
                <circle cx="200" cy="400" r="6" fill="#475569" />

                <!-- Grupo Dinâmico -->
                <g id="angles_layer"></g>
                <line id="trans_line" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
                <g id="labels_layer"></g>
              </svg>
            </div>
            <div class="geoapp-status-info">
              <div class="geoapp-status-title">Status da Análise</div>
              <p id="status_text" class="geoapp-status-main">Ajuste o controle deslizante para alterar os ângulos. A soma é sempre 90°.</p>
            </div>
          </div>

          <div class="geoapp-sidebar">
            <div class="geoapp-control-dark">
              <div class="geoapp-label-row">
                <span style="color:#34d399">Ângulo α: <span id="angle_alpha_display">60°</span></span>
              </div>
              <div class="geoapp-label-row">
                <span style="color:#60a5fa">Ângulo β: <span id="angle_beta_display">30°</span></span>
              </div>
              <input type="range" id="angle_input" min="5" max="85" value="60" class="geoapp-slider" style="margin-top:10px;">
              
              <div class="math-eq">
                α + β = 90°
              </div>
            </div>
            
            <button class="geoapp-geo-btn" data-val="45">Bissetriz (45° e 45°)</button>
            <button class="geoapp-geo-btn" data-val="60">Esquadro Padrão (60° e 30°)</button>
            <button class="geoapp-geo-btn" data-val="37">Triângulo 3-4-5 (aprox. 37° e 53°)</button>
            <button class="geoapp-geo-btn" data-val="75">Ângulo Agudo (75° e 15°)</button>
          </div>
        </div>

        <div class="geoapp-content-sections">
          <div class="geoapp-full-width">
            <h2 style="margin:0 0 15px 0">A Natureza dos Ângulos Complementares</h2>
            <p>Dois ângulos são <strong>complementares</strong> quando a soma de suas medidas é exatamente 90°, ou seja, juntos eles formam um ângulo reto. Esta relação é a base de muita coisa na geometria e trigonometria.</p>
            <div style="background:rgba(0,0,0,0.1); padding:15px; border-radius:8px; border-left:4px solid white; font-style:italic">
              "Em qualquer triângulo retângulo, como um dos ângulos já mede 90°, os outros dois agudos devem somar 90°. Logo, os ângulos agudos de um triângulo retângulo são sempre complementares."
            </div>
          </div>
          
          <div class="geoapp-side-card">
            <h3 style="margin:0 0 15px 0; color:#1e293b">Propriedades</h3>
            <ul style="padding:0; list-style:none; font-size:14px; color:#64748b; line-height:2">
              <li><strong>Seno e Cosseno:</strong> O seno de um ângulo é igual ao cosseno do seu complemento: <em>sen(α) = cos(β)</em>.</li>
              <li><strong>Tangente:</strong> <em>tan(α) = cot(β)</em>.</li>
              <li><strong>Independência:</strong> Eles não precisam estar juntos (adjacentes) para serem complementares. Basta que a soma seja 90°.</li>
            </ul>
          </div>

          <div class="geoapp-bottom-row">
            <div><h4 style="color:#0369a1; margin:0 0 8px 0">Construção e Arquitetura</h4><p style="font-size:13px; color:#64748b; margin:0">A verificação do esquadro nas paredes (90°) garante cantos retos. Cortes de 45° em sancas e molduras somam para formar um ângulo perfeitamente reto.</p></div>
            <div><h4 style="color:#0369a1; margin:0 0 8px 0">Física e Lançamentos</h4><p style="font-size:13px; color:#64748b; margin:0">Na cinemática, dois projéteis lançados com a mesma velocidade em ângulos complementares (ex: 30° e 60°) atingem exatamente a mesma distância horizontal (alcance).</p></div>
            <div><h4 style="color:#0369a1; margin:0 0 8px 0">Rampas e Inclinações</h4><p style="font-size:13px; color:#64748b; margin:0">O ângulo de inclinação de uma rampa em relação ao chão e o ângulo formado no topo em relação à parede vertical são sempre complementares.</p></div>
          </div>
        </div>
      </div>
    \`;

    shadowRoot.appendChild(template.content.cloneNode(true));

    const doc = shadowRoot;
    const input = doc.getElementById('angle_input');
    const alphaDisplay = doc.getElementById('angle_alpha_display');
    const betaDisplay = doc.getElementById('angle_beta_display');
    const transLine = doc.getElementById('trans_line');
    const anglesG = doc.getElementById('angles_layer');
    const labelsG = doc.getElementById('labels_layer');
    const statusTxt = doc.getElementById('status_text');
    const btns = doc.querySelectorAll('.geoapp-geo-btn');

    const deg = "\\u00B0";

    function drawArc(cx, cy, r, startAngle, endAngle, color) {
      const sR = (startAngle * Math.PI) / 180;
      const eR = (endAngle * Math.PI) / 180;
      
      const x1 = cx + r * Math.cos(sR);
      const y1 = cy - r * Math.sin(sR);
      const x2 = cx + r * Math.cos(eR);
      const y2 = cy - r * Math.sin(eR);

      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", \`M \${cx} \${cy} L \${x1} \${y1} A \${r} \${r} 0 \${largeArcFlag} 0 \${x2} \${y2} Z\`);
      p.setAttribute("fill", color);
      p.setAttribute("fill-opacity", 0.2);
      p.setAttribute("stroke", color);
      p.setAttribute("stroke-width", "2");
      return p;
    }

    function addLabel(cx, cy, r, angleMid, text, color) {
      const rad = (angleMid * Math.PI) / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy - r * Math.sin(rad);
      
      const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
      txt.setAttribute("x", x);
      txt.setAttribute("y", y);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("dominant-baseline", "middle");
      txt.style.cssText = \`font-size:1.8rem; font-weight:700; fill:\${color}\`;
      txt.textContent = text;
      return txt;
    }

    function update() {
      const alpha = parseInt(input.value);
      const beta = 90 - alpha;
      
      alphaDisplay.textContent = alpha + deg;
      betaDisplay.textContent = beta + deg;

      // Update transversal line
      const rad = (alpha * Math.PI) / 180;
      const length = 450;
      const endX = 200 + length * Math.cos(rad);
      const endY = 400 - length * Math.sin(rad);
      
      transLine.setAttribute('x1', 200);
      transLine.setAttribute('y1', 400);
      transLine.setAttribute('x2', endX);
      transLine.setAttribute('y2', endY);

      anglesG.innerHTML = '';
      labelsG.innerHTML = '';

      // Draw Alpha Arc (from 0 to alpha)
      const arcAlpha = drawArc(200, 400, 140, 0, alpha, '#34d399');
      anglesG.appendChild(arcAlpha);
      
      // Draw Beta Arc (from alpha to 90)
      const arcBeta = drawArc(200, 400, 110, alpha, 90, '#60a5fa');
      anglesG.appendChild(arcBeta);

      // Add text labels
      const labelAlpha = addLabel(200, 400, 175, alpha / 2, alpha + deg, '#059669'); // darker green
      labelsG.appendChild(labelAlpha);
      
      const labelBeta = addLabel(200, 400, 145, alpha + (beta / 2), beta + deg, '#2563eb'); // darker blue
      labelsG.appendChild(labelBeta);
      
      // Check for active button
      btns.forEach(b => b.classList.remove('active'));
      const activeBtn = Array.from(btns).find(b => parseInt(b.getAttribute('data-val')) === alpha);
      if (activeBtn) {
        activeBtn.classList.add('active');
        statusTxt.textContent = \`Visualizando: \${activeBtn.textContent.split(' (')[0]}. A soma continua sendo 90°.\`;
      } else {
        statusTxt.textContent = \`Ajuste o controle deslizante para alterar os ângulos. \${alpha}° + \${beta}° = 90°.\`;
      }
    }

    btns.forEach(b => b.addEventListener('click', () => {
      input.value = b.getAttribute('data-val');
      update();
    }));

    input.addEventListener('input', update);
    update();
  })();
</script>