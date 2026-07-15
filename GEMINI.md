# Diretrizes do Projeto μ.pedia (Princípios Norteadores)

Este documento centraliza as regras arquiteturais, matemáticas e de formatação adotadas no desenvolvimento da enciclopédia matemática **μ.pedia**. Qualquer IA ou colaborador que for escrever, revisar ou gerar conteúdo para o projeto deve seguir estritamente estas diretrizes.

---

## 1. Rigor Matemático Inegociável
Acessibilidade não significa imprecisão. O projeto exige um rigor matemático formal e impecável.
* **Axioma vs Teorema:** Nunca confunda regras fundamentais (axiomas) com propriedades demonstráveis (teoremas).
* **Conceitos Primitivos:** Não tente definir o que não tem definição formal. (Ex: *Ponto*, *Reta* e *Plano* são entes primitivos aceitos intuitivamente, não possuem dimensão ou espessura).
* **Definições Formais:** Utilize notações analíticas precisas. Por exemplo, prefira definir um número par como $n = 2k$ (onde $k$ é inteiro) em vez de "um número que termina em 0, 2, 4, 6 ou 8".
* **Linguagem:** O texto deve ser de leitura fluida e acessível, mas a âncora lógica e dedutiva deve ser à prova de falhas lógicas.

## 2. Estrutura de Arquivos e Código
* Os artigos não são escritos em Markdown ou HTML puro, mas injetados via JavaScript.
* Cada artigo fica em seu próprio arquivo: `content/<eixo>/<id-do-artigo>.js`.
* O arquivo deve ser uma **IIFE (Immediately Invoked Function Expression)** que insere uma Template String no objeto global `window.UPEDIA_CONTENT`. Exemplo:
  ```javascript
  (function () {
    window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
    window.UPEDIA_CONTENT["id-do-artigo"] = `O texto do artigo com formatação em Markdown...`;
  })();
  ```

## 3. Renderização de Fórmulas Matemáticas (KaTeX)
O μ.pedia utiliza KaTeX para renderização matemática. Por estarmos escrevendo o Markdown dentro de uma Template String (` ` `) do JavaScript, **existe uma regra crítica de escape**:
* Toda contra-barra do LaTeX precisa ser **duplamente escapada** (`\\`).
* Exemplo incorreto: `\frac{a}{b}`, `\implies`, `\theta`
* **Exemplo CORRETO:** `\\frac{a}{b}`, `\\implies`, `\\theta`, `\\underbrace`, `\\dots`.

## 4. Hipertextualidade Intensa (A Teia de Conhecimento)
A enciclopédia é baseada em hiperlinks. Todo conceito, por menor que seja, deve ser envelopado pela sintaxe de link.
* **Sintaxe Exigida:** `[[id-do-artigo]]`
* **Atenção ao Parser:** O arquivo `parser.js` do projeto é simples e **NÃO SUPORTA** máscaras de formatação com barra vertical (ex: `[[id-do-artigo|texto de exibição]]` não funciona).
* **Truque para Plurais:** Como não usamos máscaras, para flexões ou plurais, insira o link na raiz da palavra. Exemplo: `[[angulo-complementar]]es` ou `[[teorema]]s`.

## 5. Ilustrações e Interatividade
O texto seco não é o foco do projeto. A didática visual é prioritária.
* Sempre que um conceito matemático se beneficiar de visualização (ex: geometria, provas visuais), insira **Ilustrações SVG** minimalistas e elegantes diretamente no artigo.
* Demonstrações mais complexas ou algoritmos interativos devem prever a existência de **Widgets HTML/JS** associados ao artigo.

## 6. Governança das Listas (Catálogo)
Sempre que o texto de um novo artigo for gerado e revisar os hiperlinks:
* **`palavras.md`**: Todas as palavras-chave inéditas que surgirem como links (`[[ ]]`) devem ser catalogadas aqui para servir de *backlog* (tarefas pendentes de criação).
* **`artigos.md`**: Assim que um arquivo `.js` for concluído e o artigo estiver finalizado, seu ID deve ser transferido para esta lista de conteúdos consolidados.

## 7. Regra de Redundância de Palavras-Chave e Hipertextualidade
Para evitar redundâncias e manter o conteúdo focado no aprofundamento:
* **Explicações Inline:** Se um conceito ou termo for explicado imediatamente em seguida à sua menção no texto do artigo principal (por exemplo, como Peano explica seus próprios axiomas em seu artigo biográfico), não há necessidade de criar uma palavra-chave dedicada para ele no backlog (`palavras.md`) nem gerar um artigo específico para ele.
* **Links para Aprofundamento:** Use a hipertextualidade (`[[id-do-artigo]]`) apenas quando o termo demandar um aprofundamento rigoroso e independente que desvie ou exceda o escopo do artigo atual. Evite envelopar conceitos com links se a explicação direta e suficiente do conceito já estiver no próprio corpo de texto do artigo atual.
* **Revisão:** Durante a criação ou edição, remova links que apontem para termos explicados detalhadamente de forma local no mesmo arquivo para evitar links quebrados ou redundantes.

