(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["medidas-de-tendencia-central"] = `As **Medidas de Tendência Central** são números únicos sintetizadores que buscam representar o centro, ponto de equilíbrio ou valor típico de um conjunto estatístico de dados $X = \\{x_1, x_2, \\dots, x_n\\}$.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 160" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Reta Numérica de Distribuição -->
    <line x1="40" y1="100" x2="460" y2="100" stroke="#94a3b8" stroke-width="2" />
    
    <!-- Pontos de Dados fictícios -->
    <circle cx="70" cy="100" r="5" fill="#64748b" />
    <circle cx="110" cy="100" r="5" fill="#64748b" />
    <circle cx="140" cy="100" r="5" fill="#64748b" />
    <circle cx="180" cy="100" r="5" fill="#64748b" />
    <circle cx="210" cy="100" r="5" fill="#64748b" />
    <circle cx="210" cy="90" r="5" fill="#fbbf24" /> <!-- Moda (Pico) -->
    <circle cx="210" cy="80" r="5" fill="#fbbf24" />
    <circle cx="260" cy="100" r="5" fill="#64748b" />
    <circle cx="310" cy="100" r="5" fill="#64748b" />
    <circle cx="430" cy="100" r="5" fill="#f43f5e" /> <!-- Outlier -->
    
    <!-- Marcadores de Posição -->
    <!-- Mediana (50%) -->
    <line x1="210" y1="40" x2="210" y2="120" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3" />
    <text x="210" y="30" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">Moda / Mediana</text>

    <!-- Média (puxada pelo outlier) -->
    <line x1="240" y1="40" x2="240" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3" />
    <polygon points="240,125 233,137 247,137" fill="#38bdf8" /> <!-- Triângulo Ponto de Equilíbrio -->
    <text x="240" y="30" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Média (x̄)</text>

    <!-- Título do SVG -->
    <text x="250" y="150" fill="#cbd5e1" font-size="12" text-anchor="middle">Ponto de Equilíbrio e Sensibilidade a Valores Extremos</text>
  </svg>
</div>

### 1. Média Aritmética Simples ($\\bar{x}$)

A **Média Aritmética** de $n$ valores é definida formalmente como a [[soma]] de todos os elementos dividida pelo número total de elementos $n$:

$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$

Matematicamente, a média representa o **centro de gravidade** do conjunto: o somatório dos desvios $(x_i - \\bar{x})$ em relação à média é sempre igual a zero.

#### Média Aritmética Ponderada
Quando os elementos possuem pesos ou relevâncias distintas $w_1, w_2, \\dots, w_n$, a média ponderada é calculada por:

$$\\bar{x}_w = \\frac{\\sum_{i=1}^{n} w_i x_i}{\\sum_{i=1}^{n} w_i} = \\frac{w_1 x_1 + w_2 x_2 + \\dots + w_n x_n}{w_1 + w_2 + \\dots + w_n}$$

### 2. Mediana ($Md$)

A **Mediana** é o valor que ocupa a posição central de um conjunto de dados previamente ordenado em rol (ordem crescente ou decrescente). Ela divide a distribuição em duas partes iguais: exatamente $50\\%$ dos dados estão abaixo ou são iguais à mediana, e $50\\%$ estão acima.

* **Se o número de elementos $n$ for ímpar:** A mediana é exatamente o termo central, localizado na posição $\\frac{n + 1}{2}$.
* **Se o número de elementos $n$ for par:** A mediana é definida como a média aritmética simples dos dois termos centrais, nas posições $\\frac{n}{2}$ e $\\frac{n}{2} + 1$.

$$Md = \\frac{x_{(n/2)} + x_{(n/2 + 1)}}{2}$$

### 3. Moda ($Mo$)

A **Moda** é o valor ou categoria que apresenta a **maior frequência absoluta** dentro da distribuição estatística (o valor que mais se repete).

* **Amodal:** Quando nenhum valor se repete mais do que os outros.
* **Unimodal:** Quando existe um único valor com frequência máxima.
* **Multimodal (Bimodal, Trimodal, etc.):** Quando dois ou mais valores distintos empatam na frequência máxima.

### 4. Comparação e Dispersão: Amplitude Estatística

A escolha da medida ideal depende da distribuição dos dados:

| Medida | Vantagem Principal | Limitação / Sensibilidade |
| :--- | :--- | :--- |
| **Média** | Utiliza todos os dados numericamente. | Sensível a valores extremos discrepantes (*outliers*). |
| **Mediana** | **Robusta**: Não é alterada por valores discrepantes extremos. | Ignores as magnitudes numéricas exatas dos extremos. |
| **Moda** | Aplicável tanto a dados numéricos quanto categóricos. | Pode ser inexistente ou não única. |

#### Amplitude ($A$)
Para avaliar a dispersão básica do conjunto antes de analisar a tendência central, calcula-se a **Amplitude Estatística** ($A$), dada pela diferença entre o maior e o menor valor do conjunto:

$$A = x_{\\max} - x_{\\min}$$
`;
})();
