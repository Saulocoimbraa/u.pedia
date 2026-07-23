(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["axiomas-fundamentais"] = `Axiomas são as regras fundamentais do jogo matemático. São proposições aceitas como ponto de partida para definir um sistema — e a partir delas derivamos, por meio da lógica, todos os [[teoremas]] mais avançados.

Para construir os números que usamos para contar, o matemático Giuseppe Peano definiu regras simples e precisas, conhecidas como os **Axiomas de Peano**.

### Os Axiomas de Peano

Em linguagem clara, as regras que dão origem aos números naturais $\\mathbb{N} = \\{0, 1, 2, 3, \\ldots\\}$ são:

1. **O início:** O número $0$ é um [[numero-natural]].
2. **O próximo existe:** Todo número natural $n$ tem um único "sucessor" (que representamos por $S(n)$ ou $n + 1$).
3. **O início é único:** O número $0$ não é sucessor de nenhum número natural.
4. **Sem caminhos cruzados:** Números diferentes têm sucessores diferentes (se $S(a) = S(b)$, então $a = b$).
5. **O efeito dominó (Indução):** Se um conjunto de números contém o $0$ e, sempre que contém um número, também contém o seu sucessor, então esse conjunto contém todos os números naturais.

A partir dessas 5 regras simples, a matemática define formalmente as [[operacoes-basicas]] de soma e multiplicação e demonstra as propriedades abaixo.

### Comutatividade

A ordem das operações não altera o resultado, tanto na [[soma]] quanto na [[multiplicação]].

$$a + b = b + a \\qquad a \\times b = b \\times a$$

Exemplo: comprar <i>R$ 5</i> de pão e <i>R$ 3</i> de leite custa o mesmo que comprar <i>R$ 3</i> de leite e depois <i>R$ 5</i> de pão.

### Associatividade

A forma de agrupar os números também não muda o resultado.

$$(a + b) + c = a + (b + c)$$

Exemplo: para calcular $2 + 3 + 4$, tanto faz fazer $(2+3)+4 = 9$ ou $2+(3+4) = 9$.

### Distributividade

A multiplicação "distribui" sobre a soma.

$$a \\times (b + c) = a \\times b + a \\times c$$

Exemplo: a área de um terreno de $8\\text{m}$ de largura dividido em dois cômodos de $5\\text{m}$ e $3\\text{m}$ de comprimento pode ser calculada como $8 \\times (5 + 3) = 8 \\times 8 = 64\\text{m}^2$, ou como $8 \\times 5 + 8 \\times 3 = 40 + 24 = 64\\text{m}^2$.

### Elemento Neutro

Existe um valor que, combinado com qualquer outro, mantém o valor original inalterado.

* Para a soma: $a + 0 = 0 + a = a$ — o zero é o elemento neutro.
* Para a multiplicação: $a \\times 1 = 1 \\times a = a$ — o um é o elemento neutro.

---

### Como a matemática demonstra isso? (Um vislumbre do rigor)

Você pode se perguntar: *se os axiomas de Peano só falam de "sucessores", como provamos que $a + b = b + a$?*

Usamos o **Axioma 5 (Indução Matemática)**. Pense nele como uma fila de dominós: se derrubarmos o primeiro e garantirmos que um dominó sempre derruba o próximo, a fila inteira cai. Veja como provamos uma parte da comutatividade da soma (que somar $0$ tanto faz ser pela esquerda ou pela direita, ou seja, $0 + n = n$ para todo $n$):

* **Passo 1 (O primeiro dominó):** Por definição de soma, temos que $0 + 0 = 0$. Logo, a propriedade vale para $n = 0$.
* **Passo 2 (O próximo dominó):** Assumimos que a regra já funciona para um número natural $k$, ou seja, assumimos como hipótese que $0 + k = k$. Agora, testamos para o sucessor de $k$ (que chamamos de $S(k)$ ou $k + 1$):
  $$0 + S(k) = S(0 + k)$$
  Como a nossa hipótese garante que $0 + k = k$, podemos substituir dentro do sucessor:
  $$S(0 + k) = S(k)$$
* **Conclusão:** Provamos que $0 + S(k) = S(k)$. O dominó caiu para todos os números!

Repetindo esse mesmo processo lógico de indução para os outros números, demonstramos todas as regras de comutatividade, associatividade e distributividade que usamos no dia a dia. Elas não são meras convenções: são consequências lógicas e inevitáveis dos 5 axiomas de Peano.`;
})();
