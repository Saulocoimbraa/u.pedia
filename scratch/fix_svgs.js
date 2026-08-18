/**
 * scratch/fix_svgs.js
 * Remove os SVGs genéricos (errados) e injeta SVGs corretos e contextuais
 * conforme o §8 do GEMINI.md: "A ilustração deve ser literalmente associada à palavra-chave"
 * Estilo: fundo branco, cores pastel, minimalista como livro didático.
 */
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

// Helper: wraps SVG inner content in a centered div container
function svg(inner, w = 260, h = 160) {
  return `<div style="display:flex;justify-content:center;margin:2rem 0;"><svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff;border-radius:10px;border:1px solid #e5e7eb;">${inner}</svg></div>`;
}

// Mapa: chave = "eixo/id-do-artigo"  →  SVG correto e contextual
const correctSVGs = {

  // ═══════════════════════════════════════════════════════════
  //  GEOMETRIA
  // ═══════════════════════════════════════════════════════════

  'geometria/ponto': svg(`
    <line x1="20" y1="80" x2="240" y2="80" stroke="#e5e7eb" stroke-width="1"/>
    <line x1="130" y1="15" x2="130" y2="145" stroke="#e5e7eb" stroke-width="1"/>
    <circle cx="130" cy="80" r="7" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="143" y="74" font-family="Georgia,serif" font-size="16" font-style="italic" fill="#1e3a5f">P</text>
    <text x="130" y="152" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#9ca3af">ponto — sem dimensão, apenas posição</text>
  `),

  'geometria/reta': svg(`
    <line x1="30" y1="80" x2="225" y2="80" stroke="#374151" stroke-width="2.5"/>
    <polygon points="226,80 211,73 211,87" fill="#374151"/>
    <polygon points="29,80 44,73 44,87" fill="#374151"/>
    <circle cx="90" cy="80" r="5" fill="#3b82f6"/>
    <text x="86" y="66" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#1f2937">A</text>
    <circle cx="170" cy="80" r="5" fill="#3b82f6"/>
    <text x="166" y="66" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#1f2937">B</text>
    <text x="128" y="115" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#9ca3af">infinita nos dois sentidos — 1 dimensão</text>
  `),

  'geometria/plano': svg(`
    <polygon points="30,130 190,130 210,45 55,45" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <line x1="82" y1="45" x2="68" y2="130" stroke="#93c5fd" stroke-width="1"/>
    <line x1="122" y1="45" x2="108" y2="130" stroke="#93c5fd" stroke-width="1"/>
    <line x1="162" y1="45" x2="148" y2="130" stroke="#93c5fd" stroke-width="1"/>
    <line x1="40" y1="68" x2="200" y2="68" stroke="#93c5fd" stroke-width="1"/>
    <line x1="36" y1="95" x2="196" y2="95" stroke="#93c5fd" stroke-width="1"/>
    <text x="130" y="155" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#9ca3af">plano — superfície 2D ilimitada</text>
  `, 260, 165),

  'geometria/dimensao': svg(`
    <circle cx="28" cy="72" r="5" fill="#374151"/>
    <text x="28" y="95" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b7280">0D</text>
    <text x="50" y="76" font-family="Arial" font-size="14" fill="#d1d5db">→</text>
    <line x1="75" y1="72" x2="115" y2="72" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
    <text x="95" y="95" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b7280">1D</text>
    <text x="125" y="76" font-family="Arial" font-size="14" fill="#d1d5db">→</text>
    <rect x="148" y="52" width="42" height="42" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="169" y="108" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b7280">2D</text>
    <text x="200" y="76" font-family="Arial" font-size="14" fill="#d1d5db">→</text>
    <rect x="218" y="58" width="30" height="30" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <polygon points="218,58 228,48 258,48 248,58" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
    <polygon points="248,58 258,48 258,78 248,88" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="238" y="108" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b7280">3D</text>
  `, 270, 120),

  'geometria/angulo': svg(`
    <circle cx="60" cy="120" r="4" fill="#374151"/>
    <line x1="60" y1="120" x2="225" y2="120" stroke="#374151" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="60" y1="120" x2="190" y2="32" stroke="#374151" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 110 120 A 50 50 0 0 0 90 76" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="120" y="108" font-family="Georgia,serif" font-size="16" font-style="italic" fill="#1e40af">α</text>
    <text x="44" y="138" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">V</text>
    <text x="130" y="155" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">abertura entre duas semirretas de mesma origem</text>
  `, 260, 165),

  'geometria/grau': svg(`
    <circle cx="130" cy="88" r="65" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <line x1="130" y1="88" x2="195" y2="88" stroke="#374151" stroke-width="1.5" stroke-dasharray="3,2"/>
    <circle cx="130" cy="88" r="3" fill="#374151"/>
    <line x1="196" y1="88" x2="202" y2="88" stroke="#374151" stroke-width="2"/>
    <line x1="130" y1="23" x2="130" y2="17" stroke="#374151" stroke-width="2"/>
    <line x1="64" y1="88" x2="58" y2="88" stroke="#374151" stroke-width="2"/>
    <line x1="130" y1="153" x2="130" y2="159" stroke="#374151" stroke-width="2"/>
    <text x="207" y="92" font-family="Arial" font-size="11" fill="#374151">0°</text>
    <text x="118" y="13" font-family="Arial" font-size="11" fill="#374151">90°</text>
    <text x="32" y="92" font-family="Arial" font-size="11" fill="#374151">180°</text>
    <text x="110" y="155" font-family="Arial" font-size="11" fill="#374151">270°</text>
    <text x="130" y="92" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af">360°</text>
  `, 260, 170),

  'geometria/hipotenusa': svg(`
    <polygon points="40,135 205,135 205,40" fill="#eff6ff" stroke="#d1d5db" stroke-width="1.5"/>
    <rect x="190" y="120" width="15" height="15" fill="none" stroke="#374151" stroke-width="1.5"/>
    <line x1="40" y1="135" x2="205" y2="40" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="40" y1="135" x2="205" y2="135" stroke="#374151" stroke-width="2"/>
    <line x1="205" y1="40" x2="205" y2="135" stroke="#374151" stroke-width="2"/>
    <text x="100" y="78" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#dc2626" transform="rotate(-29,100,78)">hipotenusa (c)</text>
    <text x="125" y="152" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">a</text>
    <text x="210" y="92" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">b</text>
    <text x="30" y="145" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">C</text>
    <text x="207" y="38" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">A</text>
    <text x="210" y="145" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">B</text>
  `, 260, 165),

  'geometria/cateto': svg(`
    <polygon points="40,135 205,135 205,40" fill="#eff6ff" stroke="#d1d5db" stroke-width="1.5"/>
    <rect x="190" y="120" width="15" height="15" fill="none" stroke="#374151" stroke-width="1.5"/>
    <line x1="205" y1="40" x2="205" y2="135" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="135" x2="205" y2="135" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <line x1="40" y1="135" x2="205" y2="40" stroke="#9ca3af" stroke-width="2"/>
    <text x="215" y="95" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#1d4ed8">cateto</text>
    <text x="215" y="108" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#1d4ed8">oposto</text>
    <text x="90" y="152" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#047857">cateto adjacente</text>
    <text x="96" y="82" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#9ca3af" transform="rotate(-29,96,82)">c</text>
  `, 290, 165),

  'geometria/vertice': svg(`
    <line x1="120" y1="130" x2="235" y2="130" stroke="#374151" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="120" y1="130" x2="182" y2="28" stroke="#374151" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 158 130 A 38 38 0 0 0 142 93" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <circle cx="120" cy="130" r="6" fill="#ef4444"/>
    <text x="102" y="148" font-family="Georgia,serif" font-size="17" font-style="italic" fill="#b91c1c">V</text>
    <text x="130" y="158" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">ponto de encontro — origem do ângulo</text>
  `, 260, 165),

  'geometria/poligono': svg(`
    <polygon points="130,25 197,60 197,120 130,155 63,120 63,60" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="130" cy="25" r="4" fill="#374151"/>
    <circle cx="197" cy="60" r="4" fill="#374151"/>
    <circle cx="197" cy="120" r="4" fill="#374151"/>
    <circle cx="130" cy="155" r="4" fill="#374151"/>
    <circle cx="63" cy="120" r="4" fill="#374151"/>
    <circle cx="63" cy="60" r="4" fill="#374151"/>
    <text x="130" y="95" text-anchor="middle" font-family="Arial" font-size="13" fill="#1e40af">6 lados</text>
    <text x="130" y="170" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">hexágono — polígono regular</text>
  `, 260, 180),

  'geometria/quadrado': svg(`
    <rect x="60" y="28" width="116" height="116" fill="#eff6ff" stroke="#374151" stroke-width="2.5"/>
    <rect x="60" y="28" width="13" height="13" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <rect x="163" y="28" width="13" height="13" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <rect x="60" y="131" width="13" height="13" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <rect x="163" y="131" width="13" height="13" fill="none" stroke="#9ca3af" stroke-width="1.5"/>
    <text x="118" y="20" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">l</text>
    <text x="118" y="162" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">l</text>
    <text x="42" y="92" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">l</text>
    <text x="186" y="92" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">l</text>
    <line x1="60" y1="28" x2="176" y2="144" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3"/>
    <text x="108" y="95" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#dc2626" transform="rotate(45,108,95)">d=l√2</text>
  `, 235, 175),

  'geometria/triplice-pitagorica': svg(`
    <polygon points="40,145 160,145 160,55" fill="#f0fdf4" stroke="#374151" stroke-width="2"/>
    <rect x="145" y="130" width="15" height="15" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="100" y="158" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#059669">a = 3</text>
    <text x="172" y="103" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#059669">b = 4</text>
    <line x1="40" y1="145" x2="160" y2="55" stroke="#ef4444" stroke-width="3"/>
    <text x="82" y="90" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#dc2626" transform="rotate(-37,82,90)">c = 5</text>
    <text x="210" y="90" text-anchor="middle" font-family="Arial" font-size="13" fill="#374151">3²+4²=5²</text>
    <text x="210" y="108" text-anchor="middle" font-family="Arial" font-size="13" fill="#374151">9+16=25</text>
    <rect x="185" y="115" width="50" height="22" rx="4" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
    <text x="210" y="130" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#065f46">✓</text>
  `, 260, 170),

  'geometria/geometria-euclidiana': svg(`
    <line x1="105" y1="28" x2="86" y2="122" stroke="#374151" stroke-width="2"/>
    <line x1="105" y1="28" x2="124" y2="122" stroke="#374151" stroke-width="2"/>
    <circle cx="105" cy="28" r="5" fill="#374151"/>
    <circle cx="86" cy="122" r="4" fill="#374151"/>
    <circle cx="124" cy="122" r="4" fill="#374151"/>
    <path d="M 50 82 A 63 63 0 0 1 160 82" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6,3"/>
    <rect x="148" y="48" width="82" height="14" rx="3" fill="#fef9c3" stroke="#92400e" stroke-width="1.5"/>
    <line x1="158" y1="48" x2="158" y2="55" stroke="#92400e" stroke-width="1"/>
    <line x1="170" y1="48" x2="170" y2="55" stroke="#92400e" stroke-width="1"/>
    <line x1="182" y1="48" x2="182" y2="55" stroke="#92400e" stroke-width="1"/>
    <line x1="194" y1="48" x2="194" y2="55" stroke="#92400e" stroke-width="1"/>
    <line x1="206" y1="48" x2="206" y2="55" stroke="#92400e" stroke-width="1"/>
    <line x1="218" y1="48" x2="218" y2="55" stroke="#92400e" stroke-width="1"/>
    <text x="130" y="150" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">compasso e régua — Os Elementos, ~300 a.C.</text>
  `, 250, 165),

  'geometria/geometria-dedutiva': svg(`
    <rect x="8" y="58" width="68" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="42" y="75" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af">Axioma</text>
    <text x="42" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e40af">(aceito)</text>
    <line x1="76" y1="78" x2="102" y2="78" stroke="#374151" stroke-width="2"/>
    <polygon points="102,78 90,72 90,84" fill="#374151"/>
    <rect x="102" y="58" width="68" height="40" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="136" y="75" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#064e3b">Teorema</text>
    <text x="136" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#065f46">(provado)</text>
    <line x1="170" y1="78" x2="196" y2="78" stroke="#374151" stroke-width="2"/>
    <polygon points="196,78 184,72 184,84" fill="#374151"/>
    <rect x="196" y="58" width="56" height="40" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="224" y="75" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#78350f">Corolário</text>
    <text x="224" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">(decorre)</text>
    <text x="130" y="130" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">dedução rigorosa: axioma → teorema</text>
  `, 262, 145),

  'geometria/arquitetura': svg(`
    <rect x="52" y="80" width="22" height="65" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
    <rect x="156" y="80" width="22" height="65" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
    <path d="M 52 80 A 63 63 0 0 1 178 80" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
    <rect x="40" y="73" width="46" height="10" rx="2" fill="#9ca3af"/>
    <rect x="144" y="73" width="46" height="10" rx="2" fill="#9ca3af"/>
    <line x1="28" y1="145" x2="202" y2="145" stroke="#374151" stroke-width="2.5"/>
    <polygon points="115,30 100,60 130,60" fill="#fbbf24"/>
    <text x="115" y="165" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">arco — geometria aplicada à arquitetura</text>
  `, 235, 180),

  'geometria/engenharia': svg(`
    <rect width="260" height="160" fill="#eff6ff"/>
    <line x1="0" y1="40" x2="260" y2="40" stroke="#bfdbfe" stroke-width="0.8"/>
    <line x1="0" y1="80" x2="260" y2="80" stroke="#bfdbfe" stroke-width="0.8"/>
    <line x1="0" y1="120" x2="260" y2="120" stroke="#bfdbfe" stroke-width="0.8"/>
    <line x1="65" y1="0" x2="65" y2="160" stroke="#bfdbfe" stroke-width="0.8"/>
    <line x1="130" y1="0" x2="130" y2="160" stroke="#bfdbfe" stroke-width="0.8"/>
    <line x1="195" y1="0" x2="195" y2="160" stroke="#bfdbfe" stroke-width="0.8"/>
    <polygon points="48,120 212,120 195,50 65,50" fill="none" stroke="#1e3a8a" stroke-width="2.5"/>
    <line x1="48" y1="134" x2="212" y2="134" stroke="#374151" stroke-width="1.5"/>
    <polygon points="48,134 56,128 56,140" fill="#374151"/>
    <polygon points="212,134 204,128 204,140" fill="#374151"/>
    <text x="130" y="150" text-anchor="middle" font-family="Arial" font-size="10" fill="#374151">planta técnica — geometria e precisão</text>
  `, 260, 165),

  // ═══════════════════════════════════════════════════════════
  //  ÁLGEBRA
  // ═══════════════════════════════════════════════════════════

  'algebra/hipotese': svg(`
    <rect x="18" y="52" width="65" height="55" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="50" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-style="italic" font-weight="bold" fill="#1e3a8a">P</text>
    <text x="50" y="96" text-anchor="middle" font-family="Arial" font-size="9" fill="#1e40af">Hipótese</text>
    <line x1="83" y1="79" x2="138" y2="79" stroke="#374151" stroke-width="2"/>
    <polygon points="138,79 126,73 126,85" fill="#374151"/>
    <text x="110" y="68" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">Se P…</text>
    <rect x="138" y="52" width="65" height="55" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
    <text x="170" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-style="italic" font-weight="bold" fill="#064e3b">Q</text>
    <text x="170" y="96" text-anchor="middle" font-family="Arial" font-size="9" fill="#065f46">Conclusão</text>
    <text x="110" y="125" text-anchor="middle" font-family="Arial" font-size="10" fill="#6b7280">…então Q</text>
    <text x="110" y="148" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#9ca3af">P ⟹ Q</text>
  `, 225, 165),

  'algebra/conclusao': svg(`
    <text x="85" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="68" fill="#10b981">∴</text>
    <rect x="148" y="58" width="88" height="44" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
    <text x="192" y="78" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#065f46">Q.E.D.</text>
    <text x="192" y="95" text-anchor="middle" font-family="Arial" font-size="9" fill="#064e3b">demonstrado!</text>
    <text x="130" y="148" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">portanto — resultado inevitável da dedução</text>
  `, 260, 160),

  'algebra/teorema': svg(`
    <rect x="5" y="55" width="68" height="42" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="39" y="72" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#1e40af">Hipótese</text>
    <text x="39" y="87" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#1e3a8a">P</text>
    <line x1="73" y1="76" x2="100" y2="76" stroke="#374151" stroke-width="2"/>
    <polygon points="100,76 88,70 88,82" fill="#374151"/>
    <rect x="100" y="50" width="70" height="52" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="135" y="70" text-anchor="middle" font-family="Arial" font-size="9" fill="#78350f">Raciocínio</text>
    <text x="135" y="83" text-anchor="middle" font-family="Arial" font-size="9" fill="#78350f">Dedutivo</text>
    <text x="135" y="96" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#92400e">⊢</text>
    <line x1="170" y1="76" x2="197" y2="76" stroke="#374151" stroke-width="2"/>
    <polygon points="197,76 185,70 185,82" fill="#374151"/>
    <rect x="197" y="55" width="58" height="42" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="226" y="72" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#065f46">Conclusão</text>
    <text x="226" y="87" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#064e3b">Q</text>
    <rect x="218" y="110" width="46" height="22" rx="3" fill="#374151"/>
    <text x="241" y="126" text-anchor="middle" font-family="Arial" font-size="11" fill="#fff" font-weight="bold">QED</text>
    <text x="130" y="155" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">estrutura de todo teorema: P ⊢ Q</text>
  `, 262, 165),

  'algebra/inducao-finita': svg(`
    <rect x="25" y="62" width="14" height="58" rx="2" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1"/>
    <g transform="rotate(-18,63,100)"><rect x="56" y="62" width="14" height="58" rx="2" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1"/></g>
    <g transform="rotate(-40,97,108)"><rect x="90" y="62" width="14" height="58" rx="2" fill="#60a5fa" stroke="#2563eb" stroke-width="1"/></g>
    <g transform="rotate(-68,132,118)"><rect x="125" y="62" width="14" height="58" rx="2" fill="#93c5fd" stroke="#60a5fa" stroke-width="1"/></g>
    <rect x="148" y="116" width="52" height="12" rx="2" fill="#bfdbfe" stroke="#93c5fd" stroke-width="1"/>
    <rect x="178" y="116" width="52" height="12" rx="2" fill="#bfdbfe" stroke="#93c5fd" stroke-width="1"/>
    <text x="32" y="135" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e40af" font-weight="bold">n=1</text>
    <text x="63" y="140" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e40af">n=2</text>
    <text x="96" y="140" text-anchor="middle" font-family="Arial" font-size="9" fill="#6b7280">n=k</text>
    <text x="32" y="28" font-family="Arial" font-size="11" font-weight="bold" fill="#1e40af">Base: n=1</text>
    <text x="130" y="28" font-family="Arial" font-size="11" font-weight="bold" fill="#374151">→ Passo: n=k+1</text>
    <text x="130" y="160" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">se vale para k, vale para k+1 (efeito cascata)</text>
  `, 260, 170),

  'algebra/demonstracao-absurdo': svg(`
    <rect x="8" y="28" width="108" height="40" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="62" y="45" text-anchor="middle" font-family="Arial" font-size="11" fill="#991b1b">Suponha: ¬P</text>
    <text x="62" y="60" text-anchor="middle" font-family="Arial" font-size="10" fill="#b91c1c">(negue o que quer provar)</text>
    <line x1="62" y1="68" x2="62" y2="93" stroke="#374151" stroke-width="2"/>
    <polygon points="62,93 56,81 68,81" fill="#374151"/>
    <rect x="8" y="93" width="108" height="35" rx="6" fill="#fef9c3" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="62" y="115" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="#92400e">⊥</text>
    <line x1="116" y1="110" x2="145" y2="110" stroke="#374151" stroke-width="2"/>
    <polygon points="145,110 133,104 133,116" fill="#374151"/>
    <rect x="145" y="86" width="108" height="48" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
    <text x="199" y="107" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#065f46">Logo: P é</text>
    <text x="199" y="122" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#065f46">verdadeiro ✓</text>
    <text x="130" y="160" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">reductio ad absurdum — contradição prova o oposto</text>
  `, 265, 170),

  'algebra/metodos-de-demonstracao': svg(`
    <circle cx="130" cy="75" r="30" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="130" y="70" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#1e40af">Métodos</text>
    <text x="130" y="83" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e40af">de Prova</text>
    <text x="28" y="28" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Direta</text>
    <line x1="42" y1="33" x2="105" y2="56" stroke="#d1d5db" stroke-width="1"/>
    <text x="232" y="28" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Contradição</text>
    <line x1="218" y1="33" x2="157" y2="56" stroke="#d1d5db" stroke-width="1"/>
    <text x="14" y="80" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Contrapositiva</text>
    <line x1="36" y1="77" x2="100" y2="75" stroke="#d1d5db" stroke-width="1"/>
    <text x="248" y="80" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Exaustão</text>
    <line x1="224" y1="77" x2="160" y2="75" stroke="#d1d5db" stroke-width="1"/>
    <text x="30" y="130" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Indução</text>
    <line x1="48" y1="120" x2="106" y2="96" stroke="#d1d5db" stroke-width="1"/>
    <text x="232" y="130" text-anchor="middle" font-family="Arial" font-size="9" fill="#374151">Construção</text>
    <line x1="214" y1="120" x2="156" y2="96" stroke="#d1d5db" stroke-width="1"/>
  `, 265, 148),

  'algebra/raiz-de-2-irracional': svg(`
    <rect x="58" y="28" width="104" height="104" fill="#eff6ff" stroke="#374151" stroke-width="2"/>
    <text x="110" y="20" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">1</text>
    <text x="110" y="148" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">1</text>
    <text x="40" y="84" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">1</text>
    <text x="168" y="84" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">1</text>
    <line x1="58" y1="132" x2="162" y2="28" stroke="#ef4444" stroke-width="3"/>
    <text x="95" y="92" font-family="Georgia,serif" font-size="15" font-style="italic" fill="#dc2626" transform="rotate(-45,95,92)">√2</text>
    <rect x="58" y="117" width="15" height="15" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="210" y="72" font-family="Arial" font-size="12" fill="#374151">√2 ≈ 1,414…</text>
    <text x="210" y="90" font-family="Arial" font-size="10" fill="#9ca3af">∞ não-periódico</text>
    <text x="210" y="106" font-family="Arial" font-size="10" fill="#ef4444">irracional!</text>
  `, 278, 165),

  'algebra/axiomas-fundamentais': svg(`
    <rect x="18" y="118" width="188" height="26" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="112" y="136" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e40af">Axioma da Associatividade</text>
    <rect x="38" y="87" width="148" height="26" rx="4" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="112" y="105" text-anchor="middle" font-family="Arial" font-size="10" fill="#065f46">Axioma da Comutatividade</text>
    <rect x="58" y="56" width="108" height="26" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="112" y="74" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">Axioma do Neutro</text>
    <rect x="78" y="25" width="68" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="112" y="40" text-anchor="middle" font-family="Arial" font-size="10" fill="#991b1b">Axioma do</text>
    <text x="112" y="44" text-anchor="middle" font-family="Arial" font-size="9" fill="#991b1b">Inverso</text>
    <text x="112" y="162" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">fundações indemonstráveis da aritmética</text>
  `, 225, 172),

  'algebra/logica': svg(`
    <circle cx="100" cy="78" r="55" fill="#dbeafe" fill-opacity="0.7" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="160" cy="78" r="55" fill="#d1fae5" fill-opacity="0.7" stroke="#10b981" stroke-width="2"/>
    <text x="130" y="82" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151">A∩B</text>
    <text x="68" y="52" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#1e3a8a">A</text>
    <text x="192" y="52" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#064e3b">B</text>
    <text x="130" y="153" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">diagrama de Venn — interseção de conjuntos</text>
  `, 262, 165),

  'algebra/proporcao': svg(`
    <rect x="18" y="48" width="58" height="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
    <text x="47" y="65" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#1e40af">a</text>
    <text x="47" y="102" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#374151">b</text>
    <text x="90" y="73" font-family="Arial" font-size="22" fill="#9ca3af">=</text>
    <rect x="112" y="35" width="90" height="62" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
    <text x="157" y="65" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#065f46">a·k</text>
    <text x="157" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#374151">b·k</text>
    <text x="218" y="65" font-family="Georgia,serif" font-size="13" fill="#374151">a/b</text>
    <line x1="215" y1="70" x2="242" y2="70" stroke="#374151" stroke-width="1.5"/>
    <text x="218" y="83" font-family="Georgia,serif" font-size="13" fill="#374151">c/d</text>
    <text x="130" y="150" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">mesma razão — grandezas proporcionais</text>
  `, 260, 160),

  'algebra/algoritmo': svg(`
    <rect x="92" y="8" width="58" height="26" rx="13" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
    <text x="121" y="26" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#065f46">INÍCIO</text>
    <line x1="121" y1="34" x2="121" y2="54" stroke="#374151" stroke-width="1.5"/>
    <polygon points="121,54 115,42 127,42" fill="#374151"/>
    <rect x="82" y="54" width="78" height="28" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="121" y="73" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e40af">Processo</text>
    <line x1="121" y1="82" x2="121" y2="102" stroke="#374151" stroke-width="1.5"/>
    <polygon points="121,102 115,90 127,90" fill="#374151"/>
    <polygon points="121,102 158,122 121,142 84,122" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="121" y="126" text-anchor="middle" font-family="Arial" font-size="9" fill="#78350f">Condição?</text>
    <line x1="158" y1="122" x2="198" y2="122" stroke="#374151" stroke-width="1.5"/>
    <polygon points="198,122 186,116 186,128" fill="#374151"/>
    <text x="175" y="115" font-family="Arial" font-size="9" fill="#6b7280">Sim</text>
    <rect x="198" y="109" width="52" height="26" rx="13" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="224" y="127" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#991b1b">FIM</text>
    <line x1="84" y1="122" x2="44" y2="122" stroke="#374151" stroke-width="1.5"/>
    <line x1="44" y1="122" x2="44" y2="68" stroke="#374151" stroke-width="1.5"/>
    <line x1="44" y1="68" x2="82" y2="68" stroke="#374151" stroke-width="1.5"/>
    <polygon points="82,68 70,62 70,74" fill="#374151"/>
    <text x="62" y="116" font-family="Arial" font-size="9" fill="#6b7280">Não</text>
  `, 258, 165),

  'algebra/filosofia': svg(`
    <ellipse cx="130" cy="88" rx="42" ry="52" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
    <circle cx="113" cy="72" r="13" fill="#fff" stroke="#92400e" stroke-width="1.5"/>
    <circle cx="147" cy="72" r="13" fill="#fff" stroke="#92400e" stroke-width="1.5"/>
    <circle cx="113" cy="72" r="5" fill="#374151"/>
    <circle cx="147" cy="72" r="5" fill="#374151"/>
    <polygon points="130,84 122,96 138,96" fill="#f59e0b"/>
    <text x="20" y="150" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#6b7280">"Todo H é M. Sócrates é H.</text>
    <text x="20" y="163" font-family="Georgia,serif" font-size="10" font-style="italic" fill="#6b7280">Logo, Sócrates é M."</text>
  `, 260, 170),

  'algebra/fisica': svg(`
    <rect x="68" y="82" width="100" height="32" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="118" y="103" text-anchor="middle" font-family="Arial" font-size="13" fill="#1e40af">objeto</text>
    <line x1="168" y1="98" x2="222" y2="98" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
    <polygon points="222,98 208,91 208,105" fill="#ef4444"/>
    <text x="197" y="88" font-family="Arial" font-size="13" fill="#dc2626" font-style="italic">F</text>
    <text x="130" y="48" text-anchor="middle" font-family="Georgia,serif" font-size="20" fill="#374151">F = m · a</text>
    <text x="130" y="152" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">força = massa × aceleração</text>
  `, 260, 162),

  'algebra/programacao': svg(`
    <rect x="18" y="18" width="210" height="124" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2"/>
    <text x="33" y="46" font-family="monospace" font-size="12" fill="#60a5fa">def</text>
    <text x="63" y="46" font-family="monospace" font-size="12" fill="#a3e635">fib</text>
    <text x="88" y="46" font-family="monospace" font-size="12" fill="#e5e7eb">(n):</text>
    <text x="33" y="66" font-family="monospace" font-size="12" fill="#60a5fa">  if</text>
    <text x="62" y="66" font-family="monospace" font-size="12" fill="#e5e7eb"> n &lt;= 1:</text>
    <text x="33" y="86" font-family="monospace" font-size="12" fill="#60a5fa">    return</text>
    <text x="108" y="86" font-family="monospace" font-size="12" fill="#fb923c"> n</text>
    <text x="33" y="106" font-family="monospace" font-size="12" fill="#60a5fa">  return</text>
    <text x="100" y="106" font-family="monospace" font-size="11" fill="#e5e7eb"> fib(n-1)+fib(n-2)</text>
    <text x="33" y="128" font-family="monospace" font-size="10" fill="#6b7280"># recursão matemática</text>
    <text x="120" y="156" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">algoritmos como expressões matemáticas</text>
  `, 248, 168),

  'algebra/metodo-socratico': svg(`
    <rect x="8" y="14" width="122" height="52" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <polygon points="28,66 16,88 52,66" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="69" y="35" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e40af">O que é</text>
    <text x="69" y="52" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e40af">a virtude?</text>
    <rect x="132" y="70" width="122" height="52" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <polygon points="232,70 244,48 212,70" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="193" y="91" text-anchor="middle" font-family="Arial" font-size="11" fill="#78350f">Mas o que</text>
    <text x="193" y="108" text-anchor="middle" font-family="Arial" font-size="11" fill="#78350f">você entende?</text>
    <text x="130" y="152" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">questionamento como método de aprendizado</text>
  `, 265, 162),

  'algebra/movimento-uniformemente-acelerado': svg(`
    <line x1="38" y1="130" x2="228" y2="130" stroke="#374151" stroke-width="2"/>
    <line x1="38" y1="130" x2="38" y2="18" stroke="#374151" stroke-width="2"/>
    <polygon points="228,130 215,124 215,136" fill="#374151"/>
    <polygon points="38,18 32,31 44,31" fill="#374151"/>
    <text x="232" y="134" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">t</text>
    <text x="26" y="16" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#374151">v</text>
    <line x1="38" y1="125" x2="210" y2="32" stroke="#3b82f6" stroke-width="2.5"/>
    <polygon points="40,125 210,32 210,130 40,130" fill="#bfdbfe" fill-opacity="0.4"/>
    <text x="145" y="105" text-anchor="middle" font-family="Arial" font-size="9" fill="#1e40af" font-style="italic">área = Δs</text>
    <text x="130" y="152" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">gráfico v×t — área sob curva = deslocamento</text>
  `, 260, 162),

  'algebra/quadrado-perfeito': svg(`
    <text x="130" y="24" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#374151">n² = n × n</text>
    <rect x="45" y="38" width="92" height="92" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4"/>
    <circle cx="68" cy="62" r="5" fill="#3b82f6"/>
    <circle cx="91" cy="62" r="5" fill="#3b82f6"/>
    <circle cx="114" cy="62" r="5" fill="#3b82f6"/>
    <circle cx="68" cy="85" r="5" fill="#3b82f6"/>
    <circle cx="91" cy="85" r="5" fill="#3b82f6"/>
    <circle cx="114" cy="85" r="5" fill="#3b82f6"/>
    <circle cx="68" cy="108" r="5" fill="#3b82f6"/>
    <circle cx="91" cy="108" r="5" fill="#3b82f6"/>
    <circle cx="114" cy="108" r="5" fill="#3b82f6"/>
    <text x="40" y="90" text-anchor="end" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">3</text>
    <text x="91" y="145" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#374151">3</text>
    <text x="170" y="90" font-family="Arial" font-size="22" fill="#374151">= 9</text>
    <text x="130" y="158" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">3² = 9 — produto de um número por si mesmo</text>
  `, 240, 168),

  // ═══════════════════════════════════════════════════════════
  //  HISTÓRIA
  // ═══════════════════════════════════════════════════════════

  'historia/pitagoras': svg(`
    <polygon points="58,142 148,142 148,58" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
    <rect x="133" y="127" width="15" height="15" fill="none" stroke="#92400e" stroke-width="1.5"/>
    <text x="103" y="155" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#92400e" font-style="italic">a</text>
    <text x="158" y="103" font-family="Georgia,serif" font-size="14" fill="#92400e" font-style="italic">b</text>
    <text x="86" y="92" font-family="Georgia,serif" font-size="13" fill="#dc2626" font-style="italic" transform="rotate(-49,86,92)">c (hip.)</text>
    <text x="195" y="75" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151" font-weight="bold">Pitágoras</text>
    <text x="195" y="93" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">c. 570–495 a.C.</text>
    <text x="195" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#6b7280">Samos, Grécia</text>
    <text x="195" y="132" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="#374151">a²+b²=c²</text>
  `, 270, 168),

  'historia/euclides': svg(`
    <rect x="72" y="22" width="80" height="112" rx="5" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
    <rect x="70" y="22" width="10" height="112" rx="3" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
    <text x="115" y="48" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#78350f" font-weight="bold">Os</text>
    <text x="115" y="62" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#78350f" font-weight="bold">Elementos</text>
    <line x1="85" y1="68" x2="145" y2="68" stroke="#92400e" stroke-width="1"/>
    <polygon points="115,82 140,118 90,118" fill="none" stroke="#d97706" stroke-width="1.5"/>
    <text x="200" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#374151">Euclides</text>
    <text x="200" y="90" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">c. 300 a.C.</text>
    <text x="200" y="107" text-anchor="middle" font-family="Arial" font-size="10" fill="#6b7280">Alexandria</text>
    <text x="200" y="122" text-anchor="middle" font-family="Arial" font-size="10" fill="#6b7280">13 volumes</text>
  `, 262, 150),

  'historia/arquimedes': svg(`
    <polygon points="130,118 118,142 142,142" fill="#9ca3af" stroke="#374151" stroke-width="1.5"/>
    <line x1="38" y1="118" x2="222" y2="118" stroke="#374151" stroke-width="3"/>
    <rect x="40" y="88" width="30" height="30" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="55" y="108" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">F</text>
    <rect x="188" y="96" width="24" height="22" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="200" y="112" text-anchor="middle" font-family="Arial" font-size="11" fill="#1d4ed8">f</text>
    <line x1="55" y1="84" x2="130" y2="84" stroke="#374151" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="130" y1="84" x2="200" y2="84" stroke="#374151" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="92" y="76" text-anchor="middle" font-family="Arial" font-size="10" fill="#374151">d₁</text>
    <text x="165" y="76" text-anchor="middle" font-family="Arial" font-size="10" fill="#374151">d₂</text>
    <text x="130" y="158" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#374151">F·d₁ = f·d₂</text>
  `, 262, 168),

  'historia/giuseppe-peano': svg(`
    <ellipse cx="100" cy="78" rx="72" ry="55" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="100" y="50" text-anchor="middle" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#1e40af">ℕ</text>
    <text x="65" y="82" font-family="Georgia,serif" font-size="15" fill="#374151">0</text>
    <text x="86" y="82" font-family="Georgia,serif" font-size="15" fill="#374151">1</text>
    <text x="107" y="82" font-family="Georgia,serif" font-size="15" fill="#374151">2</text>
    <text x="128" y="82" font-family="Georgia,serif" font-size="15" fill="#374151">3</text>
    <text x="148" y="82" font-family="Georgia,serif" font-size="14" fill="#9ca3af">…</text>
    <text x="100" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#6b7280">n ∈ ℕ</text>
    <text x="212" y="58" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#374151">Peano</text>
    <text x="212" y="75" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">1858–1932</text>
    <text x="212" y="92" text-anchor="middle" font-family="Arial" font-size="10" fill="#6b7280">5 Axiomas</text>
    <text x="212" y="110" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="#374151">∈</text>
  `, 262, 145),

  'historia/historia-da-matematica': svg(`
    <line x1="18" y1="72" x2="245" y2="72" stroke="#374151" stroke-width="2.5"/>
    <polygon points="245,72 232,66 232,78" fill="#374151"/>
    <circle cx="48" cy="72" r="6" fill="#f59e0b"/>
    <text x="48" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#78350f">Babilônia</text>
    <text x="48" y="90" text-anchor="middle" font-family="Arial" font-size="8" fill="#9ca3af">3000 a.C.</text>
    <circle cx="98" cy="72" r="6" fill="#3b82f6"/>
    <text x="98" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#1e40af">Grécia</text>
    <text x="98" y="90" text-anchor="middle" font-family="Arial" font-size="8" fill="#9ca3af">500 a.C.</text>
    <circle cx="148" cy="72" r="6" fill="#10b981"/>
    <text x="148" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#065f46">Índia</text>
    <text x="148" y="90" text-anchor="middle" font-family="Arial" font-size="8" fill="#9ca3af">600 d.C.</text>
    <circle cx="198" cy="72" r="6" fill="#ef4444"/>
    <text x="198" y="60" text-anchor="middle" font-family="Arial" font-size="9" fill="#991b1b">Europa</text>
    <text x="198" y="90" text-anchor="middle" font-family="Arial" font-size="8" fill="#9ca3af">1600+</text>
    <text x="130" y="128" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">linha do tempo da matemática</text>
  `, 262, 140),

  'historia/matematica-babilonica': svg(`
    <rect x="38" y="14" width="152" height="118" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <polygon points="58,38 74,32 69,50" fill="#92400e"/>
    <polygon points="80,38 96,32 91,50" fill="#92400e"/>
    <polygon points="102,38 118,32 113,50" fill="#92400e"/>
    <polygon points="58,65 74,59 69,77" fill="#92400e"/>
    <polygon points="80,65 96,59 91,77" fill="#92400e"/>
    <polygon points="102,65 118,59 113,77" fill="#92400e"/>
    <polygon points="124,65 140,59 135,77" fill="#92400e"/>
    <text x="114" y="105" text-anchor="middle" font-family="Georgia,serif" font-size="15" fill="#78350f">Base 60</text>
    <text x="114" y="120" text-anchor="middle" font-family="Arial" font-size="10" fill="#92400e">sexagesimal</text>
    <text x="223" y="62" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">60 min.</text>
    <text x="223" y="78" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">= 1 hora</text>
    <text x="223" y="96" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">360° =</text>
    <text x="223" y="112" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">1 círculo</text>
  `, 265, 148),

  'historia/matematica-egipcia': svg(`
    <rect x="28" y="14" width="182" height="118" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <line x1="52" y1="40" x2="52" y2="68" stroke="#92400e" stroke-width="3"/>
    <text x="52" y="82" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">1</text>
    <path d="M 86 68 A 16 16 0 0 1 118 68" fill="none" stroke="#92400e" stroke-width="3"/>
    <text x="102" y="82" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">10</text>
    <circle cx="155" cy="50" r="14" fill="none" stroke="#92400e" stroke-width="3"/>
    <text x="155" y="82" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">100</text>
    <line x1="33" y1="97" x2="205" y2="97" stroke="#d97706" stroke-width="1"/>
    <text x="119" y="114" text-anchor="middle" font-family="Arial" font-size="10" fill="#78350f">Papiro de Rhind (~1650 a.C.)</text>
  `, 250, 148),

  'historia/matematica-grega': svg(`
    <rect x="48" y="48" width="30" height="82" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
    <ellipse cx="63" cy="48" rx="22" ry="9" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
    <ellipse cx="63" cy="130" rx="22" ry="9" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5"/>
    <line x1="140" y1="28" x2="125" y2="112" stroke="#374151" stroke-width="2"/>
    <line x1="140" y1="28" x2="158" y2="112" stroke="#374151" stroke-width="2"/>
    <circle cx="140" cy="28" r="5" fill="#374151"/>
    <path d="M 108 78 A 42 42 0 0 1 178 78" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6,3"/>
    <text x="175" y="42" font-family="Arial" font-size="11" fill="#374151">Geometria</text>
    <text x="175" y="58" font-family="Arial" font-size="11" fill="#374151">Dedutiva</text>
    <text x="130" y="152" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">rigor axiomático — herança de Euclides</text>
  `, 250, 162),

  'historia/matematica-indiana': svg(`
    <circle cx="110" cy="78" r="46" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="110" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="55" font-weight="bold" fill="#1e40af">0</text>
    <text x="110" y="148" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">Brahmagupta, 628 d.C.</text>
    <text x="208" y="58" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">Sistema</text>
    <text x="208" y="73" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">Posicional</text>
    <text x="208" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#6b7280">Decimal</text>
    <text x="208" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#374151">1,2,3…</text>
  `, 262, 162),

  // ═══════════════════════════════════════════════════════════
  //  NÚMEROS E OPERAÇÕES
  // ═══════════════════════════════════════════════════════════

  'numeros-e-operacoes/numero-natural': svg(`
    <line x1="18" y1="78" x2="232" y2="78" stroke="#374151" stroke-width="2"/>
    <polygon points="232,78 220,72 220,84" fill="#374151"/>
    <line x1="38" y1="71" x2="38" y2="85" stroke="#374151" stroke-width="2"/>
    <text x="38" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#1e40af">0</text>
    <line x1="78" y1="71" x2="78" y2="85" stroke="#374151" stroke-width="2"/>
    <text x="78" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#1e40af">1</text>
    <line x1="118" y1="71" x2="118" y2="85" stroke="#374151" stroke-width="2"/>
    <text x="118" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#1e40af">2</text>
    <line x1="158" y1="71" x2="158" y2="85" stroke="#374151" stroke-width="2"/>
    <text x="158" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#1e40af">3</text>
    <line x1="198" y1="71" x2="198" y2="85" stroke="#374151" stroke-width="2"/>
    <text x="198" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#1e40af">4</text>
    <text x="130" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="17" fill="#374151">ℕ = {0, 1, 2, 3, …}</text>
    <text x="130" y="138" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">usados para contar — sempre maiores ou iguais a 0</text>
  `, 252, 150),

  'numeros-e-operacoes/numero-inteiro': svg(`
    <line x1="12" y1="78" x2="248" y2="78" stroke="#374151" stroke-width="2"/>
    <polygon points="248,78 236,72 236,84" fill="#374151"/>
    <polygon points="12,78 24,72 24,84" fill="#374151"/>
    <line x1="38" y1="71" x2="38" y2="85" stroke="#ef4444" stroke-width="2"/>
    <text x="38" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#dc2626">-3</text>
    <line x1="78" y1="71" x2="78" y2="85" stroke="#ef4444" stroke-width="2"/>
    <text x="78" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#dc2626">-2</text>
    <line x1="118" y1="71" x2="118" y2="85" stroke="#ef4444" stroke-width="2"/>
    <text x="118" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#dc2626">-1</text>
    <line x1="155" y1="71" x2="155" y2="85" stroke="#374151" stroke-width="2.5"/>
    <text x="155" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#374151">0</text>
    <line x1="192" y1="71" x2="192" y2="85" stroke="#3b82f6" stroke-width="2"/>
    <text x="192" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#1e40af">1</text>
    <line x1="228" y1="71" x2="228" y2="85" stroke="#3b82f6" stroke-width="2"/>
    <text x="228" y="104" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#1e40af">2</text>
    <text x="130" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#374151">ℤ = {…,-2,-1,0,1,2,…}</text>
    <text x="130" y="138" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">inclui negativos — simétrico em relação ao zero</text>
  `, 262, 150),

  'numeros-e-operacoes/numero-racional': svg(`
    <line x1="18" y1="72" x2="238" y2="72" stroke="#374151" stroke-width="2"/>
    <polygon points="238,72 226,66 226,78" fill="#374151"/>
    <line x1="48" y1="65" x2="48" y2="79" stroke="#374151" stroke-width="2"/>
    <text x="48" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151">0</text>
    <line x1="202" y1="65" x2="202" y2="79" stroke="#374151" stroke-width="2"/>
    <text x="202" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151">1</text>
    <line x1="88" y1="67" x2="88" y2="77" stroke="#3b82f6" stroke-width="2"/>
    <text x="88" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#1e40af">¼</text>
    <line x1="125" y1="67" x2="125" y2="77" stroke="#3b82f6" stroke-width="2"/>
    <text x="125" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#1e40af">½</text>
    <line x1="163" y1="67" x2="163" y2="77" stroke="#3b82f6" stroke-width="2"/>
    <text x="163" y="98" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#1e40af">¾</text>
    <text x="130" y="42" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#374151">ℚ = p/q, com q ≠ 0</text>
    <text x="130" y="136" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">infinitos racionais entre quaisquer dois inteiros</text>
  `, 252, 148),

  'numeros-e-operacoes/numero-irracional': svg(`
    <rect x="52" y="28" width="102" height="102" fill="#eff6ff" stroke="#374151" stroke-width="2"/>
    <text x="103" y="20" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151">1</text>
    <text x="103" y="148" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#374151">1</text>
    <text x="36" y="82" font-family="Georgia,serif" font-size="14" fill="#374151">1</text>
    <text x="160" y="82" font-family="Georgia,serif" font-size="14" fill="#374151">1</text>
    <line x1="52" y1="130" x2="154" y2="28" stroke="#ef4444" stroke-width="3"/>
    <text x="84" y="93" font-family="Georgia,serif" font-size="14" font-style="italic" fill="#dc2626" transform="rotate(-45,84,93)">√2</text>
    <rect x="52" y="115" width="15" height="15" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="198" y="72" font-family="Arial" font-size="12" fill="#374151">1,41421</text>
    <text x="198" y="88" font-family="Arial" font-size="12" fill="#374151">35623…</text>
    <text x="198" y="106" font-family="Arial" font-size="10" fill="#9ca3af">∞ não-periódico</text>
    <text x="198" y="120" font-family="Arial" font-size="10" fill="#ef4444">irracional!</text>
  `, 258, 162),

  'numeros-e-operacoes/numero-real': svg(`
    <line x1="8" y1="55" x2="252" y2="55" stroke="#374151" stroke-width="2.5"/>
    <polygon points="252,55 240,49 240,61" fill="#374151"/>
    <polygon points="8,55 20,49 20,61" fill="#374151"/>
    <rect x="118" y="68" width="22" height="14" rx="2" fill="#86efac"/>
    <text x="129" y="79" text-anchor="middle" font-family="Arial" font-size="8" fill="#065f46">ℕ</text>
    <rect x="102" y="86" width="55" height="14" rx="2" fill="#93c5fd"/>
    <text x="129" y="97" text-anchor="middle" font-family="Arial" font-size="8" fill="#1e40af">ℤ</text>
    <rect x="80" y="104" width="98" height="14" rx="2" fill="#fcd34d"/>
    <text x="129" y="115" text-anchor="middle" font-family="Arial" font-size="8" fill="#78350f">ℚ (racionais)</text>
    <rect x="52" y="122" width="154" height="15" rx="2" fill="#fca5a5"/>
    <text x="129" y="133" text-anchor="middle" font-family="Arial" font-size="8" fill="#991b1b">ℝ (incl. irracionais)</text>
    <text x="60" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">-π</text>
    <text x="110" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">-1</text>
    <text x="130" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">0</text>
    <text x="150" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">1</text>
    <text x="178" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">√2</text>
    <text x="205" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#374151">π</text>
  `, 265, 148),

  'numeros-e-operacoes/numero-primo': svg(`
    <text x="130" y="28" text-anchor="middle" font-family="Georgia,serif" font-size="16" fill="#374151">7 — número primo</text>
    <circle cx="42" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="72" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="102" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="132" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="162" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="192" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="222" cy="70" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="130" y="105" text-anchor="middle" font-family="Arial" font-size="11" fill="#374151">Divisível apenas por 1 e 7</text>
    <text x="130" y="128" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">6 = 2×3 (composto) — 7 ≠ produto de menores</text>
    <text x="130" y="150" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">primos são os "átomos" da multiplicação</text>
  `, 272, 162),

  'numeros-e-operacoes/computacao': svg(`
    <rect x="75" y="38" width="110" height="82" rx="8" fill="#1f2937" stroke="#374151" stroke-width="2"/>
    <line x1="53" y1="58" x2="75" y2="58" stroke="#9ca3af" stroke-width="3"/>
    <line x1="53" y1="74" x2="75" y2="74" stroke="#9ca3af" stroke-width="3"/>
    <line x1="53" y1="90" x2="75" y2="90" stroke="#9ca3af" stroke-width="3"/>
    <line x1="53" y1="106" x2="75" y2="106" stroke="#9ca3af" stroke-width="3"/>
    <line x1="185" y1="58" x2="207" y2="58" stroke="#9ca3af" stroke-width="3"/>
    <line x1="185" y1="74" x2="207" y2="74" stroke="#9ca3af" stroke-width="3"/>
    <line x1="185" y1="90" x2="207" y2="90" stroke="#9ca3af" stroke-width="3"/>
    <line x1="185" y1="106" x2="207" y2="106" stroke="#9ca3af" stroke-width="3"/>
    <text x="130" y="68" text-anchor="middle" font-family="monospace" font-size="14" fill="#3b82f6">1 0 1 0</text>
    <text x="130" y="86" text-anchor="middle" font-family="monospace" font-size="14" fill="#10b981">0 1 0 1</text>
    <text x="130" y="104" text-anchor="middle" font-family="monospace" font-size="14" fill="#f59e0b">1 1 0 0</text>
    <text x="130" y="145" text-anchor="middle" font-family="Arial" font-size="10" fill="#9ca3af">base 2 (binária) — fundação da computação</text>
  `, 265, 158),
};

