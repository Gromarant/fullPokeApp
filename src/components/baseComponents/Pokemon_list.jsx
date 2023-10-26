import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Card from './Card';
import { pokemonContext } from '../../context/pokemonContext';


const Pokemon_list = ({pokemonsData}) => {
  const {listOfPokemons, setCreatedPokemon, listOfPokemonsCreated} = useContext(pokemonContext);


  return (
    <>
      <section className='pokemon__list'>
        { pokemonsData.length > 0 && 
          <section className='list'>
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
                  <Card id={`${pokemon.id}`} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
                )
              )}
            </section>
          </section>
        }

        {listOfPokemonsCreated.length > 0 && pokemonsData.length === 0 &&
          <section className='created__list_section'>
            <h2 className='created__title'>Pokémons created</h2>
            <section className='list created__list'>
              { listOfPokemonsCreated.map((pokemon) => (
                  <Card showDetails={() => setCreatedPokemon(pokemon)} owner_id={pokemon.owner_id} name={pokemon.name} image={pokemon.image} typeOne={pokemon.typeOne} typeTwo={pokemon.typeTwo} key={uuidv4()}/>
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