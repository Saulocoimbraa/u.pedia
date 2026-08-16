(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["triplice-pitagorica"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="220" viewBox="0 0 260 220" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Triângulo 3-4-5 -->
    <!-- Cateto a = 60px (3 unidades), Cateto b = 80px (4 unidades), Hipotenusa c = 100px (5 unidades) -->
    <polygon points="90,70 90,150 170,150" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"/>
    
    <!-- Quadrado do Cateto a (3x3 = 9 unidades) à esquerda -->
    <rect x="30" y="70" width="60" height="80" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="60" y="115" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">3² = 9</text>

    <!-- Quadrado do Cateto b (4x4 = 16 unidades) na base -->
    <rect x="90" y="150" width="80" height="50" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="130" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#15803d">4² = 16</text>

    <!-- Rótulo da Hipotenusa (5² = 25) -->
    <text x="145" y="100" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#7c3aed">5² = 25</text>
    
    <!-- Ângulo Reto em (90, 150) -->
    <rect x="90" y="136" width="14" height="14" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <circle cx="97" cy="143" r="1.5" fill="#2563eb"/>
  </svg>
</div>

Uma **tríplice pitagórica** (ou terno pitagórico) é um conjunto de três números inteiros positivos $(a, b, c)$ que formam os lados de um [[triangulo-retangulo]] e, portanto, satisfazem perfeitamente o [[teorema-de-pitagoras]]:

$$a^2 + b^2 = c^2$$

Onde $a$ e $b$ representam os [[catetos]] e $c$ representa a [[hipotenusa]].

### O Terno Primitivo $(3, 4, 5)$

O terno pitagórico mais simples e famoso é:
$$(3, 4, 5)$$

Pois $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.

Multiplicando todos os termos de uma tríplice por qualquer inteiro positivo $k$, obtemos outra tríplice pitagórica (por exemplo, com $k=2$, obtemos $6, 8, 10$). Se $\\text{mdc}(a, b, c) = 1$, a tríplice é chamada de **primitiva**.

### História e Uso Prático

Os babilônios antigos já conheciam grandes tríplices pitagóricas mil anos antes de Pitágoras nascer, conforme registrado na famosa tábua Plimpton 322 da [[matematica-babilonica]]. 

Na antiguidade, pedreiros usavam uma corda com nós dividida em segmentos de proporção 3:4:5. Ao esticarem a corda formando um triângulo, garantiam um [[angulo-reto]] ($90^\\circ$) perfeito nos cantos das paredes.
`;
})();
