export const articles = [
  {
    id: "teorema-de-pitagoras",
    title: "Teorema de Pitágoras",
    level: "Ensino Fundamental II",
    category: "Geometria",
    icon: "triangle",
    summary: "Relação métrica fundamental que governa os lados de qualquer triângulo retângulo.",
    content: String.raw`
O Teorema de Pitágoras é uma das leis mais antigas e úteis de toda a [[geometria-plana]]. Ele descreve uma relação especial que existe entre os lados de qualquer [[triangulo-retangulo]] — ou seja, todo triângulo que possui um [[angulo-reto]] interno.

### A Fórmula Central

Em qualquer triângulo retângulo, o quadrado do comprimento da [[hipotenusa]] é sempre igual à soma dos quadrados dos dois [[catetos]].

$$a^2 = b^2 + c^2$$

Nessa equação, $a$ é a medida da hipotenusa (o maior lado, oposto ao ângulo reto), e $b$ e $c$ são as medidas dos dois catetos.

### Por que isso funciona? A Prova Visual

A prova mais intuitiva é a de rearranjo geométrico. Imagine quatro triângulos iguais organizados dentro de um grande quadrado de lado $b+c$. Se colocarmos as peças nas pontas, a área vazia no meio forma um quadrado de área $a^2$. Se movermos essas mesmas quatro peças para formar dois retângulos nos cantos, o espaço vazio restante passa a ser dois quadrados menores: um de lado $b$ (área $b^2$) e outro de lado $c$ (área $c^2$).

Como o tamanho do quadrado total e a área dos quatro triângulos são os mesmos em ambas as posições, o espaço vazio deve ser o mesmo: logo, $a^2 = b^2 + c^2$. 

Você pode experimentar essa animação (e também a versão de grid com quadradinhos menores) na ferramenta interativa abaixo:

{{widget}}

### Demonstração Formal (Por Semelhança de Triângulos)

Para provar formalmente a relação sem depender apenas do apelo visual do rearranjo, recorremos à geometria dedutiva clássica usando a semelhança entre triângulos retângulos.

Para isso, dividimos o triângulo original traçando a sua altura. Veja o diagrama geométrico abaixo:

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="360" height="210" viewBox="0 0 360 210" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; box-shadow: var(--shadow-subtle);">
    <!-- Altitude line h (red dashed) -->
    <line x1="150" y1="40" x2="150" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" />
    
    <!-- Right angle marker at H -->
    <rect x="150" y="150" width="10" height="10" fill="none" stroke="#9ca3af" stroke-width="1.5" />
    <circle cx="155" cy="155" r="1" fill="#9ca3af" />
    
    <!-- Outer Triangle ABC -->
    <polygon points="150,40 60,160 310,160" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round" />
    
    <!-- Vertex Labels -->
    <text x="150" y="28" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">A (90°)</text>
    <text x="45" y="165" text-anchor="end" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">B</text>
    <text x="325" y="165" text-anchor="start" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">C</text>
    <text x="150" y="180" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#ef4444">H</text>
    
    <!-- Sides and segments labels -->
    <text x="95" y="95" text-anchor="end" font-family="var(--font-family)" font-weight="600" font-size="13" fill="#4f46e5">c</text>
    <text x="240" y="95" text-anchor="start" font-family="var(--font-family)" font-weight="600" font-size="13" fill="#10b981">b</text>
    <text x="142" y="105" text-anchor="end" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#ef4444">h</text>
    <text x="105" y="152" text-anchor="middle" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#4f46e5">m</text>
    <text x="230" y="152" text-anchor="middle" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#10b981">n</text>
    
    <!-- Bracket indicator for hypotenuse a -->
    <line x1="60" y1="192" x2="310" y2="192" stroke="#f59e0b" stroke-width="1.5" />
    <line x1="60" y1="188" x2="60" y2="196" stroke="#f59e0b" stroke-width="1.5" />
    <line x1="310" y1="188" x2="310" y2="196" stroke="#f59e0b" stroke-width="1.5" />
    <text x="185" y="205" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="12" fill="#f59e0b">hipotenusa a = m + n</text>
  </svg>
</div>

A demonstração desenvolve-se nos seguintes passos lógicos e rigorosos:

1. **Definição da Altura:** No triângulo retângulo $ABC$ (com ângulo reto em $A$), traçamos a altura $h$ relativa à hipotenusa $BC$. O ponto de encontro na hipotenusa é $H$. Esse traço divide a hipotenusa $a$ em dois segmentos: $BH = m$ e $HC = n$, de modo que $a = m + n$.

2. **Criação de Triângulos Semelhantes:** A linha $AH$ divide o triângulo original em dois triângulos menores: $ABH$ e $ACH$. Ambos são também triângulos retângulos (com ângulo reto em $H$).

3. **Justificativa de Semelhança (Caso Ângulo-Ângulo):**
   * O triângulo médio $ABH$ compartilha o ângulo do vértice $B$ com o triângulo total $ABC$. Como ambos possuem um ângulo reto ($90^\circ$), eles são semelhantes pelo caso Ângulo-Ângulo ($\Delta ABH \sim \Delta CBA$).
   * O triângulo pequeno $ACH$ compartilha o ângulo do vértice $C$ com o triângulo total $ABC$. Pelo mesmo motivo, eles são semelhantes ($\Delta ACH \sim \Delta BCA$).

4. **Proporção do Cateto $c$:**
   Pela semelhança do triângulo médio ($\Delta ABH \sim \Delta CBA$), a razão entre os lados homólogos (correspondentes) deve ser igual. Comparando a hipotenusa de cada um e o cateto menor de cada um, temos:
   $$\frac{c}{a} = \frac{m}{c}$$
   Multiplicando em cruz, obtemos a primeira relação métrica fundamental:
   $$c^2 = a \cdot m$$
   *(O quadrado do cateto $c$ é igual ao produto da hipotenusa $a$ pela projeção $m$ desse cateto sobre ela).*

5. **Proporção do Cateto $b$:**
   Pela semelhança do triângulo pequeno ($\Delta ACH \sim \Delta BCA$), aplicamos o mesmo princípio de proporcionalidade dos lados:
   $$\frac{b}{a} = \frac{n}{b}$$
   Multiplicando em cruz, obtemos a segunda relação métrica:
   $$b^2 = a \cdot n$$
   *(O quadrado do cateto $b$ é igual ao produto da hipotenusa $a$ pela projeção $n$ desse cateto sobre ela).*

6. **Soma dos Quadrados (Conclusão Algébrica):**
   Agora, somamos membro a membro as duas equações obtidas nos passos 4 e 5:
   $$b^2 + c^2 = a \cdot n + a \cdot m$$
   Colocando a hipotenusa $a$ em evidência no termo da direita:
   $$b^2 + c^2 = a(n + m)$$
   Como sabemos pelo passo 1 que $n + m$ é a própria hipotenusa completa $a$, substituímos o parêntese por $a$:
   $$b^2 + c^2 = a \cdot a \implies b^2 + c^2 = a^2$$

Fica assim demonstrado que a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.
`,
    infobox: {
      "Nível":          "Ensino Fundamental II — 9º Ano",
      "Categoria":      "[[geometria-plana]]",
      "Fórmula":        "$a^2 = b^2 + c^2$",
      "Pré-requisito":  "[[triangulo-retangulo]], [[angulo-reto]]",
      "Usos Práticos":  "Marcenaria, diagonal de telas, [[gps-e-localizacao]], aviação",
      "Método de prova":"[[metodos-de-demonstracao]]"
    },
    widget: "pitagoras"
  },

  {
    id: "soma-dos-impares",
    title: "Soma dos Números Ímpares",
    level: "Ensino Médio",
    category: "Álgebra",
    icon: "hash",
    summary: "A soma dos n primeiros números ímpares é sempre igual a n² — uma conexão surpreendente entre aritmética e geometria.",
    content: String.raw`
Se você somar os primeiros números ímpares ($1, 3, 5, 7, \ldots$) percebe algo curioso: o resultado sempre é um [[quadrado-perfeito]].

* $1 = 1^2$
* $1 + 3 = 4 = 2^2$
* $1 + 3 + 5 = 9 = 3^2$
* $1 + 3 + 5 + 7 = 16 = 4^2$

Isso leva à fórmula geral:

$$1 + 3 + 5 + \dots + (2n - 1) = n^2$$

### Por que é verdade? A prova visual

A explicação mais bonita não usa álgebra — usa geometria. Pense num quadrado $n \times n$ de bloquinhos. Para ir de um quadrado $k \times k$ para um quadrado $(k+1) \times (k+1)$, você adiciona uma fileira em formato de "L" ao redor de dois lados. Essa fileira em L sempre tem exatamente $2k + 1$ bloquinhos — que é precisamente o próximo [[numero-impar]] da sequência. Use o widget abaixo para visualizar isso.

{{widget}}

### A Prova Formal por Indução

Para garantir que a fórmula vale para todo número natural $n$ (não apenas para os casos que testamos), usamos o método de [[inducao-finita]], um dos mais importantes [[metodos-de-demonstracao]].

O argumento tem dois passos:

1. Verificamos que a fórmula é verdadeira para $n = 1$: a soma do primeiro ímpar é $1$, e $1^2 = 1$. ✓

2. Supomos que a fórmula vale para algum $n = k$ (hipótese de indução) e provamos que então ela também vale para $n = k+1$. Somando o próximo ímpar $(2k+1)$ a ambos os lados:
$$k^2 + (2k+1) = (k+1)^2$$
O resultado é o quadrado do próximo número — exatamente o que precisávamos provar.

Como a base é verdadeira e o passo indutivo funciona, por [[inducao-finita]] a fórmula vale para todo $n \in \mathbb{N}$.

### Conexão com Física

No movimento uniformemente acelerado a partir do repouso, os espaços percorridos em intervalos de tempo iguais seguem exatamente a razão $1:3:5:7:\ldots$ — a sequência dos números ímpares. Essa relação foi observada por Galileu no século XVII.
    `,
    infobox: {
      "Fórmula":        "$1 + 3 + \\dots + (2n-1) = n^2$",
      "Método de prova":"[[inducao-finita]] e visual",
      "Pré-requisito":  "[[numero-impar]], [[quadrado-perfeito]]",
      "Conexão":        "Física (movimento acelerado), [[progressao-aritmetica]]"
    },
    widget: "impares"
  },

  {
    id: "raiz-de-2-irracional",
    title: "Irracionalidade da Raiz de 2",
    level: "Ensino Médio",
    category: "Lógica",
    icon: "help-circle",
    summary: "Prova clássica por contradição de que √2 não pode ser expresso como razão de dois inteiros.",
    content: String.raw`
$\sqrt{2}$ é um dos primeiros [[numero-irracional]] que encontramos. Sua irracionalidade foi descoberta pelos pitagóricos e causou um choque filosófico: nem todo comprimento pode ser medido por uma fração.

### A Prova por Contradição

Usamos o método de [[demonstracao-absurdo]] — supor o contrário do que queremos provar e mostrar que isso leva a uma impossibilidade.

Suponha, por absurdo, que $\sqrt{2}$ é racional. Então existem inteiros $a$ e $b$ (com $b \neq 0$) tais que:

$$\sqrt{2} = \frac{a}{b}$$

Podemos assumir que a fração já está na forma irredutível — ou seja, $a$ e $b$ não têm fatores em comum.

Elevando ao quadrado ambos os lados:

$$2 = \frac{a^2}{b^2} \implies a^2 = 2b^2$$

Como $a^2$ é igual a $2$ vezes algo, $a^2$ é [[numero-par]]. Pela propriedade dos [[numero-par]], se o quadrado de um número é par, o próprio número também é par. Portanto $a = 2k$ para algum inteiro $k$.

Substituindo na equação:

$$(2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2$$

Pelo mesmo argumento, $b$ também é [[numero-par]].

Mas agora temos uma contradição: se $a$ e $b$ são ambos pares, a fração $\frac{a}{b}$ não estava na forma irredutível — contradizendo nossa suposição inicial. Portanto, $\sqrt{2}$ não pode ser racional.

### Significado geométrico

A diagonal de um [[quadrado-unitario]] (quadrado de lado $1$) tem comprimento $\sqrt{2}$ — pelo [[teorema-de-pitagoras]], $1^2 + 1^2 = 2$. O fato de $\sqrt{2}$ ser irracional significa que essa diagonal não pode ser medida com precisão por nenhuma régua graduada em frações de números inteiros.

### No Cotidiano

O formato das folhas da série A (A4, A3, A2...) é baseado na proporção $1:\sqrt{2}$. Isso garante que, ao dobrar uma folha ao meio, a nova metade mantém exatamente a mesma proporção de formato.
    `,
    infobox: {
      "Valor aproximado": "$\\sqrt{2} \\approx 1{,}41421356\\ldots$",
      "Método de prova":  "[[demonstracao-absurdo]]",
      "Pré-requisito":    "[[numero-par]], [[numero-irracional]]",
      "Conexão":          "[[teorema-de-pitagoras]], formato de papel (série A)"
    },
    widget: null
  },

  {
    id: "axiomas-fundamentais",
    title: "Axiomas Fundamentais da Aritmética",
    level: "Ensino Fundamental I e II",
    category: "Álgebra",
    icon: "settings",
    summary: "As verdades básicas e não demonstradas que regem toda a aritmética e álgebra que usamos no dia a dia.",
    content: String.raw`
Axiomas são as regras fundamentais do jogo matemático. São verdades aceitas como ponto de partida, sem necessidade de demonstração — e a partir delas derivamos todos os [[teoremas]] mais avançados.

### Comutatividade

A ordem das operações não altera o resultado, tanto na [[soma]] quanto na [[multiplicacao]].

$$a + b = b + a \qquad a \times b = b \times a$$

Exemplo: comprar R$ 5 de pão e R$ 3 de leite custa o mesmo que comprar R$ 3 de leite e depois R$ 5 de pão.

### Associatividade

A forma de agrupar os números também não muda o resultado.

$$(a + b) + c = a + (b + c)$$

Exemplo: para calcular $2 + 3 + 4$, tanto faz fazer $(2+3)+4 = 9$ ou $2+(3+4) = 9$.

### Distributividade

A multiplicação "distribui" sobre a soma.

$$a \times (b + c) = a \times b + a \times c$$

Exemplo: a área de um terreno de $8\text{m}$ de largura dividido em dois cômodos de $5\text{m}$ e $3\text{m}$ de comprimento pode ser calculada como $8 \times (5 + 3) = 8 \times 8 = 64\text{m}^2$, ou como $8 \times 5 + 8 \times 3 = 40 + 24 = 64\text{m}^2$.

### Elemento Neutro

Existe um valor que, combinado com qualquer outro, não o altera.

* Para a soma: $a + 0 = a$ — o zero é o elemento neutro.
* Para a multiplicação: $a \times 1 = a$ — o um é o elemento neutro.

### Axioma do Infinito

Existe um número inicial e sempre existe um próximo — a contagem nunca termina. Esse axioma garante que $\mathbb{N} = \{1, 2, 3, \ldots\}$ é infinito e que perguntas como "qual o maior número?" não têm resposta.

Esses axiomas são a base sobre a qual se constroem todos os [[metodos-de-demonstracao]] e [[teoremas]] da álgebra.
    `,
    infobox: {
      "Área":           "Álgebra e Aritmética",
      "Nível":          "Ensino Fundamental I e II",
      "Conceitos base": "[[soma]], [[multiplicacao]], [[teoremas]]",
      "Aplicações":     "Cálculo mental, finanças pessoais, programação"
    },
    widget: null
  },

  {
    id: "metodos-de-demonstracao",
    title: "Métodos de Demonstração",
    level: "Ensino Médio",
    category: "Lógica",
    icon: "book-open",
    summary: "As seis principais estratégias lógicas para transformar uma conjectura em um teorema matematicamente válido.",
    content: String.raw`
Uma demonstração matemática é uma cadeia rigorosa de raciocínios que parte de verdades conhecidas ([[axiomas-fundamentais]] ou teoremas já provados) e chega a uma nova verdade. Ela é universal: não apenas "funciona para os casos que testei", mas vale para todos os casos possíveis, para sempre.

Existem seis métodos principais. Cada um é uma estratégia diferente de ataque.

### 1. Demonstração Direta

A mais intuitiva. Parte-se da hipótese e, passo a passo, chega-se à conclusão.

Exemplo: provar que a soma de dois [[numero-par]] é sempre par. Se $a = 2k$ e $b = 2m$, então $a + b = 2(k+m)$, que também é par.

### 2. Demonstração por Contradição (Redução ao Absurdo)

Veja [[demonstracao-absurdo]] para uma explicação detalhada e exemplos. A ideia central: supor o contrário do que se quer provar e mostrar que isso leva a uma impossibilidade.

Exemplo clássico: a [[raiz-de-2-irracional]].

### 3. Demonstração por Indução Finita

Usada para provar que algo vale para todos os números naturais. Tem dois passos:

* Verificar o caso $n = 1$ (a base).
* Mostrar que se vale para $n = k$, então vale para $n = k+1$ (o passo indutivo).

Pense numa fileira infinita de dominós: se o primeiro cai e cada peça derruba a próxima, todas cairão. A [[soma-dos-impares]] é um exemplo clássico.

### 4. Demonstração por Exaustão

Quando as possibilidades são poucas e finitas, analisa-se cada caso. Exemplo: provar que o quadrado de qualquer número termina em $\{0, 1, 4, 5, 6, 9\}$ — basta testar os 10 últimos dígitos possíveis ($0$ a $9$).

### 5. Demonstração Construtiva

Prova que algo existe apresentando uma construção explícita. Exemplo: provar que é possível fazer um [[triangulo-retangulo]] com lados 3, 4 e 5 — basta construí-lo.

### 6. Demonstração por Contra-Exemplo

Usada para provar que uma afirmação universal é *falsa*. Basta um único exemplo que a contrarie.

Exemplo: refutar "todo número primo é ímpar". O número $2$ é primo e par — isso derruba a afirmação inteira.

Esses métodos são ferramentas. Reconhecer qual usar em cada situação é o coração do pensamento matemático.
    `,
    infobox: {
      "Quantidade de métodos": "6 principais",
      "Pré-requisito":         "[[axiomas-fundamentais]], lógica básica",
      "Exemplos no site":      "[[raiz-de-2-irracional]], [[soma-dos-impares]]",
      "Conexões externas":     "Programação, Direito, Método Científico"
    },
    widget: null
  },

  {
    id: "triangulo-retangulo",
    title: "Triângulo Retângulo",
    level: "Ensino Fundamental II",
    category: "Geometria",
    icon: "triangle",
    summary: "O triângulo que possui um ângulo interno de 90°, tornando-se a porta de entrada para a trigonometria e o Teorema de Pitágoras.",
    content: String.raw`
Um triângulo retângulo é um triângulo que possui exatamente um ângulo de $90°$ — chamado de [[angulo-reto]]. Esse ângulo especial cria relações entre os lados que são exploradas pelo [[teorema-de-pitagoras]] e por toda a [[trigonometria]].

### Os três lados

Todo triângulo retângulo tem nomes específicos para seus lados:

* A [[hipotenusa]] é o lado oposto ao ângulo reto. É sempre o maior dos três lados.
* Os dois [[catetos]] são os lados que formam o ângulo reto entre si.

### A Soma dos Ângulos

A soma dos ângulos internos de qualquer triângulo é $180°$. Como um dos ângulos já é $90°$, os outros dois somam exatamente $90°$ — eles são chamados de ângulos complementares.

$$\alpha + \beta = 90°$$

### As Razões Trigonométricas

Em qualquer triângulo retângulo, para um ângulo $\theta$ entre um cateto e a hipotenusa, as razões entre os lados são sempre as mesmas — independentemente do tamanho do triângulo. Essas razões recebem nomes:

$$\text{seno}(\theta) = \frac{\text{cateto oposto}}{\text{hipotenusa}}$$

$$\text{cosseno}(\theta) = \frac{\text{cateto adjacente}}{\text{hipotenusa}}$$

$$\text{tangente}(\theta) = \frac{\text{cateto oposto}}{\text{cateto adjacente}}$$

Essas definições são o fundamento da [[trigonometria]].

### Tríplices Pitagóricas

Existem combinações inteiras de lados que satisfazem $a^2 = b^2 + c^2$, chamadas de tríplices pitagóricas. As mais famosas são $3, 4, 5$ e $5, 12, 13$. Marceneiros e pedreiros usam a relação $3{:}4{:}5$ para verificar ângulos retos sem precisar de um esquadro.
    `,
    infobox: {
      "Ângulo especial":   "$90°$ (ângulo reto)",
      "Lados":             "Hipotenusa (1) + Catetos (2)",
      "Teorema principal": "[[teorema-de-pitagoras]]",
      "Conexão":           "[[trigonometria]], [[geometria-plana]]"
    },
    widget: null
  },

  {
    id: "demonstracao-absurdo",
    title: "Demonstração por Contradição",
    level: "Ensino Médio",
    category: "Lógica",
    icon: "x-circle",
    summary: "Também chamada de redução ao absurdo: supomos o contrário do que queremos provar e mostramos que isso é impossível.",
    content: String.raw`
A demonstração por contradição (ou redução ao absurdo) é um dos [[metodos-de-demonstracao]] mais poderosos. Ela é especialmente útil quando queremos provar que algo *não existe* ou que algo é *impossível*.

### Como funciona

O método tem uma estrutura simples:

1. Suponha, por hipótese, que a afirmação que você quer provar é *falsa*.
2. Raciocine a partir dessa hipótese usando lógica válida.
3. Chegue a uma contradição — algo que é obviamente impossível ou que nega uma verdade já estabelecida.
4. Conclua que a hipótese inicial (de que a afirmação era falsa) deve ser descartada. Portanto, a afirmação é verdadeira.

### Exemplos

O exemplo mais clássico é a prova de que [[raiz-de-2-irracional]]. Supõe-se que $\sqrt{2}$ é racional e chega-se à contradição de que uma fração está simultaneamente reduzida e não reduzida.

Outro exemplo simples: provar que não existe um maior [[numero-natural]].

* Suponha que $N$ é o maior número natural.
* Considere $N + 1$. Ele é um número natural maior que $N$.
* Contradição: $N$ não pode ser o maior se $N + 1$ existe.
* Portanto, não existe um maior número natural. ✓

### Conexão com outras áreas

Na [[filosofia-logica]], a contradição é a ferramenta central do método socrático. Em programação, provas de impossibilidade de algoritmos (como o problema da parada de Turing) usam a mesma estrutura lógica.
    `,
    infobox: {
      "Tipo":              "Método de demonstração",
      "Também chamada":    "Redução ao absurdo, *reductio ad absurdum*",
      "Melhor usada para": "Provar inexistência ou irracionalidade",
      "Exemplos":          "[[raiz-de-2-irracional]], infinitude dos primos",
      "Outros métodos":    "[[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "inducao-finita",
    title: "Indução Matemática",
    level: "Ensino Médio",
    category: "Lógica",
    icon: "layers",
    summary: "Método para provar que uma propriedade vale para todos os números naturais, usando dois passos: a base e o passo indutivo.",
    content: String.raw`
A indução matemática (ou indução finita) é um dos [[metodos-de-demonstracao]] projetado especificamente para propriedades que envolvem [[numero-natural]].

### A Analogia dos Dominós

Imagine uma fileira infinita de dominós. Para ter certeza de que todos cairão, você precisa saber duas coisas:

* O primeiro dominó cai (a base).
* Se qualquer dominó cair, ele derruba o próximo (o passo indutivo).

Se ambas são verdadeiras, todos cairão — mesmo que a fileira seja infinita.

### Estrutura Formal

Para provar que uma propriedade $P(n)$ vale para todo $n \in \mathbb{N}$:

1. Verifique que $P(1)$ é verdadeira (base da indução).
2. Suponha que $P(k)$ é verdadeira para algum $k$ arbitrário (hipótese de indução).
3. Usando essa hipótese, prove que $P(k+1)$ também é verdadeira (passo indutivo).

Se os dois passos funcionam, por indução $P(n)$ vale para todo $n$.

### Exemplo: Soma dos Ímpares

Veja o artigo [[soma-dos-impares]] para uma aplicação completa deste método: a prova de que $1 + 3 + 5 + \ldots + (2n-1) = n^2$.

### Por que isso funciona?

A justificativa da indução matemática é ela própria um dos [[axiomas-fundamentais]] da aritmética dos [[numero-natural]], conhecido como Axioma de Peano. Ele afirma que o conjunto dos naturais é o menor conjunto que contém $1$ e é fechado pelo operação de "passar ao sucessor".
    `,
    infobox: {
      "Tipo":           "Método de demonstração",
      "Aplica-se a":    "Propriedades sobre os [[numero-natural]]",
      "Passos":         "Base ($n=1$) + Passo Indutivo",
      "Exemplo":        "[[soma-dos-impares]], fatoriais, potências",
      "Outros métodos": "[[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "numero-par",
    title: "Número Par",
    level: "Ensino Fundamental I",
    category: "Álgebra",
    icon: "divide-circle",
    summary: "Um número inteiro é par quando pode ser dividido por 2 sem deixar resto.",
    content: String.raw`
Um número inteiro $n$ é chamado de par quando existe um inteiro $k$ tal que:

$$n = 2k$$

Em outras palavras, um número par é exatamente divisível por $2$. Os pares formam a sequência $\ldots, -4, -2, 0, 2, 4, 6, 8, \ldots$

### Propriedades Elementares

Podemos provar essas propriedades usando [[metodos-de-demonstracao]] direto:

* A soma de dois pares é par: $2k + 2m = 2(k+m)$.
* O produto de um número par com qualquer inteiro é par: $2k \times n = 2(kn)$.
* O quadrado de um número par é par: $(2k)^2 = 4k^2 = 2(2k^2)$.

### Complemento: Número Ímpar

Um número inteiro que não é par é chamado de [[numero-impar]]. Todo inteiro é par ou ímpar, nunca os dois ao mesmo tempo. Essa divisão é chamada de paridade.

### Uso em Demonstrações

A propriedade do quadrado de um par — que o quadrado é par se e somente se o número é par — é um passo crucial na prova de que [[raiz-de-2-irracional]].
    `,
    infobox: {
      "Definição":        "$n = 2k$, $k \\in \\mathbb{Z}$",
      "Complemento":      "[[numero-impar]]",
      "Uso em provas":    "[[raiz-de-2-irracional]], [[metodos-de-demonstracao]]"
    },
    widget: null
  },

  {
    id: "numero-impar",
    title: "Número Ímpar",
    level: "Ensino Fundamental I",
    category: "Álgebra",
    icon: "divide",
    summary: "Um número inteiro é ímpar quando não é divisível por 2 — seu resto na divisão por 2 é sempre 1.",
    content: String.raw`
Um número inteiro $n$ é chamado de ímpar quando existe um inteiro $k$ tal que:

$$n = 2k + 1$$

Os números ímpares formam a sequência $\ldots, -3, -1, 1, 3, 5, 7, 9, \ldots$

Todo inteiro é par ou ímpar — não existe uma terceira opção. Essa propriedade é chamada de paridade.

### Propriedades

* A soma de dois números ímpares é [[numero-par]]: $(2k+1) + (2m+1) = 2(k+m+1)$.
* O produto de dois números ímpares é ímpar: $(2k+1)(2m+1) = 4km + 2k + 2m + 1 = 2(2km+k+m)+1$.
* O quadrado de um número ímpar é ímpar: $(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2+2k)+1$.

### Conexão com a Soma dos Ímpares

Existe uma fórmula elegante para a soma dos primeiros $n$ números ímpares. Veja o artigo [[soma-dos-impares]] para entender por que $1 + 3 + 5 + \ldots + (2n-1)$ é sempre igual a $n^2$.
    `,
    infobox: {
      "Definição":    "$n = 2k+1$, $k \\in \\mathbb{Z}$",
      "Complemento":  "[[numero-par]]",
      "Fórmula":      "[[soma-dos-impares]]"
    },
    widget: null
  },

  {
    id: "geometria-plana",
    title: "Geometria Plana",
    level: "Ensino Fundamental II",
    category: "Geometria",
    icon: "layout",
    summary: "O estudo das figuras e relações em duas dimensões: pontos, retas, ângulos, polígonos e círculos.",
    content: String.raw`
A geometria plana é o ramo da matemática que estuda figuras em duas dimensões — aquelas que podem ser desenhadas em uma folha de papel plana.

### Objetos Fundamentais

* Ponto: a menor unidade, sem dimensão.
* Reta: uma coleção infinita de pontos alinhados, sem espessura.
* Ângulo: a abertura formada entre duas semirretas com a mesma origem. Quando essa abertura é de $90°$, temos um [[angulo-reto]].
* Polígono: figura fechada formada por segmentos de reta. O triângulo tem 3 lados; o quadrado, 4; e assim por diante.

### Teoremas Centrais

Os principais resultados da geometria plana são:

* A soma dos ângulos internos de qualquer triângulo é $180°$.
* Em todo [[triangulo-retangulo]], vale o [[teorema-de-pitagoras]]: $a^2 = b^2 + c^2$.
* O Teorema de Tales: retas paralelas cortam transversais em proporções iguais.

### Conexão com a Álgebra

A geometria plana foi o terreno onde os gregos desenvolveram as primeiras demonstrações matemáticas rigorosas. Hoje, ela serve de visualização intuitiva para muitos conceitos algébricos — como o entendimento visual da [[soma-dos-impares]].
    `,
    infobox: {
      "Dimensão":   "2D",
      "Teoremas":   "[[teorema-de-pitagoras]], ângulos, paralelas",
      "Extensão 3D": "Geometria Espacial",
      "Pré-req.":   "[[angulo-reto]], [[triangulo-retangulo]]"
    },
    widget: null
  },

  {
    id: "angulo-reto",
    title: "Ângulo Reto",
    level: "Ensino Fundamental I",
    category: "Geometria",
    icon: "corner-right-up",
    summary: "Ângulo de exatamente 90°, representado por um pequeno quadrado no vértice. É a base do Teorema de Pitágoras e da trigonometria.",
    content: String.raw`
Um ângulo reto mede exatamente $90°$ — um quarto de uma volta completa ($360°$). É representado graficamente por um pequeno quadradinho no vértice.

### Onde aparece

O ângulo reto é onipresente na arquitetura e engenharia. Paredes perpendiculares ao chão, cantos de portas e janelas, esquadros de carpinteiro — todos são ângulos retos. A verificação de que um canto é reto é feita usando a relação $3{:}4{:}5$ do [[teorema-de-pitagoras]].

### Tipos de Ângulos

Para contextualizar o ângulo reto entre os outros:

* Ângulo agudo: entre $0°$ e $90°$.
* Ângulo reto: exatamente $90°$.
* Ângulo obtuso: entre $90°$ e $180°$.
* Ângulo raso: exatamente $180°$ (uma linha reta).

### No Triângulo Retângulo

Um [[triangulo-retangulo]] é definido por ter exatamente um ângulo reto. A presença desse ângulo especial cria as relações descritas pelo [[teorema-de-pitagoras]] e pelas funções da [[trigonometria]].
    `,
    infobox: {
      "Medida":   "$90°$",
      "Símbolo":  "□ (quadrado no vértice)",
      "Conexão":  "[[triangulo-retangulo]], [[teorema-de-pitagoras]]"
    },
    widget: null
  }
];
