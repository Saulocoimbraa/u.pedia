export function initWidgetQuadrilateros(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Cores modernas baseadas no Tailwind CSS
  const COLORS = {
    quadrilatero: "#6366f1",  // indigo
    trapezoide: "#ef4444",    // red (sem lados paralelos)
    trapezio: "#f59e0b",      // amber (1 par de lados paralelos)
    paralelogramo: "#10b981", // emerald (2 pares de lados paralelos)
    retangulo: "#3b82f6",     // blue
    losango: "#8b5cf6",       // violet
    quadrado: "#ec4899"       // pink (combinação de retângulo + losango)
  };

  // Definição dos níveis de revelação (0 a 4) com mapeamento de conexões ativas
  const STEPS = [
    {
      level: 0,
      title: "1. A Origem: Quadriláteros",
      desc: "Qualquer polígono de 4 lados. Começamos a divisão pela presença de lados opostos paralelos.",
      activeNodes: ["quadrilatero"],
      activeConnections: []
    },
    {
      level: 1,
      title: "2. Sem Paralelismo vs. Trapezoides",
      desc: "Dividimos entre os que não possuem lados paralelos (Trapezoides) e os que possuem pelo menos um par.",
      activeNodes: ["quadrilatero", "trapezoide", "trapezio"],
      activeConnections: ["q-to-to", "q-to-tr"]
    },
    {
      level: 2,
      title: "3. Paralelogramos (2 Pares Paralelos)",
      desc: "Se o trapézio ganha um segundo par de lados paralelos, ele se torna um Paralelograma.",
      activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo"],
      activeConnections: ["q-to-to", "q-to-tr", "tr-to-p"]
    },
    {
      level: 3,
      title: "4. Especializações: Retângulos e Losangos",
      desc: "O paralelogramo pode se especializar por ângulos retos (Retângulo) ou por lados iguais (Losango).",
      activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango"],
      activeConnections: ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l"]
    },
    {
      level: 4,
      title: "5. A Perfeição: O Quadrado",
      desc: "O Quadrado é o encontro perfeito: possui 4 ângulos retos (como o retângulo) e 4 lados iguais (como o losango).",
      activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango", "quadrado"],
      activeConnections: ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l", "r-to-q", "l-to-q"]
    }
  ];

  // Injeção do HTML, do SVG responsivo e dos estilos CSS
  container.innerHTML = `
    <style>
      .wq-wrapper {
        font-family: system-ui, -apple-system, sans-serif;
        background: #0f172a;
        color: #f8fafc;
        padding: 1.5rem;
        border-radius: 12px;
        max-width: 800px;
        margin: 0 auto;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
      }
      .wq-controls {
        margin-bottom: 1.5rem;
        background: #1e293b;
        padding: 1.25rem;
        border-radius: 8px;
      }
      .wq-control-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .wq-control-group label {
        font-size: 1.1rem;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
      }
      .wq-slider {
        width: 100%;
        accent-color: #6366f1;
        cursor: pointer;
        height: 8px;
        border-radius: 4px;
      }
      
      /* Visualização em SVG */
      .wq-svg-container {
        width: 100%;
        background: #0b0f19;
        border-radius: 8px;
        padding: 10px;
        box-sizing: border-box;
      }
      .wq-node-rect {
        rx: 12px;
        ry: 12px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        stroke-width: 2.5;
        cursor: pointer;
      }
      .wq-node-shape {
        stroke-width: 2;
        fill: transparent;
        transition: all 0.3s ease;
      }
      .wq-node-text-title {
        font-family: system-ui, sans-serif;
        font-weight: bold;
        font-size: 20px;
        pointer-events: none;
      }
      .wq-node-text-desc {
        font-family: system-ui, sans-serif;
        font-size: 16px;
        pointer-events: none;
      }
      .wq-connection {
        stroke-width: 2.5;
        transition: all 0.3s ease;
        stroke-dasharray: 4 4;
      }
      .wq-connection.active {
        stroke-dasharray: none;
      }

      /* Legenda e Resumos */
      .wq-summary-box {
        margin-top: 1.5rem;
        background: #1e293b;
        padding: 1.25rem;
        border-radius: 8px;
        border-left: 5px solid #6366f1;
        min-height: 90px;
        transition: border-color 0.3s ease;
      }
      .wq-summary-title {
        font-weight: 700;
        color: #f1f5f9;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }
      .wq-summary-text {
        font-size: 1rem;
        color: #cbd5e1;
        line-height: 1.5;
      }
      .wq-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.25rem;
        justify-content: center;
      }
      .wq-legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        background: #1e293b;
        padding: 0.4rem 0.8rem;
        border-radius: 9999px;
      }
      .wq-legend-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    </style>

    <div class="wq-wrapper">
      <div class="wq-controls">
        <div class="wq-control-group">
          <label for="wq-range">
            <span>Progresso da Classificação:</span>
            <strong id="wq-val-step" style="color: #818cf8;">Nível 1 / 5</strong>
          </label>
          <input type="range" id="wq-range" class="wq-slider" min="0" max="4" step="1" value="0">
        </div>
      </div>

      <div class="wq-svg-container">
        <svg id="wq-svg-tree" viewBox="0 0 760 720" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          
          <path id="conn-q-to-to" class="wq-connection" d="M 380,125 L 195,165" stroke="#334155" fill="none" />
          <path id="conn-q-to-tr" class="wq-connection" d="M 380,125 L 565,165" stroke="#334155" fill="none" />
          <path id="conn-tr-to-p" class="wq-connection" d="M 565,265 L 380,305" stroke="#334155" fill="none" />
          <path id="conn-p-to-r" class="wq-connection" d="M 380,405 L 195,445" stroke="#334155" fill="none" />
          <path id="conn-p-to-l" class="wq-connection" d="M 380,405 L 565,445" stroke="#334155" fill="none" />
          <path id="conn-r-to-q" class="wq-connection" d="M 195,545 L 380,585" stroke="#334155" fill="none" />
          <path id="conn-l-to-q" class="wq-connection" d="M 565,545 L 380,585" stroke="#334155" fill="none" />

          <g id="g-quadrilatero">
            <rect id="rect-quadrilatero" class="wq-node-rect" x="280" y="25" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <polygon id="shape-quadrilatero" class="wq-node-shape" points="350,70 375,35 415,45 395,70" stroke="#475569" />
            <text class="wq-node-text-title" x="380" y="92" fill="#ffffff" text-anchor="middle">Quadrilátero</text>
            <text class="wq-node-text-desc" x="380" y="112" fill="#94a3b8" text-anchor="middle">4 Lados</text>
          </g>

          <g id="g-trapezoide">
            <rect id="rect-trapezoide" class="wq-node-rect" x="95" y="165" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <polygon id="shape-trapezoide" class="wq-node-shape" points="165,210 185,175 225,190 210,210" stroke="#475569" />
            <text class="wq-node-text-title" x="195" y="232" fill="#ffffff" text-anchor="middle">Trapezóide</text>
            <text class="wq-node-text-desc" x="195" y="252" fill="#94a3b8" text-anchor="middle">0 pares paralelos</text>
          </g>

          <g id="g-trapezio">
            <rect id="rect-trapezio" class="wq-node-rect" x="465" y="165" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <polygon id="shape-trapezio" class="wq-node-shape" points="535,210 550,175 580,175 595,210" stroke="#475569" />
            <text class="wq-node-text-title" x="565" y="232" fill="#ffffff" text-anchor="middle">Trapézio</text>
            <text class="wq-node-text-desc" x="565" y="252" fill="#94a3b8" text-anchor="middle">≥ 1 par paralelo</text>
          </g>

          <g id="g-paralelogramo">
            <rect id="rect-paralelogramo" class="wq-node-rect" x="280" y="305" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <polygon id="shape-paralelogramo" class="wq-node-shape" points="350,350 365,315 410,315 395,350" stroke="#475569" />
            <text class="wq-node-text-title" x="380" y="372" fill="#ffffff" text-anchor="middle">Paralelogramo</text>
            <text class="wq-node-text-desc" x="380" y="392" fill="#94a3b8" text-anchor="middle">2 pares paralelos</text>
          </g>

          <g id="g-retangulo">
            <rect id="rect-retangulo" class="wq-node-rect" x="95" y="445" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <rect id="shape-retangulo" class="wq-node-shape" x="165" y="455" width="60" height="35" stroke="#475569" />
            <text class="wq-node-text-title" x="195" y="512" fill="#ffffff" text-anchor="middle">Retângulo</text>
            <text class="wq-node-text-desc" x="195" y="532" fill="#94a3b8" text-anchor="middle">4 ângulos retos</text>
          </g>

          <g id="g-losango">
            <rect id="rect-losango" class="wq-node-rect" x="465" y="445" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <polygon id="shape-losango" class="wq-node-shape" points="565,450 585,470 565,490 545,470" stroke="#475569" />
            <text class="wq-node-text-title" x="565" y="512" fill="#ffffff" text-anchor="middle">Losango</text>
            <text class="wq-node-text-desc" x="565" y="532" fill="#94a3b8" text-anchor="middle">4 lados iguais</text>
          </g>

          <g id="g-quadrado">
            <rect id="rect-quadrado" class="wq-node-rect" x="280" y="585" width="200" height="100" fill="#1e293b" stroke="#334155" />
            <rect id="shape-quadrado" class="wq-node-shape" x="362.5" y="595" width="35" height="35" stroke="#475569" />
            <text class="wq-node-text-title" x="380" y="652" fill="#ffffff" text-anchor="middle">Quadrado</text>
            <text class="wq-node-text-desc" x="380" y="672" fill="#94a3b8" text-anchor="middle">Regular (Retângulo + Losango)</text>
          </g>

        </svg>
      </div>

      <div class="wq-summary-box" id="wq-summary-box">
        <div class="wq-summary-title" id="wq-summary-title">Carregando...</div>
        <div class="wq-summary-text" id="wq-summary-text">Arraste o controle para iniciar.</div>
      </div>

      <div class="wq-legend" id="wq-legend"></div>
    </div>
  `;

  // Seletores locais
  const slider = container.querySelector("#wq-range");
  const stepLabel = container.querySelector("#wq-val-step");
  const summaryTitle = container.querySelector("#wq-summary-title");
  const summaryText = container.querySelector("#wq-summary-text");
  const summaryBox = container.querySelector("#wq-summary-box");
  const legendContainer = container.querySelector("#wq-legend");

  // Hover dinâmico integrado aos elementos SVG
  const allGroups = ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango", "quadrado"];

  allGroups.forEach(id => {
    const group = container.querySelector(`#g-${id}`);
    if (group) {
      group.addEventListener("mouseenter", () => {
        const rect = container.querySelector(`#rect-${id}`);
        const stepIndex = parseInt(slider.value);
        if (STEPS[stepIndex].activeNodes.includes(id)) {
          rect.style.strokeWidth = "4";
        }
      });
      group.addEventListener("mouseleave", () => {
        const rect = container.querySelector(`#rect-${id}`);
        rect.style.strokeWidth = "2.5";
      });
    }
  });

  // Atualização de estado e renderização da árvore
  function update() {
    const stepIndex = parseInt(slider.value);
    const currentStep = STEPS[stepIndex];

    // Atualiza cabeçalho do slider
    stepLabel.textContent = `Nível ${stepIndex + 1} / 5`;

    // Atualiza os nós da árvore e as formas geométricas com base nas cores de destaque
    allGroups.forEach(id => {
      const rect = container.querySelector(`#rect-${id}`);
      const shape = container.querySelector(`#shape-${id}`);
      const group = container.querySelector(`#g-${id}`);
      const isActive = currentStep.activeNodes.includes(id);

      if (rect && group) {
        if (isActive) {
          rect.style.stroke = COLORS[id];
          rect.style.fill = "#1e293b";
          group.style.opacity = "1";

          if (shape) {
            shape.style.stroke = COLORS[id];
            shape.style.fill = `${COLORS[id]}22`; // Preenchimento semitransparente na cor do nó
          }
        } else {
          rect.style.stroke = "#334155";
          rect.style.fill = "#0f172a";
          group.style.opacity = "0.15";

          if (shape) {
            shape.style.stroke = "#475569";
            shape.style.fill = "transparent";
          }
        }
      }
    });

    // Atualiza as conexões (linhas conectivas)
    const allConnections = ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l", "r-to-q", "l-to-q"];
    allConnections.forEach(connId => {
      const path = container.querySelector(`#conn-${connId}`);
      const isActive = currentStep.activeConnections.includes(connId);

      if (path) {
        if (isActive) {
          path.classList.add("active");
          path.style.stroke = "#6366f1"; // Linha ativa destacada com Indigo
          path.style.opacity = "1";
        } else {
          path.classList.remove("active");
          path.style.stroke = "#334155";
          path.style.opacity = "0.15";
        }
      }
    });

    // Atualiza painel explicativo inferior
    summaryTitle.textContent = currentStep.title;
    summaryText.textContent = currentStep.desc;

    // Ajusta a borda colorida do painel
    const mainNodeColor = COLORS[currentStep.activeNodes[currentStep.activeNodes.length - 1]];
    summaryBox.style.borderLeftColor = mainNodeColor;

    // Reconstrói a Legenda Dinâmica com estilos melhorados
    legendContainer.innerHTML = currentStep.activeNodes.map(nodeName => {
      const formattedName = nodeName.charAt(0).toUpperCase() + nodeName.slice(1);
      return `
        <div class="wq-legend-item" style="border: 1px solid ${COLORS[nodeName]}33">
          <div class="wq-legend-dot" style="background: ${COLORS[nodeName]}; box-shadow: 0 0 6px ${COLORS[nodeName]}88;"></div>
          <span style="font-weight: 600;">${formattedName}</span>
        </div>
      `;
    }).join("");
  }

  // Event Listeners
  slider.addEventListener("input", update);

  // Inicialização
  update();
}