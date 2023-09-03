const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
const apiButton = document.getElementById('apiButton');
let getResults = document.getElementById('results')

const callApi = () => {

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    const pokemonId = Math.floor(Math.random() * 200) + 1;

    fetch(`${urlBase}${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            mostrarPokemon(data);
            spinner.style.display = 'none';
        })
        .catch(error => {
            console.error('Error al obtener datos del Pokémon:', error);
            spinner.style.display = 'none';
        });
}

function mostrarPokemon(data) {


    const imgPokemon = document.getElementById('imgPokemon');
    imgPokemon.src = data.sprites.front_default;

    const nombre = document.getElementById('poke-name');
    nombre.textContent = `${data.name.toUpperCase()}`;

    const tipo = document.getElementById('type')
    tipo.textContent = `${data.types[0].type.name.toUpperCase()}`
    const tipotxt = document.getElementById('txt-type')
    tipotxt.textContent = 'Type:'

    const hpLabel = document.getElementById('hp-label');
    const hpValue = document.getElementById('hp-value');
    hpLabel.textContent = 'HP:';
    hpValue.textContent = data.stats[0].base_stat;
    const attLabel = document.getElementById('attack-label');
    const attValue = document.getElementById('attack-value');
    attLabel.textContent = 'ATTACK:';
    attValue.textContent = data.stats[1].base_stat;
    const defLabel = document.getElementById('defense-label');
    const defValue = document.getElementById('defense-value');
    defLabel.textContent = 'DEFENSE:';
    defValue.textContent = data.stats[2].base_stat;
    const specialLabel = document.getElementById('special-label');
    const specialValue = document.getElementById('special-value');
    specialLabel.textContent = 'SPECIAL ATTACK:';
    specialValue.textContent = data.stats[3].base_stat;
    const speedLabel = document.getElementById('speed-label');
    const speedValue = document.getElementById('speed-value');
    speedLabel.textContent = 'SPEED:';
    speedValue.textContent = data.stats[5].base_stat;

}

apiButton.addEventListener('click', callApi);