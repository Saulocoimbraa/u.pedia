(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["plano-cartesiano"] = `O **Plano Cartesiano** (ou Sistema de Coordenadas Cartesianas) é um sistema de referência bidimensional criado pelo filósofo e matemático René Descartes no século XVII. Ele estabelece uma correspondência biunívoca entre os pontos de um [[plano]] geométrico e os pares ordenados de [[numeros-reais]] $(x, y)$, fundindo [[geometria-plana]] e Álgebra numa mesma linguagem.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="340" height="220" viewBox="0 0 340 220" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Malha de Fundo Suave -->
    <path d="M 50 30 L 50 190 M 90 30 L 90 190 M 130 30 L 130 190 M 210 30 L 210 190 M 250 30 L 250 190 M 290 30 L 290 190" stroke="#f1f5f9" stroke-width="1.5" />
    <path d="M 30 30 L 310 30 M 30 70 L 310 70 M 30 150 L 310 150 M 30 190 L 310 190" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Eixo X (Abscissas) -->
    <line x1="20" y1="110" x2="320" y2="110" stroke="#334155" stroke-width="2" />
    <text x="325" y="114" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e293b">x</text>

    <!-- Eixo Y (Ordenadas) -->
    <line x1="170" y1="15" x2="170" y2="205" stroke="#334155" stroke-width="2" />
    <text x="170" y="12" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e293b">y</text>

    <!-- Marcadores Numéricos de Escala -->
    <text x="210" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#64748b">1</text>
    <text x="250" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#64748b">2</text>
    <text x="290" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#64748b">3</text>
    <text x="130" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#64748b">-1</text>

    <text x="158" y="74" text-anchor="end" font-family="Inter, sans-serif" font-size="10" fill="#64748b">1</text>
    <text x="158" y="34" text-anchor="end" font-family="Inter, sans-serif" font-size="10" fill="#64748b">2</text>

    <!-- Quadrantes -->
    <text x="260" y="55" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#cbd5e1">I Q</text>
    <text x="80" y="55" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#cbd5e1">II Q</text>
    <text x="80" y="175" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#cbd5e1">III Q</text>
    <text x="260" y="175" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#cbd5e1">IV Q</text>

    <!-- Projeções Pontilhadas do Ponto P(3, 2) -->
    <line x1="290" y1="110" x2="290" y2="30" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="3,3" />
    <line x1="170" y1="30" x2="290" y2="30" stroke="#4f46e5" stroke-width="1.5" stroke-dasharray="3,3" />

    <!-- Ponto P(3, 2) -->
    <circle cx="290" cy="30" r="5" fill="#4f46e5" stroke="#e0e7ff" stroke-width="2" />
    <text x="295" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#4338ca">P(3, 2)</text>
  </svg>
</div>

### 1. Os Eixos Coordenados

O plano cartesiano é determinado por dois eixos de [[retas]] perpendiculares que se cruzam num ponto denominado **Origem** ($O$):

* **Eixo das Abscissas ($Ox$):** A reta horizontal. Os valores crescem da esquerda para a direita.
* **Eixo das Ordenadas ($Oy$):** A reta vertical. Os valores crescem de baixo para cima.

A Origem $O$ tem as coordenadas $(0, 0)$.

### 2. Coordenadas de um Ponto

Qualquer ponto $P$ no plano cartesiano é identificado pelo **par ordenado** $(x, y)$:

* **$x$ (Abscissa):** Distância horizontal assinada de $P$ até o eixo $Oy$.
* **$y$ (Ordenada):** Distância vertical assinada de $P$ até o eixo $Ox$.

A **ordem** dos valores é essencial: $(3, 2) \\neq (2, 3)$.

### 3. Os Quatro Quadrantes

Os dois eixos dividem o plano em quatro regiões chamadas **Quadrantes**, numerados em sentido anti-horário a partir do superior direito:

| Quadrante | Sinal de $x$ | Sinal de $y$ | Exemplo |
| :---: | :---: | :---: | :--- |
| **I** | $+$ | $+$ | $(2, 3)$ |
| **II** | $-$ | $+$ | $(-1, 4)$ |
| **III** | $-$ | $-$ | $(-2, -1)$ |
| **IV** | $+$ | $-$ | $(3, -2)$ |

### 4. Distância entre Dois Pontos

Dados dois pontos $A(x_1, y_1)$ e $B(x_2, y_2)$, a distância $d(A, B)$ é obtida diretamente pelo [[teorema-de-pitagoras]] aplicado ao triângulo retângulo de catetos $|x_2 - x_1|$ e $|y_2 - y_1|$:

$$d(A, B) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### 5. Ponto Médio de um Segmento

O **ponto médio** $M$ do segmento $\\overline{AB}$ possui coordenadas iguais às médias aritméticas das coordenadas de $A$ e $B$:

$$M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)$$
`;
})();
