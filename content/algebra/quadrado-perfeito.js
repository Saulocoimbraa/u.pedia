(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["quadrado-perfeito"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="50" y="20" width="140" height="140" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="85" y1="20" x2="85" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="120" y1="20" x2="120" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="155" y1="20" x2="155" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="55" x2="190" y2="55" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="90" x2="190" y2="90" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="125" x2="190" y2="125" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="105" y="98" font-family="Inter, sans-serif" font-size="15" font-weight="bold" fill="#1e40af">4² = 16</text>
  </svg>
</div>\n\nUm **quadrado perfeito** é um número inteiro não-negativo que pode ser expresso como o quadrado de outro número inteiro. Em termos formais, um número $n$ é um quadrado perfeito se existir um inteiro $k$ tal que:

$$n = k^2$$

Os primeiros quadrados perfeitos são:
*   $0^2 = 0$
*   $1^2 = 1$
*   $2^2 = 4$
*   $3^2 = 9$
*   $4^2 = 16$
*   $5^2 = 25$

### Representação Geométrica

O nome "quadrado perfeito" provém da geometria. Se desenharmos pontos organizados em linhas e colunas iguais formando um quadrado físico, o total de pontos será sempre um quadrado perfeito.

### Propriedades Notáveis

1.  **Soma de Ímpares:** A soma dos primeiros $n$ números ímpares consecutivos é sempre um quadrado perfeito igual a $n^2$. Esta belíssima propriedade aritmética é provada em [[soma-dos-impares]].
2.  **Dígitos Finais:** Na base decimal, um quadrado perfeito só pode terminar com os algarismos 0, 1, 4, 5, 6 ou 9. Nenhum quadrado perfeito termina em 2, 3, 7 ou 8.
3.  **Fatoração:** Na fatoração em primos de um quadrado perfeito, todos os expoentes dos fatores primos são números pares.

{{widget}}`;
})();
