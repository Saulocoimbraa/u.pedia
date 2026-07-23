(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["volume-do-bloco-retangular"] = `O **Volume** é a medida do espaço tridimensional ($3\\text{D}$) ocupado por um sólido geométrico. A unidade fundamental do SI é o **metro cúbico** ($m^3$). O **Bloco Retangular** (também chamado de paralelepípedo reto-retângulo ou, no caso especial de faces quadradas, cubo) é o sólido mais elementar para o estudo do volume, pois sua fórmula resulta diretamente da multiplicação das três dimensões.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 200" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Bloco Retangular (perspectiva isométrica) -->
    <!-- Face frontal -->
    <polygon points="140,60 280,60 280,150 140,150" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2" />
    <!-- Face superior -->
    <polygon points="140,60 280,60 320,30 180,30" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2" />
    <!-- Face lateral -->
    <polygon points="280,60 320,30 320,120 280,150" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="2" />
    
    <!-- Dimensões -->
    <text x="210" y="170" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">b (base)</text>
    <text x="310" y="95" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">h (altura)</text>
    <text x="165" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">c (comp.)</text>
    
    <!-- Fórmula do Volume -->
    <text x="420" y="90" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">V = b · c · h</text>
    <text x="420" y="110" fill="#cbd5e1" font-size="12" text-anchor="middle">(base × comp. × altura)</text>
  </svg>
</div>

### 1. Fórmula do Volume do Bloco Retangular

Dados a base $b$, o comprimento $c$ e a altura $h$ de um bloco retangular:

$$V = b \\times c \\times h$$

Geometricamente, essa fórmula representa a quantidade de **cubos unitários** empilhados que cabem dentro do sólido: há $b \\times c$ cubos na camada base e $h$ camadas sobrepostas.

### 2. Caso Especial: O Cubo

Quando as três dimensões são iguais ao lado $L$ ($b = c = h = L$), o sólido é um **Cubo**:

$$V_{\\text{cubo}} = L^3$$

A leitura "$L^3$" (vem do latim *L cubus*) é a origem histórica da palavra "cubo" e justifica a potência de expoente $3$ em $L^3$.

### 3. Conversões das Unidades Cúbicas e Relação com Capacidade

As unidades de volume cúbico seguem a razão $1000$ entre consecutivas (pois cada dimensão linear é dividida/multiplicada por $10$):

$$1\\text{ m}^3 = 1000 \\text{ dm}^3 = 1.000.000 \\text{ cm}^3 = 10^9 \\text{ mm}^3$$

A relação fundamental entre volume e [[unidades-de-medida]] é:

$$1 \\text{ dm}^3 = 1 \\text{ litro (L)} \\qquad 1 \\text{ cm}^3 = 1 \\text{ mililitro (mL)}$$

### 4. Exemplo Prático de Aplicação

> *Uma caixa d'água tem a forma de um bloco retangular com $2\\text{ m}$ de comprimento, $1{,}5\\text{ m}$ de largura e $1\\text{ m}$ de profundidade. Quantos litros ela comporta?*

**Resolução:**

1. Calcula-se o volume em $m^3$:
   $$V = 2 \\times 1{,}5 \\times 1 = 3\\text{ m}^3$$

2. Converte-se para litros ($1\\text{ m}^3 = 1000\\text{ L}$):
   $$V = 3 \\times 1000 = 3000\\text{ litros}$$

### 5. Prismas e o Princípio Geral do Volume

O bloco retangular é um caso particular da geometria espacial, o prisma reto de base retangular. A fórmula generalizante do volume de qualquer prisma reto é:

$$V_{\\text{prisma}} = A_{\\text{base}} \\times h$$

onde $A_{\\text{base}}$ é a área da face poligonal da base e $h$ é a altura do prisma.
`;
})();
