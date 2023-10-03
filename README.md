# dio-javaScript

# Introdução ao Desenvolvimento Web com JavaScript
- Criar um repositório
- Abrir com code .
- Instalar o node.js ⇒ [Node.js (nodejs.org)](https://nodejs.org/en)
- node -v ⇒ verifica a versão do node
- npm -v ⇒ verifica a versão do gerenciador de pacotes do node (Node Packeger Maneger)
- npm install -g http-server ⇒ instalar a biblioteca http-server
- touch index.html ⇒ abre um arquivo html
- Ctrl + p ⇒ abre uma busca por arquivo por nome
- http-server ./ ⇒ abre o html no local escolhido       
  
        💡 deu erro
              
        é só digitar `Set-ExecutionPolicy RemoteSigned` ou `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
                       
        mostrando o domínio particular
                
        **e assim testar pelo celular**   
        
- Iniciando com HTML
    - Linguagem de marcação de texto
    - Texto com semântica com significado

- Iniciando com CSS
    - Estilização
    - Estilo em cascata

- Iniciando com JS 
    - Deixa dinamico
    - window ⇒ manipulação do browser
    - document ⇒ documento corrente , o próprio HTML
        - pegar elemento HTML pelo id
            
            ```jsx
            document.getElementById("btnTeste")
            console.log(btnTeste)
            ```
        - pegar o elemento pelo id e adicionar um evento
    
            ```jsx
            const btnTeste = document.getElementById("btnTeste")
                    btnTeste.addEventListener("Click", function() {
                        console.log("Clicou no botão!")
                    })
            ```
# Criando um Projeto com HTML/CSS para Listagem de Pokémon     
- Normalizar estilização para todos os navegadores
    - cdn normalize css ⇒  [normalize - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/libraries/normalize)
    - Copie o link com a ultima versão
    - Adicione dentro da tag head no HTML
- Criar nova pasta ou arquivos
    - CTRL + C para o servidor
    - mkdir assets ⇒ cria nova pasta assets
    - mkdir assets/css ⇒ cria nova pasta css  dentro de assets
    - mkdir assets/js ⇒ cria nova pasta js dentro de assets
    - touch ./assets/css/global.css ⇒ cria novo arquivo dentro da pasta css
    - touch ./assets/js/main.js ⇒ cria novo arquivo dentro da pasta js
- Importar css
    
    Adicione a tag link com referencia ao css dentro da tag head
    
    ```jsx
    <link rel="stylesheet" href="./assets/css/global.css">
    ```
    
- Importar js
    
    adicionar a tag script dentro do body, final 
    
    ```jsx
    <script src="./assets/js/main.js">
    ```
    
- Fonts
    
    [Browse Fonts - Google Fonts](https://fonts.google.com/)
    
    selecione os tamanhos desejados     
    copie o link   
    Chame a fonte no css 
    