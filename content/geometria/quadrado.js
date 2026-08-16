(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["quadrado"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="220" viewBox="0 0 240 220" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Quadrado ABCD -->
    <rect x="45" y="35" width="140" height="140" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" rx="2" />
    
    <!-- Ângulos Retos nos 4 Vértices -->
    <!-- Vértice A (45, 35) -->
    <rect x="45" y="35" width="14" height="14" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="52" cy="42" r="1.5" fill="#1d4ed8"/>

    <!-- Vértice B (185, 35) -->
    <rect x="171" y="35" width="14" height="14" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="178" cy="42" r="1.5" fill="#1d4ed8"/>

    <!-- Vértice C (185, 175) -->
    <rect x="171" y="161" width="14" height="14" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="178" cy="168" r="1.5" fill="#1d4ed8"/>

    <!-- Vértice D (45, 175) -->
    <rect x="45" y="161" width="14" height="14" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="52" cy="168" r="1.5" fill="#1d4ed8"/>

    <!-- Vértices com Rótulos A, B, C, D -->
    <circle cx="45" cy="35" r="4.5" fill="#2563eb"/>
    <text x="32" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">A</text>

    <circle cx="185" cy="35" r="4.5" fill="#2563eb"/>
    <text x="198" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">B</text>

    <circle cx="185" cy="175" r="4.5" fill="#2563eb"/>
    <text x="198" y="188" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">C</text>

    <circle cx="45" cy="175" r="4.5" fill="#2563eb"/>
    <text x="32" y="188" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">D</text>

    <!-- Medidas dos Lados (a) -->
    <text x="115" y="25" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">lado (a)</text>
    <text x="115" y="195" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">lado (a)</text>
    <text x="25" y="110" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">a</text>
    <text x="205" y="110" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#475569">a</text>
  </svg>
</div>

O **quadrado** é o [[quadrilatero]] de simetria máxima: todos os seus quatro lados possuem rigorosamente o mesmo comprimento e todos os seus quatro [[angulos]] internos são [[angulo-reto]]s (medindo exatamente $90^\\circ$).

Por essa razão, o quadrado reúne simultaneamente as características de um retângulo perfeito (todos os ângulos retos) e de um losango perfeito (todos os lados iguais).

### Área e Diagonal

Se o lado do quadrado possui comprimento $l$, então:
* **Área:** $A = l^2$

Daí deriva a nomenclatura algébrica de elevar um número "ao quadrado" ($l^2$).

A diagonal $d$ do quadrado — o segmento de [[reta]] que une dois [[vertice]]s opostos (como $A$ a $C$) — mede:

$$d = l \\cdot \\sqrt{2}$$

Esse valor decorre da aplicação direta do [[teorema-de-pitagoras]] ao [[triangulo-retangulo]] delimitado pelos lados e pela diagonal.
`;
})();
