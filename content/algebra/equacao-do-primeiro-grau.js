(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["equacao-do-primeiro-grau"] = `Uma **Equação do Primeiro Grau** é uma igualdade matemática envolvendo uma ou mais incógnitas em que o maior expoente da variável é igual a $1$. Na sua forma reduzida com uma variável $x$, ela é expressa por:

$$ax + b = c, \\quad \\text{com } a, b, c \\in \\mathbb{R} \\text{ e } a \\neq 0$$

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 180" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Base da Balança -->
    <polygon points="250,140 230,170 270,170" fill="#64748b" />
    <line x1="100" y1="140" x2="400" y2="140" stroke="#94a3b8" stroke-width="4" />
    
    <!-- Prato Esquerdo: 2x + 3 -->
    <line x1="130" y1="140" x2="130" y2="100" stroke="#cbd5e1" stroke-width="2" />
    <rect x="80" y="100" width="100" height="10" fill="#cbd5e1" rx="2" />
    <!-- Blocos x e unidades -->
    <rect x="90" y="70" width="25" height="30" fill="#38bdf8" rx="3" />
    <text x="102" y="90" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">x</text>
    <rect x="120" y="70" width="25" height="30" fill="#38bdf8" rx="3" />
    <text x="132" y="90" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">x</text>
    <circle cx="160" cy="85" r="8" fill="#fbbf24" />
    <text x="160" y="89" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">3</text>

    <!-- Sinal de Igual no Centro -->
    <text x="250" y="110" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">=</text>

    <!-- Prato Direito: 11 -->
    <line x1="370" y1="140" x2="370" y2="100" stroke="#cbd5e1" stroke-width="2" />
    <rect x="320" y="100" width="100" height="10" fill="#cbd5e1" rx="2" />
    <circle cx="370" cy="85" r="12" fill="#fbbf24" />
    <text x="370" y="90" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">11</text>
    
    <text x="250" y="30" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">Princípio da Balança em Equilíbrio (2x + 3 = 11)</text>
  </svg>
</div>

### 1. O Princípio da Balança e Axiomas de Igualdade

A palavra *equação* vem do latim *aequatio* (igualar). A sustentação lógica da resolução de uma equação é a metáfora da **balança em equilíbrio**: a igualdade não se altera se adicionarmos, subtrairmos, multiplicarmos ou dividirmos ambos os membros pelo mesmo valor real não nulo.

Axiomaticamente, fundamenta-se nos [[axiomas-fundamentais]] da igualdade:

1. **Propriedade Aditiva:** Se $A = B$, então $A + k = B + k$ para qualquer $k \\in \\mathbb{R}$.
2. **Propriedade Multiplicativa:** Se $A = B$, então $A \\cdot k = B \\cdot k$ para qualquer $k \\in \\mathbb{R}^*$.

### 2. Resolução Algébrica Geral

Dada a equação $ax + b = c$ ($a \\neq 0$):

1. **Isolamento do termo com a incógnita:** Subtrai-se $b$ de ambos os membros:
   $$ax + b - b = c - b \\implies ax = c - b$$

2. **Isolamento da variável:** Divide-se ambos os membros pelo coeficiente $a$:
   $$x = \\frac{c - b}{a}$$

A solução única $x$ é chamada de **raiz da equação**.

### 3. Exemplo Prático de Resolução

Resolver a equação $3x - 7 = 2x + 5$:

* Subtrai-se $2x$ de ambos os lados: $3x - 2x - 7 = 5 \\implies x - 7 = 5$
* Adiciona-se $7$ a ambos os lados: $x = 5 + 7 \\implies x = 12$

O conjunto solução é $S = \\{12\\}$.

### 4. Interpretação Geométrica

No plano cartesiano, a expressão $f(x) = ax + b - c$ representa uma [[reta]]. A solução da equação $ax + b = c$ corresponde exatamente ao ponto onde essa reta intercepta o eixo $x$ (a raiz da função).
`;
})();
