(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["geometria-espacial"] = `A **Geometria Espacial** (ou Geometria Tridimensional) é o ramo da geometria que estuda as figuras que se desenvolvem no espaço tridimensional, possuindo comprimento, largura e altura. Ao contrário da [[geometria-plana]], que se restringe a figuras em duas [[dimensoes]], os sólidos geométricos ocupam um volume no espaço.

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="340" height="150" viewBox="0 0 340 150" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Cubo -->
    <polygon points="25,50 75,50 75,100 25,100" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.8"/>
    <polygon points="25,50 45,30 95,30 75,50" fill="#c7d2fe" stroke="#4f46e5" stroke-width="1.8"/>
    <polygon points="75,50 95,30 95,80 75,100" fill="#a5b4fc" stroke="#4f46e5" stroke-width="1.8"/>
    <text x="60" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Cubo</text>

    <!-- Esfera -->
    <circle cx="145" cy="65" r="35" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
    <ellipse cx="145" cy="65" rx="35" ry="9" fill="none" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="3,3"/>
    <text x="145" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">Esfera</text>

    <!-- Cilindro -->
    <rect x="205" y="40" width="45" height="55" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
    <ellipse cx="227.5" cy="40" rx="22.5" ry="7" fill="#fde68a" stroke="#d97706" stroke-width="1.8"/>
    <ellipse cx="227.5" cy="95" rx="22.5" ry="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
    <text x="227" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b45309">Cilindro</text>

    <!-- Cone -->
    <polygon points="295,30 270,95 320,95" fill="#ffe4e6" stroke="#e11d48" stroke-width="1.8"/>
    <ellipse cx="295" cy="95" rx="25" ry="6" fill="#fecdd3" stroke="#e11d48" stroke-width="1.8"/>
    <text x="295" y="125" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#be123c">Cone</text>
  </svg>
</div>

### 1. Classificação dos Sólidos Geométricos

#### A. Poliedros

São sólidos delimitados exclusivamente por **faces planas** (regiões poligonais planas). As principais características são:

* **Faces ($F$):** As regiões poligonais planas que delimitam o sólido.
* **Arestas ($A$):** Os segmentos de reta formados pela interseção de duas faces.
* **[[vertices]] ($V$):** Os pontos de encontro de três ou mais arestas.

**Fórmula de Euler para Poliedros Convexos:** Todo poliedro convexo satisfaz a relação notável descoberta por Leonhard Euler:
$$V - A + F = 2$$

#### Prismas

Possuem duas bases paralelas e congruentes (polígonos $n$-gonais) ligadas por $n$ faces laterais retangulares. O volume de qualquer prisma reto é:
$$V = A_{\\text{base}} \\times h$$

#### Pirâmides

Possuem uma única base poligonal e todas as faces laterais são [[triangulos]] que convergem para um ápice comum. O volume de qualquer pirâmide é:
$$V = \\frac{A_{\\text{base}} \\times h}{3}$$

#### B. Sólidos de Revolução

São sólidos gerados pela rotação de uma figura plana em torno de um eixo. As principais formas são:

#### Cilindro Reto

Gerado pela rotação de um retângulo em torno de um de seus lados. Dados o raio da base $r$ e a altura $h$:
$$V = \\pi r^2 h \\qquad A_{\\text{lateral}} = 2\\pi r h$$

#### Cone Reto

Gerado pela rotação de um triângulo retângulo em torno de sua altura. Dados o raio da base $r$, a altura $h$ e a geratriz $g = \\sqrt{r^2 + h^2}$:
$$V = \\frac{\\pi r^2 h}{3} \\qquad A_{\\text{lateral}} = \\pi r g$$

#### Esfera

Gerada pela rotação de um semicírculo em torno do [[diâmetro]]. Dado o raio $r$:
$$V = \\frac{4\\pi r^3}{3} \\qquad A_{\\text{superfície}} = 4\\pi r^2$$

### 2. Vistas Ortogonais (Vistas de um Sólido)

Para representar sólidos tridimensionais em desenho técnico bidimensional, utilizam-se três **projeções ortogonais** sobre [[planos]] perpendiculares mutuamente:

* **Vista Frontal:** Projeção sobre o plano $xOy$.
* **Vista Superior (ou Planta):** Projeção sobre o plano $xOz$.
* **Vista Lateral:** Projeção sobre o plano $yOz$.
`;
})();
