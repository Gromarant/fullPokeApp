import {pokemons} from '../Hero/Search/SearchData.js';
import { v4 as uuidv4 } from 'uuid';
import CardHome from '../baseComponents/CardHome/CardHome.jsx';

const Home = () => {
  
  // const pokemonsToShow = () => {
  //   // let pokeList = [];
  //   // let showList = [];

  //   // if (pokemons.results.length>0) {
  //     while (pokeList.length < 10) {
  //       pokeList.push(Math.floor(Math.random() * 10264));
  //     }
  // //   }
  // //   showList = pokemons.results.filter((pokemon, index) => pokemon.id === pokeList[index])
  // };
  // pokemonsToShow();

  return (
    <>
      <h1>Pokémon</h1>
      <section className='homeCards_section'>
        {
          pokemons && pokemons.results?.map(pokemon => <CardHome image={pokemon.image} name={pokemon.name} key={uuidv4()}/>)
        }
      </section>
    </>
  );
};

export default Home;