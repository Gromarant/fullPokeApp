import PropTypes from 'prop-types';
import { useState } from 'react';
import { pokemons } from './SearchData';
import ButtonAct from '../../baseComponents/ButtonAct';


const Search = ({setPokemonsData}) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  
  
  const filterResults = (searchInputValue) => searchInputValue && pokemons.results.filter(pokemon => pokemon.name?.toLowerCase().indexOf(searchInputValue) !== -1 );

  const handleInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleClick = () => {
    if (searchInputValue) {
      setPokemonsData( filterResults(searchInputValue) )
    }
    setSearchInputValue('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <>
      <form className='search_form' onSubmit={handleSubmit}>
        <label className='form_label'>Pokémon name</label>
        <input className='form_input' onChange={handleInputChange} placeholder='Enter a pókemon name'></input>  
        <ButtonAct onPress={handleClick} value='Search'/>
      </form>
    </>
  );
};

Search.propTypes = {
  setPokemonsData: PropTypes.func,
}

export default Search;