// ─── Lógica de remoção e substituição ───────────────────────────────────────

// Remove a div/svg genérica injetada pelo script anterior
// Fingerprint: contém "background: var(--card-bg)" dentro do SVG
function removeGenericSVG(fileContent) {
  // Padrão: \n<div ...><svg ... var(--card-bg) ...>...</svg></div>\n\n
  // O literal \n no início é dois chars: backslash + n
  const pattern = /\\n<div style="display: flex; justify-content: center; margin: 2rem 0;">\n[\s\S]*?<\/div>\\n\\n/;
  return fileContent.replace(pattern, '');
}

function getArticleId(fileContent) {
  const match = fileContent.match(/window\.UPEDIA_CONTENT\["([^"]+)"\]/);
  return match ? match[1] : null;
}

let fixed = 0;
let removed = 0;
let skipped = 0;

const axes = ['algebra', 'estatistica', 'geometria', 'grandezas-e-medidas', 'historia', 'numeros-e-operacoes'];

for (const axis of axes) {
  const axisDir = path.join(contentDir, axis);
  if (!fs.existsSync(axisDir)) continue;

  const files = fs.readdirSync(axisDir).filter(f => f.endsWith('.js'));

  for (const file of files) {
    const filePath = path.join(axisDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Só processa arquivos que têm o SVG genérico (var(--card-bg) é o fingerprint)
    if (!content.includes('background: var(--card-bg)')) {
      skipped++;
      continue;
    }

    const key = `${axis}/${file.replace('.js', '')}`;

    // 1. Remove o SVG genérico
    let newContent = removeGenericSVG(content);

    // 2. Injeta o SVG correto (se existir mapeamento)
    const correctSVG = correctSVGs[key];

    if (correctSVG) {
      const match = newContent.match(/window\.UPEDIA_CONTENT\["[^"]+"\]\s*=\s*`/);
      if (match) {
        const insertIndex = match.index + match[0].length;
        newContent = newContent.slice(0, insertIndex) + '\n' + correctSVG + '\n\n' + newContent.slice(insertIndex);
        fixed++;
        console.log('✓ Corrigido: ' + key);
      }
    } else {
      // Apenas removeu o genérico, sem substituto
      removed++;
      console.log('- Removido genérico (sem mapa): ' + key);
    }

    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

console.log('\n═══════════════════════════════');
console.log('SVGs corrigidos:  ' + fixed);
console.log('Genéricos apenas removidos: ' + removed);
console.log('Ignorados (já OK): ' + skipped);
