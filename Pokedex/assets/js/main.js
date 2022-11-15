
function convertPokemonToHtml (pokemon){
    return `
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
}

const pokemonList = document.getElementById('pokemonList')


apiPokemon.getPokemons().then((pokemons) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
    //     for (let i = 0; i < 10; i++){
    //         let pokemon = pokemons[i]
    //         console.log(pokemon.name)
    //         pokemonList.innerHTML += convertPokemonToHtml(pokemon)
    //     }
    })
   .catch((error) => console.error(error))