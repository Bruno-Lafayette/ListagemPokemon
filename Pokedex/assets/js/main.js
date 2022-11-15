const pokemonList = document.getElementById('pokemonList')
const btnCarregarMais = document.getElementById('btnLoad')
const limit = 20
let offset = 0


function carregarPokemons (offset, limit){
    apiPokemon.getPokemons(offset, limit).then((pokemons) => {
        const newHTML = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="numero">#${pokemon.number}</span>
                    <span class="nomePokemon">${pokemon.name}</span>
                    
                    <div class="detalhe">
                        <ol class="tipos">
                            ${pokemon.types.map((type) => `<li class="tipo  ${pokemon.type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
    
                    </div>
                </li>
            `
        
        ).join('')
    
        pokemonList.innerHTML += newHTML
        
        })
       .catch((error) => console.error(error))
}

carregarPokemons(offset, limit)

btnCarregarMais.addEventListener('click', () => {
    offset += limit
    carregarPokemons(offset, limit)
})