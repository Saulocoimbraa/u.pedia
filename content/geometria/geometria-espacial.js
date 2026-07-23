(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["geometria-espacial"] = `A **Geometria Espacial** (ou Geometria Tridimensional) é o ramo da geometria que estuda as figuras que se desenvolvem no espaço tridimensional, possuindo comprimento, largura e altura. Ao contrário da [[geometria-plana]], que se restringe a figuras em duas [[dimensoes]], os sólidos geométricos ocupam um volume no espaço.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 190" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Cubo -->
    <polygon points="50,60 120,60 120,130 50,130" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/>
    <polygon points="50,60 80,35 150,35 120,60" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2"/>
    <polygon points="120,60 150,35 150,105 120,130" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" stroke-width="2"/>
    <text x="85" y="170" fill="#38bdf8" font-size="12" text-anchor="middle">Cubo/Bloco</text>

    <!-- Esfera -->
    <circle cx="220" cy="90" r="50" fill="rgba(129,140,248,0.2)" stroke="#818cf8" stroke-width="2"/>
    <ellipse cx="220" cy="90" rx="50" ry="12" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4"/>
    <text x="220" y="165" fill="#818cf8" font-size="12" text-anchor="middle">Esfera</text>

    <!-- Cilindro -->
    <rect x="290" y="50" width="60" height="80" fill="rgba(52,211,153,0.2)" stroke="#34d399" stroke-width="2"/>
    <ellipse cx="320" cy="50" rx="30" ry="9" fill="rgba(52,211,153,0.35)" stroke="#34d399" stroke-width="2"/>
    <ellipse cx="320" cy="130" rx="30" ry="9" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="2"/>
    <text x="320" y="165" fill="#34d399" font-size="12" text-anchor="middle">Cilindro</text>

    <!-- Cone -->
    <polygon points="420,40 370,140 470,140" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2"/>
    <ellipse cx="420" cy="140" rx="50" ry="10" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3"/>
    <text x="420" y="165" fill="#fbbf24" font-size="12" text-anchor="middle">Cone</text>
  </svg>
</div>

### 1. Classificação dos Sólidos Geométricos

#### A. Poliedros
São sólidos delimitados exclusivamente por **faces planas** (regiões poligonais planas). As principais características são:

* **Faces ($F$):** As regiões poligonais planas que delimitam o sólido.
* **Arestas ($A$):** Os segmentos de reta formados pela interseção de duas faces.
* **[[vertices]] ($V$):** Os pontos de encontro de três ou mais arestas.

##### Fórmula de Euler para Poliedros Convexos:
Todo poliedro convexo satisfaz a relação notável descoberta por Leonhard Euler:
$$V - A + F = 2$$

##### Prismas
Possuem duas bases paralelas e congruentes (polígonos $n$-gonais) ligadas por $n$ faces laterais retangulares. O volume de qualquer prisma reto é:
$$V = A_{\\text{base}} \\times h$$

##### Pirâmides
Possuem uma única base poligonal e todas as faces laterais são [[triangulos]] que convergem para um ápice comum. O volume de qualquer pirâmide é:
$$V = \\frac{A_{\\text{base}} \\times h}{3}$$

#### B. Sólidos de Revolução
São sólidos gerados pela rotação de uma figura plana em torno de um eixo. As principais formas são:

##### Cilindro Reto
Gerado pela rotação de um retângulo em torno de um de seus lados. Dados o raio da base $r$ e a altura $h$:
$$V = \\pi r^2 h \\qquad A_{\\text{lateral}} = 2\\pi r h$$

##### Cone Reto
Gerado pela rotação de um triângulo retângulo em torno de sua altura. Dados o raio da base $r$, a altura $h$ e a geratriz $g = \\sqrt{r^2 + h^2}$:
$$V = \\frac{\\pi r^2 h}{3} \\qquad A_{\\text{lateral}} = \\pi r g$$

##### Esfera
Gerada pela rotação de um semicírculo em torno do [[diâmetro]]. Dado o raio $r$:
$$V = \\frac{4\\pi r^3}{3} \\qquad A_{\\text{superfície}} = 4\\pi r^2$$

### 2. Vistas Ortogonais (Vistas de um Sólido)

Para representar sólidos tridimensionais em desenho técnico bidimensional, utilizam-se três **projeções ortogonais** sobre [[planos]] perpendiculares mutuamente:

* **Vista Frontal:** Projeção sobre o plano $xOy$.
* **Vista Superior (ou Planta):** Projeção sobre o plano $xOz$.
* **Vista Lateral:** Projeção sobre o plano $yOz$.
`;
})();
