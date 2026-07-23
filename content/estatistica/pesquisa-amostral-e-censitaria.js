(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["pesquisa-amostral-e-censitaria"] = `Uma **Pesquisa Estatística** é um procedimento sistemático para coletar, analisar e interpretar dados referentes a um conjunto de indivíduos, objetos ou eventos de interesse. O planejamento metodológico exige definir se a investigação abrangerá a totalidade da população (**Pesquisa Censitária**) ou apenas uma fração representativa (**Pesquisa Amostral**).

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 180" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- População N -->
    <circle cx="140" cy="90" r="65" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2" />
    <text x="140" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">População Total (N)</text>
    
    <!-- Pontos da População -->
    <circle cx="110" cy="70" r="4" fill="#94a3b8" />
    <circle cx="130" cy="110" r="4" fill="#38bdf8" /> <!-- Selecionado -->
    <circle cx="160" cy="80" r="4" fill="#94a3b8" />
    <circle cx="100" cy="110" r="4" fill="#38bdf8" /> <!-- Selecionado -->
    <circle cx="170" cy="120" r="4" fill="#38bdf8" /> <!-- Selecionado -->
    <circle cx="140" cy="90" r="4" fill="#94a3b8" />
    
    <!-- Seta de Amostragem -->
    <path d="M 225 90 L 290 90" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4" />
    <text x="257" y="80" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Amostragem</text>
    
    <!-- Amostra n -->
    <circle cx="370" cy="90" r="40" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="2" />
    <text x="370" y="65" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">Amostra (n)</text>
    
    <!-- Pontos da Amostra -->
    <circle cx="360" cy="90" r="4" fill="#fbbf24" />
    <circle cx="380" cy="80" r="4" fill="#fbbf24" />
    <circle cx="370" cy="105" r="4" fill="#fbbf24" />
  </svg>
</div>

### 1. Conceitos Fundamentais: População vs. Amostra

* **População Estatística ($N$):** O conjunto universo de todos os elementos (pessoas, produtos, animais, medições) que compartilham pelo menos uma característica comum objeto de estudo.
* **Amostra ($n$):** Qualquer subconjunto finito da população estatística, selecionado de acordo com uma técnica pré-definida ($n < N$).

### 2. Pesquisa Censitária (Censo)

A **Pesquisa Censitária** (ou simplesmente Censo) é aquela em que **todos os elementos** da população $N$ são examinados e mensurados sem exceção.

#### Vantagens:
* **Precisão Absoluta:** Elimina o erro amostral, fornecendo o retrato exato da população.
* Permite a análise detalhada de pequenas subpopulações ou localidades específicas.

#### Desvantagens:
* **Custo Elevado:** Exige grandes recursos financeiros e de pessoal.
* **Tempo Prolongado:** A coleta e o processamento dos dados podem levar meses ou anos.
* **Inviabilidade:** Impossível quando o teste é destrutivo (ex: testar a resistência de lâmpadas ou a qualidade de um lote de alimentos).

### 3. Pesquisa Amostral

A **Pesquisa Amostral** avalia apenas uma amostra de tamanho $n$ representativa da população e utiliza a **inferência estatística** para generalizar os resultados para toda a população $N$.

#### Vantagens:
* **Economia e Rapidez:** Custo significativamente menor e coleta agilizada.
* **Viabilidade Operacional:** Única alternativa aplicável para populações infinitas ou ensaios destrutivos.

### 4. Principais Técnicas de Amostragem Probabilística

Para que as conclusões de uma pesquisa amostral sejam válidas, a amostra deve ser **isenta de viés** (*unbiased*). Isso é obtido por meio da amostragem probabilística, na qual cada elemento da população tem uma probabilidade conhecida e não nula de ser selecionado:

#### A. Amostragem Aleatória Simples
Todos os elementos da população possuem exatamente a mesma probabilidade de seleção. Equivale a realizar um sorteio sem reposição de $n$ elementos a partir dos $N$ disponíveis.

#### B. Amostragem Sistemática
Os elementos da população estão dispostos em uma lista ordenada. Escolhe-se aleatoriamente o primeiro elemento e, a partir dele, seleciona-se cada $k$-ésimo elemento, onde a razão de amostragem é:

$$k = \\frac{N}{n}$$

#### C. Amostragem Estratificada
A população é dividida em subgrupos homogêneos mutuamente exclusivos chamados **estratos** (por exemplo, divididos por faixa etária, renda ou região). Em seguida, extrai-se uma amostra aleatória simples dentro de cada estrato, proporcionalmente ao seu tamanho na população.

### 5. Viés de Amostragem (*Sampling Bias*)

O **Viés de Amostragem** ocorre quando a técnica de seleção favorece sistematicamente alguns elementos em detrimento de outros, gerando uma amostra não representativa da população real (como realizar uma pesquisa de opinião pública apenas em um bairro específico ou via internet excluindo pessoas sem acesso à rede).
`;
})();
