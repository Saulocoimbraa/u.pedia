(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["produtos-notaveis"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="240" viewBox="0 0 240 240" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Quadrado Maior (a+b) x (a+b) -->
    <!-- Quadrado a^2 (topo-esquerda: 130x130) -->
    <rect x="30" y="30" width="130" height="130" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
    <text x="95" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="#4338ca">a²</text>

    <!-- Retângulo a*b (topo-direita: 50x130) -->
    <rect x="160" y="30" width="50" height="130" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="185" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#b45309">a·b</text>

    <!-- Retângulo a*b (baixo-esquerda: 130x50) -->
    <rect x="30" y="160" width="130" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="95" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#b45309">a·b</text>

    <!-- Quadrado b^2 (baixo-direita: 50x50) -->
    <rect x="160" y="160" width="50" height="50" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
    <text x="185" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#15803d">b²</text>

    <!-- Rótulos Externos -->
    <text x="95" y="20" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">a</text>
    <text x="185" y="20" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">b</text>
    <text x="18" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">a</text>
    <text x="18" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">b</text>
  </svg>
</div>

Os **produtos notáveis** são multiplicações de expressões algébricas que possuem um padrão fixo e recorrente na matemática. Identificar esses padrões permite simplificar cálculos algébricos rapidamente sem a necessidade de efetuar a propriedade distributiva passo a passo.

---

### Os Três Principais Produtos Notáveis

#### 1. Quadrado da Soma de Dois Termos
$$(a + b)^2 = a^2 + 2ab + b^2$$

**Interpretação Geométrica:** A área de um [[quadrado]] de lado $(a + b)$ é igual à soma das áreas de um quadrado menor de lado $a$ ($a^2$), um quadrado menor de lado $b$ ($b^2$) e dois retângulos iguais de lados $a$ e $b$ ($2ab$).

#### 2. Quadrado da Diferença de Dois Termos
$$(a - b)^2 = a^2 - 2ab + b^2$$

Representa o quadrado formado pela diferença entre duas medidas $a$ e $b$.

#### 3. Produto da Soma pela Diferença
$$(a + b)(a - b) = a^2 - b^2$$

Diferença de dois quadrados: a multiplicação da soma de dois termos pela sua diferença resulta sempre na diferença dos seus quadrados.
`;
})();
