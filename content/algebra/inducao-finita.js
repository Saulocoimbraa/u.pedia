(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["inducao-finita"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="30" y="60" width="16" height="60" rx="3" fill="#ef4444" transform="rotate(15 30 120)"/>
    <rect x="70" y="60" width="16" height="60" rx="3" fill="#f59e0b" transform="rotate(25 70 120)"/>
    <rect x="110" y="60" width="16" height="60" rx="3" fill="#10b981" transform="rotate(35 110 120)"/>
    <rect x="150" y="60" width="16" height="60" rx="3" fill="#3b82f6"/>
    <rect x="190" y="60" width="16" height="60" rx="3" fill="#8b5cf6"/>
    <text x="25" y="145" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P(1)</text>
    <text x="142" y="145" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">P(k) ⇒ P(k+1)</text>
  </svg>
</div>\n\nA indução matemática (ou indução finita) é um dos [[metodos-de-demonstracao]] projetado especificamente para propriedades que envolvem os [[numeros-naturais]].

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

A justificativa da indução matemática é ela própria um dos [[axiomas-fundamentais]] da aritmética, conhecido como Axiomas de Peano. Ele afirma que o conjunto dos [[numeros-naturais]] é o menor conjunto que contém $1$ e é fechado pela operação de "passar ao sucessor".
`;
})();
