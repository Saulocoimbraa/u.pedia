(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["plano-cartesiano"] = `O **Plano Cartesiano** (ou Sistema de Coordenadas Cartesianas) é um sistema de referência bidimensional criado pelo filósofo e matemático René Descartes no século XVII. Ele estabelece uma correspondência biunívoca entre os pontos de um [[plano]] geométrico e os pares ordenados de [[numeros-reais]] $(x, y)$, fundindo [[geometria-plana]] e Álgebra numa mesma linguagem.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 200" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Eixos Cartesianos -->
    <line x1="40" y1="100" x2="460" y2="100" stroke="#94a3b8" stroke-width="2" />
    <line x1="250" y1="10" x2="250" y2="190" stroke="#94a3b8" stroke-width="2" />

    <!-- Marcações no eixo X -->
    <line x1="170" y1="96" x2="170" y2="104" stroke="#64748b" stroke-width="1" />
    <text x="170" y="118" fill="#64748b" font-size="11" text-anchor="middle">-2</text>
    <line x1="330" y1="96" x2="330" y2="104" stroke="#64748b" stroke-width="1" />
    <text x="330" y="118" fill="#64748b" font-size="11" text-anchor="middle">2</text>

    <!-- Marcações no eixo Y -->
    <line x1="246" y1="60" x2="254" y2="60" stroke="#64748b" stroke-width="1" />
    <text x="235" y="64" fill="#64748b" font-size="11" text-anchor="middle">2</text>
    <line x1="246" y1="140" x2="254" y2="140" stroke="#64748b" stroke-width="1" />
    <text x="233" y="144" fill="#64748b" font-size="11" text-anchor="middle">-2</text>

    <!-- Rótulos dos eixos -->
    <text x="465" y="104" fill="#f8fafc" font-size="14" font-weight="bold">x</text>
    <text x="250" y="10" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">y</text>

    <!-- Ponto P(3, 2) -->
    <circle cx="370" cy="60" r="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
    <text x="385" y="55" fill="#38bdf8" font-size="13" font-weight="bold">P(3, 2)</text>
    <line x1="370" y1="60" x2="370" y2="100" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4" />
    <line x1="250" y1="60" x2="370" y2="60" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4" />

    <!-- Quadrantes -->
    <text x="355" y="145" fill="#334155" font-size="11">Q IV</text>
    <text x="145" y="60" fill="#334155" font-size="11">Q II</text>
    <text x="355" y="60" fill="#334155" font-size="11">Q I</text>
    <text x="145" y="145" fill="#334155" font-size="11">Q III</text>
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
