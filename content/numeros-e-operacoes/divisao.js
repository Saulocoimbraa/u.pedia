(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["divisao"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="25" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="42" cy="65" r="7" fill="#ef4444"/><circle cx="63" cy="65" r="7" fill="#ef4444"/>
    <circle cx="42" cy="100" r="7" fill="#ef4444"/><circle cx="63" cy="100" r="7" fill="#ef4444"/>
    <rect x="92" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="109" cy="65" r="7" fill="#ef4444"/><circle cx="130" cy="65" r="7" fill="#ef4444"/>
    <circle cx="109" cy="100" r="7" fill="#ef4444"/><circle cx="130" cy="100" r="7" fill="#ef4444"/>
    <rect x="160" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="177" cy="65" r="7" fill="#ef4444"/><circle cx="198" cy="65" r="7" fill="#ef4444"/>
    <circle cx="177" cy="100" r="7" fill="#ef4444"/><circle cx="198" cy="100" r="7" fill="#ef4444"/>
    <text x="85" y="150" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">12 ÷ 3 = 4</text>
  </svg>
</div>\n\nA divisão é a operação inversa da [[multiplicacao]]. Dados dois números $a$ (dividendo) e $b$ (divisor, com $b \\neq 0$), a divisão $a \\div b$ responde à pergunta:

> "Qual número $q$ (quociente), quando multiplicado por $b$, resulta em $a$?"

$$a \\div b = q \\iff b \\times q = a$$

### A Proibição Absoluta: Divisão por Zero

**Dividir por zero é matematicamente impossível**, não é uma "convenção" ou "regra escolar". Se tentarmos $a \\div 0 = q$, precisaríamos que $0 \\times q = a$, mas $0 \\times q = 0$ para qualquer $q$. Portanto, não existe nenhum número real $q$ que satisfaça a equação quando $a \\neq 0$.

### O Nascimento da Fração

A [[multiplicacao]] de [[numeros-inteiros]] é "fechada" — inteiro × inteiro = inteiro. Mas a divisão **não é fechada** dentro dos inteiros: $7 \\div 3$ não é um inteiro. A necessidade de representar essas divisões "incompletas" é exatamente o que dá origem aos [[numeros-racionais]]:

$$\\frac{a}{b} \\in \\mathbb{Q}, \\quad b \\neq 0$$

Uma [[fracao]] não é outra coisa senão uma divisão escrita de forma suspensa, aguardando simplificação.

### Divisão e Resto

No universo dos [[numeros-inteiros]], a divisão euclidiana sempre garante:

$$a = b \\times q + r, \\quad 0 \\leq r < b$$

onde $r$ é o **resto**. O estudo das propriedades do resto é chamado de aritmética modular e fundamenta a criptografia moderna — o motor invisível que protege nossas senhas e comunicações na internet.

{{widget}}`;
})();
