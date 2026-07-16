/**
 * js/widgets/widgetQuadrilateros.js
 * Widget interativo: Árvore Genealógica e Classificação de Quadriláteros (Versão SVG com Ilustrações)
 * Expõe window.initWidgetQuadrilateros(containerId)
 */
window.initWidgetQuadrilateros = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    // Paleta de cores moderna (Tailwind CSS)
    var COLORS = {
        quadrilatero: "#6366f1",  // Indigo
        trapezoide: "#ef4444",    // Red
        trapezio: "#f59e0b",      // Amber
        paralelogramo: "#10b981", // Emerald
        retangulo: "#3b82f6",     // Blue
        losango: "#8b5cf6",       // Violet
        quadrado: "#ec4899"       // Pink
    };

    // Níveis da classificação lógica para revelação progressiva
    var STEPS = [
        {
            level: 0,
            title: "1. A Origem: Quadriláteros",
            desc: "Polígonos de 4 lados. A primeira grande divisão se baseia na presença de lados opostos paralelos.",
            activeNodes: ["quadrilatero"],
            activeConnections: []
        },
        {
            level: 1,
            title: "2. Sem Lados Paralelos vs. Trapézios",
            desc: "Divididos entre os que não possuem lados paralelos (Trapezóides) e os que possuem pelo menos 1 par de lados paralelos (Trapézios).",
            activeNodes: ["quadrilatero", "trapezoide", "trapezio"],
            activeConnections: ["q-to-to", "q-to-tr"]
        },
        {
            level: 2,
            title: "3. Paralelogramos (2 Pares Paralelos)",
            desc: "Se o trapézio possui ambos os pares de lados opostos paralelos, ele se especializa como um Paralelogramo.",
            activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo"],
            activeConnections: ["q-to-to", "q-to-tr", "tr-to-p"]
        },
        {
            level: 3,
            title: "4. Retângulos e Losangos",
            desc: "O paralelogramo se divide por propriedades: 4 ângulos retos (Retângulo) ou 4 lados iguais (Losango).",
            activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango"],
            activeConnections: ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l"]
        },
        {
            level: 4,
            title: "5. A Síntese Perfeita: O Quadrado",
            desc: "O Quadrado é o polígono regular por excelência: possui as propriedades do Retângulo (ângulos retos) e do Losango (lados iguais).",
            activeNodes: ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango", "quadrado"],
            activeConnections: ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l", "r-to-q", "l-to-q"]
        }
    ];

    // Injeção do layout HTML, do SVG e da folha de estilos encapsulada
    container.innerHTML =
        '<style>' +
        '.wq-wrapper { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; padding: 1.5rem; border-radius: 12px; max-width: 800px; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); }' +
        '.wq-controls { margin-bottom: 1.5rem; background: #1e293b; padding: 1.25rem; border-radius: 8px; }' +
        '.wq-control-group { display: flex; flex-direction: column; gap: 0.75rem; }' +
        '.wq-control-group label { font-size: 1.1rem; font-weight: 600; display: flex; justify-content: space-between; }' +
        '.wq-slider { width: 100%; accent-color: #6366f1; cursor: pointer; height: 8px; border-radius: 4px; }' +
        '.wq-svg-container { width: 100%; background: #0b0f19; border-radius: 8px; padding: 10px; box-sizing: border-box; }' +
        '.wq-node-rect { rx: 12px; ry: 12px; transition: all 0.3s ease; stroke-width: 2.5; cursor: pointer; }' +
        '.wq-node-shape { stroke-width: 2; fill: transparent; transition: all 0.3s ease; }' +
        '.wq-node-text-title { font-family: system-ui, sans-serif; font-weight: bold; font-size: 20px; pointer-events: none; }' +
        '.wq-node-text-desc { font-family: system-ui, sans-serif; font-size: 16px; pointer-events: none; }' +
        '.wq-connection { stroke-width: 2.5; transition: all 0.3s ease; stroke-dasharray: 4 4; }' +
        '.wq-connection.active { stroke-dasharray: none; }' +
        '.wq-summary-box { margin-top: 1.5rem; background: #1e293b; padding: 1.25rem; border-radius: 8px; border-left: 5px solid #6366f1; min-height: 90px; transition: border-color 0.3s ease; }' +
        '.wq-summary-title { font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; font-size: 1.2rem; }' +
        '.wq-summary-text { font-size: 1rem; color: #cbd5e1; line-height: 1.5; }' +
        '.wq-legend { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; justify-content: center; }' +
        '.wq-legend-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; background: #1e293b; padding: 0.4rem 0.8rem; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.05); transition: border-color 0.3s ease; }' +
        '.wq-legend-dot { width: 10px; height: 10px; border-radius: 50%; }' +
        '</style>' +
        '<div class="wq-wrapper">' +
        '<div class="wq-controls">' +
        '<div class="wq-control-group">' +
        '<label for="wq-range"><span>Classificação dos Quadriláteros:</span> <strong id="wq-val-step" style="color: #818cf8;">Nível 1 / 5</strong></label>' +
        '<input type="range" id="wq-range" class="wq-slider" min="0" max="4" step="1" value="0">' +
        '</div>' +
        '</div>' +
        '<div class="wq-svg-container">' +
        // SVG expandido para 720px de altura para dar espaço às novas ilustrações geométricas internas
        '<svg id="wq-svg-tree" viewBox="0 0 760 720" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">' +

        // Conexões (Caminhos lógicos)
        '<path id="conn-q-to-to" class="wq-connection" d="M 380,125 L 195,165" stroke="#334155" fill="none" />' +
        '<path id="conn-q-to-tr" class="wq-connection" d="M 380,125 L 565,165" stroke="#334155" fill="none" />' +
        '<path id="conn-tr-to-p" class="wq-connection" d="M 565,265 L 380,305" stroke="#334155" fill="none" />' +
        '<path id="conn-p-to-r" class="wq-connection" d="M 380,405 L 195,445" stroke="#334155" fill="none" />' +
        '<path id="conn-p-to-l" class="wq-connection" d="M 380,405 L 565,445" stroke="#334155" fill="none" />' +
        '<path id="conn-r-to-q" class="wq-connection" d="M 195,545 L 380,585" stroke="#334155" fill="none" />' +
        '<path id="conn-l-to-q" class="wq-connection" d="M 565,545 L 380,585" stroke="#334155" fill="none" />' +

        // 1. Quadrilátero (Centro, Topo)
        '<g id="g-quadrilatero">' +
        '  <rect id="rect-quadrilatero" class="wq-node-rect" x="280" y="25" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <polygon id="shape-quadrilatero" class="wq-node-shape" points="355,70 375,38 415,48 395,73" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="380" y="94" fill="#ffffff" text-anchor="middle">Quadrilátero</text>' +
        '  <text class="wq-node-text-desc" x="380" y="112" fill="#94a3b8" text-anchor="middle">Polígono de 4 lados</text>' +
        '</g>' +

        // 2. Trapezóide (Esquerda, Nível 2)
        '<g id="g-trapezoide">' +
        '  <rect id="rect-trapezoide" class="wq-node-rect" x="95" y="165" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <polygon id="shape-trapezoide" class="wq-node-shape" points="165,212 185,178 225,193 210,215" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="195" y="234" fill="#ffffff" text-anchor="middle">Trapezóide</text>' +
        '  <text class="wq-node-text-desc" x="195" y="252" fill="#94a3b8" text-anchor="middle">Sem lados paralelos</text>' +
        '</g>' +

        // 3. Trapézio (Direita, Nível 2)
        '<g id="g-trapezio">' +
        '  <rect id="rect-trapezio" class="wq-node-rect" x="465" y="165" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <polygon id="shape-trapezio" class="wq-node-shape" points="535,212 550,178 580,178 595,212" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="565" y="234" fill="#ffffff" text-anchor="middle">Trapézio</text>' +
        '  <text class="wq-node-text-desc" x="565" y="252" fill="#94a3b8" text-anchor="middle">≥ 1 par de lados paralelos</text>' +
        '</g>' +

        // 4. Paralelogramo (Centro, Nível 3)
        '<g id="g-paralelogramo">' +
        '  <rect id="rect-paralelogramo" class="wq-node-rect" x="280" y="305" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <polygon id="shape-paralelogramo" class="wq-node-shape" points="350,352 365,318 410,318 395,352" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="380" y="374" fill="#ffffff" text-anchor="middle">Paralelogramo</text>' +
        '  <text class="wq-node-text-desc" x="380" y="392" fill="#94a3b8" text-anchor="middle">2 pares de lados paralelos</text>' +
        '</g>' +

        // 5. Retângulo (Esquerda, Nível 4)
        '<g id="g-retangulo">' +
        '  <rect id="rect-retangulo" class="wq-node-rect" x="95" y="445" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <rect id="shape-retangulo" class="wq-node-shape" x="165" y="458" width="60" height="35" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="195" y="514" fill="#ffffff" text-anchor="middle">Retângulo</text>' +
        '  <text class="wq-node-text-desc" x="195" y="532" fill="#94a3b8" text-anchor="middle">4 ângulos retos</text>' +
        '</g>' +

        // 6. Losango (Direita, Nível 4)
        '<g id="g-losango">' +
        '  <rect id="rect-losango" class="wq-node-rect" x="465" y="445" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <polygon id="shape-losango" class="wq-node-shape" points="565,453 585,473 565,493 545,473" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="565" y="514" fill="#ffffff" text-anchor="middle">Losango</text>' +
        '  <text class="wq-node-text-desc" x="565" y="532" fill="#94a3b8" text-anchor="middle">4 lados congruentes</text>' +
        '</g>' +

        // 7. Quadrado (Centro, Nível 5)
        '<g id="g-quadrado">' +
        '  <rect id="rect-quadrado" class="wq-node-rect" x="280" y="585" width="200" height="100" fill="#1e293b" stroke="#334155" />' +
        '  <rect id="shape-quadrado" class="wq-node-shape" x="362.5" y="598" width="35" height="35" stroke="#475569" />' +
        '  <text class="wq-node-text-title" x="380" y="654" fill="#ffffff" text-anchor="middle">Quadrado</text>' +
        '  <text class="wq-node-text-desc" x="380" y="672" fill="#94a3b8" text-anchor="middle">Retângulo + Losango</text>' +
        '</g>' +

        '</svg>' +
        '</div>' +
        '<div class="wq-summary-box" id="wq-summary-box">' +
        '<div class="wq-summary-title" id="wq-summary-title"></div>' +
        '<div class="wq-summary-text" id="wq-summary-text"></div>' +
        '</div>' +
        '<div class="wq-legend" id="wq-legend"></div>' +
        '</div>';

    var slider = container.querySelector("#wq-range");
    var stepLabel = container.querySelector("#wq-val-step");
    var summaryBox = container.querySelector("#wq-summary-box");
    var summaryTitle = container.querySelector("#wq-summary-title");
    var summaryText = container.querySelector("#wq-summary-text");
    var legendEl = container.querySelector("#wq-legend");

    // Lista identificadora dos grupos de nós da árvore
    var allGroups = ["quadrilatero", "trapezoide", "trapezio", "paralelogramo", "retangulo", "losango", "quadrado"];

    // Adiciona efeitos dinâmicos de hover integrado para o retângulo principal do nó
    allGroups.forEach(function (id) {
        var group = container.querySelector("#g-" + id);
        if (group) {
            group.addEventListener("mouseenter", function () {
                var rect = container.querySelector("#rect-" + id);
                var stepIndex = parseInt(slider.value, 10);
                // Destaca apenas se o nó estiver ativo no nível atual do slider
                if (STEPS[stepIndex].activeNodes.indexOf(id) !== -1) {
                    rect.style.fill = "#1e293b";
                    rect.style.strokeWidth = "4";
                }
            });
            group.addEventListener("mouseleave", function () {
                var rect = container.querySelector("#rect-" + id);
                rect.style.strokeWidth = "2.5";
            });
        }
    });

    function draw() {
        var stepIndex = parseInt(slider.value, 10);
        var currentStep = STEPS[stepIndex];

        // Atualiza o cabeçalho descritivo do slider
        stepLabel.textContent = "Nível " + (stepIndex + 1) + " / 5";

        // Atualiza a visualização dos nós da árvore (caixas, textos e as novas formas geométricas)
        allGroups.forEach(function (id) {
            var rect = container.querySelector("#rect-" + id);
            var shape = container.querySelector("#shape-" + id);
            var group = container.querySelector("#g-" + id);
            var isActive = currentStep.activeNodes.indexOf(id) !== -1;

            if (rect && group) {
                if (isActive) {
                    rect.style.stroke = COLORS[id];
                    rect.style.fill = "#1e293b";
                    group.style.opacity = "1";

                    // Altera estilo do ícone geométrico correspondente
                    if (shape) {
                        shape.style.stroke = COLORS[id];
                        shape.style.fill = COLORS[id] + "22"; // Preenchimento semitransparente dinâmico (22 em hexa representa ~13% de opacidade)
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

        // Atualiza os estados gráficos dos caminhos de conexões
        var allConnections = ["q-to-to", "q-to-tr", "tr-to-p", "p-to-r", "p-to-l", "r-to-q", "l-to-q"];
        allConnections.forEach(function (connId) {
            var path = container.querySelector("#conn-" + connId);
            var isActive = currentStep.activeConnections.indexOf(connId) !== -1;

            if (path) {
                if (isActive) {
                    path.classList.add("active");
                    path.style.stroke = "#6366f1"; // Cor ativa unificada (Indigo)
                    path.style.opacity = "1";
                } else {
                    path.classList.remove("active");
                    path.style.stroke = "#334155";
                    path.style.opacity = "0.15";
                }
            }
        });

        // Atualiza o bloco explicativo inferior
        summaryTitle.textContent = currentStep.title;
        summaryText.textContent = currentStep.desc;

        // Define a cor da borda esquerda baseando-se no nó ativo de maior nível revelado
        var activeNodeId = currentStep.activeNodes[currentStep.activeNodes.length - 1];
        summaryBox.style.borderLeftColor = COLORS[activeNodeId];

        // Atualiza a legenda com os elementos atualmente visíveis com bordas personalizadas nas cores dos nós
        legendEl.innerHTML = currentStep.activeNodes.map(function (nodeName) {
            var displayName = nodeName.charAt(0).toUpperCase() + nodeName.slice(1);
            return (
                '<div class="wq-legend-item" style="border-color: ' + COLORS[nodeName] + '33;">' +
                '<div class="wq-legend-dot" style="background:' + COLORS[nodeName] + '; box-shadow: 0 0 6px ' + COLORS[nodeName] + '88;"></div>' +
                '<span style="font-weight: 600;">' + displayName + '</span>' +
                '</div>'
            );
        }).join("");
    }

    // Escuta as alterações no slider
    slider.addEventListener("input", draw);

    // Renderização inicial
    draw();
};