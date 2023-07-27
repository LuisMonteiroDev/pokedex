import React, { useEffect, useState, useTransition } from 'react';
import './App.css'; 
import { PokemonsFetch } from './api/services/pokemoncard';
import { PokemonsImageFetch } from './api/services/pokemonimages'
import { PokemonsTypeFetch } from './api/services/pokemontype';

function App() {  
  const [pokemon, setPokemon] = useState([]);
  const [pokemonimages, setPokemonImage] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

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
         //console.log((resultPokemons.pokemons).flat());
         //const flatResultPokemon = (resultPokemons.pokemons).flat();
         setPokemonImage(resultPokemonsImage.pokemonImage);
       } catch(error) {
         console.log(error)
       }
     }
     getPokemonsImage();
   },[]);

   useEffect(() => {
    async function getPokemonsType() {
       try {
         const resultPokemonsType = await PokemonsTypeFetch();
         //console.log((resultPokemons.pokemons).flat());
         //const flatResultPokemon = (resultPokemons.pokemons).flat();
         setPokemonType(resultPokemonsType.data);
         console.log('TESTETETE',resultPokemonsType);
       } catch(error) {
         console.log(error)
       }
     }
     getPokemonsType();
   },[]);
  return(
    <div>
      <div className='pokedex'>
      <div className='pokemon-card-container'>
      {pokemon.map((pokemonLoop) => (
        <div className='grid-item-pokemon'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonLoop.entry_number}.png`}></img>  
        <p>
          {pokemonLoop.pokemon_species.name}
        </p>
        </div>
      ))}
      {pokemonType.map((pokemonLoop) => (
        <div className='grid-item-pokemon'>
        <p>
          {pokemonLoop.egg_groups[1].name}
        </p>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}
export default App;