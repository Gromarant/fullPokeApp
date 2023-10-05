import { v4 as uuidv4 } from 'uuid';
import {pokemons} from '../Data_pokemon';
import { Link } from 'react-router-dom';
import Card from '../components/baseComponents/Card.jsx';

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

  
  const handleClick  = (i) => {
    console.log(`clicked pokemon at index ${i}`);
    while (newPokemon === null || newPokemon === undefined) {
      newPokemon = randomPokemon();

      if (newPokemon) {
        console.log(newPokemon);
        showList.map((pokemon, index) => index === i ? pokemon[i] = newPokemon : pokemon);
      }
    }
    newPokemon = null;
  };
  
  return (
    <>
      <section className='main__content'>
        <h1 className='animated'>Pokémons</h1>
        <p className='desc'>App description here!</p>
        <Link to="/search" className="btn action__btn">Search pokemon</Link>
        <section className='list card__list'>
          {
            showList?.map((pokemon, index) => <Card handleClickEvent={() => handleClick(index)} image={pokemon.image} name={pokemon.name} title={index} key={uuidv4()}/>)
          }
        </section>
      </section>
    </>
  );
};

export default Home;