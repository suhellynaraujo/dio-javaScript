
const offse = 0;
const limit = 10;
const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"

// processamento assicrono, promessa de uma resposta
//o fetch processa, aguardando a resposta do servidor, depois executa a função de callback (function(response))
/*fetch(url)
    .then(function (response) {
        console.log(response)

        response.json()
            .then(function (responseBody) {
                console.log(responseBody)
            })
    })

    .then(function(jsonBody){
        console.log(jsonBody)
    })
    
    .catch(function (error) {
        console.log(error)
    })

    .finally(function () {
        console.log("Requisição concluida!")
    })*/

    //encadeamento
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .then((error) => console.error(error))