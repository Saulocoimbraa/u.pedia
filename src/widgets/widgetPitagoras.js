export function initWidgetPitagoras(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="widget-pitagoras-wrapper" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
      <div class="widget-top-actions" style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap; justify-content: center; width: 100%;">
        <button id="btn-view-static" class="btn btn-secondary active-view-btn" style="border: 1px solid var(--accent); background: var(--accent-light); color: var(--accent);">
          <i data-lucide="triangle"></i> Áreas Estáticas
        </button>
        <button id="btn-view-animated" class="btn btn-secondary" style="border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-main);">
          <i data-lucide="refresh-cw"></i> Prova por Arranjo
        </button>
        <button id="btn-view-grid" class="btn btn-secondary" style="border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-main);">
          <i data-lucide="grid"></i> Prova por Grid (Soma de Blocos)
        </button>
      </div>

      <div class="widget-action-bar" style="display: flex; justify-content: center; margin-bottom: 1rem; gap: 1rem; min-height: 40px; width: 100%;">
        <button id="btn-animate-arr" class="btn btn-primary" style="display: none;">
          <i data-lucide="play"></i> <span>Reordenar Peças</span>
        </button>
        <button id="btn-animate-grid" class="btn btn-primary" style="display: none;">
          <i data-lucide="combine"></i> <span>Mover Blocos para Hipotenusa</span>
        </button>
      </div>

      <div id="sliders-controls" class="widget-controls" style="margin-bottom: 1.5rem; width: 100%; max-width: 400px;">
        <div class="control-group" style="margin-bottom: 1rem;">
          <label for="cateto-b-range" style="display: flex; justify-content: space-between;">
            <span>Cateto <em>b</em>:</span>
            <span><strong id="val-b">3.0</strong> cm</span>
          </label>
          <input type="range" id="cateto-b-range" min="2" max="6" step="0.5" value="3" style="width: 100%;">
        </div>
        <div class="control-group">
          <label for="cateto-c-range" style="display: flex; justify-content: space-between;">
            <span>Cateto <em>c</em>:</span>
            <span><strong id="val-c">4.0</strong> cm</span>
          </label>
          <input type="range" id="cateto-c-range" min="2" max="6" step="0.5" value="4" style="width: 100%;">
        </div>
      </div>

      <div class="widget-visualization" style="width: 100%; display: flex; justify-content: center; align-items: center;">
        <svg id="pitagoras-svg" style="display: block; margin: 0 auto; max-width: 400px; background: transparent;" width="100%" height="360px">
          </svg>
      </div>

      <div class="widget-math-summary" style="text-align: center; margin-top: 1rem; width: 100%;">
        <div class="math-eq" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">
          <span class="term-a" style="color: var(--accent, #f59e0b);">a²</span> = <span class="term-b" style="color: #4f46e5;">b²</span> + <span class="term-c" style="color: #10b981;">c²</span>
        </div>
        <div class="math-values" id="eq-resolved" style="font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span class="val-a-sq" style="color: #f59e0b; font-weight: 600;">25.00</span> = <span class="val-b-sq" style="color: #4f46e5;">9.00</span> + <span class="val-c-sq" style="color: #10b981;">16.00</span>
        </div>
        <div class="math-hypotenuse" style="font-size: 0.95rem; color: var(--text-muted, #6b7280);">
          Hipotenusa <em>(a)</em> ≈ <span id="val-a-result" style="font-weight: bold; color: var(--text-main);">5.00</span> cm
        </div>
      </div>

      <div id="arrangement-explanation" class="widget-explanation-box" style="display: none; margin-top: 1.5rem; padding: 1rem; background-color: var(--accent-light); border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; font-size: 0.95rem; line-height: 1.5; width: 100%; max-width: 500px; box-sizing: border-box;">
        </div>
    </div>
  `;

  const btnStatic = container.querySelector("#btn-view-static");
  const btnAnimated = container.querySelector("#btn-view-animated");
  const btnGrid = container.querySelector("#btn-view-grid");
  
  const btnAnimateArr = container.querySelector("#btn-animate-arr");
  const btnAnimateGrid = container.querySelector("#btn-animate-grid");
  const slidersControls = container.querySelector("#sliders-controls");
  const explanationBox = container.querySelector("#arrangement-explanation");

  const sliderB = container.querySelector("#cateto-b-range");
  const sliderC = container.querySelector("#cateto-c-range");
  const svg = container.querySelector("#pitagoras-svg");

  let currentView = "static";
  let arrangementState = 1;
  let gridState = "initial";

  function updateActiveButton(activeBtn) {
    [btnStatic, btnAnimated, btnGrid].forEach(btn => {
      btn.style.border = "1px solid var(--border-color, #e5e7eb)";
      btn.style.background = "var(--card-bg, #ffffff)";
      btn.style.color = "var(--text-main, #1a1a1a)";
    });
    activeBtn.style.border = "1px solid var(--accent, #4f46e5)";
    activeBtn.style.background = "var(--accent-light, rgba(79, 70, 229, 0.1))";
    activeBtn.style.color = "var(--accent, #4f46e5)";
  }

  function draw() {
    const bVal = parseFloat(sliderB.value);
    const cVal = parseFloat(sliderC.value);
    const aVal = Math.sqrt(bVal * bVal + cVal * cVal);

    // Update texts
    container.querySelector("#val-b").textContent = bVal.toFixed(1);
    container.querySelector("#val-c").textContent = cVal.toFixed(1);
    container.querySelector(".val-b-sq").textContent = (bVal * bVal).toFixed(2);
    container.querySelector(".val-c-sq").textContent = (cVal * cVal).toFixed(2);
    container.querySelector(".val-a-sq").textContent = (aVal * aVal).toFixed(2);
    container.querySelector("#val-a-result").textContent = aVal.toFixed(2);

    if (currentView === "static") {
      updateActiveButton(btnStatic);
      slidersControls.style.display = "block";
      btnAnimateArr.style.display = "none";
      btnAnimateGrid.style.display = "none";
      explanationBox.style.display = "none";
      
      // Centraliza dinamicamente recalculando a ViewBox com base no tamanho das formas
      const scale = 25;
      const b = bVal * scale;
      const c = cVal * scale;
      const minX = -b - 20;
      const minY = -b - c - 20;
      const width = b + c + 2 * scale + 40;
      const height = b + c + 2 * scale + 40;
      svg.setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
      
      drawStaticView(bVal, cVal, aVal);
    } else if (currentView === "arrangement") {
      updateActiveButton(btnAnimated);
      slidersControls.style.display = "block";
      btnAnimateArr.style.display = "inline-flex";
      btnAnimateGrid.style.display = "none";
      explanationBox.style.display = "block";
      
      // ViewBox quadrada fixa para o arranjo centralizado
      svg.setAttribute("viewBox", "-20 -20 360 360");
      drawAnimatedView(bVal, cVal, aVal);
    } else if (currentView === "grid") {
      updateActiveButton(btnGrid);
      slidersControls.style.display = "none";
      btnAnimateArr.style.display = "none";
      btnAnimateGrid.style.display = "inline-flex";
      explanationBox.style.display = "block";
      
      // Centralização fixa ótima para a proporção 3-4-5
      svg.setAttribute("viewBox", "-140 -210 390 390");
      
      container.querySelector("#val-b").textContent = "3.0";
      container.querySelector("#val-c").textContent = "4.0";
      container.querySelector(".val-b-sq").textContent = "9.00";
      container.querySelector(".val-c-sq").textContent = "16.00";
      container.querySelector(".val-a-sq").textContent = "25.00";
      container.querySelector("#val-a-result").textContent = "5.00";
      
      drawGridView();
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function drawStaticView(bVal, cVal, aVal) {
    const scale = 25;
    const b = bVal * scale;
    const c = cVal * scale;

    const Ax = 0, Ay = 0;
    const Bx = 0, By = -b;
    const Cx = c, Cy = 0;

    const Sb = `${Ax},${Ay} ${Bx},${By} ${Bx - b},${By} ${Ax - b},${Ay}`;
    const Sc = `${Ax},${Ay} ${Cx},${Cy} ${Cx},${Cy + c} ${Ax},${Ay + c}`;

    const B2x = Bx + b;
    const B2y = By - c;
    const C2x = Cx + b;
    const C2y = Cy - c;
    const Sh = `${Bx},${By} ${Cx},${Cy} ${C2x},${C2y} ${B2x},${B2y}`;

    const hCx = (Bx + Cx + C2x + B2x) / 4;
    const hCy = (By + Cy + C2y + B2y) / 4;

    svg.innerHTML = `
      <line x1="-200" y1="0" x2="300" y2="0" stroke="#f0f0f0" stroke-width="1"/>
      <line x1="0" y1="-200" x2="0" y2="300" stroke="#f0f0f0" stroke-width="1"/>

      <polygon points="${Sb}" fill="rgba(79,70,229,0.08)" stroke="#4f46e5" stroke-width="2" stroke-dasharray="6,3"/>
      <text x="${Ax - b / 2}" y="${Ay - b / 2}" fill="#4f46e5" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">b²</text>

      <polygon points="${Sc}" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2" stroke-dasharray="6,3"/>
      <text x="${Ax + c / 2}" y="${Ay + c / 2}" fill="#10b981" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">c²</text>

      <polygon points="${Sh}" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" stroke-width="2"/>
      <text x="${hCx}" y="${hCy}" fill="#f59e0b" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">a²</text>

      <polyline points="10,0 10,-10 0,-10" fill="none" stroke="#9ca3af" stroke-width="1.5"/>

      <polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="white" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>

      <text x="${(Ax + Bx) / 2 - 16}" y="${(Ay + By) / 2}" fill="#4f46e5" font-size="13" font-weight="700" text-anchor="middle">b</text>
      <text x="${(Ax + Cx) / 2}" y="${(Ay + Cy) / 2 + 18}" fill="#10b981" font-size="13" font-weight="700" text-anchor="middle">c</text>
      <text x="${(Bx + Cx) / 2 + 12}" y="${(By + Cy) / 2 - 10}" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">a</text>
    `;
  }

  function drawAnimatedView(bVal, cVal, aVal) {
    const L = 320; // Tamanho fixo do quadrado externo para manter centralização
    const totalVal = bVal + cVal;
    const b = (bVal / totalVal) * L;
    const c = (cVal / totalVal) * L;

    const triPoints = `0,0 ${b},0 0,${c}`;
    const TRI_COLORS = [
      "rgba(79, 70, 229, 0.4)",
      "rgba(79, 70, 229, 0.5)",
      "rgba(79, 70, 229, 0.6)",
      "rgba(79, 70, 229, 0.7)"
    ];

    let t1_transform, t2_transform, t3_transform, t4_transform;
    let emptySpaceElements = "";

    if (arrangementState === 1) {
      t1_transform = `translate(0, 0) rotate(0)`;
      t2_transform = `translate(${L}, 0) rotate(90)`;
      t3_transform = `translate(${L}, ${L}) rotate(180)`;
      t4_transform = `translate(0, ${L}) rotate(270)`;

      btnAnimateArr.querySelector("span").textContent = "Reordenar Peças (Arranjo 2)";
      explanationBox.innerHTML = `
        <strong>Arranjo 1 (Quadrado de lado b + c):</strong> Quatro triângulos retângulos cobrem os cantos. 
        O espaço restante no centro forma um quadrado perfeito inclinado correspondente à área da hipotenusa 
        <strong style="color:#f59e0b">a²</strong> (${(aVal * aVal).toFixed(2)} cm²).
      `;

      emptySpaceElements = `
        <polygon points="${b},0 ${L},${b} ${c},${L} 0,${c}" 
          fill="rgba(245,158,11,0.06)" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4" style="transition: all 1s ease;"/>
        <text x="${L/2}" y="${L/2}" fill="#f59e0b" font-size="18" font-weight="800" text-anchor="middle" dominant-baseline="middle">a²</text>
      `;
    } else {
      // Arranjo 2 clássico: Triângulos deslizados de modo simétrico e sem sobreposições
      t1_transform = `translate(0, 0) rotate(0)`;
      t2_transform = `translate(${b}, ${c}) rotate(180)`;
      t3_transform = `translate(${L}, ${L}) rotate(180)`;
      t4_transform = `translate(${c}, ${b}) rotate(0)`;

      btnAnimateArr.querySelector("span").textContent = "Ver Arranjo Inicial (Arranjo 1)";
      explanationBox.innerHTML = `
        <strong>Arranjo 2:</strong> Deslizando os triângulos, formamos dois retângulos. 
        O espaço livre reorganiza-se em dois quadrados perfeitos alinhados nos eixos: 
        um de área <strong style="color:#4f46e5">b²</strong> (${(bVal * bVal).toFixed(2)} cm²) e outro de área 
        <strong style="color:#10b981">c²</strong> (${(cVal * cVal).toFixed(2)} cm²). Como a área do quadrado externo 
        permanece constante, provamos que: <strong style="color:#f59e0b">a² = b² + c²</strong>!
      `;

      emptySpaceElements = `
        <rect x="0" y="${c}" width="${b}" height="${b}" 
          fill="rgba(79, 70, 229, 0.05)" stroke="#4f46e5" stroke-width="2.5" stroke-dasharray="4,4" style="transition: all 1s ease;"/>
        <text x="${b/2}" y="${c + b/2}" fill="#4f46e5" font-size="16" font-weight="800" text-anchor="middle" dominant-baseline="middle">b²</text>

        <rect x="${b}" y="0" width="${c}" height="${c}" 
          fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,4" style="transition: all 1s ease;"/>
        <text x="${b + c/2}" y="${c/2}" fill="#10b981" font-size="16" font-weight="800" text-anchor="middle" dominant-baseline="middle">c²</text>
      `;
    }

    svg.innerHTML = `
      ${emptySpaceElements}
      <rect x="0" y="0" width="${L}" height="${L}" fill="none" stroke="#1a1a1a" stroke-width="3" rx="8"/>
      
      <polygon points="${triPoints}" fill="${TRI_COLORS[0]}" stroke="#4f46e5" stroke-width="1.5"
        style="transform: ${t1_transform}; transform-origin: 0px 0px; transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);"/>
      <polygon points="${triPoints}" fill="${TRI_COLORS[1]}" stroke="#4f46e5" stroke-width="1.5"
        style="transform: ${t2_transform}; transform-origin: 0px 0px; transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);"/>
      <polygon points="${triPoints}" fill="${TRI_COLORS[2]}" stroke="#4f46e5" stroke-width="1.5"
        style="transform: ${t3_transform}; transform-origin: 0px 0px; transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);"/>
      <polygon points="${triPoints}" fill="${TRI_COLORS[3]}" stroke="#4f46e5" stroke-width="1.5"
        style="transform: ${t4_transform}; transform-origin: 0px 0px; transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);"/>
    `;
  }

  function drawGridView() {
    const scale = 28;
    const b = 3 * scale;
    const c = 4 * scale;

    const Ax = 0, Ay = 0;
    const Bx = 0, By = -b;
    const Cx = c, Cy = 0;

    const Sb = `${Ax},${Ay} ${Bx},${By} ${Bx - b},${By} ${Ax - b},${Ay}`;
    const Sc = `${Ax},${Ay} ${Cx},${Cy} ${Cx},${Cy + c} ${Ax},${Ay + c}`;

    const B2x = Bx + 3 * scale;
    const B2y = By - 4 * scale;
    const C2x = Cx + 3 * scale;
    const C2y = Cy - 4 * scale;
    const Sh = `${Bx},${By} ${Cx},${Cy} ${C2x},${C2y} ${B2x},${B2y}`;

    // Vetores diretores da Hipotenusa para preenchimento de slots
    const ux = 0.8, uy = 0.6;   // Direção paralela à hipotenusa
    const wx = 0.6, wy = -0.8;  // Direção ortogonal para fora

    // 25 slots na hipotenusa
    const targetSlots = [];
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        const tx = Bx + i * scale * ux + j * scale * wx;
        const ty = By + i * scale * uy + j * scale * wy;
        targetSlots.push({ x: tx, y: ty });
      }
    }

    // Posições iniciais dos blocos em b²
    const bSquares = [];
    for (let r = 0; r < 3; r++) {
      for (let cl = 0; cl < 3; cl++) {
        bSquares.push({ x: -scale - cl * scale, y: -scale - r * scale });
      }
    }

    // Posições iniciais dos blocos em c²
    const cSquares = [];
    for (let r = 0; r < 4; r++) {
      for (let cl = 0; cl < 4; cl++) {
        cSquares.push({ x: cl * scale, y: r * scale });
      }
    }

    if (gridState === "initial") {
      btnAnimateGrid.querySelector("span").textContent = "Mover Blocos para Hipotenusa";
      explanationBox.innerHTML = `
        <strong>Visão de Grid:</strong> O quadrado do cateto <em>b</em> contém <strong>9 quadradinhos menores</strong> (3×3) 
        e o do cateto <em>c</em> contém <strong>16 quadradinhos menores</strong> (4×4). 
        Ao clicar no botão, os 9 + 16 blocos se reorganizam para preencher exatamente os 
        <strong>25 slots da hipotenusa</strong> (5×5)!
      `;
    } else {
      btnAnimateGrid.querySelector("span").textContent = "Retornar Blocos aos Catetos";
      explanationBox.innerHTML = `
        <strong>Soma de Áreas Demonstrada:</strong> Os 9 blocos roxos (b²) e os 16 blocos verdes (c²) preenchem perfeitamente 
        a área de 25 quadradinhos (a²) do quadrado da hipotenusa. Demonstração aritmética visual direta: 9 + 16 = 25!
      `;
    }

    let svgContent = `
      <line x1="-140" y1="0" x2="250" y2="0" stroke="#f0f0f0" stroke-width="1"/>
      <line x1="0" y1="-140" x2="0" y2="250" stroke="#f0f0f0" stroke-width="1"/>

      <polygon points="${Sb}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
      <polygon points="${Sc}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
      <polygon points="${Sh}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
    `;

    // Desenha slots da hipotenusa
    targetSlots.forEach((slot) => {
      svgContent += `
        <rect x="0" y="0" width="${scale}" height="${scale}" 
          fill="none" stroke="#d1d5db" stroke-width="1" stroke-dasharray="2,2"
          transform="translate(${slot.x}, ${slot.y}) rotate(-53.13)"/>
      `;
    });

    // Renderiza blocos b²
    bSquares.forEach((pos, idx) => {
      const isMoved = (gridState === "moved");
      const tx = isMoved ? targetSlots[idx].x : pos.x;
      const ty = isMoved ? targetSlots[idx].y : pos.y;
      const rot = isMoved ? -53.13 : 0;
      const delay = idx * 0.02;

      svgContent += `
        <rect x="0" y="0" width="${scale - 2}" height="${scale - 2}" rx="3"
          fill="rgba(79, 70, 229, 0.85)" stroke="#4f46e5" stroke-width="1.5"
          style="transform: translate(${tx}px, ${ty}px) rotate(${rot}deg); transform-origin: 0px 0px; 
                 transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transition-delay: ${delay}s;"/>
      `;
    });

    // Renderiza blocos c²
    cSquares.forEach((pos, idx) => {
      const isMoved = (gridState === "moved");
      const targetIdx = 9 + idx;
      const tx = isMoved ? targetSlots[targetIdx].x : pos.x;
      const ty = isMoved ? targetSlots[targetIdx].y : pos.y;
      const rot = isMoved ? -53.13 : 0;
      const delay = idx * 0.02;

      svgContent += `
        <rect x="0" y="0" width="${scale - 2}" height="${scale - 2}" rx="3"
          fill="rgba(16, 185, 129, 0.85)" stroke="#10b981" stroke-width="1.5"
          style="transform: translate(${tx}px, ${ty}px) rotate(${rot}deg); transform-origin: 0px 0px; 
                 transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transition-delay: ${delay}s;"/>
      `;
    });

    // Triângulo de referência
    svgContent += `
      <polyline points="10,0 10,-10 0,-10" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <text x="${(Ax + Bx) / 2 - 14}" y="${(Ay + By) / 2}" fill="#4f46e5" font-size="13" font-weight="700" text-anchor="middle">b</text>
      <text x="${(Ax + Cx) / 2}" y="${(Ay + Cy) / 2 + 18}" fill="#10b981" font-size="13" font-weight="700" text-anchor="middle">c</text>
      <text x="${(Bx + Cx) / 2 + 12}" y="${(By + Cy) / 2 - 10}" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">a</text>
    `;

    svg.innerHTML = svgContent;
  }

  sliderB.addEventListener("input", draw);
  sliderC.addEventListener("input", draw);

  btnStatic.addEventListener("click", () => {
    currentView = "static";
    draw();
  });

  btnAnimated.addEventListener("click", () => {
    currentView = "arrangement";
    draw();
  });

  btnGrid.addEventListener("click", () => {
    currentView = "grid";
    draw();
  });

  btnAnimateArr.addEventListener("click", () => {
    arrangementState = (arrangementState === 1) ? 2 : 1;
    draw();
  });

  btnAnimateGrid.addEventListener("click", () => {
    gridState = (gridState === "initial") ? "moved" : "initial";
    draw();
  });

  draw();
}
