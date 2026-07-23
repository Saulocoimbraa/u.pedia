(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["fatoracao-algebrica"] = `A **Fatoração Algébrica** é o processo matemático de transformar uma expressão algébrica composta por uma [[soma]] ou diferença de termos em um **produto de fatores mais simples**. É a operação inversa da expansão pelo produto distributivo.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 160" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Representação de a^2 - b^2 -->
    <rect x="50" y="30" width="100" height="100" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2" />
    <text x="100" y="85" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">a²</text>
    
    <!-- Quadrado menor b^2 retirado -->
    <rect x="110" y="80" width="40" height="50" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="2" />
    <text x="130" y="110" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">b²</text>

    <!-- Seta Equivalência -->
    <text x="220" y="85" fill="#fbbf24" font-size="20" font-weight="bold" text-anchor="middle">≡</text>

    <!-- Retângulo Fatorado (a - b)(a + b) -->
    <rect x="270" y="45" width="180" height="70" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="2" />
    <text x="360" y="85" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">(a - b)(a + b)</text>
    
    <text x="250" y="150" fill="#cbd5e1" font-size="12" text-anchor="middle">Decomposição Geométrica da Diferença de Quadrados</text>
  </svg>
</div>

### 1. Casos Fundamentais de Fatoração

#### A. Fator Comum em Evidência
Baseia-se na propriedade distributiva da [[multiplicacao]]. Se todos os termos de uma expressão possuem um fator multiplicativo comum, esse fator é colocado em evidência fora dos parênteses:

$$ax + ay = a(x + y)$$

*Exemplo:* $6x^3 + 9x^2 = 3x^2(2x + 3)$

#### B. Fatoração por Agrupamento
Aplicada quando não há um fator comum a todos os termos simultaneamente, mas é possível agrupar os termos em pares com fatores comuns parciais:

$$ac + ad + bc + bd = a(c + d) + b(c + d) = (a + b)(c + d)$$

#### C. Diferença de Quadrados
Toda diferença entre dois [[quadrados-perfeitos]] pode ser decomposta no produto da soma pela diferença de suas raízes quadradas:

$$a^2 - b^2 = (a - b)(a + b)$$

#### D. Trinômio Quadrado Perfeito
Resultado da expansão do quadrado da soma ou da diferença. Identifica-se quando o termo central é exatamente o dobro do produto das raízes dos dois termos das pontas:

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

### 2. Aplicações Práticas da Fatoração

1. **Simplificação de Frações Algébricas:**
   $$\\frac{x^2 - 9}{x^2 - 3x} = \\frac{(x - 3)(x + 3)}{x(x - 3)} = \\frac{x + 3}{x}, \\quad \\text{para } x \\neq 3 \\text{ e } x \\neq 0$$

2. **Resolução Rápida de [[equacao-do-segundo-grau]]:**
   $$x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0 \\implies x = 2 \\text{ ou } x = 3$$
`;
})();
