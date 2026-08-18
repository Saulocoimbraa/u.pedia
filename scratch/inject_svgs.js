const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

// SVGs padronizados por eixo temático, com design premium e cores suaves
const svgs = {
  geometria: `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <polygon points="100,30 170,170 30,170" fill="var(--primary-color)" fill-opacity="0.1" stroke="var(--primary-color)" stroke-width="2"/>
    <circle cx="100" cy="30" r="4" fill="var(--accent-color)" />
    <circle cx="170" cy="170" r="4" fill="var(--accent-color)" />
    <circle cx="30" cy="170" r="4" fill="var(--accent-color)" />
    <line x1="100" y1="30" x2="100" y2="170" stroke="var(--text-color)" stroke-dasharray="4" opacity="0.3" stroke-width="2"/>
  </svg>
</div>
`,
  algebra: `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <text x="100" y="110" font-family="var(--font-family)" font-size="48" font-style="italic" font-weight="bold" fill="var(--primary-color)" text-anchor="middle">x<tspan fill="var(--text-color)" font-size="32">²</tspan></text>
    <path d="M 40 160 Q 100 40 160 160" fill="none" stroke="var(--accent-color)" stroke-width="3" opacity="0.6"/>
  </svg>
</div>
`,
  "numeros-e-operacoes": `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <rect x="40" y="40" width="120" height="120" rx="10" fill="none" stroke="var(--primary-color)" stroke-width="3" opacity="0.5"/>
    <circle cx="70" cy="70" r="12" fill="var(--accent-color)"/>
    <circle cx="130" cy="70" r="12" fill="var(--primary-color)"/>
    <circle cx="70" cy="130" r="12" fill="var(--primary-color)"/>
    <circle cx="130" cy="130" r="12" fill="var(--accent-color)"/>
    <line x1="100" y1="50" x2="100" y2="150" stroke="var(--text-color)" stroke-width="2" opacity="0.2"/>
    <line x1="50" y1="100" x2="150" y2="100" stroke="var(--text-color)" stroke-width="2" opacity="0.2"/>
  </svg>
</div>
`,
  estatistica: `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <line x1="40" y1="160" x2="160" y2="160" stroke="var(--text-color)" stroke-width="2"/>
    <line x1="40" y1="160" x2="40" y2="40" stroke="var(--text-color)" stroke-width="2"/>
    <rect x="55" y="110" width="20" height="50" fill="var(--primary-color)" rx="2"/>
    <rect x="90" y="70" width="20" height="90" fill="var(--accent-color)" rx="2"/>
    <rect x="125" y="40" width="20" height="120" fill="var(--primary-color)" rx="2"/>
  </svg>
</div>
`,
  historia: `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <rect x="30" y="40" width="140" height="120" rx="5" fill="none" stroke="var(--primary-color)" stroke-width="3" opacity="0.6"/>
    <line x1="50" y1="70" x2="150" y2="70" stroke="var(--text-color)" stroke-width="2" opacity="0.3"/>
    <line x1="50" y1="100" x2="150" y2="100" stroke="var(--text-color)" stroke-width="2" opacity="0.3"/>
    <line x1="50" y1="130" x2="110" y2="130" stroke="var(--text-color)" stroke-width="2" opacity="0.3"/>
    <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent-color)" stroke-width="2" opacity="0.5"/>
  </svg>
</div>
`,
  default: `
<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <svg width="200" height="200" viewBox="0 0 200 200" style="background: var(--card-bg); border-radius: 12px; box-shadow: var(--shadow-sm);">
    <circle cx="100" cy="100" r="60" fill="none" stroke="var(--primary-color)" stroke-width="3" opacity="0.5"/>
    <circle cx="100" cy="100" r="20" fill="var(--accent-color)"/>
  </svg>
</div>
`
};

let count = 0;

function processDirectory(dir, axisName) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath, file);
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Verifica se já tem ilustração SVG
      if (!content.includes('<svg') && !content.includes('{{widget}}')) {
        const svgToInject = svgs[axisName] || svgs.default;
        
        // Vamos injetar logo após a abertura da template string (`)
        const match = content.match(/window\.UPEDIA_CONTENT\["[^"]+"\]\s*=\s*`/);
        if (match) {
          const insertIndex = match.index + match[0].length;
          const newContent = content.slice(0, insertIndex) + '\\n' + svgToInject.trim().replace(/\\n/g, '\\n') + '\\n\\n' + content.slice(insertIndex);
          fs.writeFileSync(fullPath, newContent, 'utf8');
          count++;
          console.log(`Injetado SVG em ${axisName}/${file}`);
        }
      }
    }
  }
}

// Inicia processamento na pasta content
processDirectory(contentDir, 'default');
console.log(`Total de artigos ilustrados: ${count}`);
