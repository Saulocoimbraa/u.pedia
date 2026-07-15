(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["divisao"] = `A divisão é a operação inversa da [[multiplicacao]]. Dados dois números $a$ (dividendo) e $b$ (divisor, com $b \\neq 0$), a divisão $a \\div b$ responde à pergunta:

> "Qual número $q$ (quociente), quando multiplicado por $b$, resulta em $a$?"

$$a \\div b = q \\iff b \\times q = a$$

### A Proibição Absoluta: Divisão por Zero

**Dividir por zero é matematicamente impossível**, não é uma "convenção" ou "regra escolar". Se tentarmos $a \\div 0 = q$, precisaríamos que $0 \\times q = a$, mas $0 \\times q = 0$ para qualquer $q$. Portanto, não existe nenhum número real $q$ que satisfaça a equação quando $a \\neq 0$.

### O Nascimento da Fração

A [[multiplicacao]] de [[numero-inteiro|inteiros]] é "fechada" — inteiro × inteiro = inteiro. Mas a divisão **não é fechada** dentro dos inteiros: $7 \\div 3$ não é um inteiro. A necessidade de representar essas divisões "incompletas" é exatamente o que dá origem aos [[numero-racional|números racionais]]:

$$\\frac{a}{b} \\in \\mathbb{Q}, \\quad b \\neq 0$$

Uma [[fracao]] não é outra coisa senão uma divisão escrita de forma suspensa, aguardando simplificação.

### Divisão e Resto

No universo dos [[numero-inteiro|inteiros]], a divisão euclidiana sempre garante:

$$a = b \\times q + r, \\quad 0 \\leq r < b$$

onde $r$ é o **resto**. O estudo das propriedades do resto é chamado de aritmética modular e fundamenta a criptografia moderna — o motor invisível que protege nossas senhas e comunicações na internet.`;
})();
