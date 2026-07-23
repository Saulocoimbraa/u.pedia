(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["probabilidade-de-um-evento"] = `A **Probabilidade de um Evento** é a medida numérica da incerteza associada à ocorrência de um determinado evento em um experimento aleatório. É um valor real compreendido no intervalo $[0, 1]$, podendo também ser expresso em porcentagem (de $0\\%$ a $100\\%$).

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 120" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Reta Graduada da Probabilidade -->
    <line x1="50" y1="60" x2="450" y2="60" stroke="#94a3b8" stroke-width="3" />
    
    <!-- Pontos Extremos e Médio -->
    <circle cx="50" cy="60" r="7" fill="#f43f5e" />
    <circle cx="250" cy="60" r="7" fill="#fbbf24" />
    <circle cx="450" cy="60" r="7" fill="#34d399" />
    
    <!-- Rótulos de Valores -->
    <text x="50" y="35" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">0 (0%)</text>
    <text x="50" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">Evento Impossível</text>
    
    <text x="250" y="35" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">0.5 (50%)</text>
    <text x="250" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">Chances Equiprováveis</text>
    
    <text x="450" y="35" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">1 (100%)</text>
    <text x="450" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">Evento Certo</text>
  </svg>
</div>

### 1. Definição Clássica (Definição de Laplace)

Em um [[espaco-amostral]] finito $\\Omega$ onde todos os pontos amostraria são **equiprováveis** (possuem a mesma chance de ocorrer), a probabilidade $P(A)$ de ocorrência de um evento $A \\subseteq \\Omega$ é dada por:

$$P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{Número de casos favoráveis}}{\\text{Número total de casos possíveis}}$$

#### Exemplo Prático:
No lançamento de um dado honesto de 6 faces ($\\|\\Omega\\| = 6$), qual é a probabilidade do evento $A = \\text{"obter um número par"}$?
* Os casos favoráveis são $A = \\{2, 4, 6\\}$, logo $\\|A\\| = 3$.
* A probabilidade é:

$$P(A) = \\frac{3}{6} = \\frac{1}{2} = 0{,}5 = 50\\%$$

### 2. Axiomas Fundamentais de Kolmogorov

Na teoria matemática formal formulada por Kolmogorov, qualquer função de probabilidade $P$ deve satisfazer estritamente três axiomas:

1. **Nao-negatividade:** Para todo evento $A$, $0 \\le P(A) \\le 1$.
2. **Normalização:** A probabilidade do evento certo $\\Omega$ é 1:
   $$P(\\Omega) = 1$$
3. **Aditividade Mutua:** Se dois eventos $A$ e $B$ são mutuamente exclusivos ($A \\cap B = \\emptyset$), então:
   $$P(A \\cup B) = P(A) + P(B)$$

### 3. Teoremas e Regras Operatórias

A partir dos axiomas, derivam-se propriedades fundamentais:

#### A. Probabilidade do Evento Complementar
A chance de um evento **não** ocorrer é dada por:

$$P(A^c) = 1 - P(A)$$

#### B. Regra da Adição (Eventos Gerais)
Quando os eventos $A$ e $B$ possuem elementos em comum ($A \\cap B \\neq \\emptyset$), evita-se a contagem dupla da interseção subtraindo $P(A \\cap B)$:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

### 4. Eventos Independentes e Probabilidade Condicional

#### Eventos Independentes
Dois eventos $A$ e $B$ são chamados de **independentes** se a ocorrência de $A$ não altera em nada a probabilidade de ocorrência de $B$. Nesse caso, a probabilidade conjunta da interseção é a simples [[multiplicacao]] das probabilidades:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

#### Probabilidade Condicional
A probabilidade condicional $P(A \\mid B)$ representa a probabilidade de o evento $A$ ocorrer **dado que** o evento $B$ já ocorreu. Formalmente:

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad \\text{com } P(B) > 0$$
`;
})();
