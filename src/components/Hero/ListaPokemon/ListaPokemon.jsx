import PropTypes from 'prop-types';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import  Card  from './Card';
import { pokemonListContext } from '../../../context/pokemonListContext';


const ListaPokemon = ({pokemonsData}) => {
  const {pokemonList} = useContext(pokemonListContext);

  
  return (
    <>
      <section className='pokemonList'>
        {pokemonsData && pokemonsData.map((pokemon) => (
            <Card id={pokemon.id} name={pokemon.name} key={uuidv4()}/>
          )
        )}
      </section>

      {pokemonList.length>0 && 
        <section className='pokemonList'>
          <h2>Buscados recientemente</h2>
          {pokemonList.map((pokemon) => (
              pokemon.image? <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} key={uuidv4()}/> 
              : <Card id={pokemon.id} name={pokemon.name} key={uuidv4()}/>
            )
          )}
        </section>}
    </>
  );
};

ListaPokemon.propTypes = {
  pokemonsData: PropTypes.array,
}

export default ListaPokemon;
