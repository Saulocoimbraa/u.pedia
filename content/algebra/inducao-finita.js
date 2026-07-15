(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["inducao-finita"] = `A indução matemática (ou indução finita) é um dos [[metodos-de-demonstracao]] projetado especificamente para propriedades que envolvem os [[numero-natural]]s.

### A Analogia dos Dominós

Imagine uma fileira infinita de dominós. Para ter certeza de que todos cairão, você precisa saber duas coisas:

* O primeiro dominó cai (a base).
* Se qualquer dominó cair, ele derruba o próximo (o passo indutivo).

Se ambas são verdadeiras, todos cairão — mesmo que a fileira seja infinita.

### Estrutura Formal

Para provar que uma propriedade $P(n)$ vale para todo $n \\in \\mathbb{N}$:

1. Verifique que $P(1)$ é verdadeira (base da indução).
2. Suponha que $P(k)$ é verdadeira para algum $k$ arbitrário ([[hipotese]]).
3. Usando essa hipótese, prove que $P(k+1)$ também é verdadeira (passo indutivo).

Se os dois passos funcionam, por indução $P(n)$ vale para todo $n$.

### Exemplo: Soma dos Ímpares

Veja o artigo [[soma-dos-impares]] para uma aplicação completa deste método: a prova de que $1 + 3 + 5 + \\ldots + (2n-1) = n^2$.

### Por que isso funciona?

A justificativa da indução matemática é ela própria um dos [[axiomas-fundamentais]] da aritmética, conhecido como Axiomas de Peano. Ele afirma que o conjunto dos [[numero-natural]]s é o menor conjunto que contém $1$ e é fechado pela operação de "passar ao sucessor".
`;
})();
