const pokeAPI = {}

pokeAPI.getPokemons = (offse = 0, limit = 10) => {
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offse}&limit=${limit}`

return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error))
}