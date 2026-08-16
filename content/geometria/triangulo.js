(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["triangulo"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="280" height="200" viewBox="0 0 280 200" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Polígono do Triângulo ABC -->
    <polygon points="140,30 230,150 50,150" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5" />
    
    <!-- Arcos dos Ângulos Internos -->
    <!-- Ângulo em A (140, 30) -->
    <path d="M 121.2 53.5 A 30 30 0 0 0 158.8 53.5 L 140 30 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5"/>
    <text x="140" y="72" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">α</text>

    <!-- Ângulo em B (50, 150) -->
    <path d="M 80 150 A 30 30 0 0 0 67.6 126.5 L 50 150 Z" fill="#10b981" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5"/>
    <text x="75" y="143" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#047857">β</text>

    <!-- Ângulo em C (230, 150) -->
    <path d="M 212.4 126.5 A 30 30 0 0 0 200 150 L 230 150 Z" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="205" y="143" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b45309">γ</text>

    <!-- Vértices Destaque -->
    <circle cx="140" cy="30" r="5" fill="#4f46e5"/>
    <text x="140" y="18" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">A</text>

    <circle cx="50" cy="150" r="5" fill="#4f46e5"/>
    <text x="32" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">B</text>

    <circle cx="230" cy="150" r="5" fill="#4f46e5"/>
    <text x="245" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">C</text>
  </svg>
</div>

O **triângulo** é o [[poligono]] fundamental da [[geometria-euclidiana]]: uma figura plana fechada constituída por exatamente três segmentos de [[reta]] (seus lados) que se encontram em três pontos chamados [[vertice]]s.

### A Rigidez Estrutural

O triângulo possui uma propriedade única: a **rigidez estrutural**. Fixados os comprimentos dos três lados, seus ângulos e sua forma ficam totalmente determinados. Diferente dos quadriláteros, o triângulo não pode ser deformado sem alterar o tamanho de seus lados — por isso é amplamente utilizado em treliças de [[engenharia]] e [[arquitetura]].

---

### Classificação dos Triângulos

Os triângulos são classificados sob duas categorias: em relação aos seus **ângulos internos** e em relação às medidas dos seus **lados**.

---

### 1. Quanto aos Ângulos Internos

#### Triângulo Acutângulo
**Definição:** É o triângulo em que todos os seus três ângulos internos são estritamente agudos, ou seja, possuem medidas menores que $90^\\circ$ ($\\alpha, \\beta, \\gamma < 90^\\circ$).

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="background:#ffffff; border-radius:10px; border:1px solid #cbd5e1; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <polygon points="90,20 155,105 25,105" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
    <!-- Arcos agudos -->
    <path d="M 78 37 A 20 20 0 0 0 102 37 L 90 20 Z" fill="#ef4444" fill-opacity="0.3"/>
    <path d="M 47 105 A 20 20 0 0 0 37 88 L 25 105 Z" fill="#10b981" fill-opacity="0.3"/>
    <path d="M 143 88 A 20 20 0 0 0 135 105 L 155 105 Z" fill="#f59e0b" fill-opacity="0.3"/>
    <text x="90" y="122" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#3730a3">Todos os ângulos &lt; 90°</text>
  </svg>
</div>

#### Triângulo Retângulo
**Definição:** É o triângulo que possui exatamente um [[angulo-reto]] (medindo $90^\\circ$). Os dois lados que formam o ângulo reto são chamados de **[[cateto]]s**, e o lado maior oposto ao ângulo reto é a **[[hipotenusa]]**, sobre a qual se aplica o [[teorema-de-pitagoras]].

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="background:#ffffff; border-radius:10px; border:1px solid #cbd5e1; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <polygon points="30,20 30,105 150,105" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <!-- Indicador do Ângulo Reto em (30,105) -->
    <rect x="30" y="87" width="18" height="18" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="39" cy="96" r="2.5" fill="#1d4ed8"/>
    <text x="90" y="122" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Um ângulo reto = 90°</text>
  </svg>
</div>

#### Triângulo Obtusângulo
**Definição:** É o triângulo que possui exatamente um [[angulo-obtuso]] (com medida maior que $90^\\circ$ e menor que $180^\\circ$). Devido à grande abertura desse ângulo no vértice, o lado oposto a ele é claramente o maior lado da figura.

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="220" height="130" viewBox="0 0 220 130" style="background:#ffffff; border-radius:10px; border:1px solid #cbd5e1; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <!-- Vértice obtuso em B(45, 100), A(10, 35), C(195, 100). Ângulo em B = 118° (> 90°) -->
    <polygon points="10,35 45,100 195,100" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
    
    <!-- Arco do Ângulo Obtuso no Vértice B(45, 100) em Amarelo/Laranja -->
    <path d="M 75 100 A 30 30 0 0 0 31.3 74.6 L 45 100 Z" fill="#d97706" fill-opacity="0.4" stroke="#d97706" stroke-width="2"/>
    
    <!-- Rótulo do Vértice Obtuso -->
    <text x="65" y="85" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#b45309">θ &gt; 90°</text>
    <text x="110" y="122" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#92400e">Um ângulo obtuso &gt; 90° (em destaque)</text>
  </svg>
</div>

---

### 2. Quanto às Medidas dos Lados

#### Triângulo Equilátero
**Definição:** É o triângulo que possui os três lados com medidas estritamente iguais (congruentes). Por possuir os três lados iguais, é também equiângulo: cada um dos seus três ângulos internos mede exatamente $60^\\circ$ ($3 \\times 60^\\circ = 180^\\circ$).

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="background:#ffffff; border-radius:10px; border:1px solid #bbf7d0; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <polygon points="90,20 150,105 30,105" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <!-- Traços de igualdade nos 3 lados -->
    <line x1="55" y1="58" x2="65" y2="67" stroke="#16a34a" stroke-width="2"/>
    <line x1="115" y1="67" x2="125" y2="58" stroke="#16a34a" stroke-width="2"/>
    <line x1="86" y1="111" x2="94" y2="99" stroke="#16a34a" stroke-width="2"/>
    <text x="90" y="124" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">3 lados iguais (60°, 60°, 60°)</text>
  </svg>
</div>

#### Triângulo Isósceles
**Definição:** É o triângulo que possui pelo menos dois lados com medidas iguais (congruentes). O lado diferente é denominado base, e os dois ângulos encostados nessa base são necessariamente congruentes entre si.

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="background:#ffffff; border-radius:10px; border:1px solid #bbf7d0; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <polygon points="90,15 145,105 35,105" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <!-- Traços de igualdade nos 2 lados congruentes -->
    <line x1="57" y1="56" x2="67" y2="64" stroke="#16a34a" stroke-width="2"/>
    <line x1="113" y1="64" x2="123" y2="56" stroke="#16a34a" stroke-width="2"/>
    <text x="90" y="124" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">2 lados iguais (ângulos da base iguais)</text>
  </svg>
</div>

#### Triângulo Escaleno
**Definição:** É o triângulo em que todos os seus três lados possuem comprimentos totalmente diferentes. Como consequência direta da geometria, seus três ângulos internos também possuem medidas todas distintas.

<div style="display: flex; justify-content: center; margin: 1rem 0;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="background:#ffffff; border-radius:10px; border:1px solid #bbf7d0; box-shadow:0 2px 4px rgba(0,0,0,0.03);">
    <polygon points="50,20 160,105 15,105" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <!-- Traços de 1, 2 e 3 marcas -->
    <line x1="28" y1="58" x2="36" y2="66" stroke="#16a34a" stroke-width="2"/>
    
    <line x1="100" y1="58" x2="108" y2="66" stroke="#16a34a" stroke-width="2"/>
    <line x1="106" y1="62" x2="114" y2="70" stroke="#16a34a" stroke-width="2"/>
    <text x="90" y="124" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">3 lados de tamanhos diferentes</text>
  </svg>
</div>

---

### O Teorema da Soma dos Ângulos Internos

Em qualquer triângulo plano na [[geometria-euclidiana]], a soma dos três [[angulo]]s internos é sempre rigorosamente constante e igual a **$180^\\circ$** (um [[angulo-raso]]):

$$\\alpha + \\beta + \\gamma = 180^\\circ$$

#### Demonstração pelas Retas Paralelas (Ângulos Alternos Internos)

A demonstração clássica constrói uma [[reta]] $r$ paralela à base $BC$ passando pelo vértice oposto $A$:
1. As retas transversais $AB$ e $AC$ cortam as paralelas $r // BC$.
2. Os ângulos internos em $B$ ($\\beta$) e $C$ ($\\gamma$) possuem **ângulos alternos internos** congruentes $\\beta'$ e $\\gamma'$ adjacentes a $\\alpha$ sobre a reta $r$.
3. Logo, os três ângulos juntos formam a linha reta de $180^\\circ$: $\\beta' + \\alpha + \\gamma' = 180^\\circ$.

{{widget}}
`;
})();
