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
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/4e8a2386-7757-41fc-a59c-a1f7a620735c/Untitled.png)
        
        é só digitar `Set-ExecutionPolicy RemoteSigned` ou `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/3a4cf3d0-caff-421d-a2c0-4f5c236bf189/Untitled.png)
        
        mostrando o domínio particular
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/dc9129ab-f437-4a70-bf52-bd867dda34ea/Untitled.png)
        
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
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/7c61a64f-6a13-4a76-a996-4b5f36c0d229/Untitled.png)
    
- Importar js
    
    adicionar a tag script dentro do body, final 
    
    ```jsx
    <script src="./assets/js/main.js">
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/1dfa6a55-c34f-4c7f-badf-f0d6f1a23199/Untitled.png)
    
- Fonts
    
    [Browse Fonts - Google Fonts](https://fonts.google.com/)
    
    selecione os tamanhos desejados 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/60259bb6-b8e4-4f12-9c66-51b30c4bed0a/Untitled.png)
    
    copie o link 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/f0c0f493-ca2c-4d9b-878d-b643899f6b6c/Untitled.png)
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/e302550d-c77a-4b25-a4ba-76f079d2fb35/Untitled.png)
    
    Chame a fonte no css 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/9c873c28-0b7e-4f9c-ac5a-1b55a27ff5dc/Untitled.png)
   