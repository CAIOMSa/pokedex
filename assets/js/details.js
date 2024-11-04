const pokemonId = localStorage.getItem('selectedPokemonId');
const pokemonDetails = document.getElementById('pokemonDetail')
console.log(pokemonId);
function showPokemonDetails(pokeId){
    if (pokeId) {
        for(let i = 0; i < pokemonId.length; i++){  /*Não é otimizado mas da pro gasto */
            if(pokeId == parseInt(pokemonsList[i].number)){
                return pokemonsList[i]
            }
        }
    }
    return {name: "?????",number:pokeId,types:["uknow"],photo:"Unown.webp",detail:"Pokemon not found, explore more to know it"};
}

const pokemon = showPokemonDetails(pokemonId);
function PokemonItens(pokemons){
    console.log(pokemons)
    let newHtml = `
                <div class="detail">
                <div class="headCard">
                <div class="title">
                <h1 class="pokemonTitleOpc">${pokemon.name}</h1>
                                <h1>${pokemon.name}</h1>
                </div>
                    <ol class="types">
                    #${parseInt(pokemon.number)}
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <div class="mainCard">
                <div class="text">${pokemon.detail} </div>
                    <img src="./assets/img/${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="footCard">
                <button type="button" class="btn" onclick="outherPokemonDetails(${parseInt(pokemon.number) - 1})">#${parseInt(pokemon.number) - 1}</button>
                <button type="button" class="btn" onclick="outherPokemonDetails(${parseInt(pokemon.number) + 1})">#${parseInt(pokemon.number) + 1}</button>
                </div>
                </div>`
        pokemonDetails.innerHTML = newHtml
};
PokemonItens(pokemon)

function outherPokemonDetails(pokenId) {
    console.log(pokenId)
    let newPokemon = showPokemonDetails(pokenId)
    console.log(newPokemon)
    PokemonItens(newPokemon)
    localStorage.setItem('selectedPokemonId', pokenId);
    window.location.reload(true);
}
function goIndex(){
    window.location.href = 'index.html';
}