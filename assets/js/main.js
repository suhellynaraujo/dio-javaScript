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
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>`
}

const pokemonList = document.getElementById('pokemonList')
/*
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        /*debugger
        console.log(pokemonList)

        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            pokemonList.innerHTML += (convertPokemonToLi(pokemon))            
        }
    })
    .catch((error) => console.error(error))*/

pokeAPI.getPokemons().then((pokemons) => { 

    for (let index = 0; index < pokemons.length; index++) {
        const pokemon = pokemons[index];
        pokemonList.innerHTML += (convertPokemonToLi(pokemon))            
    }
})


