import {pokemons} from '../Hero/Search/SearchData.js';
import { v4 as uuidv4 } from 'uuid';
import CardHome from '../baseComponents/CardHome/CardHome.jsx';

const Home = () => {
  let showList = [];
  
  const pokemonsToShow = () => {
    const pokeList = pokemons.results;

    if (pokeList.length > 0) {
      while (showList.length < 20) {
        let newPokemon = pokeList[Math.floor(Math.random() * 10264)];
          if (newPokemon) {
            showList.push(newPokemon);
          }
      }
    }
    console.log('showList_id', showList);
  };
  pokemonsToShow();

  return (
    <>
      <h1>Pokémons</h1>
      <section className='homeCards_section'>
        {
          showList?.map(pokemon => <CardHome image={pokemon.image} name={pokemon.name} key={uuidv4()}/>)
        }
      </section>
    </>
  );
};

export default Home;