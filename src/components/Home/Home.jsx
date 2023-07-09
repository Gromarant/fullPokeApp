import {pokemons} from '../Hero/Search/SearchData.js';
import { v4 as uuidv4 } from 'uuid';
import CardHome from '../baseComponents/CardHome/CardHome.jsx';

const Home = () => {
  let showList = [];

  const pokemonsToShow = () => {
    let pokeList = [];
    let list = [];

    if (pokemons.results.length) {
      while (pokeList.length < 10) {
        pokeList.push(Math.floor(Math.random() * 1282));
      }
      showList = pokemons.results.filter((pokemon, index) => pokemon.id === pokeList[index])
    }
  };
  pokemonsToShow();

  return (
    <>
      {
        pokemons && pokemons.results?.map(pokemon => <CardHome id={pokemon.id} name={pokemon.name} key={uuidv4()}/>)
      }
    </>
  );
};

export default Home;