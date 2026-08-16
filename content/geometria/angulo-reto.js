(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["angulo-reto"] = `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="60" y1="140" x2="190" y2="140" stroke="#334155" stroke-width="2.5" />
    <line x1="60" y1="140" x2="60" y2="30" stroke="#334155" stroke-width="2.5" />
    <rect x="60" y="115" width="25" height="25" fill="#f1f5f9" stroke="#0284c7" stroke-width="2"/>
    <circle cx="72.5" cy="127.5" r="2.5" fill="#0284c7"/>
    <text x="95" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">90°</text>
  </svg>
</div>

Um ângulo reto mede exatamente $90º$ ([[grau]]) — um quarto de uma volta completa ($360º$). É representado graficamente por um pequeno quadradinho no vértice.
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
