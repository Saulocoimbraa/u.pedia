(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["soma-dos-impares"] = `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="30" width="30" height="30" fill="#ef4444" rx="4"/>
    <rect x="75" y="30" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="75" y="65" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="40" y="65" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="110" y="30" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="110" y="65" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="110" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="75" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="40" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <text x="155" y="85" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#3730a3">1+3+5 = 3²</text>
  </svg>
</div>

Se você somar os primeiros números ímpares ($1, 3, 5, 7, \\ldots$) percebe algo curioso: o resultado sempre é um [[quadrado-perfeito]].

* $1 = 1^2$
* $1 + 3 = 4 = 2^2$
* $1 + 3 + 5 = 9 = 3^2$
* $1 + 3 + 5 + 7 = 16 = 4^2$

Isso leva à fórmula geral:

$$1 + 3 + 5 + \\dots + (2n - 1) = n^2$$

### Por que é verdade? A prova visual

A explicação mais bonita não usa álgebra — usa geometria. Pense num quadrado $n \\times n$ de bloquinhos. Para ir de um quadrado $k \\times k$ para um quadrado $(k+1) \\times (k+1)$, você adiciona uma fileira em formato de "L" ao redor de dois lados. Essa fileira em L sempre tem exatamente $2k + 1$ bloquinhos — que é precisamente o próximo [[numero-impar]] da sequência. Use o widget abaixo para visualizar isso.

{{widget}}

### A Prova Formal por Indução

Para garantir que a fórmula vale para todo número natural $n$ (não apenas para os casos que testamos), usamos o método de [[inducao-finita]], um dos mais importantes [[metodos-de-demonstracao]].

O argumento tem dois passos:

1. Verificamos que a fórmula é verdadeira para $n = 1$: a soma do primeiro ímpar é $1$, e $1^2 = 1$. ✓

2. Supomos que a fórmula vale para algum $n = k$ (hipótese de indução) e provamos que então ela também vale para $n = k+1$. Somando o próximo ímpar $(2k+1)$ a ambos os lados:
$$k^2 + (2k+1) = (k+1)^2$$
O resultado é o quadrado do próximo número — exatamente o que precisávamos provar.

Como a base é verdadeira e o passo indutivo funciona, por [[inducao-finita]] a fórmula vale para todo $n \\in \\mathbb{N}$ (para todo [[numero-natural]]).

### Conexão com Física

No [[movimento-uniformemente-acelerado]] a partir do repouso, os espaços percorridos em intervalos de tempo iguais seguem exatamente a razão $1:3:5:7:\\ldots$ — a sequência dos números ímpares. Essa relação foi observada por Galileu no século XVII na [[fisica]].
`;
})();
