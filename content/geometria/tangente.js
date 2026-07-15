(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["tangente"] = `A tangente é a terceira das razões fundamentais da [[trigonometria]]. Para um [[angulo]] agudo $\\theta$ num [[triangulo-retangulo]], a tangente é definida como:

$$\\tan \\theta = \\dfrac{\\text{cateto oposto}}{\\text{cateto adjacente}}$$

Diferente do [[seno]] e do [[cosseno]] — que comparam um cateto com a hipotenusa — a tangente relaciona diretamente os **dois catetos entre si**. Isso a torna a razão trigonométrica mais intuitiva para medir inclinações.

### Relação com Seno e Cosseno

A tangente pode ser expressa como o quociente das outras duas razões:

$$\\tan \\theta = \\dfrac{\\sin \\theta}{\\cos \\theta}$$

Note que a tangente não está definida para $\\theta = 90^\\circ$, pois nesse caso $\\cos 90^\\circ = 0$ e haveria [[divisao]] por zero.

### Valores Notáveis

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" width="100%" style="max-width:440px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="440" height="260" fill="#0f172a" rx="12"/>
  <!-- Eixo horizontal de referência -->
  <line x1="40" y1="190" x2="260" y2="190" stroke="#334155" stroke-width="1.5"/>
  <!-- Linhas de inclinação saindo da mesma base (cateto adjacente fixo) -->
  <!-- 0°: cateto oposto = 0, tan = 0 -->
  <line x1="80" y1="190" x2="200" y2="190" stroke="#94a3b8" stroke-width="1.5" opacity="0.4"/>
  <line x1="200" y1="190" x2="200" y2="190" stroke="#94a3b8" stroke-width="3"/>
  <!-- 30°: tan ≈ 0.577, cateto adj=120, opp≈69 -->
  <line x1="80" y1="190" x2="200" y2="190" stroke="#60a5fa" stroke-width="1" opacity="0.3"/>
  <line x1="200" y1="190" x2="200" y2="121" stroke="#60a5fa" stroke-width="3"/>
  <line x1="80" y1="190" x2="200" y2="121" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 45°: tan = 1, opp=adj=120 -->
  <line x1="80" y1="190" x2="200" y2="190" stroke="#34d399" stroke-width="1" opacity="0.3"/>
  <line x1="200" y1="190" x2="200" y2="70" stroke="#34d399" stroke-width="3"/>
  <line x1="80" y1="190" x2="200" y2="70" stroke="#34d399" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 60°: tan ≈ 1.732, opp≈208 — usando cateto adj=80 para caber -->
  <line x1="120" y1="190" x2="200" y2="190" stroke="#f59e0b" stroke-width="1" opacity="0.3"/>
  <line x1="200" y1="190" x2="200" y2="51" stroke="#f59e0b" stroke-width="3"/>
  <line x1="120" y1="190" x2="200" y2="51" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 90° arrow indicating undefined -->
  <line x1="200" y1="190" x2="200" y2="30" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="3,4" opacity="0.6"/>
  <text x="208" y="26" fill="#f472b6" font-size="11">∞ (indefinida)</text>
  <!-- Points -->
  <circle cx="200" cy="190" r="4" fill="#94a3b8"/>
  <circle cx="200" cy="121" r="4" fill="#60a5fa"/>
  <circle cx="200" cy="70" r="4" fill="#34d399"/>
  <circle cx="200" cy="51" r="4" fill="#f59e0b"/>
  <!-- Legend -->
  <text x="270" y="60" fill="#94a3b8" font-size="13" font-weight="bold">tan θ</text>
  <rect x="270" y="76" width="10" height="10" rx="2" fill="#94a3b8"/>
  <text x="288" y="86" fill="#94a3b8" font-size="12">0° → 0</text>
  <rect x="270" y="98" width="10" height="10" rx="2" fill="#60a5fa"/>
  <text x="288" y="108" fill="#60a5fa" font-size="12">30° → √3 / 3</text>
  <rect x="270" y="120" width="10" height="10" rx="2" fill="#34d399"/>
  <text x="288" y="130" fill="#34d399" font-size="12">45° → 1</text>
  <rect x="270" y="142" width="10" height="10" rx="2" fill="#f59e0b"/>
  <text x="288" y="152" fill="#f59e0b" font-size="12">60° → √3</text>
  <rect x="270" y="164" width="10" height="10" rx="2" fill="#f472b6"/>
  <text x="288" y="174" fill="#f472b6" font-size="12">90° → indefinida</text>
  <!-- Label cateto adj -->
  <text x="136" y="207" fill="#64748b" font-size="11" text-anchor="middle">cateto adj</text>
  <!-- Label cateto op -->
  <text x="216" y="130" fill="#64748b" font-size="11">cat. op.</text>
</svg>

O caso $\\tan 45^\\circ = 1$ é especialmente elegante: um ângulo agudo de $45^\\circ$ gera um [[triangulo-retangulo]] isósceles, onde os dois catetos são iguais — dividir um pelo outro resulta em $1$.

### A Interpretação Geométrica da Inclinação

A tangente mede a inclinação (ou declividade) de uma [[reta]]. Na equação analítica $y = ax + b$, o coeficiente $a$ é exatamente $\\tan \\theta$, onde $\\theta$ é o [[angulo]] que a reta faz com o eixo horizontal. Por isso a tangente é central na [[arquitetura]], topografia e [[engenharia]] civil.`;
})();
