(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["numero-impar"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="45" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="67.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="67.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="105" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="127.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="127.5" cy="107.5" r="10" fill="#2563eb"/>
    <!-- Sobrando -->
    <circle cx="185" cy="90" r="11" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
    <text x="75" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">5 = 2 × 2 + 1 (Resto 1)</text>
  </svg>
</div>\n\nUm [[numero-inteiro]] $n$ é chamado de ímpar quando existe um inteiro $k$ tal que:

$$n = 2k + 1$$

Os números ímpares formam a sequência $\\ldots, -3, -1, 1, 3, 5, 7, 9, \\ldots$

Todo inteiro é par ou ímpar — não existe uma terceira opção. Essa propriedade é chamada de paridade.

### Propriedades

* A soma de dois números ímpares é [[numero-par]]: $(2k+1) + (2m+1) = 2(k+m+1)$.
* O produto de dois números ímpares é ímpar: $(2k+1)(2m+1) = 4km + 2k + 2m + 1 = 2(2km+k+m)+1$.
* O quadrado de um número ímpar é ímpar: $(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2+2k)+1$.

### Conexão com a Soma dos Ímpares

Existe uma fórmula elegante para a soma dos primeiros $n$ números ímpares. Veja o artigo [[soma-dos-impares]] para entender por que $1 + 3 + 5 + \\ldots + (2n-1)$ é sempre igual a $n^2$.
`;
})();
