const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// SVGs altamente específicos e didáticos para o eixo Geometria e História
const SVGS = {
  // GEOMETRIA
  "ponto": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="20" y1="90" x2="220" y2="90" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4"/>
    <line x1="120" y1="20" x2="120" y2="160" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4"/>
    <circle cx="160" cy="50" r="6" fill="#6366f1" />
    <line x1="160" y1="50" x2="160" y2="90" stroke="#818cf8" stroke-dasharray="2" />
    <line x1="160" y1="50" x2="120" y2="50" stroke="#818cf8" stroke-dasharray="2" />
    <text x="172" y="48" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#4338ca">P(x,y)</text>
  </svg>
</div>`,

  "reta": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="20" y1="140" x2="220" y2="40" stroke="#4f46e5" stroke-width="3" />
    <polygon points="225,37 215,35 218,48" fill="#4f46e5" />
    <polygon points="15,143 25,145 22,132" fill="#4f46e5" />
    <circle cx="70" cy="115" r="5" fill="#f59e0b" />
    <text x="65" y="135" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#b45309">A</text>
    <circle cx="170" cy="65" r="5" fill="#f59e0b" />
    <text x="165" y="85" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#b45309">B</text>
  </svg>
</div>`,

  "triangulo": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="120,30 200,150 40,150" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5" />
    <path d="M 55 150 A 20 20 0 0 0 68 135" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M 185 150 A 20 20 0 0 1 175 135" fill="none" stroke="#10b981" stroke-width="2"/>
    <path d="M 110 48 A 20 20 0 0 0 130 48" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="115" y="22" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">A</text>
    <text x="25" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">B</text>
    <text x="208" y="160" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#3730a3">C</text>
  </svg>
</div>`,

  "cateto": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="40,30 40,150 200,150" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
    <line x1="40" y1="30" x2="40" y2="150" stroke="#ef4444" stroke-width="3.5" />
    <line x1="40" y1="150" x2="200" y2="150" stroke="#10b981" stroke-width="3.5" />
    <rect x="40" y="135" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="47.5" cy="142.5" r="2" fill="#64748b"/>
    <text x="12" y="95" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Cateto a</text>
    <text x="100" y="170" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#059669">Cateto b</text>
  </svg>
</div>`,

  "hipotenusa": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="40,30 40,150 200,150" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="40" y1="30" x2="200" y2="150" stroke="#4f46e5" stroke-width="4" />
    <rect x="40" y="135" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5"/>
    <circle cx="47.5" cy="142.5" r="2" fill="#64748b"/>
    <text x="125" y="80" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#4338ca">Hipotenusa (c)</text>
  </svg>
</div>`,

  "vertice": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="40" y1="140" x2="200" y2="140" stroke="#475569" stroke-width="2.5" />
    <line x1="40" y1="140" x2="160" y2="30" stroke="#475569" stroke-width="2.5" />
    <circle cx="40" cy="140" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
    <text x="15" y="165" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#b91c1c">Vértice V</text>
  </svg>
</div>`,

  "angulo": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="50" y1="130" x2="200" y2="130" stroke="#334155" stroke-width="2.5" />
    <line x1="50" y1="130" x2="170" y2="40" stroke="#334155" stroke-width="2.5" />
    <path d="M 90 130 A 40 40 0 0 0 83 105" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="100" y="112" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#d97706">θ</text>
    <circle cx="50" cy="130" r="4" fill="#334155"/>
  </svg>
</div>`,

  "angulo-agudo": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="50" y1="130" x2="190" y2="130" stroke="#334155" stroke-width="2.5" />
    <line x1="50" y1="130" x2="170" y2="60" stroke="#334155" stroke-width="2.5" />
    <path d="M 90 130 A 40 40 0 0 0 84 107" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="100" y="115" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#15803d">θ &lt; 90°</text>
  </svg>
</div>`,

  "angulo-obtuso": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="120" y1="130" x2="210" y2="130" stroke="#334155" stroke-width="2.5" />
    <line x1="120" y1="130" x2="30" y2="60" stroke="#334155" stroke-width="2.5" />
    <path d="M 160 130 A 40 40 0 0 0 88 105" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
    <text x="110" y="90" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#c2410c">90° &lt; θ &lt; 180°</text>
  </svg>
</div>`,

  "angulo-raso": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="30" y1="100" x2="210" y2="100" stroke="#334155" stroke-width="2.5" />
    <path d="M 70 100 A 50 50 0 0 1 170 100" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
    <circle cx="120" cy="100" r="4" fill="#ef4444"/>
    <text x="100" y="80" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#4338ca">180°</text>
  </svg>
</div>`,

  "angulo-reto": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="60" y1="140" x2="190" y2="140" stroke="#334155" stroke-width="2.5" />
    <line x1="60" y1="140" x2="60" y2="30" stroke="#334155" stroke-width="2.5" />
    <rect x="60" y="115" width="25" height="25" fill="#f1f5f9" stroke="#0284c7" stroke-width="2"/>
    <circle cx="72.5" cy="127.5" r="2.5" fill="#0284c7"/>
    <text x="95" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">90°</text>
  </svg>
</div>`,

  "angulo-complementar": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
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
</div>`,

  "poligono": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="120,25 190,65 190,135 120,175 50,135 50,65" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" />
    <circle cx="120" cy="25" r="4" fill="#15803d"/>
    <circle cx="190" cy="65" r="4" fill="#15803d"/>
    <circle cx="190" cy="135" r="4" fill="#15803d"/>
    <circle cx="120" cy="175" r="4" fill="#15803d"/>
    <circle cx="50" cy="135" r="4" fill="#15803d"/>
    <circle cx="50" cy="65" r="4" fill="#15803d"/>
  </svg>
</div>`,

  "plano": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="60,40 210,40 180,140 30,140" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
    <circle cx="80" cy="80" r="4" fill="#ef4444" />
    <circle cx="140" cy="70" r="4" fill="#ef4444" />
    <circle cx="110" cy="110" r="4" fill="#ef4444" />
    <text x="45" y="130" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8">α</text>
  </svg>
</div>`,

  "dimensao": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
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
</div>`,

  // HISTÓRIA
  "arquimedes": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <circle cx="120" cy="90" r="60" fill="none" stroke="#4f46e5" stroke-width="2" />
    <polygon points="120,30 150,38 172,58 180,90 172,122 150,142 120,150 90,142 68,122 60,90 68,58 90,38" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3"/>
    <text x="95" y="95" font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="#3730a3">π ≈ 3,14</text>
  </svg>
</div>`,

  "euclides": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <rect x="40" y="30" width="160" height="120" rx="8" fill="#fffbebe" stroke="#d97706" stroke-width="2"/>
    <line x1="120" y1="30" x2="120" y2="150" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Desenhos dos Elementos -->
    <polygon points="70,60 100,100 40,100" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <circle cx="160" cy="80" r="25" fill="none" stroke="#059669" stroke-width="1.5"/>
    <text x="50" y="130" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#92400e">Os Elementos</text>
  </svg>
</div>`,

  "pitagoras": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <polygon points="60,40 60,140 180,140" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="60" y="125" width="15" height="15" fill="none" stroke="#1e40af" stroke-width="1"/>
    <circle cx="67.5" cy="132.5" r="2" fill="#1e40af"/>
    <text x="100" y="85" font-family="Inter, sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">a² + b² = c²</text>
  </svg>
</div>`,

  "giuseppe-peano": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="240" height="180" viewBox="0 0 240 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="20" y1="90" x2="220" y2="90" stroke="#475569" stroke-width="2"/>
    <circle cx="40" cy="90" r="5" fill="#4f46e5"/><text x="36" y="115" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#3730a3">0</text>
    <circle cx="90" cy="90" r="5" fill="#4f46e5"/><text x="86" y="115" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#3730a3">1</text>
    <circle cx="140" cy="90" r="5" fill="#4f46e5"/><text x="136" y="115" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#3730a3">2</text>
    <circle cx="190" cy="90" r="5" fill="#4f46e5"/><text x="186" y="115" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#3730a3">3</text>
    <path d="M 40 80 Q 65 50 90 80" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M 90 80 Q 115 50 140 80" fill="none" stroke="#10b981" stroke-width="2"/>
    <path d="M 140 80 Q 165 50 190 80" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="100" y="45" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#059669">S(n)</text>
  </svg>
</div>`,

  "historia-da-matematica": `<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="260" height="180" viewBox="0 0 260 180" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <line x1="20" y1="90" x2="240" y2="90" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="40" cy="90" r="7" fill="#ef4444"/><text x="25" y="115" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">Babilônia</text>
    <circle cx="90" cy="90" r="7" fill="#f59e0b"/><text x="78" y="72" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#b45309">Egito</text>
    <circle cx="140" cy="90" r="7" fill="#10b981"/><text x="125" y="115" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#047857">Grécia</text>
    <circle cx="190" cy="90" r="7" fill="#3b82f6"/><text x="178" y="72" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8">Índia</text>
  </svg>
</div>`
};

let count = 0;
for (const [id, svgHtml] of Object.entries(SVGS)) {
  // procurar arquivo em content/geometria ou content/historia
  let filePath = path.join(ROOT, 'content', 'geometria', `${id}.js`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT, 'content', 'historia', `${id}.js`);
  }

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // substituir bloco SVG existente se houver
    const svgRegex = /<div style="display: flex; justify-content: center; margin: 2rem 0;">[\s\S]*?<\/svg>\s*<\/div>/;
    if (svgRegex.test(content)) {
      content = content.replace(svgRegex, svgHtml);
    } else {
      // injetar no topo do template string
      content = content.replace(/(`\s*)/, `$1${svgHtml}\n\n`);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Atualizado SVG em ${id}.js`);
    count++;
  } else {
    console.log(`Arquivo não encontrado para id ${id}`);
  }
}

console.log(`Total de ${count} SVGs customizados atualizados no eixo Geometria e História.`);
