(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["trigonometria"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="340" height="140" viewBox="0 0 340 140" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <defs>
      <linearGradient id="sineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.0" />
      </linearGradient>
    </defs>
    
    <!-- Eixos Cartesianos de Referência -->
    <line x1="20" y1="70" x2="320" y2="70" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
    <line x1="170" y1="15" x2="170" y2="125" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
    
    <!-- Preenchimento Suave sob a Senoide -->
    <path d="M 20 70 C 50 15, 70 15, 95 70 C 120 125, 140 125, 170 70 C 200 15, 220 15, 245 70 C 270 125, 290 125, 320 70 L 320 70 L 20 70 Z" fill="url(#sineGrad)" />

    <!-- Curva da Senoide (Sem Textos) -->
    <path d="M 20 70 C 50 15, 70 15, 95 70 C 120 125, 140 125, 170 70 C 200 15, 220 15, 245 70 C 270 125, 290 125, 320 70" fill="none" stroke="#4f46e5" stroke-width="3" stroke-linecap="round" />

    <!-- Pontos Notáveis da Onda -->
    <circle cx="60" cy="28" r="4" fill="#4f46e5" />
    <circle cx="132" cy="112" r="4" fill="#4f46e5" />
    <circle cx="210" cy="28" r="4" fill="#4f46e5" />
    <circle cx="282" cy="112" r="4" fill="#4f46e5" />
  </svg>
</div>

A trigonometria é o ramo da [[geometria-euclidiana]] dedicado ao estudo das **relações entre os [[angulos]] e os lados de um [[triangulo]]**. O nome vem do grego: *trígono* (triângulo) + *métron* (medida).

Embora o campo tenha se expandido muito — englobando funções periódicas usadas em [[fisica]], [[engenharia]] de sinais e música —, a base de tudo é surpreendentemente simples: o [[triangulo-retangulo]].

### O Triângulo Retângulo Como Ferramenta

A ideia central é que, para um [[angulo]] $\\theta$ fixo num [[triangulo-retangulo]], a razão entre qualquer par de lados do triângulo é sempre a mesma, independente do tamanho do triângulo. Isso é uma consequência direta do conceito de [[triangulo-semelhante]]: triângulos com os mesmos ângulos são proporcionais.

Essa propriedade extraordinária nos permite definir três razões fundamentais associadas a cada ângulo:

| Razão | Nome | Definição |
|---|---|---|
| $\\dfrac{\\text{cateto oposto}}{\\text{hipotenusa}}$ | [[seno]] ($\\sin\\theta$) | razão do lado oposto ao ângulo |
| $\\dfrac{\\text{cateto adjacente}}{\\text{hipotenusa}}$ | [[cosseno]] ($\\cos\\theta$) | razão do lado adjacente ao ângulo |
| $\\dfrac{\\text{cateto oposto}}{\\text{cateto adjacente}}$ | [[tangente]] ($\\tan\\theta$) | razão entre os dois catetos |

### A Identidade Fundamental

A relação mais poderosa que conecta [[seno]] e [[cosseno]] é uma consequência direta do [[teorema-de-pitagoras]] aplicado a um triângulo de [[hipotenusa]] unitária:

$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$

Essa **identidade trigonométrica fundamental** é o ponto de partida de toda a álgebra trigonométrica avançada.
`;
})();
