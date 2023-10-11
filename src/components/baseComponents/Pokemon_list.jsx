import PropTypes from 'prop-types';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { pokemonListContext } from '../../context/pokemonListContext';
import { pokemonCreatedListContext } from '../../context/pokemonCreatedListContext';
import Card from './Card';


const Pokemon_list = ({pokemonsData}) => {
  const {listOfPokemons} = useContext(pokemonListContext);
  const {listOfPokemonsCreated} = useContext(pokemonCreatedListContext);


  return (
    <>
      <section className='pokemon__list'>
        { pokemonsData.length > 0 && 
          <section className='list filter__list'>
            {pokemonsData && pokemonsData.map((pokemon) => (
                <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
              )
            )}
          </section>
        }

        {listOfPokemons.length > 0 && pokemonsData.length === 0 &&
          <section className='searched__list_section'>
            <h2 className='searched__title'>Recently searched</h2>
            <section className='list searched__list'>
              { listOfPokemons.map((pokemon) => (
                  <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
                )
              )}
            </section>
          </section>
        }

        {listOfPokemonsCreated.length > 0 &&
          <section className='searched__list_section'>
            <h2 className='searched__title'>Pokémons created</h2>
            <section className='list searched__list'>
              { listOfPokemonsCreated.map((pokemon) => (
                  <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
                )
              )}
            </section>
          </section>
        }
      </section>
    </>
  );
};

Pokemon_list.propTypes = {
  pokemonsData: PropTypes.array,
}

export default Pokemon_list;