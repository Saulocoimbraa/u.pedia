/**
 * js/data.js — Catálogo de artigos do μ.pedia
 * Gerado automaticamente por inserir_artigo.js — edite com cuidado.
 */
window.UPEDIA_ARTICLES = [
  {
    id: "teorema-de-pitagoras",
    title: "Teorema de Pitágoras",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "triangle",
    summary: "Relação métrica fundamental que governa os lados de qualquer triângulo retângulo.",
    infobox: {
      "Nível": "Ensino Fundamental II — 9º Ano",
      "Categoria": "[[geometria-plana]]",
      "Fórmula": "$a^2 = b^2 + c^2$",
      "Pré-requisito": "[[triangulo-retangulo]], [[angulo-reto]]",
      "Usos Práticos": "Marcenaria, diagonal de telas, aviação",
      "Método de prova": "[[metodos-de-demonstracao]]"
    },
    widget: "pitagoras"
  },

  {
    id: "triangulo-retangulo",
    title: "Triângulo Retângulo",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "triangle",
    summary: "O triângulo que possui um ângulo interno de 90°, tornando-se a porta de entrada para a trigonometria e o Teorema de Pitágoras.",
    infobox: {
      "Ângulo especial": "$90°$ (ângulo reto)",
      "Lados": "Hipotenusa (1) + Catetos (2)",
      "Teorema principal": "[[teorema-de-pitagoras]]",
      "Conexão": "[[geometria-plana]]"
    },
    widget: null
  },

  {
    id: "geometria-plana",
    title: "Geometria Plana",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "layout",
    summary: "O estudo das figuras e relações em duas dimensões: pontos, retas, ângulos, polígonos e círculos.",
    infobox: {
      "Dimensão": "2D",
      "Teoremas": "[[teorema-de-pitagoras]], ângulos, paralelas",
      "Extensão 3D": "Geometria Espacial",
      "Pré-req.": "[[angulo-reto]], [[triangulo-retangulo]]"
    },
    widget: null
  },

  {
    id: "angulo-reto",
    title: "Ângulo Reto",
    level: "Ensino Fundamental I",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-right-up",
    summary: "Ângulo de exatamente 90°, representado por um pequeno quadrado no vértice. É a base do Teorema de Pitágoras e da trigonometria.",
    infobox: {
      "Medida": "$90°$",
      "Símbolo": "□ (quadrado no vértice)",
      "Conexão": "[[triangulo-retangulo]], [[teorema-de-pitagoras]]"
    },
    widget: null
  },

  {
    id: "soma-dos-impares",
    title: "Soma dos Números Ímpares",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "hash",
    summary: "A soma dos n primeiros números ímpares é sempre igual a n² — uma conexão surpreendente entre aritmética e geometria.",
    infobox: {
      "Fórmula": "$1 + 3 + \\dots + (2n-1) = n^2$",
      "Método de prova": "[[inducao-finita]] e visual",
      "Pré-requisito": "[[numero-impar]]",
      "Conexão": "Física (movimento acelerado)"
    },
    widget: "impares"
  },

  {
    id: "axiomas-fundamentais",
    title: "Axiomas Fundamentais da Aritmética",
    level: "Ensino Fundamental I e II",
    category: "Álgebra",
    axis: "algebra",
    icon: "settings",
    summary: "As verdades básicas e não demonstradas que regem toda a aritmética e álgebra que usamos no dia a dia.",
    infobox: {
      "Área": "Álgebra e Aritmética",
      "Nível": "Ensino Fundamental I e II",
      "Aplicações": "Cálculo mental, finanças pessoais, programação"
    },
    widget: null
  },

  {
    id: "raiz-de-2-irracional",
    title: "Irracionalidade da Raiz de 2",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "help-circle",
    summary: "Prova clássica por contradição de que √2 não pode ser expresso como razão de dois inteiros.",
    infobox: {
      "Valor aproximado": "$\\sqrt{2} \\approx 1{,}41421356\\ldots$",
      "Método de prova": "[[demonstracao-absurdo]]",
      "Pré-requisito": "[[numero-par]]",
      "Conexão": "[[teorema-de-pitagoras]], formato de papel (série A)"
    },
    widget: null
  },

  {
    id: "metodos-de-demonstracao",
    title: "Métodos de Demonstração",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "book-open",
    summary: "As seis principais estratégias lógicas para transformar uma conjectura em um teorema matematicamente válido.",
    infobox: {
      "Quantidade de métodos": "6 principais",
      "Pré-requisito": "[[axiomas-fundamentais]], lógica básica",
      "Exemplos no site": "[[raiz-de-2-irracional]], [[soma-dos-impares]]"
    },
    widget: null
  },

  {
    id: "demonstracao-absurdo",
    title: "Demonstração por Contradição",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "x-circle",
    summary: "Também chamada de redução ao absurdo: supomos o contrário do que queremos provar e mostramos que isso é impossível.",
    infobox: {
      "Tipo": "Método de demonstração",
      "Também chamada": "Redução ao absurdo",
      "Melhor usada para": "Provar inexistência ou irracionalidade",
      "Exemplos": "[[raiz-de-2-irracional]]",
      "Outros métodos": "[[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "inducao-finita",
    title: "Indução Matemática",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "layers",
    summary: "Método para provar que uma propriedade vale para todos os números naturais, usando dois passos: a base e o passo indutivo.",
    infobox: {
      "Tipo": "Método de demonstração",
      "Passos": "Base ($n=1$) + Passo Indutivo",
      "Exemplo": "[[soma-dos-impares]]",
      "Outros métodos": "[[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "numero-par",
    title: "Número Par",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "divide-circle",
    summary: "Um número inteiro é par quando pode ser dividido por 2 sem deixar resto.",
    infobox: {
      "Definição": "$n = 2k$, $k \\in \\mathbb{Z}$",
      "Complemento": "[[numero-impar]]",
      "Uso em provas": "[[raiz-de-2-irracional]]"
    },
    widget: null
  },

  {
    id: "numero-impar",
    title: "Número Ímpar",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "divide",
    summary: "Um número inteiro é ímpar quando não é divisível por 2 — seu resto na divisão por 2 é sempre 1.",
    infobox: {
      "Definição": "$n = 2k+1$, $k \\in \\mathbb{Z}$",
      "Complemento": "[[numero-par]]",
      "Fórmula": "[[soma-dos-impares]]"
    },
    widget: null
  },

  {
    id: "potencia-de-dois",
    title: "Potências de 2",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "hash",
    summary: "As potências de 2 são a base da computação digital e surgem naturalmente em problemas de dobramento e divisão sucessiva.",
    infobox: {
      "Definição": "$2^n = 2 \\times 2 \\times \\ldots \\times 2$ ($n$ vezes)",
      "Primeiro termos": "$1, 2, 4, 8, 16, 32, 64, \\ldots$",
      "Conexão": "[[axiomas-fundamentais]]"
    },
    widget: null
  },

  {
    id: "numero-natural",
    title: "Número Natural",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "hash",
    summary: "Os números que usamos para contar: 0, 1, 2, 3… Fundados formalmente pelos Axiomas de Peano.",
    infobox: {
      "Conjunto": "$\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$",
      "Formalização": "[[axiomas-de-peano]]",
      "Extensão": "[[numero-inteiro]]"
    },
    widget: null
  },

  {
    id: "numero-inteiro",
    title: "Número Inteiro",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "minus",
    summary: "A extensão dos naturais que inclui os negativos: …−2, −1, 0, 1, 2…",
    infobox: {
      "Conjunto": "$\\mathbb{Z}$",
      "Inclui": "[[numero-natural]]",
      "Extensão": "[[numero-racional]]"
    },
    widget: null
  },

  {
    id: "numero-racional",
    title: "Número Racional",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "divide",
    summary: "Números que podem ser expressos como fração p/q de inteiros, com q ≠ 0.",
    infobox: {
      "Conjunto": "$\\mathbb{Q}$",
      "Forma": "$p/q$, $q \\neq 0$",
      "Inclui": "[[numero-inteiro]]",
      "Extensão": "[[numero-real]]"
    },
    widget: null
  },

  {
    id: "numero-irracional",
    title: "Número Irracional",
    level: "Ensino Médio",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "help-circle",
    summary: "Números que não podem ser expressos como fração. Sua expansão decimal é infinita e não-periódica.",
    infobox: {
      "Exemplos": "$\\sqrt{2}$, $\\pi$, $e$",
      "Prova clássica": "[[raiz-de-2-irracional]]",
      "Conexão": "[[numero-real]]"
    },
    widget: null
  },

  {
    id: "soma",
    title: "Soma (Adição)",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "plus",
    summary: "A operação fundamental de combinar duas quantidades. Base da multiplicação e de toda a aritmética.",
    infobox: {
      "Notação": "$a + b$",
      "Neutro": "$a + 0 = a$",
      "Extensão": "[[multiplicacao]]",
      "Formal": "[[axiomas-de-peano]]"
    },
    widget: null
  },

  {
    id: "multiplicacao",
    title: "Multiplicação",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "x",
    summary: "Soma repetida. Cria a segunda dimensão e fundamenta a potenciação.",
    infobox: {
      "Notação": "$a \\times b$",
      "Neutro": "$a \\times 1 = a$",
      "Absorvente": "$a \\times 0 = 0$",
      "Extensão": "[[potenciacao]]"
    },
    widget: null
  },

  {
    id: "ponto",
    title: "Ponto",
    level: "Ensino Fundamental I",
    category: "Geometria",
    axis: "geometria",
    icon: "circle",
    summary: "Ente primitivo da geometria. Indica uma posição exata no espaço, sem dimensão alguma.",
    infobox: {
      "Tipo": "Ente primitivo (sem definição formal)",
      "Dimensão": "0D",
      "Papel": "Origem de toda figura geométrica"
    },
    widget: null
  },

  {
    id: "reta",
    title: "Reta",
    level: "Ensino Fundamental I",
    category: "Geometria",
    axis: "geometria",
    icon: "minus",
    summary: "Ente primitivo. Extensão unidimensional infinita, sem espessura. Dois pontos determinam uma única reta.",
    infobox: {
      "Tipo": "Ente primitivo",
      "Dimensão": "1D",
      "Axioma": "2 pontos → 1 única reta",
      "Equação": "$y = ax + b$"
    },
    widget: null
  },

  {
    id: "plano",
    title: "Plano",
    level: "Ensino Fundamental I",
    category: "Geometria",
    axis: "geometria",
    icon: "square",
    summary: "Ente primitivo. Superfície bidimensional ilimitada. Três pontos não-colineares determinam um único plano.",
    infobox: {
      "Tipo": "Ente primitivo",
      "Dimensão": "2D",
      "Axioma": "3 pontos não-colineares → 1 plano"
    },
    widget: null
  },

  {
    id: "dimensao",
    title: "Dimensão",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "layers",
    summary: "Número de coordenadas necessárias para localizar um ponto. Do 0D (ponto) ao 3D (espaço volumar).",
    infobox: {
      "0D": "[[ponto]]",
      "1D": "[[reta]]",
      "2D": "[[plano]]",
      "3D": "Espaço"
    },
    widget: null
  },

  {
    id: "angulo",
    title: "Ângulo",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-right-up",
    summary: "Abertura entre duas semirretas de mesma origem (vértice). Medido em graus ou radianos.",
    infobox: {
      "Vértice": "[[vertice]]",
      "Unidades": "[[grau]] ou [[radiano]]",
      "Conexão": "[[trigonometria]]"
    },
    widget: null
  },

  {
    id: "grau",
    title: "Grau Sexagesimal (°)",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "rotate-cw",
    summary: "Unidade de medida de ângulos. Um círculo completo = 360°. Criado pelos Babilônios pela alta fatorabilidade do 360.",
    infobox: {
      "Símbolo": "$^\\circ$",
      "Círculo": "$360^\\circ$",
      "Ângulo reto": "$90^\\circ$",
      "Alternativa": "[[radiano]]"
    },
    widget: null
  },

  {
    id: "teorema",
    title: "Teorema",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "check-circle",
    summary: "Uma declaração matemática provada como verdadeira a partir de axiomas via raciocínio lógico rigoroso.",
    infobox: {
      "Estrutura": "Hipótese → Conclusão",
      "Contraste": "[[axiomas-fundamentais]]",
      "Método": "[[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "hipotese",
    title: "Hipótese",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "arrow-right",
    summary: "A condição inicial assumida num teorema (o 'se'). Ponto de partida de todo argumento dedutivo.",
    infobox: {
      "Papel lógico": "Premissa inicial ('Se P…')",
      "Contexto": "[[teorema]]",
      "Destino": "[[conclusao]]"
    },
    widget: null
  },

  {
    id: "conclusao",
    title: "Conclusão",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "check",
    summary: "O resultado inevitável de um argumento dedutivo (o 'então'). Na matemática, é uma garantia eterna.",
    infobox: {
      "Papel lógico": "Resultado ('…então Q')",
      "Contexto": "[[teorema]]",
      "Origem": "[[hipotese]]"
    },
    widget: null
  },

  {
    id: "vertice",
    title: "Vértice",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-right-up",
    summary: "Ponto de encontro de dois lados de um polígono ou de duas semirretas que formam um ângulo.",
    infobox: {
      "É um": "[[ponto]]",
      "Gera": "[[angulo]]",
      "Em polígonos": "[[triangulo]], [[quadrado]]"
    },
    widget: null
  },

  {
    id: "triangulo",
    title: "Triângulo",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "triangle",
    summary: "O polígono de três lados. O mais rígido das formas planas e fundamento da trigonometria.",
    infobox: {
      "Lados": "3",
      "Vértices": "3",
      "Soma dos ângulos": "$180^\\circ$",
      "Caso especial": "[[triangulo-retangulo]]"
    },
    widget: null
  },

  {
    id: "quadrilatero",
    title: "Quadrilátero",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "square",
    summary: "Polígono de quatro lados. Família que inclui trapézios, paralelogramos, retângulos e quadrados.",
    infobox: {
      "Lados": "4",
      "Soma dos ângulos": "$360^\\circ$",
      "Subtipos": "Retângulo, Losango, [[quadrado]]"
    },
    widget: "quadrilateros"
  },

  {
    id: "quadrado",
    title: "Quadrado",
    level: "Ensino Fundamental I",
    category: "Geometria",
    axis: "geometria",
    icon: "square",
    summary: "Quadrilátero de máxima simetria: quatro lados iguais e quatro ângulos retos.",
    infobox: {
      "Área": "$A = l^2$",
      "Diagonal": "$d = l\\sqrt{2}$",
      "Conexão": "[[teorema-de-pitagoras]], [[numero-irracional]]"
    },
    widget: null
  },

  {
    id: "pitagoras",
    title: "Pitágoras de Samos",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "user",
    summary: "Filósofo e matemático grego (c. 570–495 a.C.) fundador da escola pitagórica. Nome associado ao mais famoso teorema da geometria.",
    infobox: {
      "Viveu": "c. 570–495 a.C.",
      "Escola": "Pitagórica (Crotona)",
      "Legado": "[[teorema-de-pitagoras]]",
      "Paradoxo": "[[numero-irracional]]"
    },
    widget: null
  },

  {
    id: "euclides",
    title: "Euclides de Alexandria",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "user",
    summary: "Matemático grego (c. 300 a.C.) e autor de Os Elementos, o maior sistema axiomático da história da geometria.",
    infobox: {
      "Viveu": "c. 300 a.C.",
      "Obra": "Os Elementos (13 volumes)",
      "Legado": "[[geometria-euclidiana]]",
      "Método": "[[axiomas-fundamentais]] → [[teorema]]s"
    },
    widget: null
  },

  {
    id: "giuseppe-peano",
    title: "Giuseppe Peano",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "user",
    summary: "Matemático italiano (1858–1932) que formalizou a aritmética dos números naturais com os Axiomas de Peano.",
    infobox: {
      "Viveu": "1858–1932",
      "Nacionalidade": "Italiano",
      "Legado": "Axiomas de Peano, [[inducao-finita]]",
      "Símbolo": "$\\in$ (pertencimento)"
    },
    widget: null
  },

  {
    id: "trigonometria",
    title: "Trigonometria",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "activity",
    summary: "O estudo das relações entre ângulos e lados do triângulo. Base de todo cálculo de ondas, sinais e distâncias.",
    infobox: {
      "Base": "[[triangulo-retangulo]]",
      "Razões": "[[seno]], [[cosseno]], [[tangente]]",
      "Identidade": "$\\sin^2\\theta + \\cos^2\\theta = 1$"
    },
    widget: null
  },

  {
    id: "seno",
    title: "Seno",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "activity",
    summary: "Razão trigonométrica: cateto oposto dividido pela hipotenusa. Função periódica que descreve ondas.",
    infobox: {
      "Definição": "$\\sin\\theta = \\text{op}/\\text{hip}$",
      "Valores": "$\\sin 0°=0$, $\\sin 90°=1$",
      "Conexão": "[[cosseno]], [[triangulo-retangulo]]"
    },
    widget: null
  },

  {
    id: "cosseno",
    title: "Cosseno",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "activity",
    summary: "Razão trigonométrica: cateto adjacente dividido pela hipotenusa. Complemento simétrico do seno.",
    infobox: {
      "Definição": "$\\cos\\theta = \\text{adj}/\\text{hip}$",
      "Simetria": "$\\cos\\theta = \\sin(90°-\\theta)$",
      "Identidade": "$\\sin^2+\\cos^2=1$"
    },
    widget: null
  },

  {
    id: "tangente",
    title: "Tangente",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "trending-up",
    summary: "Razão trigonométrica: cateto oposto sobre o adjacente. Mede a inclinação de uma reta.",
    infobox: {
      "Definição": "$\\tan\\theta = \\sin\\theta/\\cos\\theta$",
      "Inclinação": "coeficiente angular de uma reta",
      "Indefinida em": "$90°$"
    },
    widget: null
  },

  {
    id: "numero-real",
    title: "Número Real",
    level: "Ensino Médio",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "minus",
    summary: "O conjunto completo que une racionais e irracionais. Corresponde a cada ponto da reta numérica sem lacunas.",
    infobox: {
      "Conjunto": "$\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R}\\setminus\\mathbb{Q})$",
      "Inclui": "[[numero-racional]], [[numero-irracional]]",
      "Propriedade": "Completude"
    },
    widget: null
  },

  {
    id: "potenciacao",
    title: "Potenciação",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "zap",
    summary: "Multiplicação repetida. Extensão natural que conecta a aritmética básica às raízes e logaritmos.",
    infobox: {
      "Notação": "$a^n$",
      "Neutro (exp)": "$a^0 = 1$",
      "Raiz": "$a^{1/n} = \\sqrt[n]{a}$",
      "Conexão": "[[multiplicacao]], [[numero-irracional]]"
    },
    widget: null
  },

  {
    id: "divisao",
    title: "Divisão",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "divide",
    summary: "Operação inversa da multiplicação. Origem das frações e dos números racionais.",
    infobox: {
      "Inversa de": "[[multiplicacao]]",
      "Origem": "[[numero-racional]], [[fracao]]",
      "Proibição": "$a \\div 0$ é indefinido"
    },
    widget: null
  },

  {
    id: "arquimedes",
    title: "Arquimedes de Siracusa",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "user",
    summary: "Maior matemático da Antiguidade (c. 287–212 a.C.). Calculou π por exaustão e fundou a estática e hidrostática.",
    infobox: {
      "Viveu": "c. 287–212 a.C.",
      "Método": "Exaustão (precursor do cálculo)",
      "Legado": "Aproximação de $\\pi$, lei da alavanca"
    },
    widget: null
  },

  {
    id: "matematica-babilonica",
    title: "Matemática Babilônica",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "globe",
    summary: "Civilização que inventou o sistema sexagesimal (base 60), precursor do nosso grau e das tríplices pitagóricas.",
    infobox: {
      "Época": "c. 3000–500 a.C.",
      "Base numérica": "60 (sexagesimal)",
      "Tábua famosa": "Plimpton 322 (tríplices pitagóricas)"
    },
    widget: null
  },

  {
    id: "matematica-indiana",
    title: "Matemática Indiana",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "globe",
    summary: "Civilização que inventou o zero como número e o sistema posicional decimal — fundações de toda a computação moderna.",
    infobox: {
      "Legados": "Zero, sistema posicional, seno (jya)",
      "Brahmagupta": "Formalizou o zero (628 d.C.)",
      "Aryabhata": "Tabelas do seno (499 d.C.)"
    },
    widget: null
  },

  {
    id: "numero-primo",
    title: "Número Primo",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "hash",
    summary: "Um número natural maior que 1 que possui exatamente dois divisores positivos distintos: o 1 e ele mesmo.",
    infobox: {
      "Definição": "$p \\in \\mathbb{N}, p > 1$ divisível apenas por $1$ e $p$",
      "Oposto": "Número composto",
      "Teorema central": "Teorema Fundamental da Aritmética",
      "Primeiro primo": "$2$ (único primo par)"
    },
    widget: null
  },

  {
    id: "fracao",
    title: "Fração",
    level: "Ensino Fundamental I",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "divide",
    summary: "A representação matemática das partes de um todo, expressa pela divisão de dois números inteiros.",
    infobox: {
      "Notação": "$\\frac{a}{b}$ ou $a/b$",
      "Termos": "Numerador ($a$) e Denominador ($b \\neq 0$)",
      "Conexão": "[[numero-racional]]",
      "Operação básica": "[[divisao]]"
    },
    widget: null
  },

  {
    id: "fracao-irredutivel",
    title: "Fração Irredutível",
    level: "Ensino Fundamental II",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "shield-check",
    summary: "Uma fração simplificada ao máximo, onde o numerador e o denominador não possuem divisores comuns além de 1.",
    infobox: {
      "Forma": "$\\frac{p}{q}$ simplificada",
      "Condição": "$\\text{mdc}(p, q) = 1$ (primos entre si)",
      "Importância": "Unicidade na representação racional",
      "Uso em provas": "[[raiz-de-2-irracional]]"
    },
    widget: null
  },

  {
    id: "quadrado-perfeito",
    title: "Quadrado Perfeito",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "square",
    summary: "Um número inteiro que é o resultado de elevar um outro número inteiro ao quadrado.",
    infobox: {
      "Definição": "$n = k^2$ onde $k \\in \\mathbb{Z}$",
      "Exemplos": "$0, 1, 4, 9, 16, 25, 36, \\dots$",
      "Operação inversa": "Raiz quadrada",
      "Conexão": "[[soma-dos-impares]]"
    },
    widget: null
  },

  {
    id: "proporcao",
    title: "Proporção",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "percent",
    summary: "A igualdade entre duas razões matemáticas, estabelecendo relações equivalentes de escala e variação.",
    infobox: {
      "Definição": "$\\frac{a}{b} = \\frac{c}{d}$",
      "Regra central": "Multiplicação cruzada ($a \\times d = b \\times c$)",
      "Termos": "Meios ($b, c$) e Extremos ($a, d$)",
      "Aplicações": "Regra de três, escalas, cartografia"
    },
    widget: null
  },

  {
    id: "logica",
    title: "Lógica Matemática",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "cpu",
    summary: "O ramo da matemática que estuda as regras de inferência lógica, proposições e a consistência das demonstrações.",
    infobox: {
      "Conectivos": "$\\land$ (E), $\\lor$ (OU), $\\neg$ (NÃO), $\\implies$ (Implica)",
      "Base do site": "[[axiomas-fundamentais]]",
      "Aplicações": "[[programacao]], [[metodos-de-demonstracao]]",
      "Estrutura": "[[hipotese]] $\\implies$ [[conclusao]]"
    },
    widget: null
  },

  {
    id: "algoritmo",
    title: "Algoritmo",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "git-commit",
    summary: "Uma sequência passo a passo de instruções inequívocas e finitas criadas para resolver um problema específico.",
    infobox: {
      "Origem do nome": "Al-Khwarizmi (matemático persa)",
      "Características": "Finito, preciso, com entradas e saídas",
      "Exemplos matemáticos": "Algoritmo da divisão, algoritmo de Euclides",
      "Conexão moderna": "[[programacao]]"
    },
    widget: null
  },

  {
    id: "programacao",
    title: "Programação",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "code",
    summary: "A arte e ciência de instruir um computador a realizar tarefas por meio de código escrito em linguagens formais.",
    infobox: {
      "Conexão matemática": "[[logica]], [[algoritmo]]s",
      "Pilares": "Variáveis, controle de fluxo, funções",
      "Aplicações": "Simulações, criptografia, IA",
      "Nível": "Ensino Médio"
    },
    widget: null
  },

  {
    id: "computacao",
    title: "Computação",
    level: "Ensino Médio",
    category: "Números e Operações",
    axis: "numeros-e-operacoes",
    icon: "monitor",
    summary: "O campo científico e técnico que estuda o processamento automatizado de dados e cálculos.",
    infobox: {
      "Base numérica": "Binária (0 e 1)",
      "Unidade básica": "Bit ($2^0$ ou $2^1$)",
      "Conexão matemática": "[[potencia-de-dois]], [[algoritmo]]s",
      "História": "[[matematica-indiana]] (sistema decimal/zero)"
    },
    widget: null
  },

  {
    id: "radiano",
    title: "Radiano",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "compass",
    summary: "A unidade de medida de ângulos na qual a abertura do ângulo corresponde ao comprimento do arco dividido pelo raio.",
    infobox: {
      "Símbolo": "rad",
      "Círculo completo": "$2\\pi$ rad",
      "Equivalência": "$180^\\circ = \\pi$ rad",
      "Pré-requisito": "[[angulo]], [[grau]]"
    },
    widget: null
  },

  {
    id: "angulo-agudo",
    title: "Ângulo Agudo",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-down-right",
    summary: "Um ângulo cuja abertura é estritamente maior que 0° e menor que 90°.",
    infobox: {
      "Faixa em graus": "$0^\\circ < \\theta < 90^\\circ$",
      "Faixa em radianos": "$0 < \\theta < \\frac{\\pi}{2}$ rad",
      "Caso de uso": "[[triangulo-retangulo]]",
      "Oposto": "[[angulo-obtuso]]"
    },
    widget: null
  },

  {
    id: "angulo-obtuso",
    title: "Ângulo Obtuso",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-right-up",
    summary: "Um ângulo cuja abertura é estritamente maior que 90° e menor que 180°.",
    infobox: {
      "Faixa em graus": "$90^\\circ < \\theta < 180^\\circ$",
      "Faixa em radianos": "$\\frac{\\pi}{2} < \\theta < \\pi$ rad",
      "Opostos": "[[angulo-agudo]], [[angulo-reto]]",
      "Contexto": "Triângulo obtusângulo"
    },
    widget: null
  },

  {
    id: "angulo-raso",
    title: "Ângulo Raso",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "minus",
    summary: "Um ângulo plano que mede exatamente 180°, representando meia volta completa.",
    infobox: {
      "Medida": "$180^\\circ$ ou $\\pi$ rad",
      "Geometria": "Forma uma linha reta",
      "Soma de internos": "Soma dos ângulos do [[triangulo]]",
      "Complemento": "[[angulo-complementar]]"
    },
    widget: null
  },

  {
    id: "angulo-complementar",
    title: "Ângulos Complementares",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-right-up",
    summary: "Par de ângulos cujas medidas somadas resultam em exatamente 90°.",
    infobox: {
      "Equação": "$\\alpha + \\beta = 90^\\circ$",
      "Relação trigonométrica": "$\\sin \\alpha = \\cos(90^\\circ-\\alpha)$",
      "Contexto": "[[triangulo-retangulo]]",
      "Pré-requisito": "[[angulo-reto]]"
    },
    widget: null
  },

  {
    id: "poligono",
    title: "Polígono",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "hexagon",
    summary: "Uma figura geométrica plana fechada por segmentos de reta lineares que não se cruzam.",
    infobox: {
      "Elementos": "Lados, vértices, diagonais e ângulos",
      "Tipos principais": "[[triangulo]], [[quadrilatero]], pentágono...",
      "Regularidade": "Lados e ângulos iguais (regular)",
      "Soma dos internos": "$S_i = (n-2) \\times 180^\\circ$"
    },
    widget: null
  },

  {
    id: "hipotenusa",
    title: "Hipotenusa",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "slash",
    summary: "O maior dos três lados de um triângulo retângulo, localizado sempre oposto ao ângulo reto.",
    infobox: {
      "Definição": "Lado oposto ao [[angulo-reto]]",
      "Teorema chave": "[[teorema-de-pitagoras]] ($a^2=b^2+c^2$)",
      "Trigonometria": "Base para [[seno]] e [[cosseno]]",
      "Geometria": "[[triangulo-retangulo]]"
    },
    widget: null
  },

  {
    id: "cateto",
    title: "Cateto",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "corner-left-down",
    summary: "Um dos dois lados de um triângulo retângulo que formam o ângulo reto de 90°.",
    infobox: {
      "Quantidade": "2 por triângulo retângulo",
      "Tipos": "Oposto e Adjacente",
      "Conexão": "[[hipotenusa]]",
      "Teorema": "[[teorema-de-pitagoras]]"
    },
    widget: null
  },

  {
    id: "triangulo-semelhante",
    title: "Semelhança de Triângulos",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "maximize-2",
    summary: "Propriedade geométrica de triângulos que possuem ângulos correspondentes iguais e lados proporcionais.",
    infobox: {
      "Condição 1": "Ângulos correspondentes congruentes",
      "Condição 2": "Lados homólogos proporcionais",
      "Casos comuns": "Caso AA (Ângulo-Ângulo)",
      "Aplicação": "[[teorema-de-tales]], [[trigonometria]]"
    },
    widget: null
  },

  {
    id: "teorema-de-tales",
    title: "Teorema de Tales",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "grid",
    summary: "Teorema que demonstra que um feixe de retas paralelas interceptado por duas retas transversais determina segmentos proporcionais.",
    infobox: {
      "Enunciado": "Segmentos proporcionais em feixes paralelos",
      "Fórmula": "$\\frac{AB}{BC} = \\frac{DE}{EF}$",
      "Criador": "Tales de Mileto",
      "Conexão": "[[triangulo-semelhante]]"
    },
    widget: null
  },

  {
    id: "matematica-grega",
    title: "Matemática Grega",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "globe",
    summary: "O período histórico revolucionário que introduziu a prova formal, a dedução lógica e a geometrização matemática.",
    infobox: {
      "Época": "c. 600 a.C. a 600 d.C.",
      "Personagens": "[[pitagoras]], [[euclides]], [[arquimedes]], Tales",
      "Método central": "Demonstração dedutiva rigorosa",
      "Grande Obra": "Os Elementos de Euclides"
    },
    widget: null
  },

  {
    id: "movimento-uniformemente-acelerado",
    title: "Movimento Uniformemente Acelerado",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "activity",
    summary: "O movimento cuja aceleração é constante, conectando equações quadráticas da álgebra à cinemática física.",
    infobox: {
      "Fórmula": "$s(t) = s_0 + v_0 t + \\frac{1}{2} a t^2$",
      "Aceleração": "Constante ($a \\neq 0$)",
      "Conexão Matemática": "Funções quadráticas, [[soma-dos-impares]]",
      "Ciência": "[[fisica]]"
    },
    widget: null
  },

  {
    id: "fisica",
    title: "Física",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "shield",
    summary: "A ciência natural que estuda a matéria, energia e suas interações, utilizando equações matemáticas como linguagem fundamental.",
    infobox: {
      "Método": "Científico (observação + modelagem)",
      "Linguagem": "Álgebra e cálculo",
      "Fundador moderno": "Galileu Galilei, Isaac Newton",
      "Conexões no site": "[[movimento-uniformemente-acelerado]]"
    },
    widget: null
  },

  {
    id: "filosofia",
    title: "Filosofia",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "help-circle",
    summary: "O estudo das questões fundamentais sobre a existência, conhecimento e verdade, cujas bases estruturaram a lógica formal.",
    infobox: {
      "Origem": "Grécia Antiga",
      "Ferramenta": "Raciocínio lógico, questionamento",
      "Conexão matemática": "[[logica]], [[metodo-socratico]]",
      "Pensadores": "Tales, Pitágoras, Sócrates, Platão"
    },
    widget: null
  },

  {
    id: "metodo-socratico",
    title: "Método Socrático",
    level: "Ensino Médio",
    category: "Álgebra",
    axis: "algebra",
    icon: "message-square",
    summary: "Técnica de investigação filosófica baseada em perguntas sucessivas para expor contradições e atingir definições claras.",
    infobox: {
      "Criador": "Sócrates (c. 470–399 a.C.)",
      "Etapas": "Ironia e Maiêutica (parto de ideias)",
      "Conexão matemática": "[[demonstracao-absurdo]], lógica dedutiva",
      "Eixo": "[[filosofia]]"
    },
    widget: null
  },

  {
    id: "arquitetura",
    title: "Arquitetura",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "home",
    summary: "A arte e técnica de projetar espaços habitáveis baseando-se em proporções e formas geométricas.",
    infobox: {
      "Base": "[[geometria-plana]], proporções",
      "Teorema essencial": "[[teorema-de-pitagoras]]",
      "Aplicações": "Simetria, plantas baixas, volumetria",
      "Conexão": "[[engenharia]]"
    },
    widget: null
  },

  {
    id: "engenharia",
    title: "Engenharia",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "wrench",
    summary: "A aplicação prática da matemática e da física para projetar, construir e manter estruturas, máquinas e processos.",
    infobox: {
      "Base científica": "[[fisica]], matemática",
      "Ramos principais": "Civil, mecânica, elétrica, química...",
      "Área geométrica": "Trigonometria, geometria analítica",
      "Conexão": "[[arquitetura]]"
    },
    widget: null
  },

  {
    id: "geometria-dedutiva",
    title: "Geometria Dedutiva",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "git-merge",
    summary: "O ramo da geometria baseado em provar teoremas logicamente a partir de axiomas estabelecidos, sem depender de medições.",
    infobox: {
      "Método": "Axiomático-dedutivo",
      "Origem histórica": "[[matematica-grega]] (Tales e Pitágoras)",
      "Opõe-se a": "Geometria empírica/prática",
      "Exemplo máximo": "[[geometria-euclidiana]]"
    },
    widget: null
  },

  {
    id: "geometria-euclidiana",
    title: "Geometria Euclidiana",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "globe",
    summary: "O sistema geométrico clássico unificado por Euclides, governando o espaço bidimensional e tridimensional plano.",
    infobox: {
      "Autor": "[[euclides]] (c. 300 a.C.)",
      "Obra": "Os Elementos",
      "Eixo": "[[geometria-plana]] e espacial",
      "Característica": "Espaço plano (sem curvatura)"
    },
    widget: null
  },

  {
    id: "triplice-pitagorica",
    title: "Tríplice Pitagórica",
    level: "Ensino Médio",
    category: "Geometria",
    axis: "geometria",
    icon: "hash",
    summary: "Conjunto de três números inteiros positivos que satisfazem perfeitamente a equação do Teorema de Pitágoras.",
    infobox: {
      "Equação": "$a^2 + b^2 = c^2$, onde $a,b,c \\in \\mathbb{N}^*$",
      "Terno mais famoso": "$(3, 4, 5)$",
      "Origem": "[[matematica-babilonica]]",
      "Aplicação": "Desenho de ângulos retos"
    },
    widget: null
  },

  {
    id: "identidade-algebrica",
    title: "Identidades Algébricas",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "columns",
    summary: "Equações matemáticas contendo variáveis que são válidas para quaisquer valores reais atribuídos a elas, explicadas geometricamente por áreas.",
    infobox: {
      "Exemplo clássico": "$(a+b)^2 = a^2 + 2ab + b^2$",
      "Área de estudo": "Álgebra Geométrica",
      "Relação geométrica": "Área de figuras bidimensionais",
      "Conexão": "[[quadrado]]"
    },
    widget: null
  },

  {
    id: "matematica-egipcia",
    title: "Matemática Egípcia",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "globe",
    summary: "O sistema de matemática prática desenvolvido no Antigo Egito focado em medições, aritmética comercial e engenharia monumental.",
    infobox: {
      "Época": "c. 3000 a.C. a 300 a.C.",
      "Documentos": "Papiro de Rhind, Papiro de Moscou",
      "Características": "Frações unitárias, agrimensura prática",
      "Legado": "Medição de áreas de terras, engenharia"
    },
    widget: null
  },

  {
    id: "historia-da-matematica",
    title: "História da Matemática",
    level: "Ensino Médio",
    category: "História",
    axis: "historia",
    icon: "book-open",
    summary: "A evolução histórica das ideias matemáticas, das técnicas primitivas de contagem à formalização dedutiva moderna.",
    infobox: {
      "Períodos": "Antiguidade, Idade Média, Renascimento, Moderna",
      "Eixos no site": "[[matematica-babilonica]], [[matematica-egipcia]], [[matematica-indiana]], [[matematica-grega]]",
      "Processo": "Cálculo prático $\\implies$ Abstração lógica"
    },
    widget: null
  },

  {
    id: "tabelas-e-graficos",
    title: "Tabelas e Gráficos",
    level: "Ensino Fundamental II",
    category: "Estatística",
    axis: "estatistica",
    icon: "bar-chart-2",
    summary: "Formas de organização, síntese e representação visual de conjuntos de dados estatísticos (colunas, setores e linhas).",
    infobox: {
      "Área": "Estatística Descritiva",
      "Tipos principais": "Tabelas simples/dupla entrada, Colunas, Setores, Linhas",
      "Elementos": "Título, Eixos, Legenda, Fonte, Data",
      "Aplicação": "Análise de mídia, síntese de pesquisas"
    },
    widget: null
  },

  {
    id: "medidas-de-tendencia-central",
    title: "Medidas de Tendência Central",
    level: "Ensino Fundamental II",
    category: "Estatística",
    axis: "estatistica",
    icon: "calculator",
    summary: "Valores sintéticos que representam o centro ou ponto de equilíbrio de um conjunto estatístico: média, moda e mediana.",
    infobox: {
      "Média (x̄)": "Centro de gravidade dos dados",
      "Mediana (Md)": "Divisor de 50% dos dados (robusta a outliers)",
      "Moda (Mo)": "Valor de maior frequência absoluta",
      "Dispersão básica": "Amplitude $A = x_{\\max} - x_{\\min}$"
    },
    widget: null
  },

  {
    id: "espaco-amostral",
    title: "Espaço Amostral",
    level: "Ensino Fundamental II",
    category: "Estatística & Probabilidade",
    axis: "estatistica",
    icon: "disc",
    summary: "O conjunto de todos os resultados possíveis de um experimento aleatório, denotado por Ω.",
    infobox: {
      "Notação": "$\\Omega$ ou $S$",
      "Elemento": "Ponto amostral $\\omega \\in \\Omega$",
      "Evento (A)": "Subconjunto $A \\subseteq \\Omega$",
      "Tipos de evento": "Certo ($A=\\Omega$), Impossível ($A=\\emptyset$)"
    },
    widget: null
  },

  {
    id: "probabilidade-de-um-evento",
    title: "Probabilidade de um Evento",
    level: "Ensino Fundamental II",
    category: "Estatística & Probabilidade",
    axis: "estatistica",
    icon: "percent",
    summary: "A medida quantitativa da incerteza de um evento ocorrer, variando entre 0 (impossível) e 1 (certo).",
    infobox: {
      "Fórmula de Laplace": "$P(A) = \\frac{|A|}{|\\Omega|}$ (espaços equiprováveis)",
      "Intervalo": "$0 \\le P(A) \\le 1$ ($0\\%$ a $100\\%$)",
      "Complementar": "$P(A^c) = 1 - P(A)$",
      "Eventos Independentes": "$P(A \\cap B) = P(A) \\cdot P(B)$"
    },
    widget: null
  },

  {
    id: "pesquisa-amostral-e-censitaria",
    title: "Pesquisa Amostral e Censitária",
    level: "Ensino Fundamental II",
    category: "Estatística",
    axis: "estatistica",
    icon: "users",
    summary: "Métodos de coleta de dados estatísticos sobre uma população inteira (Censo) ou sobre um subconjunto representativo (Amostra).",
    infobox: {
      "População (N)": "Universo total de indivíduos",
      "Amostra (n)": "Subconjunto representativo",
      "Amostragem Probabilística": "Aleatória Simples, Sistemática, Estratificada",
      "Armadilha": "Viés de amostragem (*Sampling Bias*)"
    },
    widget: null
  },

  // ── Lote 7 — Álgebra: Equações e Funções ──────────────────────────────────
  {
    id: "equacao-do-primeiro-grau",
    title: "Equação do Primeiro Grau",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "sliders",
    summary: "Igualdade matemática com uma variável de expoente 1, resolvida pelo isolamento da incógnita aplicando as propriedades aditiva e multiplicativa da igualdade.",
    infobox: {
      "Forma geral": "$ax + b = c$, com $a \\neq 0$",
      "Solução": "$x = \\frac{c - b}{a}$",
      "Interpretação Geométrica": "Interseção de uma [[reta]] com o eixo $x$",
      "Pré-requisito": "[[axiomas-fundamentais]]"
    },
    widget: null
  },

  {
    id: "sistemas-de-equacoes",
    title: "Sistemas de Equações",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "git-branch",
    summary: "Conjunto de equações lineares que devem ser satisfeitas simultaneamente. Classificados em SPD (solução única), SPI (infinitas soluções) ou SI (impossível).",
    infobox: {
      "Forma geral": "$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$",
      "Métodos": "Substituição, Adição, Comparação",
      "SPD (Concorrentes)": "$\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$",
      "Conexão": "[[plano-cartesiano]], [[reta]]"
    },
    widget: null
  },

  {
    id: "equacao-do-segundo-grau",
    title: "Equação do Segundo Grau",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "activity",
    summary: "Equação polinomial onde o maior expoente da variável é 2. Resolvida pela Fórmula de Bhaskara: x = (-b ± √Δ) / 2a.",
    infobox: {
      "Forma geral": "$ax^2 + bx + c = 0$, com $a \\neq 0$",
      "Discriminante": "$\\Delta = b^2 - 4ac$",
      "Bhaskara": "$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$",
      "Conexão": "[[fatoracao-algebrica]], [[numero-real]]"
    },
    widget: null
  },

  {
    id: "fatoracao-algebrica",
    title: "Fatoração Algébrica",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "scissors",
    summary: "Processo de reescrever uma expressão algébrica como produto de fatores mais simples. Casos: fator comum, agrupamento, diferença de quadrados, trinômio perfeito.",
    infobox: {
      "Inversa de": "Expansão/Distributiva",
      "Diferença de Quadrados": "$a^2 - b^2 = (a-b)(a+b)$",
      "Trinômio Perfeito": "$a^2 + 2ab + b^2 = (a+b)^2$",
      "Aplicação": "Simplificação de frações algébricas, raízes de [[equacao-do-segundo-grau]]"
    },
    widget: null
  },

  {
    id: "funcao",
    title: "Função",
    level: "Ensino Fundamental II",
    category: "Álgebra",
    axis: "algebra",
    icon: "arrow-right",
    summary: "Relação matemática que associa a cada elemento do Domínio exatamente um único elemento do Contradomínio. Representada algebricamente, numericamente ou graficamente.",
    infobox: {
      "Notação": "$f: A \\to B,\\ x \\mapsto f(x)$",
      "Univocidade": "Cada $x \\in A$ tem exatamente 1 imagem $f(x)$",
      "Imagem": "$Im(f) \\subseteq CD(f)$",
      "Famílias": "Afim ($ax+b$), Quadrática ($ax^2+bx+c$), Exponencial ($a^x$)"
    },
    widget: null
  },

  // ── Lote 8 — Grandezas, Medidas e Sistema Monetário ─────────────────────
  {
    id: "sistema-monetario-brasileiro",
    title: "Sistema Monetário Brasileiro",
    level: "Ensino Fundamental I",
    category: "Grandezas e Medidas",
    axis: "grandezas-e-medidas",
    icon: "dollar-sign",
    summary: "Conjunto de moedas e cédulas do Real (R$) que regula as trocas comerciais no Brasil, incluindo cálculo de troco e desconto percentual.",
    infobox: {
      "Unidade": "Real (R$) = 100 centavos",
      "Cédulas": "R$2, R$5, R$10, R$20, R$50, R$100, R$200",
      "Troco": "$V_{\\text{pago}} - V_{\\text{compra}}$",
      "Desconto": "$V \\cdot (1 - d/100)$"
    },
    widget: null
  },

  {
    id: "unidades-de-medida",
    title: "Unidades de Medida",
    level: "Ensino Fundamental I",
    category: "Grandezas e Medidas",
    axis: "grandezas-e-medidas",
    icon: "ruler",
    summary: "Padrões do Sistema Internacional (SI) para quantificar as grandezas fundamentais: comprimento (m), massa (kg), capacidade (L), tempo (h/min/s) e temperatura (°C).",
    infobox: {
      "Comprimento": "km → m → cm → mm (fator 10/100/1000)",
      "Massa": "t → kg → g → mg (fator 1000)",
      "Capacidade": "$1\\text{ dm}^3 = 1\\text{ L}$, $1\\text{ cm}^3 = 1\\text{ mL}$",
      "Tempo": "1h = 60min = 3600s (base 60)"
    },
    widget: null
  },

  {
    id: "perimetro-e-area",
    title: "Perímetro e Área",
    level: "Ensino Fundamental I",
    category: "Grandezas e Medidas",
    axis: "grandezas-e-medidas",
    icon: "maximize",
    summary: "Perímetro é o comprimento do contorno (1D); Área é a extensão de superfície (2D). Fórmulas para retângulo, quadrado, triângulo, trapézio e círculo.",
    infobox: {
      "Retângulo": "$A = b \\cdot h$, $P = 2b + 2h$",
      "Triângulo": "$A = \\frac{b \\cdot h}{2}$",
      "Círculo": "$A = \\pi r^2$, $C = 2\\pi r$",
      "Atenção": "Mesmo perímetro ≠ mesma área (e vice-versa)"
    },
    widget: null
  },

  {
    id: "volume-do-bloco-retangular",
    title: "Volume do Bloco Retangular",
    level: "Ensino Fundamental I",
    category: "Grandezas e Medidas",
    axis: "grandezas-e-medidas",
    icon: "box",
    summary: "O volume de um paralelepípedo reto-retângulo é o produto de suas três dimensões (base × comprimento × altura). Inclui conversões entre m³, dm³, cm³ e litros.",
    infobox: {
      "Bloco Retangular": "$V = b \\times c \\times h$",
      "Cubo": "$V = L^3$",
      "Conversão SI": "$1\\text{ m}^3 = 1000\\text{ L}$",
      "Prisma Geral": "$V = A_{\\text{base}} \\times h$"
    },
    widget: null
  },

  // ── Lote 9 — Geometria: Coordenadas, Espacial e Transformações ────────────
  {
    id: "plano-cartesiano",
    title: "Plano Cartesiano",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "grid",
    summary: "Sistema de referência bidimensional com dois eixos perpendiculares que permite representar pontos do plano por pares ordenados (x, y). Base da Geometria Analítica.",
    infobox: {
      "Criador": "René Descartes (séc. XVII)",
      "Pares Ordenados": "$(x, y)$ — Abscissa e Ordenada",
      "Distância": "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$",
      "Ponto Médio": "$M = (\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2})$"
    },
    widget: null
  },

  {
    id: "geometria-espacial",
    title: "Geometria Espacial",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "box",
    summary: "Estudo dos sólidos geométricos tridimensionais: poliedros (prismas, pirâmides) e sólidos de revolução (cilindro, cone, esfera), suas propriedades, áreas e volumes.",
    infobox: {
      "Poliedros": "Prismas ($V = A_{base} \\cdot h$), Pirâmides ($V = \\frac{A_{base} \\cdot h}{3}$)",
      "Cilindro": "$V = \\pi r^2 h$",
      "Cone": "$V = \\frac{\\pi r^2 h}{3}$",
      "Euler (Poliedros)": "$V - A + F = 2$"
    },
    widget: null
  },

  {
    id: "simetria-e-transformacoes-geometricas",
    title: "Simetria e Transformações Geométricas",
    level: "Ensino Fundamental II",
    category: "Geometria",
    axis: "geometria",
    icon: "copy",
    summary: "Isometrias (translação, reflexão e rotação) que preservam forma e tamanho, e homotecia que gera figuras semelhantes. Base da Geometria das Transformações.",
    infobox: {
      "Isometrias": "Translação, Reflexão (Simetria), Rotação",
      "Reflexão": "Mediatriz de $PP'$ é o eixo de simetria",
      "Rotação (n-simetria)": "Ordem $n$: coincide após $\\frac{360°}{n}$",
      "Homotecia (razão k)": "Gera figuras [[triangulo-semelhante|semelhantes]]"
    },
    widget: null
  }
];

/**
 * Metadados visuais e estruturais de cada eixo temático.
 * Consumido por: sidebar.js, home.js, axisHome.js
 */
window.UPEDIA_AXES = {
  "geometria": {
    label: "Geometria",
    icon: "triangle",
    color: "#10b981",
    colorLight: "#d1fae5",
    description: "Figuras, relações métricas e demonstrações no plano e no espaço. Do triângulo retângulo à trigonometria.",
    anchor: "geometria-plana",
    keywords: ["triângulo", "ângulo", "polígono", "círculo", "pitágoras", "seno", "cosseno"]
  },
  "algebra": {
    label: "Álgebra",
    icon: "hash",
    color: "#4f46e5",
    colorLight: "#ede9fe",
    description: "A linguagem das estruturas abstratas: equações, funções, lógica e demonstrações formais.",
    anchor: "logica",
    keywords: ["equação", "função", "axioma", "demonstração", "lógica", "fatoração"]
  },
  "numeros-e-operacoes": {
    label: "Números e Operações",
    icon: "calculator",
    color: "#f59e0b",
    colorLight: "#fef3c7",
    description: "Do número natural ao real: operações, potências, divisibilidade e a estrutura dos conjuntos numéricos.",
    anchor: "numero-real",
    keywords: ["inteiro", "racional", "irracional", "potência", "fatoração", "divisão"]
  },
  "historia": {
    label: "História da Matemática",
    icon: "scroll-text",
    color: "#ec4899",
    colorLight: "#fce7f3",
    description: "As pessoas e culturas que construíram a matemática: de Euclides e Pitágoras à civilização babilônica.",
    anchor: "euclides",
    keywords: ["Euclides", "Pitágoras", "Peano", "Arquimedes", "babilônia", "axiomas"]
  },
  "estatistica": {
    label: "Estatística e Probabilidade",
    icon: "bar-chart-2",
    color: "#06b6d4",
    colorLight: "#cffafe",
    description: "Coleta, organização e interpretação de dados. Espaços amostrais, médias e probabilidades de eventos.",
    anchor: "espaco-amostral",
    keywords: ["média", "mediana", "moda", "probabilidade", "gráfico", "amostra"]
  },
  "grandezas-e-medidas": {
    label: "Grandezas e Medidas",
    icon: "ruler",
    color: "#f97316",
    colorLight: "#ffedd5",
    description: "Sistemas de medição, áreas, volumes e grandezas do cotidiano escolar e profissional.",
    anchor: "unidades-de-medida",
    keywords: ["metro", "área", "volume", "perímetro", "sistema métrico", "conversão"]
  }
};
