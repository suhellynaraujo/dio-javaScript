# dio-javaScript

# Introdução ao Desenvolvimento Web com JavaScript
- Configurando o ambiente
    - Criar um repositório
    - Abrir com code .
    - Instalar o node.js ⇒ [Node.js (nodejs.org)](https://nodejs.org/en)
    - node -v ⇒ verifica a versão do node
    - npm -v ⇒ verifica a versão do gerenciador de pacotes do node (Node Packeger Maneger)
    - npm install -g http-server ⇒ instalar a biblioteca http-server
    - touch index.html ⇒ abre um arquivo html
    - Ctrl + p ⇒ abre uma busca por arquivo por nome
    - http-server ./ ⇒ abre o html no local escolhido
        
        <aside>
        💡 deu erro
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/4e8a2386-7757-41fc-a59c-a1f7a620735c/Untitled.png)
        
        é só digitar `Set-ExecutionPolicy RemoteSigned` ou `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/3a4cf3d0-caff-421d-a2c0-4f5c236bf189/Untitled.png)
        
        mostrando o domínio particular
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/dc9129ab-f437-4a70-bf52-bd867dda34ea/Untitled.png)
        
        **e assim testar pelo celular**
        - 
    - Criar um repositório
    - Abrir com code .
    - Instalar o node.js ⇒ [Node.js (nodejs.org)](https://nodejs.org/en)
    - node -v ⇒ verifica a versão do node
    - npm -v ⇒ verifica a versão do gerenciador de pacotes do node (Node Packeger Maneger)
    - npm install -g http-server ⇒ instalar a biblioteca http-server
    - touch index.html ⇒ abre um arquivo html
    - Ctrl + p ⇒ abre uma busca por arquivo por nome
    - http-server ./ ⇒ abre o html no local escolhido
        
        <aside>
        💡 deu erro
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/4e8a2386-7757-41fc-a59c-a1f7a620735c/Untitled.png)
        
        é só digitar `Set-ExecutionPolicy RemoteSigned` ou `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/3a4cf3d0-caff-421d-a2c0-4f5c236bf189/Untitled.png)
        
        mostrando o domínio particular
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/61ccb702-4f51-4122-adf2-d43ab001c5f7/dc9129ab-f437-4a70-bf52-bd867dda34ea/Untitled.png)
        
        **e assim testar pelo celular**
        
        </aside>
        
- Iniciando com HTML
    - Linguagem de marcação de texto
    - Texto com semântica com significado
- Iniciando com CSS
    - Estilização
    - Estilo em cascata
- Iniciando com JS
- 
    - Deixa dinamico
    - window ⇒ manipulação do browser
    - document ⇒ documento corrente , o próprio HTML
        - pegar elemento HTML pelo id
            
            ```jsx
            document.getElementById("btnTeste")
            console.log(btnTeste)
            ```
            
        - pegar o elemento pelo id e adicionar um evento

        - pegar o elemento pelo id e adicionar um evento
    
    ```jsx
    const btnTeste = document.getElementById("btnTeste")
            btnTeste.addEventListener("Click", function() {
                console.log("Clicou no botão!")
            })
    ```
        
        </aside>