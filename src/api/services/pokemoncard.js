/* eslint-disable no-console */
import Axios from '../Axios';

export async function PokemonsFetch() {
    console.log('ProfileFetch | tokenAuthorization:', );
    const configRequest = {
      method: 'get',
      url: 'pokedex/kanto',
    };
  
    try {
      const response = await Axios[configRequest.method](
        configRequest.url,
      );
      console.log('ProfileFetch | response.data:', response.data);
      console.log('ProfileFetch | response.data:', response.data.egg_groups);
        return {
          isSuccess: true,
          message: "deu certo",
          pokemons: response.data.egg_groups,
        };
   } catch (error) {
      console.log('ProfileFetch | error:', error.message);
        return {
            message: 'No momento esse recurso está indisponível, tente novamente mais tarde.',
            isSuccess: false,
        };
    }
  }
