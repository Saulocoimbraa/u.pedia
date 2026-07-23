(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["tabelas-e-graficos"] = `Em [[estatistica]], a organização e a representação visual de dados brutos são fundamentais para sintetizar informações e identificar padrões. **Tabelas** e **Gráficos** são as ferramentas estruturais responsáveis por transformar um conjunto não ordenado de observações (chamado de *rol*) em dados compreensíveis.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 220" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Eixos -->
    <line x1="50" y1="180" x2="460" y2="180" stroke="#94a3b8" stroke-width="2" />
    <line x1="50" y1="20" x2="50" y2="180" stroke="#94a3b8" stroke-width="2" />
    
    <!-- Linhas de grade -->
    <line x1="50" y1="140" x2="460" y2="140" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4" />
    <line x1="50" y1="100" x2="460" y2="100" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4" />
    <line x1="50" y1="60" x2="460" y2="60" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4" />
    
    <!-- Barras do Gráfico -->
    <rect x="80" y="100" width="45" height="80" fill="#38bdf8" rx="4" />
    <rect x="160" y="50" width="45" height="130" fill="#818cf8" rx="4" />
    <rect x="240" y="80" width="45" height="100" fill="#34d399" rx="4" />
    <rect x="320" y="120" width="45" height="60" fill="#fbbf24" rx="4" />
    <rect x="400" y="40" width="45" height="140" fill="#f43f5e" rx="4" />
    
    <!-- Rótulos dos eixos -->
    <text x="102" y="200" fill="#cbd5e1" font-size="12" text-anchor="middle">Jan</text>
    <text x="182" y="200" fill="#cbd5e1" font-size="12" text-anchor="middle">Fev</text>
    <text x="262" y="200" fill="#cbd5e1" font-size="12" text-anchor="middle">Mar</text>
    <text x="342" y="200" fill="#cbd5e1" font-size="12" text-anchor="middle">Abr</text>
    <text x="422" y="200" fill="#cbd5e1" font-size="12" text-anchor="middle">Mai</text>
    
    <!-- Título do SVG -->
    <text x="250" y="25" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">Representação de Dados Frequenciais</text>
  </svg>
</div>

### 1. Tabelas Estatísticas

Uma **tabela** organiza os dados em linhas e colunas intersecionadas. É a forma mais direta de apresentar as distribuições de frequências absolutas ($f_i$) e frequências relativas ($f_{r,i} = \\frac{f_i}{N}$).

Existem dois formatos principais de tabelas:

* **Tabela Simples:** Apresenta a contagem ou valor de uma única variável estatística para cada categoria ou intervalo.
* **Tabela de Dupla Entrada:** Cruza duas variáveis simultaneamente (por exemplo, contagem de estudantes classificados por *Ano Escolar* nas linhas e por *Turno* nas colunas).

### 2. Principais Tipos de Gráficos

Os **gráficos** são representações geométricas das tabelas. A escolha da forma gráfica correta depende da natureza das variáveis analisadas:

#### A. Gráfico de Colunas e Barras
Utilizado para comparar dados categóricos ou discretos. A altura (ou comprimento) de cada retângulo é estritamente proporcional à frequência absoluta ou relativa da categoria.

#### B. Gráfico de Setores (Gráfico de Pizza)
Indicado para evidenciar a **proporção** de cada parte em relação ao todo. O círculo completo representa $100\\%$ do total ($360°$). O ângulo central $\\theta_i$ correspondente à categoria $i$ é calculado por:

$$\\theta_i = \\frac{f_i}{N} \\times 360°$$

#### C. Gráfico de Linhas (Séries Temporais)
Ideal para mostrar a variação ou evolução contínua de uma grandeza ao longo do tempo (como temperatura diária, crescimento populacional ou variação financeira). Os pontos de dados são plotados em um sistema de eixos ortogonais e conectados por segmentos de [[reta]].

### 3. Elementos Obrigatórios de uma Representação Gráfica

Para manter o rigor dedutivo e evitar indução ao erro, qualquer representação gráfica oficial deve conter:

1. **Título:** Descrição clara do que os dados representam.
2. **Eixos Identificados:** Nome das variáveis e unidades de medida utilizadas nos eixos horizontal e vertical.
3. **Escala Uniforme:** Manutenção de intervalos proporcionais nos eixos.
4. **Legenda:** Explicitação de cores ou símbolos quando houver mais de uma série de dados.
5. **Fonte e Data:** Indicação da origem dos dados e do período de coleta.

### 4. Viés e Armadilhas de Leitura

Gráficos divulgados na mídia podem induzir leitores a conclusões equivocadas se regras matemáticas forem violadas. Entre as manipulações mais comuns estão a **omissão do zero no eixo vertical** (que exagera visualmente pequenas diferenças) e a **alteração desproporcional da escala**, alterando artificialmente a inclinação visual das tendências.
`;
})();
