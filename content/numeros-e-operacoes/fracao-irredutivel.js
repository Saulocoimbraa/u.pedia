(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["fracao-irredutivel"] = `Uma **fração irredutível** (ou simplificada) é aquela em que o numerador e o denominador são números inteiros primos entre si. Isso significa que o único divisor comum positivo entre eles é o número 1, impossibilitando qualquer simplificação adicional.

### Como Obter uma Fração Irredutível

Para transformar qualquer [[fracao]] em sua forma irredutível, devemos dividir tanto o numerador quanto o denominador pelo Máximo Divisor Comum (MDC) de ambos.

**Exemplo:** Simplificar a fração $\\frac{12}{18}$.
1. Encontre os divisores comuns de 12 e 18: $1, 2, 3$ e $6$.
2. O maior deles é $6$ (MDC).
3. Divida o numerador e o denominador por $6$:
   $$\\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$
4. Como $\\text{mdc}(2, 3) = 1$, a fração $\\frac{2}{3}$ é irredutível.

### Importância Matemática

A forma irredutível é o padrão para expressar qualquer [[numero-racional]]. Sem ela, um único número real teria infinitas representações escritas. 

Essa propriedade é fundamental em provas clássicas. Por exemplo, na prova da [[raiz-de-2-irracional]], assume-se que $\\sqrt{2}$ pode ser escrito como uma fração irredutível $\\frac{p}{q}$. A demonstração prossegue mostrando que tanto $p$ quanto $q$ devem ser múltiplos de 2, o que contradiz o fato de a fração ser irredutível, provando assim a irracionalidade do número.
`;
})();
