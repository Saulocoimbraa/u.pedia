(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["equacao-do-segundo-grau"] = `Uma **Equação do Segundo Grau** (ou equação quadrática) é uma equação polinomial em que o maior expoente da incógnita é $2$. Na sua forma geral reduzida, ela é escrita como:

$$ax^2 + bx + c = 0, \\quad \\text{com } a, b, c \\in \\mathbb{R} \\text{ e } a \\neq 0$$

onde $a$ é o coeficiente quadrático, $b$ o coeficiente linear e $c$ o termo independente.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 200" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Eixos Cartesianos -->
    <line x1="40" y1="150" x2="460" y2="150" stroke="#64748b" stroke-width="2" />
    <line x1="250" y1="20" x2="250" y2="180" stroke="#64748b" stroke-width="2" />
    
    <!-- Parábola com a > 0 e Δ > 0 -->
    <path d="M 100 30 Q 250 220 400 30" fill="none" stroke="#38bdf8" stroke-width="3" />
    
    <!-- Raízes x1 e x2 -->
    <circle cx="160" cy="150" r="6" fill="#f43f5e" />
    <text x="160" y="170" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">x₁</text>
    
    <circle cx="340" cy="150" r="6" fill="#f43f5e" />
    <text x="340" y="170" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">x₂</text>

    <!-- Vértice -->
    <circle cx="250" cy="125" r="4" fill="#fbbf24" />
    <text x="250" y="110" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Vértice V(x_v, y_v)</text>
    
    <text x="250" y="190" fill="#cbd5e1" font-size="12" text-anchor="middle">Parábola e Interseções com o Eixo X (Raízes Reais)</text>
  </svg>
</div>

### 1. A Fórmula de Bhaskara

A resolução geral de qualquer equação do 2º grau é obtida completando [[quadrados]] na forma geral $ax^2 + bx + c = 0$, resultando na **Fórmula de Bhaskara**:

$$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$

onde $\\Delta$ (delta) é o **Discriminante** da equação, dado por:

$$\\Delta = b^2 - 4ac$$

### 2. Análise do Discriminante ($\\Delta$) e Raízes

O sinal do discriminante $\\Delta$ determina a quantidade e a natureza das raízes no conjunto dos [[numeros-reais]]:

* **$\\Delta > 0$:** A equação possui **duas raízes reais e distintas** ($x_1 \\neq x_2$). A parábola intercepta o eixo $x$ em dois pontos.
* **$\\Delta = 0$:** A equação possui **duas raízes reais e iguais** ($x_1 = x_2 = -\\frac{b}{2a}$). A parábola tangencia o eixo $x$ no seu vértice.
* **$\\Delta < 0$:** A equação **não possui raízes reais** ($S = \\emptyset$). A parábola não toca o eixo $x$.

### 3. Relações de Viète (Soma e Produto das Raízes)

Sem resolver a equação por Bhaskara, é possível determinar a soma ($S$) e o produto ($P$) das raízes $x_1$ e $x_2$ diretamente pelos coeficientes $a, b, c$:

$$\\text{Soma: } S = x_1 + x_2 = -\\frac{b}{a}$$

$$\\text{Produto: } P = x_1 \\cdot x_2 = \\frac{c}{a}$$

Uma equação do 2º grau com coeficientes monic ($a=1$) pode ser reescrita simplesmente como:

$$x^2 - Sx + P = 0$$

### 4. Equações Incompletas

Quando $b = 0$ ou $c = 0$, a equação pode ser resolvida por [[fatoracao-algebrica]] direta sem aplicar Bhaskara:

1. **Se $c = 0$ ($ax^2 + bx = 0$):** Coloca-se $x$ em evidência: $x(ax + b) = 0 \\implies x_1 = 0$ ou $x_2 = -\\frac{b}{a}$.
2. **Se $b = 0$ ($ax^2 + c = 0$):** Isola-se o termo quadrático: $x^2 = -\\frac{c}{a} \\implies x = \\pm \\sqrt{-\\frac{c}{a}}$.
`;
})();
