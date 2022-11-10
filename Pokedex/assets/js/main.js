
function convertPokemonToHtml (pokemon){
    return `
              <li class="pokemon">
                    <span class="numero">#001</span>
                    <span class="nomePokemon">${pokemon.name}</span>
                    
                    <div class="detalhe">
                        <ol class="tipos">
                            <li class="tipo">raio</li>
                            <li class="tipo">ar</li>
                        </ol>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="${pokemon.name}">

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