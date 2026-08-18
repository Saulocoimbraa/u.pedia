(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["soma"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="25" y="70" width="30" height="30" rx="6" fill="#3b82f6"/>
    <rect x="60" y="70" width="30" height="30" rx="6" fill="#3b82f6"/>
    <text x="100" y="92" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#475569">+</text>
    <rect x="125" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <rect x="160" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <rect x="195" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <text x="105" y="145" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#1e293b">2 + 3 = 5</text>
  </svg>
</div>\n\nA soma (ou adição) é a mais fundamental das operações básicas matemáticas. Em sua essência, ela descreve o ato de combinar duas coleções de objetos em uma única coleção.

Na notação aritmética moderna, a soma de dois valores $a$ e $b$ é representada pelo símbolo de cruz: $a + b$.

### Fundamentação Formal

Embora a intuição de somar seja óbvia ao se juntar duas maçãs com três maçãs, na matemática rigorosa (focada no [[numero-natural]]), a soma é definida formalmente em cima dos Axiomas de Peano por meio da operação sucessor:

1. Base: $a + 0 = a$ (Zero é o elemento neutro da soma).
2. Recursão: $a + Sucessor(b) = Sucessor(a + b)$.

A partir dessas duas regrinhas, é possível deduzir rigorosamente a comutatividade ($a+b=b+a$) e todas as demais propriedades descritas pelo [[teorema]] básico da aritmética.

### Expansões da Soma

A soma serve como fundação para a criação de outras operações:
* O que acontece quando você soma um mesmo número sucessivas vezes? (Ex: $3+3+3+3$). Essa repetição gera a [[multiplicacao]].
* A tentativa de inverter a soma ($a + ? = b$) é o que cria a subtração.
* Explorar casos estruturais da adição, como analisar a paridade ($a$ e $b$ formam um [[numero-par]]?), gera resultados intrigantes, como demonstrado na teoria pitagórica geométrica da [[soma-dos-impares]].`;
})();
