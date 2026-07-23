(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["sistemas-de-equacoes"] = `Um **Sistema de Equações do Primeiro Grau** é um conjunto de duas ou mais equações lineares com duas ou mais incógnitas que devem ser satisfeitas simultaneamente. Um sistema clássico $2 \\times 2$ (duas equações e duas incógnitas $x, y$) tem o formato:

$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 200" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Eixos Cartesianos -->
    <line x1="40" y1="100" x2="460" y2="100" stroke="#64748b" stroke-width="2" />
    <line x1="250" y1="20" x2="250" y2="180" stroke="#64748b" stroke-width="2" />
    
    <!-- Reta 1 (r1): y = x + 1 (passa por (2,3)) -->
    <line x1="100" y1="170" x2="380" y2="30" stroke="#38bdf8" stroke-width="3" />
    <text x="390" y="35" fill="#38bdf8" font-size="12" font-weight="bold">Reta r₁</text>

    <!-- Reta 2 (r2): y = -x + 5 (passa por (2,3)) -->
    <line x1="120" y1="30" x2="380" y2="160" stroke="#f43f5e" stroke-width="3" />
    <text x="390" y="165" fill="#f43f5e" font-size="12" font-weight="bold">Reta r₂</text>

    <!-- Ponto de Interseção (P=(x,y)) -->
    <circle cx="280" cy="80" r="6" fill="#fbbf24" stroke="#ffffff" stroke-width="2" />
    <text x="295" y="75" fill="#fbbf24" font-size="13" font-weight="bold">Solução Única P(x, y)</text>
    
    <text x="250" y="190" fill="#cbd5e1" font-size="12" text-anchor="middle">Interseção Geométrica das Retas (SPD)</text>
  </svg>
</div>

### 1. Métodos Clássicos de Resolução

existem três métodos algébricos principais para resolver um sistema de equações:

#### A. Método da Substituição
1. Isola-se uma das incógnitas em uma das equações.
2. Substitui-se a expressão encontrada na outra equação, obtendo uma [[equacao-do-primeiro-grau]] com uma só variável.
3. Resolve-se a variável e calcula-se a segunda incógnita.

#### B. Método da Adição (Eliminação)
1. Multiplicam-se as equações por números adequados para que os coeficientes de uma das incógnitas se tornem opostos.
2. Somam-se as duas equações membro a membro, eliminando uma das incógnitas.

#### C. Método da Comparação
1. Isola-se a mesma incógnita nas duas equações.
2. Igualam-se as duas expressões resultantes.

### 2. Classificação dos Sistemas e Interpretação Geométrica

Cada equação linear $ax + by = c$ representa uma [[reta]] no plano cartesiano. A solução do sistema corresponde aos pontos de interseção entre essas retas:

| Classificação | Soluções Algébricas | Representação Geométrica | Relação de Coeficientes |
| :--- | :--- | :--- | :--- |
| **SPD** (Sistema Possível e Determinado) | **Solução Única** $(x, y)$ | Retas **Concorrentes** (se cruzam em 1 ponto). | $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ |
| **SPI** (Sistema Possível e Indeterminado) | **Infinitas Soluções** | Retas **Coincidentes** (mesma reta). | $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ |
| **SI** (Sistema Impossível) | **Nenhuma Solução** | Retas **Paralelas** (nunca se cruzam). | $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ |

### 3. Exemplo de Resolução por Adição

Considerando o sistema:

$$\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$$

Somando as duas equações membro a membro:

$$(x + x) + (y - y) = 7 + 3 \\implies 2x = 10 \\implies x = 5$$

Substituindo $x = 5$ na primeira equação:

$$5 + y = 7 \\implies y = 2$$

O conjunto solução é o par ordenado $S = \\{(5, 2)\\}$, classificando o sistema como **SPD**.
`;
})();
