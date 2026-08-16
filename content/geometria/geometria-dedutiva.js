(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["geometria-dedutiva"] = `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="340" height="150" viewBox="0 0 340 150" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <!-- Definição dos Marcadores de Seta -->
    <defs>
      <marker id="arrow-deductive" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#4f46e5" />
      </marker>
    </defs>

    <!-- Bloco 1: Axiomas -->
    <rect x="20" y="45" width="80" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
    <text x="60" y="72" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Axiomas</text>
    <text x="60" y="88" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#3b82f6">(Evidências)</text>

    <!-- Seta 1 -->
    <line x1="100" y1="75" x2="128" y2="75" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow-deductive)" />

    <!-- Bloco 2: Lógica / Dedução -->
    <rect x="130" y="45" width="80" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" />
    <text x="170" y="72" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Lógica</text>
    <text x="170" y="88" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#16a34a">(Dedução)</text>

    <!-- Seta 2 -->
    <line x1="210" y1="75" x2="238" y2="75" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow-deductive)" />

    <!-- Bloco 3: Teorema -->
    <rect x="240" y="45" width="80" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="280" y="72" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#b45309">Teorema</text>
    <text x="280" y="88" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#d97706">(Provado)</text>
  </svg>
</div>

A **Geometria Dedutiva** é o estudo da geometria que não se apoia em medições físicas ou aproximações empíricas, mas sim em um encadeamento de raciocínio estritamente lógico e rigoroso. Ela parte de premissas indiscutíveis chamadas axiomas para provar propriedades complexas, os [[teoremas]].

### Origem Histórica

Antes dos gregos antigos, as civilizações sabiam, por exemplo, que um triângulo com lados 3, 4 e 5 continha um ângulo reto, pois podiam medir isso com cordas na prática. 

No entanto, a geometria dedutiva nasceu quando a [[matematica-grega]] exigiu uma prova universal de que **qualquer** triângulo que satisfizesse $a^2 = b^2 + c^2$ conteria um ângulo reto, sem que fosse necessário construir ou medir infinitos triângulos físicos.

### A Estrutura Lógica

1. **Entes Primitivos:** Conceitos aceitos sem definição formal (como [[ponto]], [[reta]] e [[plano]]).
2. **Axiomas / Postulados:** Declarações fundamentais aceitas como verdades óbvias e não demonstradas (ex: *"por dois pontos passa uma única reta"*).
3. **Teoremas:** Proposições cuja verdade é provada a partir dos axiomas e entes primitivos usando regras de [[logica]].
`;
})();
