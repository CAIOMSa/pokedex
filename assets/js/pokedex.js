
const pokemonList = document.getElementById('pokemonList')
function viewPokemonDetails(pokemonId) {
    localStorage.setItem('selectedPokemonId', pokemonId);
    window.location.href = 'pokemonDetails.html';
}

const PokemonItens = (pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.types[0]}">
                <a href="#" onclick="viewPokemonDetails(${pokemon.number})">
                   <div class="top">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#${pokemon.number}</span>
                    </div>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="./assets/img/${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                   </a>
                </li>
            `).join('')
            pokemonList.innerHTML += newHtml
};

PokemonItens(pokemonsList)

