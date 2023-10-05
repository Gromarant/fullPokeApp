import PropTypes from 'prop-types';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { pokemonListContext } from '../../../context/pokemonListContext';
import Card from '../../baseComponents/Card/Card';


const ListaPokemon = ({pokemonsData}) => {
  const {pokemonList} = useContext(pokemonListContext);

  
  return (
    <>
      <section className='pokemon__list'>
        <section className='list filter__list'>
          {pokemonsData && pokemonsData.map((pokemon) => (
              <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
            )
          )}
        </section>

        {pokemonList.length > 0 && 
          <section className='searched__list_section'>
            <h2 className='searched__title'>Recently searched</h2>
            <section className='list searched__list'>
              {pokemonList.map((pokemon) => (
                  <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
                )
              )}
            </section>
          </section>}
      </section>
    </>
  );
};

ListaPokemon.propTypes = {
  pokemonsData: PropTypes.array,
}

export default ListaPokemon;