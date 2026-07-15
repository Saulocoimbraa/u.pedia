# Guia de Manutenção e Inclusão de Conteúdo - μ.pedia

Bem-vindo ao guia oficial do **μ.pedia**. A arquitetura deste projeto foi simplificada para rodar **100% offline e sem necessidade de servidor**. Você pode simplesmente dar dois cliques em `index.html` e o site funcionará perfeitamente, inclusive com as fórmulas matemáticas e todos os artigos visíveis.

Tudo é baseado em:
1. Um arquivo simples com o texto de todos os artigos (`js/contentData.js`).
2. Um arquivo de catálogo simples (`js/data.js`) onde você adiciona os metadados do artigo.
3. Scripts organizados na pasta `js/`.

---

## 📂 Visão Geral da Pasta do Projeto

Ao abrir o projeto, você encontrará a seguinte estrutura:

*   📂 `js/` → Contém a lógica e dados do site:
    *   `data.js` → O **Catálogo Geral** (lista de artigos, ícones, resumos e níveis).
    *   `contentData.js` → A **Base de Textos** (onde o texto explicativo de cada artigo é guardado em formato de texto).
    *   `router.js` → Controla a navegação instantânea.
    *   `parser.js` → Tradutor que transforma o Markdown dos artigos em HTML na hora.
    *   `home.js` & `articleRenderer.js` & `search.js` → Lógica de renderização das telas e busca.
    *   📂 `widgets/` → Scripts visuais e dinâmicos (como o widget interativo de Pitágoras).
*   📄 `index.html` → O arquivo principal do site. **Dê duplo clique nele para abrir a enciclopédia.**
*   📄 `style.css` → Controla a aparência visual (cores, fontes, espaçamentos).

---

## ✍️ Passo a Passo: Como Inserir um Novo Artigo

Para adicionar um novo artigo na enciclopédia, siga este processo simples de 2 etapas:

### 1. Cadastrar o artigo no Catálogo Geral (`js/data.js`)
Abra o arquivo `js/data.js` com o seu editor de texto e adicione o seu artigo ao final da lista `window.UPEDIA_ARTICLES`:
```javascript
  {
    id: "soma-dos-angulos", // Identificador único (sem espaços ou acentos, minúsculo)
    title: "Soma dos Ângulos do Triângulo", // Título visível na página
    level: "Ensino Fundamental II", // Nível escolar
    category: "Geometria", // Categoria
    icon: "triangle", // Nome do ícone Lucide
    summary: "A soma dos ângulos internos de qualquer triângulo é sempre 180°.", // Resumo curto de 1 linha
    infobox: {
      "Nível": "9º Ano",
      "Categoria": "[[geometria-plana]]", // Links para outros artigos usam [[id]]
      "Ângulo Total": "$180°$" // Fórmulas matemáticas usam o símbolo $
    },
    widget: null // Se tiver demonstração interativa, coloque o nome do widget aqui
  }
```

### 2. Adicionar o texto explicativo em `js/contentData.js`
Abra o arquivo `js/contentData.js`. Ele é um objeto javascript gigante que guarda os textos. Adicione o texto do seu novo artigo nele usando a mesma chave `id` definida no passo anterior:
```javascript
window.UPEDIA_CONTENT = {
  ...
  "meu-artigo-anterior": `Texto do artigo anterior...`,
  
  "soma-dos-angulos": `O **Teorema da Soma dos Ângulos** de um triângulo afirma que...

### Demonstração Visual
Use a palavra-chave a seguir caso queira exibir o widget interativo neste ponto:

{{widget}}

### Conclusão
A soma é constante.`
};
```
*Dica:* Use crases (``` ` ```) para delimitar o texto. Isso permite que você escreva o Markdown livremente com quebras de linha reais, sem precisar usar `\n`.


### 3. Testar localmente no navegador
Basta abrir ou atualizar o `index.html` no seu navegador (mesmo por `file:///...`). O artigo novo já estará listado e funcionando perfeitamente de forma nativa e sem servidor!
---

## 🛠️ Como Criar ou Alterar um Widget Interativo

Os widgets são pequenos programas dinâmicos que dão vida às demonstrações matemáticas do site.

Se você deseja adicionar uma nova simulação (ex: `widgetSomaAngulos.js`):

1.  Crie o arquivo em `js/widgets/widgetSomaAngulos.js`.
2.  Defina uma função inicializadora na variável global correspondente ao nome do seu widget:
    ```javascript
    window.initWidgetSomaAngulos = function (containerId) {
      var container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = "<h3>Minha Simulação Interativa</h3>";
      // Sua lógica javascript tradicional manipulando o container aqui
    };
    ```
3.  Insira o script do novo widget no seu arquivo `index.html` logo antes do script `js/app.js`:
    ```html
    <script src="./js/widgets/widgetSomaAngulos.js"></script>
    ```
4.  No arquivo `js/data.js`, atualize a propriedade do artigo correspondente:
    ```javascript
    widget: "somaAngulos"
    ```

---

## 🤖 Método Automatizado com `inserir_artigo.js`

Você pode automatizar a inserção de artigos usando o script utilitário `inserir_artigo.js` integrado. Esse script aceita um arquivo Markdown estruturado com **Frontmatter** (cabeçalho de metadados em YAML) no topo e atualiza automaticamente os arquivos de dados locais.

### Como usar:

1. Crie um arquivo markdown (ex: `soma-dos-angulos.md`) no formato abaixo:
   ```markdown
   ---
   id: soma-dos-angulos
   title: Soma dos Ângulos do Triângulo
   level: Ensino Fundamental II
   category: Geometria
   icon: triangle
   summary: A soma dos ângulos internos de qualquer triângulo é sempre 180°.
   infobox:
     Nível: 9º Ano
     Categoria: [[geometria-plana]]
     Ângulo Total: $180°$
   widget: null
   ---
   O **Teorema da Soma dos Ângulos** de um triângulo afirma que...
   ```
2. Execute o comando de automação no terminal:
   ```bash
   node inserir_artigo.js soma-dos-angulos.md
   ```
3. O script atualizará automaticamente o catálogo em `js/data.js` e inserirá o conteúdo formatado em `js/contentData.js`.

---

## 💡 Regras de Ouro para Edição
*   **Fórmulas Matemáticas:** Use `$fórmula$` para matemática no meio do texto e `$$fórmula$$` para destacar a fórmula sozinha em sua própria linha centralizada.
*   **Links entre Artigos:** Use colchetes duplos `[[id-do-artigo]]` para criar referências automáticas de um artigo a outro. O site converterá esses marcadores em links reais de forma transparente.
