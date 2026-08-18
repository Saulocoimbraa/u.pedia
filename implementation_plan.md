# Plano de Implementação: Ilustração 100%, Widgets 20% e Autor

Este plano detalha como alcançaremos a meta de ilustrar 100% dos artigos da μ.pedia com gráficos SVG elegantes, equipar mais de 20% dos artigos com demonstrações interativas (widgets) consistentes, e adicionar as atualizações sobre o autor solicitadas.

## User Review Required

> [!IMPORTANT]
> - **SVG Automatizado e Enriquecido**: Para ilustrar os 62 artigos restantes com precisão e qualidade, utilizaremos um script utilitário em Node.js que injeta SVGs matemáticos específicos baseados em templates minimalistas e claros definidos para cada conceito.
> - **Widgets Compartilhados**: Criaremos widgets educacionais robustos que podem ser reutilizados em múltiplos artigos correlatos (ex: `widgetAngulo` servirá para `angulo`, `angulo-agudo`, `angulo-obtuso`, `angulo-raso` e `angulo-reto`). Isso garante consistência visual e um aproveitamento inteligente do código.
> - **Carregamento Dinâmico de Widgets**: Atualizaremos o `js/articleRenderer.js` para carregar os scripts de widgets sob demanda, evitando sobrecarregar o `index.html` com dezenas de tags `<script>`.

## Proposed Changes

### 1. Atualizações do Autor e Rodapé

#### [MODIFY] [index.html](file:///d:/Projetos%20IA/u.pedia-main/index.html)
- Atualizar o rodapé para incluir "Desenvolvido por [Saulo Coimbra](#/sobre-o-autor)".
- Adicionar o script da página do autor `<script src="./js/aboutAuthor.js"></script>`.

#### [MODIFY] [js/app.js](file:///d:/Projetos%20IA/u.pedia-main/js/app.js)
- Adicionar a rota `#/sobre-o-autor` ligada à função `window.renderAboutAuthor`.

#### [NEW] [aboutAuthor.js](file:///d:/Projetos%20IA/u.pedia-main/js/aboutAuthor.js)
- Criar a view da página do autor com design premium, exibindo a biografia e trajetória acadêmica/profissional de Saulo Coimbra.

---

### 2. Arquitetura de Carregamento Dinâmico de Widgets

#### [MODIFY] [js/articleRenderer.js](file:///d:/Projetos%20IA/u.pedia-main/js/articleRenderer.js)
- Implementar o carregamento lazy dinâmico de scripts de widgets (ex: carrega `js/widgets/widgetParidade.js` sob demanda caso o artigo possua `widget: "paridade"` e a função correspondente não esteja na memória).

---

### 3. Implementação dos Novos Widgets (js/widgets/)

Criaremos os seguintes widgets interativos no formato solicitado (Vanilla JS encapsulado em `window.initWidget<Nome>`):
- **`widgetParidade.js`**: Permite alterar um número e ver bolinhas se organizando em pares (mostrando o resto 0 ou 1). (Cobre: `numero-par`, `numero-impar`)
- **`widgetPonto.js`**: Plano cartesiano interativo onde o usuário clica e move um ponto para ver suas coordenadas $(x, y)$. (Cobre: `ponto`)
- **`widgetReta.js`**: Permite mover dois pontos na malha e ver a reta $y = ax + b$ se ajustando. (Cobre: `reta`)
- **`widgetAngulo.js`**: Um slider de ângulo que gira um vetor e mostra sua medida em graus e classifica em agudo, obtuso, reto ou raso. (Cobre: `angulo`, `angulo-agudo`, `angulo-obtuso`, `angulo-raso`, `angulo-reto`)
- **`widgetFracao.js`**: Controles de numerador/denominador mostrando uma pizza/barra dividida correspondente. (Cobre: `fracao`, `fracao-irredutivel`)
- **`widgetSoma.js`**: Visualização de duas coleções de blocos se juntando. (Cobre: `soma`)
- **`widgetMultiplicacao.js`**: Uma malha que se expande para mostrar o produto $L \times C$. (Cobre: `multiplicacao`)
- **`widgetQuadradoPerfeito.js`**: Visualiza grids quadradas de pontos de lado $n$. (Cobre: `quadrado-perfeito`)
- **`widgetDivisao.js`**: Distribui blocos em grupos mostrando o resto. (Cobre: `divisao`)
- **`widgetPotenciacao.js`**: Árvore binária demonstrando crescimento exponencial. (Cobre: `potenciacao`, `potencia-de-dois`)
- **`widgetTriangulo.js`**: Arrasta vértices de um triângulo e vê que a soma dos ângulos internos é sempre $180^\circ$. (Cobre: `triangulo`)
- **`widgetTrigonometria.js`**: Círculo trigonométrico interativo mostrando seno, cosseno e tangente. (Cobre: `trigonometria`, `seno`, `cosseno`, `tangente`)
- **`widgetTales.js`**: Move retas paralelas cortadas por transversais mostrando a constância da razão. (Cobre: `teorema-de-tales`)

Total de novos artigos com widgets: **24 artigos adicionais** (somando aos 4 atuais, teremos 28/94 = **29.8%** com widgets).

---

### 4. Geração Automática das Ilustrações SVG

Criaremos um script utilitário `scratch/inject_svgs.js` para iterar sobre os 62 artigos sem ilustrações e injetar códigos SVG minimalistas e de cores suaves direto nas Template Strings de cada arquivo de conteúdo `content/`.

---

## Verification Plan

### Manual Verification
1. Abrir a aplicação localmente no navegador e navegar até as rotas.
2. Testar o rodapé e a página "Sobre o Autor".
3. Validar se todos os 94 artigos carregam com sucesso e se possuem ilustrações SVG visíveis e centralizadas.
4. Testar a interatividade dos widgets criados.
