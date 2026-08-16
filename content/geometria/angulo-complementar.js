(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["angulo-complementar"] = `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="50" y1="140" x2="190" y2="140" stroke="#334155" stroke-width="2" />
    <line x1="50" y1="140" x2="50" y2="30" stroke="#334155" stroke-width="2" />
    <line x1="50" y1="140" x2="160" y2="50" stroke="#2563eb" stroke-width="2" />
    <path d="M 80 140 A 30 30 0 0 0 74 120" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M 74 120 A 30 30 0 0 0 50 110" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="85" y="132" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">α</text>
    <text x="58" y="102" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#059669">β</text>
    <text x="110" y="45" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">α + β = 90°</text>
  </svg>
</div>

Dois ângulos são chamados de **complementares** quando a soma de suas medidas é exatamente igual a $90^\\circ$ (um [[angulo-reto]]). Dizemos que um é o complemento do outro.

### Representação Geométrica

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180" width="100%" style="max-width:200px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif">
  <rect width="200" height="180" fill="#0f172a" rx="12"/>
  <!-- Vértice -->
  <circle cx="40" cy="140" r="4" fill="#94a3b8"/>
  <!-- Linhas do ângulo reto -->
  <line x1="40" y1="140" x2="160" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="40" y1="140" x2="40" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Linha divisória -->
  <line x1="40" y1="140" x2="120" y2="60" stroke="#f472b6" stroke-width="2"/>
  <!-- Símbolo de ângulo reto -->
  <path d="M 40 130 L 50 130 L 50 140" fill="none" stroke="#334155" stroke-width="1"/>
  <!-- Ângulos -->
  <path d="M 80 140 A 40 40 0 0 0 68.3 111.7" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="85" y="130" fill="#34d399" font-size="11">α</text>
  <path d="M 68.3 111.7 A 40 40 0 0 0 40 100" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <text x="50" y="90" fill="#60a5fa" font-size="11">β</text>
  <!-- Texto -->
  <text x="100" y="30" fill="#f472b6" font-size="12" text-anchor="middle">α + β = 90°</text>
</svg>

### Propriedade Trigonométrica Fundamental

Na [[trigonometria]], a relação de complementaridade é a razão pela qual os co-funções (como cosseno) têm esse nome. Para qualquer ângulo agudo $\\alpha$:
$$\\sin \\alpha = \\cos(90^\\circ - \\alpha)$$
$$\\tan \\alpha = \\frac{1}{\\tan(90^\\circ - \\alpha)}$$

{{widget}}
`;
})();
