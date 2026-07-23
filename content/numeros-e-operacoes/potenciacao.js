(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["potenciacao"] = `A potenciação é a operação que emerge naturalmente da [[multiplicacao]] repetida. Escrever $a^n$ (lê-se "*a* elevado a *n*") é uma abreviação compacta de:

$$a^n = \\underbrace{a \\times a \\times \\cdots \\times a}_{n \\text{ vezes}}$$

Onde $a$ é a **base** e $n$ é o **expoente**. A potenciação cria a terceira [[dimensao]] da hierarquia aritmética: da [[soma]] emergiu a [[multiplicacao]]; da multiplicação emerge a potenciação.

### Propriedades Fundamentais

Dada uma base $a \\neq 0$ e expoentes $m, n$ inteiros:

| Propriedade | Regra |
|---|---|
| Produto de mesma base | $a^m \\cdot a^n = a^{m+n}$ |
| Quociente de mesma base | $a^m \\div a^n = a^{m-n}$ |
| Potência de potência | $(a^m)^n = a^{m \\cdot n}$ |
| Expoente zero | $a^0 = 1$ (com $a \\neq 0$) |
| Expoente negativo | $a^{-n} = \\dfrac{1}{a^n}$ |

O caso $a^0 = 1$ pode parecer contraintuitivo, mas é matematicamente necessário para preservar a propriedade do produto: $a^n \\cdot a^0 = a^{n+0} = a^n$, o que força $a^0 = 1$.

### Expoentes Racionais e Raízes

A potenciação pode ser estendida para expoentes [[numeros-racionais]]:

$$a^{1/n} = \\sqrt[n]{a}$$

Isso conecta diretamente a potenciação às raízes. A raiz quadrada, tão central ao [[teorema-de-pitagoras]] e à descoberta dos [[numeros-irracionais]], é simplesmente $a^{1/2}$. As [[potencia-de-dois]] têm papel central na [[computacao]] e na [[programacao]] modernas.`;
})();
