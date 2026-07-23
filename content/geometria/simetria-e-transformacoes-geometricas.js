(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["simetria-e-transformacoes-geometricas"] = `As **Transformações Geométricas** são funções bijetoras que mapeiam pontos de um [[plano]] em outros pontos do mesmo plano, preservando ou alterando determinadas propriedades das figuras. Quando uma transformação preserva a forma e o tamanho da figura (isto é, quando preserva distâncias entre pontos), ela é denominada **Isometria**.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 180" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Figura Original F -->
    <polygon points="60,80 90,50 120,80 90,130" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="155" fill="#38bdf8" font-size="11" text-anchor="middle">Original</text>

    <!-- Reflexão (eixo vertical) -->
    <line x1="180" y1="30" x2="180" y2="170" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4"/>
    <polygon points="240,80 210,50 180,80 210,130" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" stroke-width="2"/>
    <text x="210" y="155" fill="#fbbf24" font-size="11" text-anchor="middle">Reflexão</text>

    <!-- Translação -->
    <polygon points="300,80 330,50 360,80 330,130" fill="rgba(52,211,153,0.3)" stroke="#34d399" stroke-width="2"/>
    <path d="M 125 90 L 295 90" stroke="#34d399" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrowHead)"/>
    <text x="330" y="155" fill="#34d399" font-size="11" text-anchor="middle">Translação</text>

    <!-- Rotação -->
    <polygon points="430,65 455,95 405,110 415,60" fill="rgba(244,63,94,0.3)" stroke="#f43f5e" stroke-width="2"/>
    <text x="430" y="155" fill="#f43f5e" font-size="11" text-anchor="middle">Rotação</text>
    <circle cx="430" cy="88" r="4" fill="#f43f5e"/>
  </svg>
</div>

### 1. As Três Isometrias Fundamentais do Plano

#### A. Translação
Uma **Translação** de vetor $\\vec{v} = (a, b)$ desloca cada ponto $P(x, y)$ de uma figura para uma nova posição $P'(x + a, y + b)$, mantendo a orientação, a forma e as dimensões absolutamente invariantes. A figura "desliza" no plano sem girar.

**Propriedade:** Toda figura transladada é congruente à figura original.

#### B. Reflexão (Simetria de Reflexão)
Uma **Reflexão** em relação a um eixo $r$ (reta de simetria) mapeia cada ponto $P$ ao ponto $P'$ tal que o eixo $r$ é a mediatriz do segmento $\\overline{PP'}$. A figura resultante é a imagem espelhada da original.

**Propriedade:** Uma figura possui **eixo de simetria** se uma reflexão a mapeia sobre si mesma (como um [[quadrado]] que possui $4$ eixos de simetria, ou um círculo que possui infinitos eixos).

Para um ponto $P(x, y)$ refletido em relação:
* **ao eixo $Ox$:** $P' = (x, -y)$.
* **ao eixo $Oy$:** $P' = (-x, y)$.
* **à origem $O$:** $P' = (-x, -y)$ (reflexão central).

#### C. Rotação
Uma **Rotação** de ângulo $\\theta$ em torno de um centro de rotação $C$ gira cada ponto $P$ ao longo de um arco de circunferência centrado em $C$, mantendo a distância $|CP| = |CP'|$ constante. O sentido é positivo no sentido anti-horário (convencional na matemática).

**Propriedade:** Uma figura possui **simetria de rotação** de ordem $n$ se ela coincide consigo mesma após rotações de $\\frac{360°}{n}$. O quadrado possui ordem de rotação $4$ (coincide após $90°$, $180°$, $270°$ e $360°$).

### 2. Transformações que Alteram Dimensões: Homotecia

A **Homotecia** de razão $k$ e centro $C$ é uma transformação que mapeia cada ponto $P$ ao ponto $P'$ tal que $|CP'| = k \\cdot |CP|$. Diferente das isometrias, a Homotecia **não preserva tamanho** — apenas preserva ângulos e a proporcionalidade entre lados (gerando figuras **semelhantes**):

* $k > 1$: Ampliação da figura.
* $0 < k < 1$: Redução da figura.
* $k < 0$: Ampliação/redução **com inversão de sentido** (reflexão central implícita).

Esta transformação é a fundamentação geométrica do conceito de [[triangulo-semelhante]].

### 3. Composição de Transformações

A aplicação sequencial de duas ou mais transformações resulta em uma nova transformação. Por exemplo, a composição de duas reflexões em eixos paralelos equivale a uma **Translação**; a composição de duas reflexões em eixos concorrentes equivale a uma **Rotação** de ângulo duplo ao ângulo entre os eixos.
`;
})();
