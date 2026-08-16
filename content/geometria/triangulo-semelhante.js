(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["triangulo-semelhante"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="340" height="180" viewBox="0 0 340 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Triângulo ABC (Menor) -->
    <polygon points="30,135 110,135 90,60" fill="#e0e7ff" fill-opacity="0.5" stroke="#4f46e5" stroke-width="2" stroke-linejoin="round"/>
    <text x="70" y="152" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Δ ABC (1x)</text>

    <!-- Triângulo A'B'C' (Maior - Escala 1.5x) -->
    <polygon points="150,145 270,145 240,32.5" fill="#dcfce7" fill-opacity="0.5" stroke="#16a34a" stroke-width="2" stroke-linejoin="round"/>
    <text x="210" y="162" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#15803d">Δ A'B'C' (1.5x)</text>

    <!-- Arcos dos Ângulos Congruentes em A e A' -->
    <path d="M 45 135 A 15 15 0 0 0 39.5 120.7" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M 172.5 145 A 22.5 22.5 0 0 0 164.2 123.5" fill="none" stroke="#ef4444" stroke-width="2"/>
  </svg>
</div>

Dois triângulos são ditos **semelhantes** ($\Delta ABC \sim \Delta A'B'C'$) quando possuem a mesma forma geométrica. Isso significa que seus [[angulo]]s correspondentes são rigorosamente congruentes e os comprimentos dos seus lados correspondentes (lados homólogos) mantêm a mesma razão de [[proporcao]] $k$:

$$\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{C'A'}{CA} = k$$

Onde $k$ é a chamada **razão de semelhança**.

---

### Casos de Semelhança de Triângulos

Para comprovar que dois triângulos são semelhantes, não é necessário medir todos os seis elementos (três lados e três ângulos). Existem três critérios suficientes e econômicos:

#### 1. Caso AA (Ângulo-Ângulo)
Se dois triângulos possuem **dois ângulos internos congruentes**, eles são automaticamente semelhantes.
* *Justificativa:* Como a soma dos ângulos internos de qualquer [[triangulo]] é sempre $180^\\circ$, a igualdade de dois ângulos garante que o terceiro ângulo também será obrigatoriamente igual.

#### 2. Caso LLL (Lado-Lado-Lado)
Se os **três lados de um triângulo são respectivamente proporcionais** aos três lados de outro triângulo, então os dois triângulos são semelhantes.
* *Consequência:* A proporcionalidade dos três lados força todos os ângulos correspondentes a serem iguais.

#### 3. Caso LAL (Lado-Ângulo-Lado)
Se dois triângulos possuem **dois lados correspondentes proporcionais** e o **ângulo compreendido entre esses dois lados é congruente**, então os triângulos são semelhantes.

---

### Aplicação Fundamental

A semelhança de triângulos é o pilar que sustenta toda a [[trigonometria]]: ela garante que as razões entre os lados de um [[triangulo-retangulo]] dependem exclusivamente do seu ângulo interno $\\theta$, e não da escala da figura.
`;
})();
