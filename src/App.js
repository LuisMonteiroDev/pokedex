import React, { useEffect, useState } from 'react';
import './App.css'; 
import { PokemonsFetch } from './api/services/pokemoncard';
import { PokemonsImageFetch } from './api/services/pokemonimages'
import Navbar from './components/navbar';

function App() {  
  const [pokemon, setPokemon] = useState([]);
  const [pokemonimages, setPokemonImage] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');

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

  useEffect(() => {
    async function getPokemonsImage() {
       try {
         const resultPokemonsImage = await PokemonsImageFetch();
         setPokemonImage(resultPokemonsImage.pokemonImage);
       } catch(error) {
         console.log(error)
       }
     }
     getPokemonsImage();
   },[]);

  const filteredPokemon = pokemon.filter((p) =>
    p.pokemon_species.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );
  return(
    <div>
      <Navbar
        onSearch={setSearchPokemon}
        searchPokemon={searchPokemon}
      />
      <div className='pokedex'>
      <div className='pokemon-card-container'>
        {filteredPokemon.map((pokemonLoop) => (
          <div className='grid-item-pokemon' key={pokemonLoop.entry_number}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonLoop.entry_number}.png`} alt={pokemonLoop.pokemon_species.name} />
            <p>
              {pokemonLoop.pokemon_species.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default App;
