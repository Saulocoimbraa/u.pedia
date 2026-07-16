(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["identidade-algebrica"] = `Uma **identidade algébrica** é uma equação que iguala expressões matemáticas diferentes de tal forma que ela é sempre verdadeira para qualquer valor numérico que atribuamos a suas variáveis.

Na matemática escolar, são conhecidas como **produtos notáveis**.

### A Prova Geométrica de $(a+b)^2 = a^2 + 2ab + b^2$

Os matemáticos gregos não usavam manipulação de letras. Eles provavam identidades algébricas visualmente usando áreas de figuras da [[geometria-plana]].

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" style="max-width:220px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="220" height="220" fill="#0f172a" rx="12"/>
  
  <!-- Quadrado Maior subdividido -->
  <!-- Área a^2 (100x100) -->
  <rect x="40" y="40" width="90" height="90" fill="#60a5fa" rx="2" opacity="0.8"/>
  <text x="85" y="90" fill="#0f172a" font-size="14" font-weight="bold">a²</text>
  
  <!-- Área ab superior-direita (50x90) -->
  <rect x="130" y="40" width="50" height="90" fill="#34d399" rx="2" opacity="0.8"/>
  <text x="155" y="90" fill="#0f172a" font-size="12">ab</text>
  
  <!-- Área ab inferior-esquerda (90x50) -->
  <rect x="40" y="130" width="90" height="50" fill="#34d399" rx="2" opacity="0.8"/>
  <text x="85" y="160" fill="#0f172a" font-size="12">ab</text>
  
  <!-- Área b^2 (50x50) -->
  <rect x="130" y="130" width="50" height="50" fill="#f59e0b" rx="2" opacity="0.8"/>
  <text x="155" y="160" fill="#0f172a" font-size="12" font-weight="bold">b²</text>
  
  <!-- Linhas e marcações -->
  <text x="85" y="30" fill="#94a3b8" font-size="11" text-anchor="middle">a</text>
  <text x="155" y="30" fill="#94a3b8" font-size="11" text-anchor="middle">b</text>
  <text x="28" y="85" fill="#94a3b8" font-size="11">a</text>
  <text x="28" y="155" fill="#94a3b8" font-size="11">b</text>
</svg>

Geometricamente, se temos um [[quadrado]] de lado $(a+b)$, sua área total é $(a+b)^2$. Subdividindo esse quadrado em quatro seções conforme a imagem acima:
*   Um quadrado azul de área $a^2$
*   Dois retângulos verdes, cada um de área $ab$
*   Um quadrado amarelo de área $b^2$

Somando as partes, provamos de forma visual e inquestionável que:
$$(a+b)^2 = a^2 + 2ab + b^2$$
`;
})();
