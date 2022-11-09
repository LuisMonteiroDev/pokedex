import React, { useEffect, useState, useTransition } from 'react';
import './App.css'; 
import { PokemonsFetch } from './api/services/pokemoncard';

function App() {  
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
   async function getPokemons() {
      try {
        const resultPokemons = await PokemonsFetch();
        console.log((resultPokemons.pokemons).flat());
        const flatResultPokemon = (resultPokemons.pokemons).flat();
        setPokemon(flatResultPokemon);
      } catch(error) {
        console.log(error)
      }
    }
    getPokemons();
  },[]);

  return(
    <div>
      <div className='pokedex'>
      {pokemon.map((pokemonLoop) => (
      <div className='pokemon-card'>
        <img src={pokemonLoop.pokemon_species.url}></img>
        <p>
        {pokemonLoop.pokemon_species.name}
        </p>
      </div>))}
      </div>
    </div>
  )
}

export default App;