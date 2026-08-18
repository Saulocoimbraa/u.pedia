(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["numero-par"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="62.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="62.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="100" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="122.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="122.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="160" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="182.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="182.5" cy="107.5" r="10" fill="#2563eb"/>
    <text x="90" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">6 = 2 × 3 (Resto 0)</text>
  </svg>
</div>\n\nUm [[numero-inteiro]] $n$ é chamado de par quando existe um inteiro $k$ tal que:

$$n = 2k$$

Em outras palavras, um número par é exatamente divisível por $2$ sem deixar resto na [[divisao]]. Os pares formam a sequência $\\ldots, -4, -2, 0, 2, 4, 6, 8, \\ldots$

### Propriedades Elementares

Podemos provar essas propriedades usando [[metodos-de-demonstracao]] direto:

* A soma de dois pares é par: $2k + 2m = 2(k+m)$.
* O produto de um número par com qualquer inteiro é par: $2k \\times n = 2(kn)$.
* O quadrado de um número par é par: $(2k)^2 = 4k^2 = 2(2k^2)$.

### Complemento: Número Ímpar

Um número inteiro que não é par é chamado de [[numero-impar]]. Todo inteiro é par ou ímpar, nunca os dois ao mesmo tempo. Essa divisão é chamada de paridade.

### Uso em Demonstrações

A propriedade do quadrado de um par — que o quadrado é par se e somente se o número é par — é um passo crucial na prova de que [[raiz-de-2-irracional]].
`;
})();
