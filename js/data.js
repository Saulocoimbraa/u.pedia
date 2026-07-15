/**
 * js/data.js — Catálogo de artigos do μ.pedia
 * Gerado automaticamente por inserir_artigo.js — edite com cuidado.
 */
window.UPEDIA_ARTICLES = [
  {
    id:       "teorema-de-pitagoras",
    title:    "Teorema de Pitágoras",
    level:    "Ensino Fundamental II",
    category: "Geometria",
    axis:     "geometria",
    icon:     "triangle",
    summary:  "Relação métrica fundamental que governa os lados de qualquer triângulo retângulo.",
    infobox:  {
      "Nível": "Ensino Fundamental II — 9º Ano",
      "Categoria": "[[geometria-plana]]",
      "Fórmula": "$a^2 = b^2 + c^2$",
      "Pré-requisito": "[[triangulo-retangulo]], [[angulo-reto]]",
      "Usos Práticos": "Marcenaria, diagonal de telas, aviação",
      "Método de prova": "[[metodos-de-demonstracao]]"
    },
    widget:   "pitagoras"
  },

  {
    id:       "triangulo-retangulo",
    title:    "Triângulo Retângulo",
    level:    "Ensino Fundamental II",
    category: "Geometria",
    axis:     "geometria",
    icon:     "triangle",
    summary:  "O triângulo que possui um ângulo interno de 90°, tornando-se a porta de entrada para a trigonometria e o Teorema de Pitágoras.",
    infobox:  {
      "Ângulo especial": "$90°$ (ângulo reto)",
      "Lados": "Hipotenusa (1) + Catetos (2)",
      "Teorema principal": "[[teorema-de-pitagoras]]",
      "Conexão": "[[geometria-plana]]"
    },
    widget:   null
  },

  {
    id:       "geometria-plana",
    title:    "Geometria Plana",
    level:    "Ensino Fundamental II",
    category: "Geometria",
    axis:     "geometria",
    icon:     "layout",
    summary:  "O estudo das figuras e relações em duas dimensões: pontos, retas, ângulos, polígonos e círculos.",
    infobox:  {
      "Dimensão": "2D",
      "Teoremas": "[[teorema-de-pitagoras]], ângulos, paralelas",
      "Extensão 3D": "Geometria Espacial",
      "Pré-req.": "[[angulo-reto]], [[triangulo-retangulo]]"
    },
    widget:   null
  },

  {
    id:       "angulo-reto",
    title:    "Ângulo Reto",
    level:    "Ensino Fundamental I",
    category: "Geometria",
    axis:     "geometria",
    icon:     "corner-right-up",
    summary:  "Ângulo de exatamente 90°, representado por um pequeno quadrado no vértice. É a base do Teorema de Pitágoras e da trigonometria.",
    infobox:  {
      "Medida": "$90°$",
      "Símbolo": "□ (quadrado no vértice)",
      "Conexão": "[[triangulo-retangulo]], [[teorema-de-pitagoras]]"
    },
    widget:   null
  },

  {
    id:       "soma-dos-impares",
    title:    "Soma dos Números Ímpares",
    level:    "Ensino Médio",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "hash",
    summary:  "A soma dos n primeiros números ímpares é sempre igual a n² — uma conexão surpreendente entre aritmética e geometria.",
    infobox:  {
      "Fórmula": "$1 + 3 + \\dots + (2n-1) = n^2$",
      "Método de prova": "[[inducao-finita]] e visual",
      "Pré-requisito": "[[numero-impar]]",
      "Conexão": "Física (movimento acelerado)"
    },
    widget:   "impares"
  },

  {
    id:       "axiomas-fundamentais",
    title:    "Axiomas Fundamentais da Aritmética",
    level:    "Ensino Fundamental I e II",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "settings",
    summary:  "As verdades básicas e não demonstradas que regem toda a aritmética e álgebra que usamos no dia a dia.",
    infobox:  {
      "Área": "Álgebra e Aritmética",
      "Nível": "Ensino Fundamental I e II",
      "Aplicações": "Cálculo mental, finanças pessoais, programação"
    },
    widget:   null
  },

  {
    id:       "raiz-de-2-irracional",
    title:    "Irracionalidade da Raiz de 2",
    level:    "Ensino Médio",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "help-circle",
    summary:  "Prova clássica por contradição de que √2 não pode ser expresso como razão de dois inteiros.",
    infobox:  {
      "Valor aproximado": "$\\sqrt{2} \\approx 1{,}41421356\\ldots$",
      "Método de prova": "[[demonstracao-absurdo]]",
      "Pré-requisito": "[[numero-par]]",
      "Conexão": "[[teorema-de-pitagoras]], formato de papel (série A)"
    },
    widget:   null
  },

  {
    id:       "metodos-de-demonstracao",
    title:    "Métodos de Demonstração",
    level:    "Ensino Médio",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "book-open",
    summary:  "As seis principais estratégias lógicas para transformar uma conjectura em um teorema matematicamente válido.",
    infobox:  {
      "Quantidade de métodos": "6 principais",
      "Pré-requisito": "[[axiomas-fundamentais]], lógica básica",
      "Exemplos no site": "[[raiz-de-2-irracional]], [[soma-dos-impares]]"
    },
    widget:   null
  },

  {
    id:       "demonstracao-absurdo",
    title:    "Demonstração por Contradição",
    level:    "Ensino Médio",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "x-circle",
    summary:  "Também chamada de redução ao absurdo: supomos o contrário do que queremos provar e mostramos que isso é impossível.",
    infobox:  {
      "Tipo": "Método de demonstração",
      "Também chamada": "Redução ao absurdo",
      "Melhor usada para": "Provar inexistência ou irracionalidade",
      "Exemplos": "[[raiz-de-2-irracional]]",
      "Outros métodos": "[[metodos-de-demonstracao]]"
    },
    widget:   null
  },

  {
    id:       "inducao-finita",
    title:    "Indução Matemática",
    level:    "Ensino Médio",
    category: "Álgebra",
    axis:     "algebra",
    icon:     "layers",
    summary:  "Método para provar que uma propriedade vale para todos os números naturais, usando dois passos: a base e o passo indutivo.",
    infobox:  {
      "Tipo": "Método de demonstração",
      "Passos": "Base ($n=1$) + Passo Indutivo",
      "Exemplo": "[[soma-dos-impares]]",
      "Outros métodos": "[[metodos-de-demonstracao]]"
    },
    widget:   null
  },

  {
    id:       "numero-par",
    title:    "Número Par",
    level:    "Ensino Fundamental I",
    category: "Números e Operações",
    axis:     "numeros-e-operacoes",
    icon:     "divide-circle",
    summary:  "Um número inteiro é par quando pode ser dividido por 2 sem deixar resto.",
    infobox:  {
      "Definição": "$n = 2k$, $k \\in \\mathbb{Z}$",
      "Complemento": "[[numero-impar]]",
      "Uso em provas": "[[raiz-de-2-irracional]]"
    },
    widget:   null
  },

  {
    id:       "numero-impar",
    title:    "Número Ímpar",
    level:    "Ensino Fundamental I",
    category: "Números e Operações",
    axis:     "numeros-e-operacoes",
    icon:     "divide",
    summary:  "Um número inteiro é ímpar quando não é divisível por 2 — seu resto na divisão por 2 é sempre 1.",
    infobox:  {
      "Definição": "$n = 2k+1$, $k \\in \\mathbb{Z}$",
      "Complemento": "[[numero-par]]",
      "Fórmula": "[[soma-dos-impares]]"
    },
    widget:   null
  },

  {
    id:       "potencia-de-dois",
    title:    "Potências de 2",
    level:    "Ensino Fundamental II",
    category: "Números e Operações",
    axis:     "numeros-e-operacoes",
    icon:     "hash",
    summary:  "As potências de 2 são a base da computação digital e surgem naturalmente em problemas de dobramento e divisão sucessiva.",
    infobox:  {
      "Definição": "$2^n = 2 \\times 2 \\times \\ldots \\times 2$ ($n$ vezes)",
      "Primeiro termos": "$1, 2, 4, 8, 16, 32, 64, \\ldots$",
      "Conexão": "[[axiomas-fundamentais]]"
    },
    widget:   null
  },

  /* ══════════════════════════════════════════════════
     LOTE 1 — Fundações
  ══════════════════════════════════════════════════ */
  {
    id: "numero-natural", title: "Número Natural", level: "Ensino Fundamental I",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "hash",
    summary: "Os números que usamos para contar: 0, 1, 2, 3… Fundados formalmente pelos Axiomas de Peano.",
    infobox: { "Conjunto": "$\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$", "Formalização": "[[axiomas-de-peano]]", "Extensão": "[[numero-inteiro]]" },
    widget: null
  },
  {
    id: "numero-inteiro", title: "Número Inteiro", level: "Ensino Fundamental II",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "minus",
    summary: "A extensão dos naturais que inclui os negativos: …−2, −1, 0, 1, 2…",
    infobox: { "Conjunto": "$\\mathbb{Z}$", "Inclui": "[[numero-natural]]", "Extensão": "[[numero-racional]]" },
    widget: null
  },
  {
    id: "numero-racional", title: "Número Racional", level: "Ensino Fundamental II",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "divide",
    summary: "Números que podem ser expressos como fração p/q de inteiros, com q ≠ 0.",
    infobox: { "Conjunto": "$\\mathbb{Q}$", "Forma": "$p/q$, $q \\neq 0$", "Inclui": "[[numero-inteiro]]", "Extensão": "[[numero-real]]" },
    widget: null
  },
  {
    id: "numero-irracional", title: "Número Irracional", level: "Ensino Médio",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "help-circle",
    summary: "Números que não podem ser expressos como fração. Sua expansão decimal é infinita e não-periódica.",
    infobox: { "Exemplos": "$\\sqrt{2}$, $\\pi$, $e$", "Prova clássica": "[[raiz-de-2-irracional]]", "Conexão": "[[numero-real]]" },
    widget: null
  },
  {
    id: "soma", title: "Soma (Adição)", level: "Ensino Fundamental I",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "plus",
    summary: "A operação fundamental de combinar duas quantidades. Base da multiplicação e de toda a aritmética.",
    infobox: { "Notação": "$a + b$", "Neutro": "$a + 0 = a$", "Extensão": "[[multiplicacao]]", "Formal": "[[axiomas-de-peano]]" },
    widget: null
  },
  {
    id: "multiplicacao", title: "Multiplicação", level: "Ensino Fundamental I",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "x",
    summary: "Soma repetida. Cria a segunda dimensão e fundamenta a potenciação.",
    infobox: { "Notação": "$a \\times b$", "Neutro": "$a \\times 1 = a$", "Absorvente": "$a \\times 0 = 0$", "Extensão": "[[potenciacao]]" },
    widget: null
  },
  {
    id: "ponto", title: "Ponto", level: "Ensino Fundamental I",
    category: "Geometria", axis: "geometria", icon: "circle",
    summary: "Ente primitivo da geometria. Indica uma posição exata no espaço, sem dimensão alguma.",
    infobox: { "Tipo": "Ente primitivo (sem definição formal)", "Dimensão": "0D", "Papel": "Origem de toda figura geométrica" },
    widget: null
  },
  {
    id: "reta", title: "Reta", level: "Ensino Fundamental I",
    category: "Geometria", axis: "geometria", icon: "minus",
    summary: "Ente primitivo. Extensão unidimensional infinita, sem espessura. Dois pontos determinam uma única reta.",
    infobox: { "Tipo": "Ente primitivo", "Dimensão": "1D", "Axioma": "2 pontos → 1 única reta", "Equação": "$y = ax + b$" },
    widget: null
  },
  {
    id: "plano", title: "Plano", level: "Ensino Fundamental I",
    category: "Geometria", axis: "geometria", icon: "square",
    summary: "Ente primitivo. Superfície bidimensional ilimitada. Três pontos não-colineares determinam um único plano.",
    infobox: { "Tipo": "Ente primitivo", "Dimensão": "2D", "Axioma": "3 pontos não-colineares → 1 plano" },
    widget: null
  },
  {
    id: "dimensao", title: "Dimensão", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "layers",
    summary: "Número de coordenadas necessárias para localizar um ponto. Do 0D (ponto) ao 3D (espaço volumar).",
    infobox: { "0D": "[[ponto]]", "1D": "[[reta]]", "2D": "[[plano]]", "3D": "Espaço" },
    widget: null
  },
  {
    id: "angulo", title: "Ângulo", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "corner-right-up",
    summary: "Abertura entre duas semirretas de mesma origem (vértice). Medido em graus ou radianos.",
    infobox: { "Vértice": "[[vertice]]", "Unidades": "[[grau]] ou [[radiano]]", "Conexão": "[[trigonometria]]" },
    widget: null
  },
  {
    id: "grau", title: "Grau Sexagesimal (°)", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "rotate-cw",
    summary: "Unidade de medida de ângulos. Um círculo completo = 360°. Criado pelos Babilônios pela alta fatorabilidade do 360.",
    infobox: { "Símbolo": "$^\\circ$", "Círculo": "$360^\\circ$", "Ângulo reto": "$90^\\circ$", "Alternativa": "[[radiano]]" },
    widget: null
  },

  /* ══════════════════════════════════════════════════
     LOTE 2 — Lógica, Polígonos e História
  ══════════════════════════════════════════════════ */
  {
    id: "teorema", title: "Teorema", level: "Ensino Médio",
    category: "Álgebra", axis: "algebra", icon: "check-circle",
    summary: "Uma declaração matemática provada como verdadeira a partir de axiomas via raciocínio lógico rigoroso.",
    infobox: { "Estrutura": "Hipótese → Conclusão", "Contraste": "[[axiomas-fundamentais]]", "Método": "[[metodos-de-demonstracao]]" },
    widget: null
  },
  {
    id: "hipotese", title: "Hipótese", level: "Ensino Médio",
    category: "Álgebra", axis: "algebra", icon: "arrow-right",
    summary: "A condição inicial assumida num teorema (o 'se'). Ponto de partida de todo argumento dedutivo.",
    infobox: { "Papel lógico": "Premissa inicial ('Se P…')", "Contexto": "[[teorema]]", "Destino": "[[conclusao]]" },
    widget: null
  },
  {
    id: "conclusao", title: "Conclusão", level: "Ensino Médio",
    category: "Álgebra", axis: "algebra", icon: "check",
    summary: "O resultado inevitável de um argumento dedutivo (o 'então'). Na matemática, é uma garantia eterna.",
    infobox: { "Papel lógico": "Resultado ('…então Q')", "Contexto": "[[teorema]]", "Origem": "[[hipotese]]" },
    widget: null
  },
  {
    id: "vertice", title: "Vértice", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "corner-right-up",
    summary: "Ponto de encontro de dois lados de um polígono ou de duas semirretas que formam um ângulo.",
    infobox: { "É um": "[[ponto]]", "Gera": "[[angulo]]", "Em polígonos": "[[triangulo]], [[quadrado]]" },
    widget: null
  },
  {
    id: "triangulo", title: "Triângulo", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "triangle",
    summary: "O polígono de três lados. O mais rígido das formas planas e fundamento da trigonometria.",
    infobox: { "Lados": "3", "Vértices": "3", "Soma dos ângulos": "$180^\\circ$", "Caso especial": "[[triangulo-retangulo]]" },
    widget: null
  },
  {
    id: "quadrilatero", title: "Quadrilátero", level: "Ensino Fundamental II",
    category: "Geometria", axis: "geometria", icon: "square",
    summary: "Polígono de quatro lados. Família que inclui trapézios, paralelogramos, retângulos e quadrados.",
    infobox: { "Lados": "4", "Soma dos ângulos": "$360^\\circ$", "Subtipos": "Retângulo, Losango, [[quadrado]]" },
    widget: null
  },
  {
    id: "quadrado", title: "Quadrado", level: "Ensino Fundamental I",
    category: "Geometria", axis: "geometria", icon: "square",
    summary: "Quadrilátero de máxima simetria: quatro lados iguais e quatro ângulos retos.",
    infobox: { "Área": "$A = l^2$", "Diagonal": "$d = l\\sqrt{2}$", "Conexão": "[[teorema-de-pitagoras]], [[numero-irracional]]" },
    widget: null
  },
  {
    id: "pitagoras", title: "Pitágoras de Samos", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "user",
    summary: "Filósofo e matemático grego (c. 570–495 a.C.) fundador da escola pitagórica. Nome associado ao mais famoso teorema da geometria.",
    infobox: { "Viveu": "c. 570–495 a.C.", "Escola": "Pitagórica (Crotona)", "Legado": "[[teorema-de-pitagoras]]", "Paradoxo": "[[numero-irracional]]" },
    widget: null
  },
  {
    id: "euclides", title: "Euclides de Alexandria", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "user",
    summary: "Matemático grego (c. 300 a.C.) e autor de Os Elementos, o maior sistema axiomático da história da geometria.",
    infobox: { "Viveu": "c. 300 a.C.", "Obra": "Os Elementos (13 volumes)", "Legado": "[[geometria-euclidiana]]", "Método": "[[axiomas-fundamentais]] → [[teorema]]s" },
    widget: null
  },
  {
    id: "giuseppe-peano", title: "Giuseppe Peano", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "user",
    summary: "Matemático italiano (1858–1932) que formalizou a aritmética dos números naturais com os Axiomas de Peano.",
    infobox: { "Viveu": "1858–1932", "Nacionalidade": "Italiano", "Legado": "[[axiomas-de-peano]], [[inducao-finita]]", "Símbolo": "$\\in$ (pertencimento)" },
    widget: null
  },

  /* ══════════════════════════════════════════════════
     LOTE 3 — Trigonometria, Reais e História
  ══════════════════════════════════════════════════ */
  {
    id: "trigonometria", title: "Trigonometria", level: "Ensino Médio",
    category: "Geometria", axis: "geometria", icon: "activity",
    summary: "O estudo das relações entre ângulos e lados do triângulo. Base de todo cálculo de ondas, sinais e distâncias.",
    infobox: { "Base": "[[triangulo-retangulo]]", "Razões": "[[seno]], [[cosseno]], [[tangente]]", "Identidade": "$\\sin^2\\theta + \\cos^2\\theta = 1$" },
    widget: null
  },
  {
    id: "seno", title: "Seno", level: "Ensino Médio",
    category: "Geometria", axis: "geometria", icon: "activity",
    summary: "Razão trigonométrica: cateto oposto dividido pela hipotenusa. Função periódica que descreve ondas.",
    infobox: { "Definição": "$\\sin\\theta = \\text{op}/\\text{hip}$", "Valores": "$\\sin 0°=0$, $\\sin 90°=1$", "Conexão": "[[cosseno]], [[triangulo-retangulo]]" },
    widget: null
  },
  {
    id: "cosseno", title: "Cosseno", level: "Ensino Médio",
    category: "Geometria", axis: "geometria", icon: "activity",
    summary: "Razão trigonométrica: cateto adjacente dividido pela hipotenusa. Complemento simétrico do seno.",
    infobox: { "Definição": "$\\cos\\theta = \\text{adj}/\\text{hip}$", "Simetria": "$\\cos\\theta = \\sin(90°-\\theta)$", "Identidade": "$\\sin^2+\\cos^2=1$" },
    widget: null
  },
  {
    id: "tangente", title: "Tangente", level: "Ensino Médio",
    category: "Geometria", axis: "geometria", icon: "trending-up",
    summary: "Razão trigonométrica: cateto oposto sobre o adjacente. Mede a inclinação de uma reta.",
    infobox: { "Definição": "$\\tan\\theta = \\sin\\theta/\\cos\\theta$", "Inclinação": "coeficiente angular de uma reta", "Indefinida em": "$90°$" },
    widget: null
  },
  {
    id: "numero-real", title: "Número Real", level: "Ensino Médio",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "minus",
    summary: "O conjunto completo que une racionais e irracionais. Corresponde a cada ponto da reta numérica sem lacunas.",
    infobox: { "Conjunto": "$\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R}\\setminus\\mathbb{Q})$", "Inclui": "[[numero-racional]], [[numero-irracional]]", "Propriedade": "Completude" },
    widget: null
  },
  {
    id: "potenciacao", title: "Potenciação", level: "Ensino Fundamental II",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "zap",
    summary: "Multiplicação repetida. Extensão natural que conecta a aritmética básica às raízes e logaritmos.",
    infobox: { "Notação": "$a^n$", "Neutro (exp)": "$a^0 = 1$", "Raiz": "$a^{1/n} = \\sqrt[n]{a}$", "Conexão": "[[multiplicacao]], [[numero-irracional]]" },
    widget: null
  },
  {
    id: "divisao", title: "Divisão", level: "Ensino Fundamental I",
    category: "Números e Operações", axis: "numeros-e-operacoes", icon: "divide",
    summary: "Operação inversa da multiplicação. Origem das frações e dos números racionais.",
    infobox: { "Inversa de": "[[multiplicacao]]", "Origem": "[[numero-racional]], [[fracao]]", "Proibição": "$a \\div 0$ é indefinido" },
    widget: null
  },
  {
    id: "arquimedes", title: "Arquimedes de Siracusa", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "user",
    summary: "Maior matemático da Antiguidade (c. 287–212 a.C.). Calculou π por exaustão e fundou a estática e hidrostática.",
    infobox: { "Viveu": "c. 287–212 a.C.", "Método": "Exaustão (precursor do cálculo)", "Legado": "Aproximação de $\\pi$, lei da alavanca" },
    widget: null
  },
  {
    id: "matematica-babilonica", title: "Matemática Babilônica", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "globe",
    summary: "Civilização que inventou o sistema sexagesimal (base 60), precursor do nosso grau e das tríplices pitagóricas.",
    infobox: { "Época": "c. 3000–500 a.C.", "Base numérica": "60 (sexagesimal)", "Tábua famosa": "Plimpton 322 (tríplices pitagóricas)" },
    widget: null
  },
  {
    id: "matematica-indiana", title: "Matemática Indiana", level: "Ensino Médio",
    category: "História", axis: "historia", icon: "globe",
    summary: "Civilização que inventou o zero como número e o sistema posicional decimal — fundações de toda a computação moderna.",
    infobox: { "Legados": "Zero, sistema posicional, seno (jya)", "Brahmagupta": "Formalizou o zero (628 d.C.)", "Aryabhata": "Tabelas do seno (499 d.C.)" },
    widget: null
  }
];
