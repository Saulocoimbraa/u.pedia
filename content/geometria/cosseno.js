(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["cosseno"] = `O cosseno é a segunda das razões trigonométricas fundamentais da [[trigonometria]]. Para um [[angulo]] agudo $\\theta$ num [[triangulo-retangulo]], o cosseno é definido como:

$$\\cos \\theta = \\dfrac{\\text{cateto adjacente}}{\\text{hipotenusa}}$$

Enquanto o [[seno]] mede o cateto do lado oposto ao ângulo, o cosseno mede o cateto do lado **adjacente** (vizinho) — aquele que compõe o próprio ângulo $\\theta$ ao lado da hipotenusa.

### Valores Notáveis

No círculo unitário, o cosseno de cada ângulo $\\theta$ corresponde à **extensão horizontal** do ponto no círculo — os segmentos coloridos abaixo:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 280" width="100%" style="max-width:440px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="440" height="280" fill="#0f172a" rx="12"/>
  <line x1="70" y1="235" x2="255" y2="235" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="235" x2="70" y2="52" stroke="#334155" stroke-width="1.5"/>
  <path d="M 230 235 A 160 160 0 0 0 70 75" stroke="#475569" stroke-width="1.5" fill="none"/>
  <line x1="70" y1="235" x2="230" y2="235" stroke="#1e3a5f" stroke-width="1" opacity="0.5"/>
  <line x1="70" y1="235" x2="208.6" y2="155" stroke="#1e3a5f" stroke-width="1" opacity="0.5"/>
  <line x1="70" y1="235" x2="183.1" y2="121.9" stroke="#1e3a5f" stroke-width="1" opacity="0.5"/>
  <line x1="70" y1="235" x2="150" y2="96.4" stroke="#1e3a5f" stroke-width="1" opacity="0.5"/>
  <line x1="70" y1="235" x2="70" y2="75" stroke="#1e3a5f" stroke-width="1" opacity="0.5"/>
  <!-- Cosine horizontal segments -->
  <line x1="70" y1="235" x2="230" y2="235" stroke="#f472b6" stroke-width="2.5"/>
  <line x1="70" y1="155" x2="208.6" y2="155" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="70" y1="121.9" x2="183.1" y2="121.9" stroke="#34d399" stroke-width="2.5"/>
  <line x1="70" y1="96.4" x2="150" y2="96.4" stroke="#60a5fa" stroke-width="2.5"/>
  <line x1="70" y1="75" x2="70" y2="75" stroke="#94a3b8" stroke-width="2.5"/>
  <!-- Points -->
  <circle cx="230" cy="235" r="5" fill="#f472b6"/>
  <circle cx="208.6" cy="155" r="5" fill="#f59e0b"/>
  <circle cx="183.1" cy="121.9" r="5" fill="#34d399"/>
  <circle cx="150" cy="96.4" r="5" fill="#60a5fa"/>
  <circle cx="70" cy="75" r="5" fill="#94a3b8"/>
  <!-- Angle labels -->
  <text x="230" y="254" fill="#f472b6" font-size="12" text-anchor="middle">0°</text>
  <text x="208.6" y="254" fill="#f59e0b" font-size="12" text-anchor="middle">30°</text>
  <text x="183.1" y="254" fill="#34d399" font-size="12" text-anchor="middle">45°</text>
  <text x="150" y="254" fill="#60a5fa" font-size="12" text-anchor="middle">60°</text>
  <text x="44" y="254" fill="#94a3b8" font-size="12" text-anchor="middle">90°</text>
  <!-- Legend -->
  <text x="290" y="72" fill="#94a3b8" font-size="13" font-weight="bold">cos θ</text>
  <rect x="290" y="88" width="10" height="10" rx="2" fill="#f472b6"/>
  <text x="308" y="98" fill="#f472b6" font-size="12">0° → 1</text>
  <rect x="290" y="110" width="10" height="10" rx="2" fill="#f59e0b"/>
  <text x="308" y="120" fill="#f59e0b" font-size="12">30° → √3 / 2</text>
  <rect x="290" y="132" width="10" height="10" rx="2" fill="#34d399"/>
  <text x="308" y="142" fill="#34d399" font-size="12">45° → √2 / 2</text>
  <rect x="290" y="154" width="10" height="10" rx="2" fill="#60a5fa"/>
  <text x="308" y="164" fill="#60a5fa" font-size="12">60° → 1/2</text>
  <rect x="290" y="176" width="10" height="10" rx="2" fill="#94a3b8"/>
  <text x="308" y="186" fill="#94a3b8" font-size="12">90° → 0</text>
</svg>

Observe a simetria: os valores do cosseno para $\\theta$ são exatamente os valores do [[seno]] para $(90^\\circ - \\theta)$. Isso não é coincidência — é a definição de ângulo complementar: num [[triangulo-retangulo]], o seno de um ângulo é o cosseno do seu complemento.

$$\\cos \\theta = \\sin(90^\\circ - \\theta)$$

### A Identidade Fundamental e o Teorema de Pitágoras

Toda a relação entre seno e cosseno pode ser resumida em:

$$\\cos^2\\theta + \\sin^2\\theta = 1$$

Esta é simplesmente o [[teorema-de-pitagoras]] escrito em termos das razões: dividindo $b^2 + c^2 = a^2$ por $a^2$, obtemos $\\left(\\frac{b}{a}\\right)^2 + \\left(\\frac{c}{a}\\right)^2 = 1$, que é exatamente $\\cos^2\\theta + \\sin^2\\theta = 1$.`;
})();
