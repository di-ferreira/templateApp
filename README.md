# Templete App

Template para web app utilizando webview com framework ElectronJS.

## Instalação

No bash use o comando `git clone https://github.com/di-ferreira/templateApp.git` para a pasta desejada e após concluído execute o comando `yarn` ou `npm i` para instalar as dependências.
Edite o arquivo `index.html` a tag `<webview> e coloque o caminho desejado.

```html
<body>
  <header class="titleBar">
    <h1 id="title">Delivery App</h1>
    <div class="buttons">
      <button
        id="minimizeBtn"
        title="Minimizar"
        class="btn minimizeBtn"
      ></button>
      <button id="maxResBtn" title="Maximizar" class="btn maxBtn"></button>
      <button id="closeBtn" title="Fechar" class="btn closeBtn"></button>
    </div>
  </header>
  <webview src="http://seucaminho"></webview>
  <script src="./renderer.js"></script>
</body>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
