const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SVGS = {
  // ÁLGEBRA E LÓGICA
  "algoritmo": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="90" y="15" width="80" height="30" rx="15" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
    <text x="110" y="35" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#3730a3">Início</text>
    <line x1="130" y1="45" x2="130" y2="65" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
    <polygon points="130,65 170,90 130,115 90,90" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="110" y="94" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#b45309">Teste?</text>
    <line x1="130" y1="115" x2="130" y2="135" stroke="#475569" stroke-width="2"/>
    <rect x="90" y="135" width="80" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="115" y="155" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Saída</text>
  </svg>
</div>`,

  "inducao-finita": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="30" y="60" width="16" height="60" rx="3" fill="#ef4444" transform="rotate(15 30 120)"/>
    <rect x="70" y="60" width="16" height="60" rx="3" fill="#f59e0b" transform="rotate(25 70 120)"/>
    <rect x="110" y="60" width="16" height="60" rx="3" fill="#10b981" transform="rotate(35 110 120)"/>
    <rect x="150" y="60" width="16" height="60" rx="3" fill="#3b82f6"/>
    <rect x="190" y="60" width="16" height="60" rx="3" fill="#8b5cf6"/>
    <text x="25" y="145" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P(1)</text>
    <text x="142" y="145" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">P(k) ⇒ P(k+1)</text>
  </svg>
</div>`,

  "quadrado-perfeito": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="50" y="20" width="140" height="140" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="85" y1="20" x2="85" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="120" y1="20" x2="120" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="155" y1="20" x2="155" y2="160" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="55" x2="190" y2="55" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="90" x2="190" y2="90" stroke="#93c5fd" stroke-width="1.5"/>
    <line x1="50" y1="125" x2="190" y2="125" stroke="#93c5fd" stroke-width="1.5"/>
    <text x="105" y="98" font-family="Inter, sans-serif" font-size="15" font-weight="bold" fill="#1e40af">4² = 16</text>
  </svg>
</div>`,

  "proporcao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="120" y1="70" x2="120" y2="140" stroke="#475569" stroke-width="4"/>
    <polygon points="100,150 140,150 120,135" fill="#475569"/>
    <line x1="40" y1="70" x2="200" y2="70" stroke="#2563eb" stroke-width="3"/>
    <circle cx="40" cy="70" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="32" y="75" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">a/b</text>
    <circle cx="200" cy="70" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="192" y="75" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">c/d</text>
  </svg>
</div>`,

  "raiz-de-2-irracional": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="50,40 50,140 150,140" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
    <rect x="50" y="125" width="15" height="15" fill="none" stroke="#b45309" stroke-width="1"/>
    <text x="30" y="95" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#92400e">1</text>
    <text x="95" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#92400e">1</text>
    <text x="110" y="85" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#b45309">√2 ∉ ℚ</text>
  </svg>
</div>`,

  "soma-dos-impares": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="30" width="30" height="30" fill="#ef4444" rx="4"/>
    <rect x="75" y="30" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="75" y="65" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="40" y="65" width="30" height="30" fill="#f59e0b" rx="4"/>
    <rect x="110" y="30" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="110" y="65" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="110" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="75" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <rect x="40" y="100" width="30" height="30" fill="#10b981" rx="4"/>
    <text x="155" y="85" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#3730a3">1+3+5 = 3²</text>
  </svg>
</div>`,

  // NÚMEROS E OPERAÇÕES
  "numero-par": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="62.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="62.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="100" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="122.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="122.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="160" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="182.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="182.5" cy="107.5" r="10" fill="#2563eb"/>
    <text x="90" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">6 = 2 × 3 (Resto 0)</text>
  </svg>
</div>`,

  "numero-impar": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="45" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="67.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="67.5" cy="107.5" r="10" fill="#2563eb"/>
    <rect x="105" y="50" width="45" height="80" rx="22.5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="127.5" cy="72.5" r="10" fill="#2563eb"/>
    <circle cx="127.5" cy="107.5" r="10" fill="#2563eb"/>
    <!-- Sobrando -->
    <circle cx="185" cy="90" r="11" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
    <text x="75" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">5 = 2 × 2 + 1 (Resto 1)</text>
  </svg>
</div>`,

  "soma": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="25" y="70" width="30" height="30" rx="6" fill="#3b82f6"/>
    <rect x="60" y="70" width="30" height="30" rx="6" fill="#3b82f6"/>
    <text x="100" y="92" font-family="Inter, sans-serif" font-size="20" font-weight="bold" fill="#475569">+</text>
    <rect x="125" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <rect x="160" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <rect x="195" y="70" width="30" height="30" rx="6" fill="#10b981"/>
    <text x="105" y="145" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#1e293b">2 + 3 = 5</text>
  </svg>
</div>`,

  "multiplicacao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="40" width="160" height="90" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <line x1="80" y1="40" x2="80" y2="130" stroke="#bbf7d0" stroke-width="1.5"/>
    <line x1="120" y1="40" x2="120" y2="130" stroke="#bbf7d0" stroke-width="1.5"/>
    <line x1="160" y1="40" x2="160" y2="130" stroke="#bbf7d0" stroke-width="1.5"/>
    <line x1="40" y1="70" x2="200" y2="70" stroke="#bbf7d0" stroke-width="1.5"/>
    <line x1="40" y1="100" x2="200" y2="100" stroke="#bbf7d0" stroke-width="1.5"/>
    <text x="100" y="155" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#15803d">3 × 4 = 12</text>
  </svg>
</div>`,

  "divisao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="25" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="42" cy="65" r="7" fill="#ef4444"/><circle cx="63" cy="65" r="7" fill="#ef4444"/>
    <circle cx="42" cy="100" r="7" fill="#ef4444"/><circle cx="63" cy="100" r="7" fill="#ef4444"/>
    <rect x="92" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="109" cy="65" r="7" fill="#ef4444"/><circle cx="130" cy="65" r="7" fill="#ef4444"/>
    <circle cx="109" cy="100" r="7" fill="#ef4444"/><circle cx="130" cy="100" r="7" fill="#ef4444"/>
    <rect x="160" y="45" width="55" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <circle cx="177" cy="65" r="7" fill="#ef4444"/><circle cx="198" cy="65" r="7" fill="#ef4444"/>
    <circle cx="177" cy="100" r="7" fill="#ef4444"/><circle cx="198" cy="100" r="7" fill="#ef4444"/>
    <text x="85" y="150" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">12 ÷ 3 = 4</text>
  </svg>
</div>`,

  "fracao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <circle cx="90" cy="90" r="55" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <path d="M 90 90 L 90 35 A 55 55 0 1 1 35 90 Z" fill="#3b82f6"/>
    <text x="170" y="95" font-family="Inter, sans-serif" font-size="22" font-weight="bold" fill="#1d4ed8">3/4</text>
  </svg>
</div>`,

  "potenciacao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <circle cx="120" cy="30" r="8" fill="#8b5cf6"/>
    <line x1="120" y1="38" x2="70" y2="80" stroke="#a78bfa" stroke-width="2"/>
    <line x1="120" y1="38" x2="170" y2="80" stroke="#a78bfa" stroke-width="2"/>
    <circle cx="70" cy="80" r="7" fill="#8b5cf6"/>
    <circle cx="170" cy="80" r="7" fill="#8b5cf6"/>
    <line x1="70" y1="87" x2="45" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="70" y1="87" x2="95" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="170" y1="87" x2="145" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <line x1="170" y1="87" x2="195" y2="130" stroke="#a78bfa" stroke-width="1.5"/>
    <circle cx="45" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="95" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="145" cy="130" r="6" fill="#8b5cf6"/>
    <circle cx="195" cy="130" r="6" fill="#8b5cf6"/>
    <text x="100" y="165" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#6d28d9">2³ = 8</text>
  </svg>
</div>`,

  // GRANDEZAS E MEDIDAS
  "unidades-de-medida": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="20" y="60" width="220" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="6"/>
    <line x1="40" y1="60" x2="40" y2="85" stroke="#92400e" stroke-width="2"/><text x="36" y="102" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e">0</text>
    <line x1="80" y1="60" x2="80" y2="80" stroke="#92400e" stroke-width="1.5"/><text x="76" y="102" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e">1</text>
    <line x1="120" y1="60" x2="120" y2="85" stroke="#92400e" stroke-width="2"/><text x="116" y="102" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e">2</text>
    <line x1="160" y1="60" x2="160" y2="80" stroke="#92400e" stroke-width="1.5"/><text x="156" y="102" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e">3</text>
    <line x1="200" y1="60" x2="200" y2="85" stroke="#92400e" stroke-width="2"/><text x="196" y="102" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#92400e">4 cm</text>
  </svg>
</div>`
};

let count = 0;
for (const [id, svgHtml] of Object.entries(SVGS)) {
  let filePath = path.join(ROOT, 'content', 'algebra', `${id}.js`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT, 'content', 'numeros-e-operacoes', `${id}.js`);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT, 'content', 'grandezas-e-medidas', `${id}.js`);
  }

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const svgRegex = /<div style="display: flex; justify-content: center; margin: 2rem 0;">[\s\S]*?<\/svg>\s*<\/div>/;
    if (svgRegex.test(content)) {
      content = content.replace(svgRegex, svgHtml);
    } else {
      content = content.replace(/(`\s*)/, `$1${svgHtml}\n\n`);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Atualizado SVG em ${id}.js`);
    count++;
  } else {
    console.log(`Arquivo não encontrado para id ${id}`);
  }
}

console.log(`Total de ${count} SVGs atualizados no eixo Álgebra, Números e Grandezas.`);
