const fs = require('fs');

const path = 'js/data.js';
let content = fs.readFileSync(path, 'utf8');

const mapping = {
  "numero-par": "paridade",
  "numero-impar": "paridade",
  "ponto": "ponto",
  "reta": "reta",
  "angulo": "angulo",
  "angulo-agudo": "angulo",
  "angulo-obtuso": "angulo",
  "angulo-raso": "angulo",
  "angulo-reto": "angulo",
  "fracao": "fracao",
  "fracao-irredutivel": "fracao",
  "soma": "soma",
  "multiplicacao": "multiplicacao",
  "quadrado-perfeito": "quadradoPerfeito",
  "divisao": "divisao",
  "potenciacao": "potenciacao",
  "potencia-de-dois": "potenciacao",
  "triangulo": "triangulo",
  "teorema-de-tales": "tales",
  "trigonometria": "trigonometria",
  "seno": "trigonometria",
  "cosseno": "trigonometria",
  "tangente": "trigonometria"
};

for (const [id, widgetName] of Object.entries(mapping)) {
  // Regex to match the block for this id and its widget property
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?widget:\\s*)null`, 'g');
  content = content.replace(regex, `$1"${widgetName}"`);
}

fs.writeFileSync(path, content, 'utf8');
console.log("Widgets atualizados no data.js");
