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

- buscar imagens na api do pokemon

 https://pokeapi.co/docs/v2#pokemon adicionar na tag img "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    
- Midea Query
    
    Conjunto de css que será aplicado de acordo do tamanho das telas
    
    https://www.w3schools.com/css/css3_mediaqueries_ex.asp

# Dominando o Protocolo HTTP e Integrando com a PokeAPI

- Protocolo de comunicação HTTP

    - Protocolo cliente servidor

    - Request x Response

- Requisição HTTP
    
    
   - URL ⇒ https://[pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon)
    
   - {IP} /  {PATH} (IP e Porta do servidor)
    
   - IP ⇒ {endereço} https://[pokeapi.co](https://pokeapi.co/api/v2/pokemon) 
    
   - PATH ⇒  {caminho de identificação do recursos } [api/v2/pokemon](https://pokeapi.co/api/v2/pokemon)
    
- Request Method

    - GET ⇒ Buscar recursos
    - POST ⇒ inserir um novo dados
    - PUT ⇒ atualizar um dado
    - DELETE ⇒ deletar um dado
        
- Query String
    
   - Descrição de buscas  ( *MÉTODO GET* )
    
   - Em uma URL começa logo após o **?** é a *query string* 
    
   - chave e valor
       
   - conseguimos limitar a quantidade de paginas e conteudo por exemplo
    
   - Passagem de parâmetros próprio path ou pela query string- Headers (Navegador)
    
   - São áreas de dados que podemos transmitir e receber dados pelo servidor
    
   - Metadados da requisição, descreve ou complementa a requisição
    
- Request Headers
    
   - Configuração da requisiçção, quem faz é o cliente( o browser)
    
- Response Headers
    
   - Configuração da resposta, quem faz é o servidor
    
- Request Body
    
    tera o json 
    
    ```json
    {
    	"nome" : "Teste"
    }
    ```
    
- Requisição

    - URL
    - Request Method
    - Request Headers
    - Request Body

- Resposta

    - Status code
    - Response Headers
    - Response Body

# Requisição HTTP via JS

- Acessar featch api (já dispovivel por todos os navegadores, não necessario utilizar o jquery por exemplo)
    - fetch api get json => https://developer.mozilla.org/en-US/docs/Web/API/Response/json
        - fetch 
            -  retorna uma promise, que ajuda no cincronismo
            -  processamento assicrono
            - promessa de uma resposta
        - catch
            - trata a messagen de erro
        - finaly 
            - finaliza o processo idependente do resultado