import { v4 as uuidv4 } from 'uuid';
import {pokemons} from '../Data_pokemon';
import { Link } from 'react-router-dom';
import Card from '../components/baseComponents/Card.jsx';
import Scroll_btn from '../components/baseComponents/Scroll_btn';

const Home = () => {
  let showList = [];
  const pokeList = pokemons.results;
  let newPokemon = null;
  
  const randomPokemon = () => pokeList[Math.floor(Math.random() * 10264)];
  
  const pokemonsToShow = () => {

    if (pokeList.length > 0) {
      while (showList.length < 20) {
        newPokemon = randomPokemon();

        if (newPokemon) {
          showList = [...showList, newPokemon];
        }
        newPokemon = null;
      }
    }
  };
  pokemonsToShow();

  return (
    <>
      <section className='main__content'>
        <h1 className='animated'>Pokémons</h1>
        <p className='desc'>App description here!</p>
        <Link to="/search" className="btn action__btn">Search pokemon</Link>
        <section className='list card__list'>
          {
            showList?.map((pokemon, index) => <Card image={pokemon.image} name={pokemon.name} handleClickEvent={() => console.log(`You clicked ${pokemon.name} pokemon that is in the index ${index}`)} key={uuidv4()}/>)
          }
        </section>
      </section>
      <Scroll_btn alt='button to scroll up' visibility={true} action={'scroll-up'}/>
    </>
  );
};

export default Home;