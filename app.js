fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
.then(response =. {
    if (response.ok) {
        return response.json();
    }
})
.then(pokemon => {
    const mewTwo = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[5].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default']
    }
})
.catch(error => {
    console.log(error);
})

function makePokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.setAttribute('src', pokemon.image)

<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">

    





    </div>

}
