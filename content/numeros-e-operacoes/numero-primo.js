(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["numero-primo"] = `Um **número primo** é um [[numero-natural]] maior que 1 que possui apenas dois divisores inteiros positivos distintos: o número 1 e ele próprio. Números que possuem mais de dois divisores são chamados de **números compostos**.

O número 1 **não é considerado primo** por convenção matemática moderna. Essa exclusão é crucial para manter a elegância e a unicidade de teoremas fundamentais.

### O Teorema Fundamental da Aritmética

O Teorema Fundamental da Aritmética afirma que qualquer [[numero-natural]] maior que 1 ou é primo ou pode ser escrito como um produto de números primos de forma única (a menos da ordem dos fatores).

Por exemplo:
$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$

Se o número 1 fosse considerado primo, essa fatoração não seria única, pois poderíamos escrever $60 = 1 \\times 2^2 \\times 3 \\times 5 = 1^2 \\times 2^2 \\times 3 \\times 5$, e assim por diante.

### A Infinitude dos Primos

Uma das primeiras e mais belas demonstrações da história da matemática foi feita por [[euclides]] por volta de 300 a.C. Ele provou por contradição ([[demonstracao-absurdo]]) que existem infinitos números primos.

**Esboço da Prova:**
1. Suponha que exista uma lista finita de todos os números primos: $p_1, p_2, \\dots, p_n$.
2. Multiplique todos eles e adicione 1: $N = (p_1 \\times p_2 \\times \\dots \\times p_n) + 1$.
3. O número $N$ não pode ser divisível por nenhum dos primos da lista, pois sempre deixará resto 1.
4. Portanto, ou $N$ é um novo primo que não estava na lista, ou possui algum divisor primo que também não estava na lista.
5. Em ambos os casos, a lista original estava incompleta. Logo, a quantidade de primos é infinita.
`;
})();
