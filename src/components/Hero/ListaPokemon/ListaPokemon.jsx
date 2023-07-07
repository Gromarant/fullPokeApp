import PropTypes from 'prop-types';
import  Card  from './Card';

const ListaPokemon = ({pokemons}) => {
  
  return (
    <>
      {pokemons && pokemons.map((pokemon) => (
        <Card url={pokemon.url} name={pokemon.name} key={pokemon.name}/>)
      )}
    </>
  );
};

ListaPokemon.propTypes = {
  pokemons: PropTypes.array.isRequired
}

export default ListaPokemon;
