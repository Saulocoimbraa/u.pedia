(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["dimensao"] = `\n<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- 1D -->
    <line x1="20" y1="90" x2="70" y2="90" stroke="#ef4444" stroke-width="3"/>
    <text x="35" y="115" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">1D (Reta)</text>
    <!-- 2D -->
    <rect x="95" y="65" width="50" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="105" y="135" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">2D (Área)</text>
    <!-- 3D -->
    <rect x="180" y="75" width="40" height="40" fill="none" stroke="#059669" stroke-width="2"/>
    <rect x="195" y="60" width="40" height="40" fill="none" stroke="#059669" stroke-width="2"/>
    <line x1="180" y1="75" x2="195" y2="60" stroke="#059669" stroke-width="1.5"/>
    <line x1="220" y1="75" x2="235" y2="60" stroke="#059669" stroke-width="1.5"/>
    <line x1="180" y1="115" x2="195" y2="100" stroke="#059669" stroke-width="1.5"/>
    <line x1="220" y1="115" x2="235" y2="100" stroke="#059669" stroke-width="1.5"/>
    <text x="190" y="135" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#047857">3D (Volume)</text>
  </svg>
</div>\n\nDimensão, de uma forma rigorosa, refere-se ao número de coordenadas independentes necessárias para determinar univocamente uma posição (ou [[ponto]]) no espaço avaliado. É a métrica do grau de liberdade de um objeto geométrico.

### Progressão Geométrica das Dimensões

Os modelos matemáticos partem do simples e empilham graus de liberdade:
* **Dimensão Zero ($0D$):** Um [[ponto]] exato. Não existe margem para se deslocar — não há comprimento, largura ou altura.
* **Uma Dimensão ($1D$):** Uma [[reta]] ou curva. Para se localizar numa rodovia perfeita, basta conhecer a quilometragem a partir do zero. Possui apenas comprimento.
* **Duas Dimensões ($2D$):** O [[plano]]. Uma superfície folhada, sem espessura, como uma quadra de basquete. Você precisa de "latitude" e "longitude" (coordenadas X e Y) para achar uma localização exata. Nele moram figuras fechadas, como o [[triangulo-retangulo]] e as áreas dos polígonos medidos no [[teorema-de-pitagoras]].
* **Três Dimensões ($3D$):** O espaço volumar tradicional. Demanda três coordenadas (frente-trás, cima-baixo, esquerda-direita).

As ramificações avançadas da [[fisica]] teórica frequentemente estendem cálculos para espaços com 4 dimensões (espaço-tempo de Minkowski) ou $11$ dimensões na Teoria das Cordas.`;
})();
