(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["perimetro-e-area"] = `Na [[geometria-plana]], **Perímetro** e **Área** são duas grandezas distintas utilizadas para mensurar figuras bidimensionais. A confusão entre ambas é comum, mas elas possuem conceitos, dimensões físicas e fórmulas completamente diferentes.


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
Dado o raio $r$ e a constante $\\pi$ ($\\pi \\approx 3{,}14159$):
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
