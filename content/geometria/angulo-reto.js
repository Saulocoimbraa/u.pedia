(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["angulo-reto"] = `Um ângulo reto mede exatamente $90º$ ([[grau]]) — um quarto de uma volta completa ($360º$). É representado graficamente por um pequeno quadradinho no vértice.
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40%" height="40%">
  <!-- Circunferência completa (tracejada, para referência) -->
  <circle cx="100" cy="100" r="80" fill="none" stroke="#888" stroke-dasharray="5,5" stroke-width="1.5"/>

  <!-- Setor de 90° (preenchido com transparência e contorno) -->
  <path d="M 180,100 A 80,80 0 0,1 100,180 L 100,100 Z" fill="rgba(0,0,255,0.12)" stroke="#0055cc" stroke-width="2.5"/>

  <!-- Raios que formam o ângulo reto -->
  <line x1="100" y1="100" x2="180" y2="100" stroke="#0055cc" stroke-width="2.5"/>
  <line x1="100" y1="100" x2="100" y2="180" stroke="#0055cc" stroke-width="2.5"/>

  <!-- Marca de ângulo reto (quadrado no vértice) -->
  <polyline points="115,100 115,115 100,115" fill="none" stroke="#0055cc" stroke-width="2"/>

  <!-- Texto indicando 90° -->
  <text x="128" y="142" font-family="Arial, sans-serif" font-size="22" fill="#0055cc" font-weight="bold">90°</text>
</svg>
### Onde aparece

O ângulo reto é onipresente na [[arquitetura]] e [[engenharia]]. Paredes perpendiculares ao chão, cantos de portas e janelas, esquadros de carpinteiro — todos são ângulos retos. A verificação de que um canto é reto é feita usando a relação $3{:}4{:}5$ do [[teorema-de-pitagoras]].

### Tipos de Ângulos

Para contextualizar o ângulo reto entre os outros:

* [[angulo-agudo]]: entre $0°$ e $90°$.
* [[angulo-reto]]: exatamente $90°$.
* [[angulo-obtuso]]: entre $90°$ e $180°$.
* [[angulo-raso]]: exatamente $180°$ (uma linha reta).

### No Triângulo Retângulo

Um [[triangulo-retangulo]] é definido por ter exatamente um ângulo reto. A presença desse ângulo especial cria as relações descritas pelo [[teorema-de-pitagoras]] e pelas funções da [[trigonometria]].
`;
})();
