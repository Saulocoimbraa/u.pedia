(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["simetria-e-transformacoes-geometricas"] = `As **Transformações Geométricas** são funções bijetoras que mapeiam pontos de um [[plano]] em outros pontos do mesmo plano, preservando ou alterando determinadas propriedades das figuras. Quando uma transformação preserva a forma e o tamanho da figura (isto é, quando preserva distâncias entre pontos), ela é denominada **Isometria**.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="340" height="170" viewBox="0 0 340 170" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Eixo de Simetria e -->
    <line x1="170" y1="20" x2="170" y2="150" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" />
    <text x="170" y="14" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Eixo de Simetria (e)</text>

    <!-- Linhas de Conexão Espelhada das Coordenadas (Perpendiculares a e) -->
    <line x1="60" y1="40" x2="280" y2="40" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="2,2" />
    <line x1="40" y1="120" x2="300" y2="120" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="2,2" />
    <line x1="120" y1="110" x2="220" y2="110" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="2,2" />

    <!-- Figura Original F (À Esquerda em Azul) -->
    <polygon points="60,40 40,120 120,110" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round" />
    <text x="73" y="90" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#4338ca">Figura F</text>

    <!-- Figura Refletida F' (À Direita em Verde - Espelhada) -->
    <polygon points="280,40 300,120 220,110" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round" />
    <text x="267" y="90" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Imagem F'</text>

    <!-- Vértices Homólogos Destacados -->
    <circle cx="60" cy="40" r="4" fill="#4f46e5" />
    <text x="50" y="35" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#4338ca">P</text>

    <circle cx="280" cy="40" r="4" fill="#16a34a" />
    <text x="290" y="35" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#15803d">P'</text>
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
