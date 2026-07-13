export function initWidgetPitagoras(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="widget-pitagoras-wrapper">
      <div class="widget-top-actions" style="display: flex; gap: 0.8rem; margin-bottom: 1.5rem; flex-wrap: wrap; justify-content: center;">
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

      <!-- Action buttons specific to views -->
      <div class="widget-action-bar" style="display: flex; justify-content: center; margin-bottom: 1rem; gap: 1rem;">
        <button id="btn-animate-arr" class="btn btn-primary" style="display: none;">
          <i data-lucide="play"></i> <span>Reordenar Peças</span>
        </button>
        <button id="btn-animate-grid" class="btn btn-primary" style="display: none;">
          <i data-lucide="combine"></i> <span>Mover Blocos para Hipotenusa</span>
        </button>
      </div>

      <!-- Sliders (hidden in grid view as grid view is fixed to 3-4-5) -->
      <div id="sliders-controls" class="widget-controls" style="margin-bottom: 1.5rem;">
        <div class="control-group">
          <label for="cateto-b-range">Cateto <em>b</em>: <strong id="val-b">3.0</strong> cm</label>
          <input type="range" id="cateto-b-range" min="2" max="6" step="0.5" value="3">
        </div>
        <div class="control-group">
          <label for="cateto-c-range">Cateto <em>c</em>: <strong id="val-c">4.0</strong> cm</label>
          <input type="range" id="cateto-c-range" min="2" max="6" step="0.5" value="4">
        </div>
      </div>

      <div class="widget-visualization">
        <svg id="pitagoras-svg" viewBox="-180 -180 460 460" width="100%" height="360px">
          <!-- Dynamically populated -->
        </svg>
      </div>

      <div class="widget-math-summary">
        <div class="math-eq">
          <span class="term-a">a²</span> = <span class="term-b">b²</span> + <span class="term-c">c²</span>
        </div>
        <div class="math-values" id="eq-resolved">
          <span class="val-a-sq">25.00</span> = <span class="val-b-sq">9.00</span> + <span class="val-c-sq">16.00</span>
        </div>
        <div class="math-hypotenuse">
          Hipotenusa <em>(a)</em> ≈ <span id="val-a-result">5.00</span> cm
        </div>
      </div>

      <div id="arrangement-explanation" class="widget-explanation-box" style="display: none; margin-top: 1rem; padding: 1rem; background-color: var(--accent-light); border-left: 4px solid var(--accent); border-radius: 0 12px 12px 0; font-size: 0.95rem; line-height: 1.5;">
        <!-- Dynamically populated -->
      </div>
    </div>
  `;

  // UI buttons
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

  // State: "static", "arrangement", "grid"
  let currentView = "static";
  // Sub-states
  let arrangementState = 1;
  let gridState = "initial"; // "initial" or "moved"

  function updateActiveButton(activeBtn) {
    [btnStatic, btnAnimated, btnGrid].forEach(btn => {
      btn.style.border = "1px solid var(--border-color)";
      btn.style.background = "var(--card-bg)";
      btn.style.color = "var(--text-main)";
    });
    activeBtn.style.border = "1px solid var(--accent)";
    activeBtn.style.background = "var(--accent-light)";
    activeBtn.style.color = "var(--accent)";
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
      svg.setAttribute("viewBox", "-180 -180 460 460");
      drawStaticView(bVal, cVal, aVal);
    } else if (currentView === "arrangement") {
      updateActiveButton(btnAnimated);
      slidersControls.style.display = "block";
      btnAnimateArr.style.display = "inline-flex";
      btnAnimateGrid.style.display = "none";
      explanationBox.style.display = "block";
      svg.setAttribute("viewBox", "-20 -20 440 440");
      drawAnimatedView(bVal, cVal, aVal);
    } else if (currentView === "grid") {
      updateActiveButton(btnGrid);
      slidersControls.style.display = "none"; // Hide sliders to maintain a clean 3-4-5 grid
      btnAnimateArr.style.display = "none";
      btnAnimateGrid.style.display = "inline-flex";
      explanationBox.style.display = "block";
      svg.setAttribute("viewBox", "-180 -180 460 460");
      
      // Override values for clean 3-4-5 visual comparison
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
    const scale = 28;
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
      <line x1="-180" y1="0" x2="280" y2="0" stroke="#f0f0f0" stroke-width="1"/>
      <line x1="0" y1="-180" x2="0" y2="280" stroke="#f0f0f0" stroke-width="1"/>

      <!-- Square on b (indigo) -->
      <polygon points="${Sb}" fill="rgba(79,70,229,0.08)" stroke="#4f46e5" stroke-width="2" stroke-dasharray="6,3"/>
      <text x="${Ax - b / 2}" y="${Ay - b / 2}" fill="#4f46e5" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">b²</text>

      <!-- Square on c (green) -->
      <polygon points="${Sc}" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2" stroke-dasharray="6,3"/>
      <text x="${Ax + c / 2}" y="${Ay + c / 2}" fill="#10b981" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">c²</text>

      <!-- Square on Hypotenuse a (amber) -->
      <polygon points="${Sh}" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" stroke-width="2"/>
      <text x="${hCx}" y="${hCy}" fill="#f59e0b" font-size="14" font-weight="700" text-anchor="middle" dominant-baseline="middle">a²</text>

      <polyline points="10,0 10,-10 0,-10" fill="none" stroke="#9ca3af" stroke-width="1.5"/>

      <!-- Triangle -->
      <polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="white" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>

      <text x="${(Ax + Bx) / 2 - 16}" y="${(Ay + By) / 2}" fill="#4f46e5" font-size="13" font-weight="700" text-anchor="middle">b</text>
      <text x="${(Ax + Cx) / 2}" y="${(Ay + Cy) / 2 + 18}" fill="#10b981" font-size="13" font-weight="700" text-anchor="middle">c</text>
      <text x="${(Bx + Cx) / 2 + 12}" y="${(By + Cy) / 2 - 10}" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">a</text>
    `;
  }

  function drawAnimatedView(bVal, cVal, aVal) {
    const LVal = bVal + cVal;
    const scale = 360 / LVal;
    const b = bVal * scale;
    const c = cVal * scale;
    const L = LVal * scale;

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
        <strong>Arranjo 1 (Quadrado de lado b + c):</strong> Quatro triângulos retângulos idênticos cobrem os quatro cantos. 
        O espaço vazio no centro forma um quadrado inclinado correspondente à área da hipotenusa 
        <strong style="color:#f59e0b">a²</strong> (25.00 cm²).
      `;

      emptySpaceElements = `
        <polygon points="${b},0 ${L},${b} ${c},${L} 0,${c}" 
          fill="rgba(245,158,11,0.06)" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4" style="transition: all 1s ease;"/>
        <text x="${L/2}" y="${L/2}" fill="#f59e0b" font-size="18" font-weight="800" text-anchor="middle" dominant-baseline="middle">a²</text>
      `;
    } else {
      t1_transform = `translate(0, 0) rotate(0)`;
      t2_transform = `translate(${b}, ${c}) rotate(180)`;
      t3_transform = `translate(${L}, ${L}) rotate(180)`;
      t4_transform = `translate(${b}, ${c}) rotate(0)`;

      btnAnimateArr.querySelector("span").textContent = "Ver Arranjo Inicial (Arranjo 1)";
      explanationBox.innerHTML = `
        <strong>Arranjo 2:</strong> Deslizamos os triângulos para formar dois retângulos. 
        O espaço vazio resultante agora se reorganiza em dois quadrados perfeitamente alinhados: 
        um de área <strong style="color:#4f46e5">b²</strong> (9.00 cm²) e outro de área 
        <strong style="color:#10b981">c²</strong> (16.00 cm²). Como a área total é constante, 
        provamos visualmente que <strong style="color:#f59e0b">a² = b² + c²</strong>!
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
    // Fixed scale for a 3-4-5 grid
    const scale = 28;
    const b = 3 * scale; // 84
    const c = 4 * scale; // 112

    const Ax = 0, Ay = 0;
    const Bx = 0, By = -b;
    const Cx = c, Cy = 0;

    // Boundaries of the three squares
    const Sb = `${Ax},${Ay} ${Bx},${By} ${Bx - b},${By} ${Ax - b},${Ay}`;
    const Sc = `${Ax},${Ay} ${Cx},${Cy} ${Cx},${Cy + c} ${Ax},${Ay + c}`;

    const B2x = Bx + 3 * scale;
    const B2y = By - 4 * scale;
    const C2x = Cx + 3 * scale;
    const C2y = Cy - 4 * scale;
    const Sh = `${Bx},${By} ${Cx},${Cy} ${C2x},${C2y} ${B2x},${B2y}`;

    // Hypotenuse vectors
    // u = direction along hypotenuse = (0.8, 0.6)
    // w = direction perpendicular outward = (0.6, -0.8)
    const ux = 0.8, uy = 0.6;
    const wx = 0.6, wy = -0.8;

    // Generate coordinates of target slots on hypotenuse square (5x5 slots)
    const targetSlots = [];
    for (let j = 0; j < 5; j++) { // rows (outward)
      for (let i = 0; i < 5; i++) { // columns (along hyp)
        const tx = Bx + i * scale * ux + j * scale * wx;
        const ty = By + i * scale * uy + j * scale * wy;
        targetSlots.push({ x: tx, y: ty });
      }
    }

    // Generate initial coordinates of small squares in b² (3x3 grid)
    const bSquares = [];
    for (let r = 0; r < 3; r++) {
      for (let cl = 0; cl < 3; cl++) {
        bSquares.push({
          x: -scale - cl * scale,
          y: -scale - r * scale
        });
      }
    }

    // Generate initial coordinates of small squares in c² (4x4 grid)
    const cSquares = [];
    for (let r = 0; r < 4; r++) {
      for (let cl = 0; cl < 4; cl++) {
        cSquares.push({
          x: cl * scale,
          y: r * scale
        });
      }
    }

    if (gridState === "initial") {
      btnAnimateGrid.querySelector("span").textContent = "Mover Blocos para Hipotenusa";
      explanationBox.innerHTML = `
        <strong>Visão de Grid:</strong> O quadrado do cateto <em>b</em> contém <strong>9 quadradinhos menores</strong> (3×3) 
        e o quadrado do cateto <em>c</em> contém <strong>16 quadradinhos menores</strong> (4×4). 
        Ao clicar em "Mover Blocos", os 9 + 16 blocos voam e se reorganizam para preencher exatamente os 
        <strong>25 slots da hipotenusa</strong> (5×5)!
      `;
    } else {
      btnAnimateGrid.querySelector("span").textContent = "Retornar Blocos aos Catetos";
      explanationBox.innerHTML = `
        <strong>Blocos Organizados:</strong> Os 9 blocos roxos ($b^2$) e os 16 blocos verdes ($c^2$) preenchem perfeitamente 
        a área de 25 quadradinhos ($a^2$) do quadrado da hipotenusa. 
        Isto ilustra a prova aritmética concreta: $9 + 16 = 25$!
      `;
    }

    // Generate SVG Content
    let svgContent = `
      <line x1="-180" y1="0" x2="280" y2="0" stroke="#f0f0f0" stroke-width="1"/>
      <line x1="0" y1="-180" x2="0" y2="280" stroke="#f0f0f0" stroke-width="1"/>

      <!-- Outline squares -->
      <polygon points="${Sb}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
      <polygon points="${Sc}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
      <polygon points="${Sh}" fill="none" stroke="#e5e7eb" stroke-width="2" stroke-dasharray="3,3"/>
    `;

    // Render hypotenuse slot boundaries (empty dashed squares)
    targetSlots.forEach((slot, index) => {
      svgContent += `
        <rect x="0" y="0" width="${scale}" height="${scale}" 
          fill="none" stroke="#d1d5db" stroke-width="1" stroke-dasharray="2,2"
          transform="translate(${slot.x}, ${slot.y}) rotate(36.87)"/>
      `;
    });

    // Render the 9 blocks of b²
    bSquares.forEach((pos, idx) => {
      // If moved, target is slot idx 0 to 8
      const isMoved = (gridState === "moved");
      const tx = isMoved ? targetSlots[idx].x : pos.x;
      const ty = isMoved ? targetSlots[idx].y : pos.y;
      const rot = isMoved ? 36.87 : 0;
      const delay = idx * 0.03;

      svgContent += `
        <rect x="0" y="0" width="${scale - 2}" height="${scale - 2}" rx="3"
          fill="rgba(79, 70, 229, 0.85)" stroke="#4f46e5" stroke-width="1.5"
          style="transform: translate(${tx}px, ${ty}px) rotate(${rot}deg); transform-origin: 0px 0px; 
                 transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transition-delay: ${delay}s;"/>
      `;
    });

    // Render the 16 blocks of c²
    cSquares.forEach((pos, idx) => {
      // If moved, target is slot idx 9 to 24
      const isMoved = (gridState === "moved");
      const targetIdx = 9 + idx;
      const tx = isMoved ? targetSlots[targetIdx].x : pos.x;
      const ty = isMoved ? targetSlots[targetIdx].y : pos.y;
      const rot = isMoved ? 36.87 : 0;
      const delay = idx * 0.03;

      svgContent += `
        <rect x="0" y="0" width="${scale - 2}" height="${scale - 2}" rx="3"
          fill="rgba(16, 185, 129, 0.85)" stroke="#10b981" stroke-width="1.5"
          style="transform: translate(${tx}px, ${ty}px) rotate(${rot}deg); transform-origin: 0px 0px; 
                 transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1); transition-delay: ${delay}s;"/>
      `;
    });

    // Draw the main triangle on top
    svgContent += `
      <polyline points="10,0 10,-10 0,-10" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
      <polygon points="${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
      <text x="${(Ax + Bx) / 2 - 14}" y="${(Ay + By) / 2}" fill="#4f46e5" font-size="13" font-weight="700" text-anchor="middle">b</text>
      <text x="${(Ax + Cx) / 2}" y="${(Ay + Cy) / 2 + 18}" fill="#10b981" font-size="13" font-weight="700" text-anchor="middle">c</text>
      <text x="${(Bx + Cx) / 2 + 12}" y="${(By + Cy) / 2 - 10}" fill="#f59e0b" font-size="13" font-weight="700" text-anchor="middle">a</text>
    `;

    svg.innerHTML = svgContent;
  }

  // Event Listeners
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

  // Initial draw
  draw();
}
