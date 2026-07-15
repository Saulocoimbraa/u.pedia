(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["metodos-de-demonstracao"] = `Uma demonstração matemática é uma cadeia rigorosa de raciocínios que parte de verdades conhecidas ([[axiomas-fundamentais]] ou [[teorema]]s já provados) e chega a uma nova verdade. Ela é universal: não apenas "funciona para os casos que testei", mas vale para todos os casos possíveis, para sempre.

Existem seis métodos principais. Cada um é uma estratégia diferente de ataque.

### 1. Demonstração Direta

A mais intuitiva. Parte-se da [[hipotese]] e, passo a passo, chega-se à [[conclusao]].

Exemplo: provar que a soma de dois [[numero-par]] é sempre par. Se $a = 2k$ e $b = 2m$, então $a + b = 2(k+m)$, que também é par.

### 2. Demonstração por Contradição (Redução ao Absurdo)

Veja [[demonstracao-absurdo]] para uma explicação detalhada e exemplos. A ideia central: supor o contrário do que se quer provar e mostrar que isso leva a uma impossibilidade.

Exemplo clássico: a [[raiz-de-2-irracional]].

### 3. Demonstração por Indução Finita

Usada para provar que algo vale para todos os [[numero-natural]]s. Tem dois passos:

* Verificar o caso $n = 1$ (a base).
* Mostrar que se vale para $n = k$, então vale para $n = k+1$ (o passo indutivo).

Pense numa fileira infinita de dominós: se o primeiro cai e cada peça derruba a próxima, todas cairão. A [[soma-dos-impares]] é um exemplo clássico.

### 4. Demonstração por Exaustão

Quando as possibilidades são poucas e finitas, analisa-se cada caso. Exemplo: provar que o quadrado de qualquer número termina em $\\{0, 1, 4, 5, 6, 9\\}$ — basta testar os 10 últimos dígitos possíveis ($0$ a $9$).

### 5. Demonstração Construtiva

Prova que algo existe apresentando uma construção explícita. Exemplo: provar que é possível fazer um [[triangulo-retangulo]] com lados 3, 4 e 5 — basta construí-lo.

### 6. Demonstração por Contra-Exemplo

Usada para provar que uma afirmação universal é *falsa*. Basta um único exemplo que a contrarie.

Exemplo: refutar "todo [[numero-primo]] é [[numero-impar]]". O número $2$ é primo e par — isso derruba a afirmação inteira.

Esses métodos são ferramentas. Reconhecer qual usar em cada situação é o coração do pensamento matemático.
`;
})();
