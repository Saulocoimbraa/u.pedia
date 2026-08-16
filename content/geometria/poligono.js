(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["poligono"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="120,25 190,65 190,135 120,175 50,135 50,65" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" />
    <circle cx="120" cy="25" r="4" fill="#15803d"/>
    <circle cx="190" cy="65" r="4" fill="#15803d"/>
    <circle cx="190" cy="135" r="4" fill="#15803d"/>
    <circle cx="120" cy="175" r="4" fill="#15803d"/>
    <circle cx="50" cy="135" r="4" fill="#15803d"/>
    <circle cx="50" cy="65" r="4" fill="#15803d"/>
  </svg>
</div>

Um **polígono** é uma figura geométrica plana, fechada, formada por segmentos de reta que se encontram apenas em suas extremidades. A palavra vem do grego: *poly* (muitos) + *gonia* (ângulos).

### Elementos de um Polígono

* **Lados:** Os segmentos de reta que formam a fronteira do polígono.
* **Vértices:** Os pontos de encontro dos lados (detalhes em [[vertice]]).
* **Ângulos Internos:** Aberturas formadas entre dois lados adjacentes no interior da figura.
* **Diagonais:** Segmentos que ligam dois vértices não-consecutivos.

---

### A Soma dos Ângulos Internos ($S_i = (n-2) \\cdot 180^\\circ$)

Classificamos polígonos pelo seu número de lados $n$:
* $n = 3$: [[triangulo]] (menor polígono possível)
* $n = 4$: [[quadrilatero]] (inclui retângulos e o [[quadrado]])
* $n = 5$: Pentágono

#### Demonstração Visual por Triangulação

Por que a soma dos ângulos internos de um polígono com $n$ lados é $S_i = (n-2) \\times 180^\\circ$? 

A demonstração é surpreendentemente elegante:

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="260" height="200" viewBox="0 0 260 200" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Pentágono com 3 triângulos a partir do vértice superior A -->
    <!-- Triângulo 1 (Esquerda) -->
    <polygon points="130,25 35,80 60,170" fill="#e0e7ff" fill-opacity="0.6" stroke="#4f46e5" stroke-width="1.5"/>
    
    <!-- Triângulo 2 (Centro) -->
    <polygon points="130,25 60,170 200,170" fill="#fef3c7" fill-opacity="0.6" stroke="#d97706" stroke-width="1.5"/>
    
    <!-- Triângulo 3 (Direita) -->
    <polygon points="130,25 200,170 225,80" fill="#dcfce7" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.5"/>

    <!-- Contorno Exterior do Pentágono -->
    <polygon points="130,25 225,80 200,170 60,170 35,80" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>

    <!-- Diagonais a partir de A -->
    <line x1="130" y1="25" x2="60" y2="170" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="130" y1="25" x2="200" y2="170" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>

    <!-- Vértice A em Destaque -->
    <circle cx="130" cy="25" r="5" fill="#ef4444"/>
    <text x="130" y="15" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Vértice A</text>

    <!-- Rótulos dos 3 Triângulos -->
    <text x="75" y="95" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Δ1 (180°)</text>
    <text x="130" y="130" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b45309">Δ2 (180°)</text>
    <text x="185" y="95" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">Δ3 (180°)</text>
  </svg>
</div>

1. Escolha qualquer vértice do polígono (por exemplo, o vértice $A$).
2. Trace todas as diagonais possíveis saindo desse único vértice para os outros vértices.
3. Em um polígono de $n$ lados, é possível traçar exatamente $(n - 3)$ diagonais a partir desse vértice.
4. Essas diagonais dividem o polígono em exatamente **$(n - 2)$ triângulos** disjuntos.
5. Como a soma dos ângulos internos de cada triângulo é sempre $180^\\circ$ e a reunião dos ângulos de todos esses triângulos compõe exatamente os ângulos internos do polígono original, temos:

$$S_i = (n - 2) \\cdot 180^\\circ$$

*Exemplo (Pentágono):* Com $n = 5$ lados, temos $(5 - 2) = 3$ triângulos. Logo, $S_i = 3 \\cdot 180^\\circ = 540^\\circ$.
`;
})();
