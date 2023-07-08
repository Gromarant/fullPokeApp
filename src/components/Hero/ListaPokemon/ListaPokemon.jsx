import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import  Card  from './Card';

const ListaPokemon = ({pokemonsData}) => {
  
  return (
    <>
      <section className='pokemonList'>
        {pokemonsData && pokemonsData.map((pokemon) => (
            <Card id={pokemon.id} name={pokemon.name} key={uuidv4()}/>
          )
        )}
      </section>
    </>
  );
};

ListaPokemon.propTypes = {
  pokemonsData: PropTypes.array,
}

export default ListaPokemon;
