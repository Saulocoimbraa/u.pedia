(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["funcao"] = `Uma **Função** $f$ é uma relação matemática formal estabelecida entre dois conjuntos, $A$ (Domínio) e $B$ (Contradomínio), que associa a **cada elemento** $x \\in A$ um **único elemento** $y = f(x) \\in B$.

$$f: A \\to B, \\quad x \\mapsto y = f(x)$$

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 180" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Conjunto A (Domínio) -->
    <ellipse cx="120" cy="90" rx="55" ry="65" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2" />
    <text x="120" y="40" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Domínio (A)</text>
    <circle cx="110" cy="70" r="4" fill="#f8fafc" />
    <text x="95" y="74" fill="#cbd5e1" font-size="11">x₁</text>
    <circle cx="110" cy="110" r="4" fill="#f8fafc" />
    <text x="95" y="114" fill="#cbd5e1" font-size="11">x₂</text>

    <!-- Seta de Mapeamento f -->
    <path d="M 185 80 Q 250 50 315 70" fill="none" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" />
    <text x="250" y="50" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">f(x)</text>

    <!-- Conjunto B (Contradomínio) -->
    <ellipse cx="380" cy="90" rx="65" ry="65" fill="rgba(129, 140, 248, 0.15)" stroke="#818cf8" stroke-width="2" />
    <text x="380" y="40" fill="#818cf8" font-size="13" font-weight="bold" text-anchor="middle">Contradomínio (B)</text>
    
    <!-- Subconjunto Imagem Im(f) -->
    <ellipse cx="370" cy="90" rx="40" ry="45" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="2" stroke-dasharray="3" />
    <text x="370" y="150" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Imagem Im(f)</text>
    
    <circle cx="360" cy="70" r="4" fill="#34d399" />
    <text x="380" y="74" fill="#cbd5e1" font-size="11">y₁</text>
    <circle cx="360" cy="110" r="4" fill="#34d399" />
    <text x="380" y="114" fill="#cbd5e1" font-size="11">y₂</text>
  </svg>
</div>

### 1. Elementos Fundamentais de uma Função

1. **Domínio ($D(f)$ ou $A$):** O conjunto de partida contendo todas as variáveis independentes $x$ para as quais a função está definida.
2. **Contradomínio ($CD(f)$ ou $B$):** O conjunto de chegada que contém todos os valores possíveis de resposta.
3. **Conjunto Imagem ($Im(f)$):** O subconjunto do contradomínio formado exclusivamente por elementos $y \\in B$ que estão efetivamente associados a algum $x \\in A$. Formalmente:
   $$Im(f) = \\{y \\in B \\mid \\exists x \\in A, f(x) = y\\} \\subseteq B$$

### 2. Condições de Existência de uma Função

Para que uma relação binária entre os conjuntos $A$ e $B$ seja classificada como função, duas regras estritas devem ser atendidas:

* **Totalidade do Domínio:** Nenhum elemento de $A$ pode ficar sem correspondente em $B$.
* **Univocidade:** Cada elemento de $A$ deve se conectar a **exatamente um único** elemento de $B$. (Um elemento $x$ não pode ter duas imagens distintas $y_1$ e $y_2$).

### 3. As Três Formas de Representação

As funções podem ser expressas por três linguagens complementares:

1. **Representação Numérica (Tabela de Pares Ordenados):** Lista os pares $(x, y)$ diretamente.
2. **Representação Algébrica (Lei de Formação):** Expressão analítica explícita como $f(x) = 2x + 3$ ou $f(x) = x^2 - 4$.
3. **Representação Gráfica:** Curva no plano cartesiano formada por todos os pontos de coordenadas $(x, f(x))$.

#### Teste da Reta Vertical para Gráficos
Um gráfico no plano cartesiano representa uma função se e somente se **qualquer reta vertical** traçada cruzar a curva em **no máximo um ponto**.

### 4. Principais Famílias de Funções

* **Função Afim (1º Grau):** $f(x) = ax + b$, cujo gráfico é uma [[reta]].
* **Função Quadrática (2º Grau):** $f(x) = ax^2 + bx + c$, cujo gráfico é uma parábola.
* **Função Exponencial:** $f(x) = a^x$ (com $a > 0$ e $a \\neq 1$), usada na modelagem de crescimentos populacionais ou juros compostos.
`;
})();
