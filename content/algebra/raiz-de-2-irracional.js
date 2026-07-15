(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["raiz-de-2-irracional"] = `$\\sqrt{2}$ é um dos primeiros [[numero-irracional]] que encontramos. Sua irracionalidade foi descoberta pelos pitagóricos e causou um choque filosófico: nem todo comprimento pode ser medido por uma fração.

### A Prova por Contradição

Usamos o método de [[demonstracao-absurdo]] — supor o contrário do que queremos provar e mostrar que isso leva a uma impossibilidade.

Suponha, por absurdo, que $\\sqrt{2}$ é [[numero-racional]]. Então existem inteiros $a$ e $b$ (com $b \\neq 0$) tais que:

$$\\sqrt{2} = \\frac{a}{b}$$

Podemos assumir que a [[fracao]] já está na [[fracao-irredutivel]] — ou seja, $a$ e $b$ não têm fatores em comum.

Elevando ao quadrado ambos os lados:

$$2 = \\frac{a^2}{b^2} \\implies a^2 = 2b^2$$

Como $a^2$ é igual a $2$ vezes algo, $a^2$ é [[numero-par]]. Pela propriedade dos [[numero-par]], se o quadrado de um número é par, o próprio número também é par. Portanto $a = 2k$ para algum inteiro $k$.

Substituindo na equação:

$$(2k)^2 = 2b^2 \\implies 4k^2 = 2b^2 \\implies b^2 = 2k^2$$

Pelo mesmo argumento, $b$ também é [[numero-par]].

Mas agora temos uma contradição: se $a$ e $b$ são ambos pares, a [[fracao]] $\\frac{a}{b}$ não estava na [[fracao-irredutivel]] — contradizendo nossa suposição inicial. Portanto, $\\sqrt{2}$ não pode ser [[numero-racional]].

### Significado geométrico

A diagonal de um quadrado de lado $1$ tem comprimento $\\sqrt{2}$ — pelo [[teorema-de-pitagoras]], $1^2 + 1^2 = 2$. O fato de $\\sqrt{2}$ ser irracional significa que essa diagonal não pode ser medida com precisão por nenhuma régua graduada em frações de números inteiros.

### No Cotidiano

O formato das folhas da série A (A4, A3, A2...) é baseado na [[proporcao]] $1:\\sqrt{2}$. Isso garante que, ao dobrar uma folha ao meio, a nova metade mantém exatamente a mesma [[proporcao]] de formato.
`;
})();
