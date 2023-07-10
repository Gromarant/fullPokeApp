import PropTypes from 'prop-types';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import  Card  from '../../baseComponents/Card';
import { pokemonListContext } from '../../../context/pokemonListContext';


const ListaPokemon = ({pokemonsData}) => {
  const {pokemonList} = useContext(pokemonListContext);

  
  return (
    <>
      <section className='search_lists'>
        <section className='list_of_filter_Pokemons'>
          {pokemonsData && pokemonsData.map((pokemon) => (
              <article className='filter_card' key={uuidv4()}>
                <Card id={pokemon.id} name={pokemon.name} image={pokemon.image}/>
              </article>
            )
          )}
        </section>

        {pokemonList.length>0 && 
          <section className='list_of_searched_Pokemons'>
            <h2>Buscados recientemente</h2>
            {pokemonList.map((pokemon) => (
                <article className='recentSearch_card' key={uuidv4()}>
                  <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/>
                </article>
              )
            )}
          </section>}
      </section>
    </>
  );
};

ListaPokemon.propTypes = {
  pokemonsData: PropTypes.array,
}

export default ListaPokemon;