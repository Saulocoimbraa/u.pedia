(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["triangulo-semelhante"] = `Dois triângulos são ditos **semelhantes** se possuem a mesma forma geométrica, embora possam ter tamanhos diferentes. Formalmente, eles devem possuir ângulos correspondentes congruentes e lados homólogos com medidas proporcionais.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="100%" style="max-width:320px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="320" height="180" fill="#0f172a" rx="12"/>
  <!-- Triângulo Menor -->
  <polygon points="40,140 120,140 100,70" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <!-- Triângulo Maior (escala 1.5) -->
  <polygon points="160,140 280,140 250,35" fill="none" stroke="#34d399" stroke-width="2"/>
  <!-- Labels -->
  <text x="80" y="155" fill="#60a5fa" font-size="12" text-anchor="middle">Original</text>
  <text x="220" y="155" fill="#34d399" font-size="12" text-anchor="middle">Semelhante (x1.5)</text>
</svg>

### O Caso de Semelhança Ângulo-Ângulo (AA)

Para que dois triângulos sejam semelhantes, basta que possuam **dois ângulos internos iguais**. Como a soma dos ângulos internos é sempre $180^\\circ$, o terceiro ângulo também será necessariamente igual.

### Razão de Semelhança

Se os triângulos $ABC$ e $A'B'C'$ são semelhantes, então os lados correspondentes mantêm a mesma razão de proporção $k$:
$$\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{CA}{C'A'} = k$$

Essa proporcionalidade constante é a base que permite definir o [[seno]], [[cosseno]] e [[tangente]] de um ângulo, já que essas razões dependem exclusivamente da medida do ângulo, e não do tamanho do triângulo.
`;
})();
