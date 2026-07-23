(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["espaco-amostral"] = `O **Espaço Amostral** (geralmente representado pela letra grega $\\Omega$ ou pela letra $S$) é o conjunto de todos os resultados possíveis de um **experimento aleatório**. É o ponto de partida formal e axiomático para o estudo da [[probabilidade-de-um-evento]].

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 200" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Retângulo do Espaço Amostral Omega -->
    <rect x="30" y="20" width="440" height="160" fill="none" stroke="#94a3b8" stroke-width="2" rx="8" />
    <text x="50" y="45" fill="#94a3b8" font-size="16" font-weight="bold">Espaço Amostral (Ω)</text>
    
    <!-- Evento A -->
    <circle cx="180" cy="110" r="50" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2" />
    <text x="160" y="115" fill="#38bdf8" font-size="14" font-weight="bold">Evento A</text>
    
    <!-- Evento B -->
    <circle cx="300" cy="110" r="50" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2" />
    <text x="305" y="115" fill="#f43f5e" font-size="14" font-weight="bold">Evento B</text>

    <!-- Pontos Elementares -->
    <circle cx="160" cy="90" r="3" fill="#f8fafc" />
    <circle cx="240" cy="110" r="3" fill="#fbbf24" /> <!-- Interseção A ∩ B -->
    <text x="240" y="125" fill="#fbbf24" font-size="10" text-anchor="middle">A ∩ B</text>
    <circle cx="320" cy="90" r="3" fill="#f8fafc" />
    <circle cx="410" cy="60" r="3" fill="#f8fafc" /> <!-- Elemento fora de A e B -->
  </svg>
</div>

### 1. Experimentos Determinísticos vs. Aleatórios

* **Experimento Determinístico:** Processo em que, sob as mesmas condições iniciais, o resultado é rigorosamente previsível pelas leis da ciência (ex: soltar um objeto e medir o tempo de queda no vácuo).
* **Experimento Aleatório:** Processo em que, mesmo sob condições idênticas, o resultado exato não pode ser previsto antes da execução, embora o conjunto de todos os resultados possíveis seja conhecido (ex: lançar um dado honesto de 6 faces).

### 2. Definição Formal de Espaço Amostral ($\\Omega$)

O conjunto universo formado por todos os desfechos elementares $\\omega$ de um experimento aleatório é denominado **Espaço Amostral**:

$$\\Omega = \\{\\omega_1, \\omega_2, \\dots, \\omega_n\\}$$

A quantidade total de elementos em $\\Omega$ é indicada por $|\\Omega|$ ou $n(\\Omega)$.

#### Exemplos Fundamentais:
1. **Lançamento de uma moeda:** $\\Omega = \\{\\text{Cara}, \\text{Coroa}\\}$, com $|\\Omega| = 2$.
2. **Lançamento de um dado de 6 faces:** $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$, com $|\\Omega| = 6$.
3. **Lançamento de duas moedas seguidas:** $\\Omega = \\{(\\text{K},\\text{K}), (\\text{K},\\text{C}), (\\text{C},\\text{K}), (\\text{C},\\text{C})\\}$, com $|\\Omega| = 4$.

### 3. Conceito de Evento ($A$)

Um **Evento** $A$ é qualquer subconjunto do espaço amostral $\\Omega$, ou seja, $A \\subseteq \\Omega$.

* **Evento Certo:** O próprio espaço amostral $A = \\Omega$. Sua ocorrência é inevitável ($100\\%$).
* **Evento Impossível:** O conjunto vazio $A = \\emptyset$. Não contém elementos ($0\\%$).
* **Evento Elementar:** Um subconjunto formado por um único elemento ($|A| = 1$).

### 4. Operações entre Eventos

Como eventos são conjuntos, aplicam-se a eles as operações formais da Teoria dos Conjuntos:

1. **União ($A \\cup B$):** Evento que ocorre se $A$ ocorre, ou $B$ ocorre, ou ambos ocorrem.
2. **Interseção ($A \\cap B$):** Evento que ocorre se e somente se $A$ e $B$ ocorrem **simultaneamente**.
3. **Eventos Mutuamente Exclusivos (Disjuntos):** Dois eventos $A$ e $B$ que não podem ocorrer ao mesmo tempo. Formalmente:
   $$A \\cap B = \\emptyset$$
4. **Evento Complementar ($A^c$ ou $\\bar{A}$):** O evento formado por todos os elementos de $\\Omega$ que **não** pertencem a $A$.
   $$A^c = \\Omega \\setminus A$$

### 5. Princípio Multiplicativo para Espaços Amostrais Compostos

Quando um experimento aleatório é composto por $k$ etapas independentes sucessivas, onde a primeira etapa tem $n_1$ resultados, a segunda tem $n_2$ resultados, ..., a $k$-ésima tem $n_k$ resultados, o total de elementos do espaço amostral composto é dado por:

$$|\\Omega| = n_1 \\times n_2 \\times \\dots \\times n_k$$
`;
})();
