const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetails = (pokemon) => {// pega a lista de detalhes e converte para json
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((convertPokeApiDetailToPokemon))
}

pokeApi.getPokemons = (offse = 0, limit = 5) => {
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offse}&limit=${limit}`

return fetch(url)//requisção da lista de pokemons
    .then((response) => response.json())// converte a resposta para json
    .then((jsonBody) => jsonBody.results)// pega a lista de pokemons como resultado
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails)) // para cada pokemon, faz uma nova requisição, convertendo a lista de pokemons em uma lista de detalhes
    .then((detailsRequest) => Promise.all(detailsRequest))// requisição da lista de detalhes, quando terminasse a requisição já vinha convertido em json
    .then((pokemonDetails) => pokemonDetails)//lista de pokemons com detalhes
}
