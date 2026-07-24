(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["triangulo-semelhante"] = `Dois triângulos são ditos **semelhantes** se possuem a mesma forma geométrica, embora possam ter tamanhos diferentes. Formalmente, eles devem possuir ângulos correspondentes congruentes e lados homólogos com medidas proporcionais.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="100%" style="max-width:320px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="320" height="180" fill="#edf0fbff" rx="12"/>
  <!-- Triângulo Menor -->
  <polygon points="40,140 120,140 100,70" fill="none" stroke="#1a3f6cff" stroke-width="2"/>
  <!-- Triângulo Maior (escala 1.5) -->
  <polygon points="160,140 280,140 250,35" fill="none" stroke="#278563ff" stroke-width="2"/>
  <!-- Labels -->
  <text x="80" y="155" fill="#163a67ff" font-size="12" text-anchor="middle">Original</text>
  <text x="220" y="155" fill="#13714fff" font-size="12" text-anchor="middle">Semelhante (x1.5)</text>
</svg>

### O Caso de Semelhança Ângulo-Ângulo (AA)

Para que dois triângulos sejam semelhantes, basta que possuam **dois ângulos internos iguais**. Como a soma dos ângulos internos é sempre $180^\\circ$, o terceiro ângulo também será necessariamente igual.

### Razão de Semelhança

Se os triângulos $ABC$ e $A'B'C'$ são semelhantes, então os lados correspondentes mantêm a mesma razão de proporção $k$:
$$\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{CA}{C'A'} = k$$

Essa proporcionalidade constante é a base que permite definir o [[seno]], [[cosseno]] e [[tangente]] de um ângulo, já que essas razões dependem exclusivamente da medida do ângulo, e não do tamanho do triângulo.
`;
})();
