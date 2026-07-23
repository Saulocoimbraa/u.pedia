(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["perimetro-e-area"] = `Na [[geometria-plana]], **Perímetro** e **Área** são duas grandezas distintas utilizadas para mensurar figuras bidimensionais. A confusão entre ambas é comum, mas elas possuem conceitos, dimensões físicas e fórmulas completamente diferentes.

<div style="text-align: center; margin: 1.5rem 0;">
  <svg viewBox="0 0 500 180" width="100%" max-width="500" style="background: rgba(15, 23, 42, 0.6); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px;">
    <!-- Figura Retângulo -->
    <rect x="150" y="40" width="200" height="100" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="4" />
    
    <!-- Linha de Perímetro destacada -->
    <text x="250" y="30" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Contorno 1D: Perímetro P = 2b + 2h</text>
    
    <!-- Região Interna de Área -->
    <text x="250" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">Superfície 2D: Área A = b · h</text>
    
    <text x="250" y="165" fill="#cbd5e1" font-size="12" text-anchor="middle">Diferença entre Contorno Unidimensional e Superfície Bidimensional</text>
  </svg>
</div>

### 1. Distinção Conceitual Fundamentadora

* **Perímetro ($P$):** É a medida do **comprimento do contorno** (fronteira) de uma figura plana. É uma grandeza unidimensional ($1\\text{D}$), expressa em metros ($m$), centímetros ($cm$), etc.
* **Área ($A$):** É a medida da **extensão de superfície** ocupada por uma figura plana. É uma grandeza bidimensional ($2\\text{D}$), expressa em unidades quadradas como metros quadrados ($m^2$), centímetros quadrados ($cm^2$), etc.

### 2. Fórmulas Fundamentais de Áreas de Polígonos

#### A. Retângulo
Dada a base $b$ e a altura $h$:
$$A = b \\cdot h, \\quad P = 2b + 2h$$

#### B. Quadrado
Caso particular do retângulo em que a base e a altura são iguais ao lado $L$:
$$A = L^2, \\quad P = 4L$$

#### C. Triângulo
Dada uma base $b$ e a altura relativa $h$:
$$A = \\frac{b \\cdot h}{2}$$

#### D. Paralelogramo
Dada a base $b$ e a altura perpendicular $h$:
$$A = b \\cdot h$$

#### E. Trapézio
Dados a base maior $B$, a base menor $b$ e a altura $h$:
$$A = \\frac{(B + b) \\cdot h}{2}$$

#### F. Círculo
Dado o raio $r$ e a constante $\pi$ ($\\pi \\approx 3{,}14159$):
$$A = \\pi r^2, \\quad \\text{Comprimento da Circunferência: } C = 2\\pi r$$

### 3. Independência entre Perímetro e Área

Existe um mito comum de que figuras de maior perímetro possuem necessariamente maior área. Isso é **falso**:

1. **Mesmo Perímetro, Áreas Diferentes:**
   Dois retângulos com perímetro $P = 20\\text{ cm}$:
   * Retângulo $A_1$: lados $5\\text{ cm} \\times 5\\text{ cm} \\implies \\text{Área } = 25\\text{ cm}^2$ ([[quadrado]]).
   * Retângulo $A_2$: lados $9\\text{ cm} \\times 1\\text{ cm} \\implies \\text{Área } = 9\\text{ cm}^2$.

2. **Mesma Área, Perímetros Diferentes:**
   Figuras com área $A = 36\\text{ cm}^2$:
   * Quadrado: lado $6\\text{ cm} \\implies P = 24\\text{ cm}$.
   * Retângulo: lados $18\\text{ cm} \\times 2\\text{ cm} \\implies P = 40\\text{ cm}$.
`;
})();
