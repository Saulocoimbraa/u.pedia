(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["potenciacao"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <circle cx="120" cy="30" r="8" fill="#8b5cf6"/>
    <line x1="120" y1="38" x2="70" y2="80" stroke="#a78bfa" stroke-width="2"/>
    <line x1="120" y1="38" x2="170" y2="80" stroke="#a78bfa" stroke-width="2"/>
    <circle cx="70" cy="80" r="7" fill="#8b5cf6"/>
    <circle cx="170" cy="80" r="7" fill="#8b5cf6"/>
    <line x1="70" y1="87" x2="45" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="70" y1="87" x2="95" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="170" y1="87" x2="145" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="170" y1="87" x2="195" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <circle cx="45" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="95" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="145" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="195" cy="130" r="6" fill="#8b5cf6"/>
    <text x="100" y="165" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#6d28d9">2³ = 8</text>
  </svg>
</div>\n\nA potenciação é a operação que emerge naturalmente da [[multiplicacao]] repetida. Escrever $a^n$ (lê-se "*a* elevado a *n*") é uma abreviação compacta de:

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

Isso conecta diretamente a potenciação às raízes. A raiz quadrada, tão central ao [[teorema-de-pitagoras]] e à descoberta dos [[numeros-irracionais]], é simplesmente $a^{1/2}$. As [[potencia-de-dois]] têm papel central na [[computacao]] e na [[programacao]] modernas.

{{widget}}`;
})();
