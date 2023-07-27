import Axios from '../Axios';

export async function PokemonsTypeFetch() {
    
    console.log('ProfileFetch | tokenAuthorization:', );
    const configRequest = {
      method: 'get',
      url: 'pokemon-species/1/',
    };
  
    try {
      const response = await Axios[configRequest.method](
        configRequest.url,
      );
      console.log('PokemonsTypeFetch | response.data:', response.data);
        return {
          isSuccess: true,
          message: "deu certo",
          pokemons: response.data,
        };
   } catch (error) {
      console.log('PokemonsTypeFetch | error:', error.message);
        return {
            message: 'No momento esse recurso está indisponível, tente novamente mais tarde.',
            isSuccess: false,
        };
    }
  }